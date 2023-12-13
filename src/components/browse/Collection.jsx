import {collection, addDoc, where, query, getDocs} from "firebase/firestore";
import { db } from "../../config/firestore.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import {useContext, useState} from "react";
import {ARCam} from "../modal/index.js";
import {Modal} from "../index.js";

const Collection = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const addToPicks = async (item) => {
    try {
      if (currentUser) {
        const userPicksCollection = collection(db, "users", currentUser.uid, "col_picks");

        // Check if the item already exists in the collection based on the item's unique ID
        const querySnapshot = await getDocs(
          query(userPicksCollection, where("id", "==", item.id))
        );

        if (querySnapshot.empty) {
          // If no matching documents found, add the item to the collection
          const itemWithUserInfo = {
            ...item,
            userId: currentUser.uid,
            // Any other user-related info you want to associate with the item
          };
          await addDoc(userPicksCollection, itemWithUserInfo);
          console.log("Item added to picks successfully!");
        } else {
          console.log("Item already exists in picks.");
          // Handle the scenario where the item already exists
        }
      } else {
        console.error("User not authenticated.");
      }
    } catch (error) {
      console.error("Error adding item to picks:", error);
    }
  };

  const toggleBtn = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen); // Toggle the state for the selected drawer
  };
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Collection</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {data.map((item) => (
              <div key={item.id}>

                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {item.name}
                    </h3>
                    {/*<p className="mt-1 text-sm text-gray-500">{item.category}</p>*/}
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {item.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex flex-col gap-3">
                    <a
                      // href={item.href}
                      onClick={() => toggleBtn(isModalOpen, setIsModalOpen)}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-pink-500 text-white px-8 py-2 text-sm font-medium hover:bg-pink-200"
                    >
                      AR View
                    </a>

                    <a
                      // href={item.href}
                      onClick={() => addToPicks(item)}
                      className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                    >
                      Add to Picks
                    </a>
                  </div>
                </div>

              </div>
            ))}

            <Modal
              open={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="AR View"
            >
              <ARCam />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
