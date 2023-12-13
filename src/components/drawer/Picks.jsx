import Datepicker from "react-tailwindcss-datepicker";
import {useContext, useEffect, useState} from "react";
import { collection, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../config/firestore.js";
import {Globe} from "../../assets/Globe.jsx";
import {AuthContext} from "../../context/AuthContext.jsx";
import Alert from "../Alert.jsx";

const Picks = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("date picked:", newValue);
    setValue(newValue);
  };

  const [data, setData] = useState([]);

  const setAppointment = async (e) => {
    try {
      e.preventDefault();
      if (currentUser) {
        const appointmentCollection = collection(db, "users", currentUser.uid, "col_appointment");
        const docRef = await addDoc(appointmentCollection, {
          name: name,
          phoneNumber: phoneNumber,
          emailAddress: emailAddress,
          value: value,
          pickedItems: data.map(item => ({
            id: item.id,
            imageSrc: item.imageSrc,
            name: item.name,
            price: item.price,
            // Include any other properties you want to capture from the 'data' array
          })),
          userId: currentUser.uid, // Associate appointment with current user
          // Any other appointment-related info you want to associate with the user
        });
        console.log("Document written with ID: ", docRef.id);

        // After setting the appointment, delete the picks content associated with the user
        const userPicksCollection = collection(db, "users", currentUser.uid, "col_picks");
        const querySnapshot = await getDocs(userPicksCollection);
        querySnapshot.forEach(async (doc) => {
          await deleteDoc(doc.ref);
          console.log("Picks content deleted for user: ", currentUser.uid);
        });
      } else {
        console.error("User not authenticated.");
      }
    } catch (error) {
      console.error("Error setting appointment or deleting picks content: ", error);
    }
  };




  const fetchPicks = async () => {
    try {
      if (currentUser) {
        const userPicksCollection = collection(db, "users", currentUser.uid, "col_picks");
        const querySnapshot = await getDocs(userPicksCollection);

        const userPicksData = [];
        querySnapshot.forEach((doc) => {
          // Retrieve data for each document in the collection
          userPicksData.push({ id: doc.id, ...doc.data() });
        });

        // userPicksData contains the data from col_picks associated with the current user
        console.log("User's picks data:", userPicksData);
        setData(userPicksData) ;
      } else {
        console.error("User not authenticated.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user's picks data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchPicks();
  }, []);

  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Alert  description={"You need to login in to view this panel"}/>;
  };
  return (
    <>
      <RequireAuth>
      <div className="bg-white">
        {/* Background color split screen for large screens */}
        <div
          className="fixed left-0 top-0 hidden h-full w-1/2 bg-white lg:block"
          aria-hidden="true"
        />
        <div
          className="fixed right-0 top-0 hidden h-full w-1/2 bg-pink-900 lg:block"
          aria-hidden="true"
        />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-x-16 lg:grid-cols-2 lg:px-8 lg:pt-16">
          <h1 className="sr-only">Checkout</h1>

          <section
            aria-labelledby="summary-heading"
            className="bg-pink-900 py-12 text-pink-300 md:px-10 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:bg-transparent lg:px-0 lg:pb-24 lg:pt-0"
          >
            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
              <h2 id="summary-heading" className="sr-only">
                Picks summary
              </h2>

              <dl>
                <dt className="text-sm font-medium">Amount due</dt>
                <dd className="mt-1 text-3xl font-bold tracking-tight text-white">
                  $0.00
                </dd>
              </dl>

              <ul
                role="list"
                className="divide-y divide-white divide-opacity-10 text-sm font-medium"
              >
                {data.map((item) => (
                  <li
                    key={item.id}
                    className="flex items-start space-x-4 py-6"
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.name}
                      className="h-20 w-20 flex-none rounded-md object-cover object-center"
                    />
                    <div className="flex-auto space-y-1">
                      <h3 className="text-white">{item.name}</h3>
                      {/*<p>{item.color}</p>*/}
                      <p>???</p>
                      {/*<p>{item.size}</p>*/}
                    </div>
                    <p className="flex-none text-base font-medium text-white">
                      {item.price}
                    </p>
                  </li>
                ))}
              </ul>

              <dl className="space-y-6 border-t border-white border-opacity-10 pt-6 text-sm font-medium">
                <div className="flex items-center justify-between">
                  <dt>Subtotal</dt>
                  <dd>₱0.00</dd>
                </div>

                <div className="flex items-center justify-between">
                  <dt>VAT</dt>
                  <dd>₱0.00</dd>
                </div>

                <div
                  className="flex items-center justify-between border-t border-white border-opacity-10 pt-6 text-white">
                  <dt className="text-base">Total</dt>
                  <dd className="text-base">₱0.00</dd>
                </div>
              </dl>
            </div>
          </section>

          <section
            aria-labelledby="payment-and-shipping-heading"
            className="py-16 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-lg lg:pb-24 lg:pt-0"
          >
            <h2 id="payment-and-shipping-heading" className="sr-only">
              Payment and shipping details
            </h2>

            <form
              onSubmit={setAppointment}
              className="sticky top-0 bg-white z-10"
            >
              <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                <div>
                  <h3
                    id="contact-info-heading"
                    className="text-lg font-medium text-gray-900"
                  >
                    Contact information
                  </h3>

                  <div className="mt-6">
                    <label
                      htmlFor="cust-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="cust-name"
                        name="cust-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="cust-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        id="cust-email"
                        name="cust-email"
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="cust-phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="tel"
                        id="cust-phone"
                        name="cust-phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="apt-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Appointment Date
                    </label>
                    <div className="mt-1">
                      <Datepicker
                        id="apt-date"
                        name="apt-date"
                        placeholder="Select date"
                        primaryColor={"pink"}
                        useRange={false}
                        asSingle={true}
                        value={value}
                        onChange={handleValueChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                  <button
                    type="submit"
                    className="flex items-center rounded-md border border-transparent bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    <Globe/> {/* sgv icon */}
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
        </RequireAuth>
    </>
  );
};

export default Picks;
