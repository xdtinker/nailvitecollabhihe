import {Fragment, useContext, useEffect, useState} from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  EllipsisHorizontalIcon,
  CalendarDaysIcon,
} from "@heroicons/react/20/solid";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore.js";
import {AuthContext} from "../../context/AuthContext.jsx";
import Alert from "../Alert.jsx";
// fixed minor bugs
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Appointment = () => {

  const [data, setData] = useState([]);

  const fetchAppointment = async () => {
    try {
      if (currentUser) {
        const userAptCollection = collection(db, "users", currentUser.uid, "col_appointment");
        const querySnapshot = await getDocs(userAptCollection);

        const userPicksData = [];
        querySnapshot.forEach((doc) => {
          // Retrieve data for each document in the collection
          userPicksData.push({ id: doc.id, ...doc.data() });
        });

        // userPicksData contains the data from col_picks associated with the current user
        console.log("User's apt data:", userPicksData);
        setData(userPicksData) ;
      } else {
        console.error("User not authenticated.");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user's apt data:", error);
      return null;
    }
  };

  useEffect(() => {
    fetchAppointment();
  }, []);

  const {currentUser} = useContext(AuthContext)
  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Alert  description={"You need to login in to view this panel"}/>;
  };
  return (
    <>
      <RequireAuth>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-4 lg:grid-cols-1 xl:gap-x-8 "
      >
        {data.map((apt) => (
          <li
            key={apt.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 ">
              <CalendarDaysIcon className="h-8 w-8 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
              <div className="text-sm font-medium leading-6 text-gray-900">
                APT # {apt.id}
              </div>
              <Menu as="div" className="relative ml-auto">
                <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Open options</span>
                  <EllipsisHorizontalIcon
                    className="h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900",
                          )}
                        >
                          View<span className="sr-only">, APT #{apt.id}</span>
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900",
                          )}
                        >
                          Cancel<span className="sr-only">, APT #{apt.id}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Appointment date</dt>
                <dd className="text-gray-700">
                  <time dateTime={apt.name}>{apt.value.startDate}</time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Paid amount</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="font-medium text-gray-900">P 0.00</div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>

      </RequireAuth>
    </>
  );
};
export default Appointment;
