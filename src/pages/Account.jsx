import { Routes, Route, Link } from "react-router-dom";
import {Profile, Appointment, Chat, Booking, Calendar, Transaction, Faqs, AdminDashboard, Services} from "../components/account";
import {Fragment, useContext, useState} from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CalendarIcon,
  XMarkIcon,
  ArrowLeftOnRectangleIcon,
  UserIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  BuildingLibraryIcon,
  QuestionMarkCircleIcon,
  CubeIcon
} from "@heroicons/react/24/outline";
import {AuthContext} from "../context/AuthContext.jsx";


const navigation = [
  { name: "Admin Dashboard", href: "/account", icon: CubeIcon, current: true },
  { name: "Profile", href: "/account/profile", icon: UserIcon, current: false },
  {
    name: "Appointment",
    href: "/account/appointment",
    icon: CalendarIcon,
    current: false,
  },
  {
    name: "Chat",
    href: "/account/chat",
    icon: ChatBubbleOvalLeftEllipsisIcon,
    current: false,
  },
  {
    name: "Booking",
    href: "/account/booking",
    icon: CheckCircleIcon,
    current: false,
  },
  {
    name: "Calendar",
    href: "/account/calendar",
    icon: CalendarDaysIcon,
    current: false,
  },
  {
    name: "Transaction",
    href: "/account/transaction",
    icon: BuildingLibraryIcon,
    current: false,
  },
  {
    name: "Faqs",
    href: "/account/faqs",
    icon: QuestionMarkCircleIcon,
    current: false,
  },
  {
    name: "Services",
    href: "/account/services",
    icon: QuestionMarkCircleIcon,
    current: false,
  },

];
const teams = [
  { id: 1, name: "Home", href: "/", initial: "H", current: false },
  { id: 2, name: "Browse", href: "/browse", initial: "T", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Account = () => {
  // Assuming currentUser is obtained from context or props
  const currentUser = useContext(AuthContext);

  // Condition to hide selected items
  const hideSelectedItems =
    currentUser.currentUser && currentUser.currentUser.uid !== "MrC78SqXmxSJuI6TkiT5C1u4eR72";

  console.log(currentUser.currentUser.uid, hideSelectedItems)

  const itemsToHide = ["Admin Dashboard", "Booking", "Calendar", "Transaction", "Faqs", "Services"];

  const filteredNavigation = hideSelectedItems
    ? navigation.filter(item => !itemsToHide.includes(item.name))
    : navigation;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-50 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button
                        type="button"
                        className="-m-2.5 p-2.5"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-pink-600 px-6 pb-2">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=white"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {filteredNavigation.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={item.href}
                                  className={classNames(
                                    item.current
                                      ? "bg-pink-700 text-white"
                                      : "text-pink-200 hover:text-white hover:bg-pink-700",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-pink-200 group-hover:text-white",
                                      "h-6 w-6 shrink-0",
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-pink-200">
                            Navigation
                          </div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team, idx) => (
                              <li key={idx}>
                                <Link
                                  to={team.href}
                                  className={classNames(
                                    team.current
                                      ? "bg-pink-700 text-white"
                                      : "text-pink-200 hover:text-white hover:bg-pink-700",
                                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                                  )}
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-pink-400 bg-pink-500 text-[0.625rem] font-medium text-white">
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-pink-600 px-6">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=white"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {filteredNavigation.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          to={item.href}
                          className={classNames(
                            item.current
                              ? "bg-pink-700 text-white"
                              : "text-pink-200 hover:text-white hover:bg-pink-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-white"
                                : "text-pink-200 group-hover:text-white",
                              "h-6 w-6 shrink-0",
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <div className="text-xs font-semibold leading-6 text-pink-200">
                    Navigation
                  </div>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team, idx) => (
                      <li key={idx}>
                        <Link
                          to={team.href}
                          className={classNames(
                            team.current
                              ? "bg-pink-700 text-white"
                              : "text-pink-200 hover:text-white hover:bg-pink-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold",
                          )}
                        >
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-pink-400 bg-pink-500 text-[0.625rem] font-medium text-white">
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="-mx-6 mt-auto">
                  <Link
                    to="/"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-pink-700"
                  >
                    <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
                    <span className="sr-only">Logout</span>
                    <span aria-hidden="true">Logout (Aziz)</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="sticky top-0 z-40 flex items-center gap-x-6 bg-pink-600 px-4 py-4 shadow-sm sm:px-6 lg:hidden">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-pink-200 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 text-sm font-semibold leading-6 text-white">
            Dashboard
          </div>
          <a href="#">
            <span className="sr-only">Logout (Aziz)</span>
            <ArrowLeftOnRectangleIcon className="h-6 w-6 text-white" />
          </a>
        </div>

        <main className="lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<AdminDashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/transaction" element={<Transaction />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
};

export default Account;
