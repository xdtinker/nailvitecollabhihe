import { Heading } from "../index.js";

import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";
import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../config/firestore.js";
import { CalendarDaysIcon } from "@heroicons/react/20/solid/index.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Appointment = () => {
  const [data, setData] = useState([]);

  const fetchAppointment = async () => {
    const querySnapshot = await getDocs(collection(db, "col_appointment"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(data);
  };

  useEffect(() => {
    fetchAppointment();
  }, []);
  return (
    <>
      <Heading title="Appointment" />
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8 mx-10"
      >
        {data.map((apt) => (
          <li
            key={apt.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <CalendarDaysIcon className="h-8 w-8 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10" />
              <div className="text-sm font-medium leading-6 text-gray-900">
                {apt.name}
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
                  <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active ? "bg-gray-50" : "",
                            "block px-3 py-1 text-sm leading-6 text-gray-900",
                          )}
                        >
                          View<span className="sr-only">, {apt.name}</span>
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
                          Edit<span className="sr-only">, {apt.name}</span>
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Last invoice</dt>
                <dd className="text-gray-700">
                  <time dateTime={apt.value.startDate}>
                    {apt.value.startDate}
                  </time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Amount</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="font-medium text-gray-900">P 0.00</div>
                </dd>
              </div>
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Appointment;
