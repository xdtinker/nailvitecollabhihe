import { Fragment } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { MdPersonOff } from "react-icons/md";
import { BsPersonFillSlash, BsPersonFillCheck, BsPersonFillExclamation } from "react-icons/bs";
import {Heading} from "../index.js";

const people = [
	{
		name: '#',

		role: 'Approved',
		icon: BsPersonFillCheck
	},
	{
		name: '#',

		role: 'Pending',
		icon: BsPersonFillExclamation
	},
	{
		name: '#',

		role: 'Cancelled',
		icon: BsPersonFillSlash
	},
	{
		name: '#',

		role: 'No Show',
		icon: MdPersonOff
	},
	// More people...
]


const days = [
	{ date: '2021-12-27' },
	{ date: '2021-12-28' },
	{ date: '2021-12-29' },
	{ date: '2021-12-30' },
	{ date: '2021-12-31' },
	{ date: '2022-01-01', isCurrentMonth: true },
	{ date: '2022-01-02', isCurrentMonth: true },
	{ date: '2022-01-03', isCurrentMonth: true },
	{ date: '2022-01-04', isCurrentMonth: true },
	{ date: '2022-01-05', isCurrentMonth: true },
	{ date: '2022-01-06', isCurrentMonth: true },
	{ date: '2022-01-07', isCurrentMonth: true },
	{ date: '2022-01-08', isCurrentMonth: true },
	{ date: '2022-01-09', isCurrentMonth: true },
	{ date: '2022-01-10', isCurrentMonth: true },
	{ date: '2022-01-11', isCurrentMonth: true },
	{ date: '2022-01-12', isCurrentMonth: true, isToday: true },
	{ date: '2022-01-13', isCurrentMonth: true },
	{ date: '2022-01-14', isCurrentMonth: true },
	{ date: '2022-01-15', isCurrentMonth: true },
	{ date: '2022-01-16', isCurrentMonth: true },
	{ date: '2022-01-17', isCurrentMonth: true },
	{ date: '2022-01-18', isCurrentMonth: true },
	{ date: '2022-01-19', isCurrentMonth: true },
	{ date: '2022-01-20', isCurrentMonth: true },
	{ date: '2022-01-21', isCurrentMonth: true, isSelected: true },
	{ date: '2022-01-22', isCurrentMonth: true },
	{ date: '2022-01-23', isCurrentMonth: true },
	{ date: '2022-01-24', isCurrentMonth: true },
	{ date: '2022-01-25', isCurrentMonth: true },
	{ date: '2022-01-26', isCurrentMonth: true },
	{ date: '2022-01-27', isCurrentMonth: true },
	{ date: '2022-01-28', isCurrentMonth: true },
	{ date: '2022-01-29', isCurrentMonth: true },
	{ date: '2022-01-30', isCurrentMonth: true },
	{ date: '2022-01-31', isCurrentMonth: true },
	{ date: '2022-02-01' },
	{ date: '2022-02-02' },
	{ date: '2022-02-03' },
	{ date: '2022-02-04' },
	{ date: '2022-02-05' },
	{ date: '2022-02-06' },
]
const meetings = [
	{
		id: 1,
		name: 'Princess Iah',
		imageUrl:
			'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-1/405565671_3720231061541333_2933727664550913513_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeFnOZcMo7rW34khkNDAP311T3yhbrkyq6ZPfKFuuTKrpmjnDD4d227EjlKiJmZ5-sK7I2n9bL1XngLRd9h0_sHU&_nc_ohc=2YjgqMnPWJgAX9RU61z&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl17-4.fna&oh=00_AfBQgFQBp5x7aAJMR9XOT_QpqKERf1-V8XZMjbMPYoIsaQ&oe=6574DAD8',
		start: '1:00 PM',
		startDatetime: '2022-01-21T13:00',
		end: '2:30 PM',
		endDatetime: '2022-01-21T14:30',
	},
	{
		id: 1,
		name: 'Nefri',
		imageUrl:
			'https://scontent.fmnl17-1.fna.fbcdn.net/v/t39.30808-1/364703192_6801540326599521_6938050708955674621_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGzlG09XcwTIcdpLZy1FlMz-VEbpVVRYJ75URulVVFgnjFb59KRh3C3mO8u1FMM08H3t3K2yTvmCrv1NLUGiiel&_nc_ohc=RclGUNWDU-QAX9T603G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl17-1.fna&oh=00_AfBd2LAF0dVusgf4Zz900SnEq7KS36H7ni9lVJO4QJd7rw&oe=6573CF99',
		start: '3:00 PM',
		startDatetime: '2022-01-21T15:00',
		end: '4:30 PM',
		endDatetime: '2022-01-21T16:30',
	},
	{
		id: 1,
		name: 'Kuya Aziz',
		imageUrl:
			'https://scontent.fmnl17-3.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFay6j9pDGFABQnd54P5gMsso2H55p0AlGyjYfnmnQCUVLAUDK4s1VSrLtDFjwB53b4Qox7oV2v3_dPWR4R0Fc4&_nc_ohc=JRcSKUF9Hv8AX-JK6cu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmnl17-3.fna&oh=00_AfAQIKZIiSKX7l6vF0W3cATl8U8OLxnJDI2YwiQs16eQ2g&oe=65973778',
		start: '5:00 PM',
		startDatetime: '2022-01-21T17:00',
		end: '6:30 PM',
		endDatetime: '2022-01-21T18:30',
	},
	{
		id: 1,
		name: 'Leslie Alexander',
		imageUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		start: '7:00 PM',
		startDatetime: '2022-01-21T19:00',
		end: '8:30 PM',
		endDatetime: '2022-01-21T20:30',
	},
	// More meetings...
]

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const AdminDashboard = () => {
	return (
			<>
				<Heading title="Admin Dashboard" />
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
				{people.map((person) => (
					<div
						key={person.name}
						className="bg-pink-100 relative flex items-center space-x-3 rounded-lg border border-pink-100 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-pink-200"
					>
						<div className="flex-shrink-0">
							<person.icon
								className={
									'h-6 w-6 shrink-0'
								}
								aria-hidden="true"
							/>
						</div>
						<div className="min-w-0 flex-1 ">
							<a href="#" className="focus:outline-none">
								<span className="absolute inset-0 " aria-hidden="true"  />
								<p className="text-sm font-medium text-gray-900">{person.name}</p>
								<p className="truncate text-sm text-gray-500">{person.role}</p>
							</a>
						</div>
					</div>
				))}
			</div>

		<div className="ml-3 px-4 pt-4 mt-10 ">
		<div className="md:grid md:grid-cols-2 md:divide-x md:divide-gray-200 ">
			<div className="md:pr-14 ">
				<div className="flex items-center">
					<h2 className="flex-auto text-sm font-semibold text-gray-900" style={{fontSize:"18px"} }>January 2022</h2>
					<button
						type="button"
						className=" hover:text-pink-600 hover:border-pink-300 -my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Previous month</span>
						<ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
					</button>
					<button
						type="button"
						className=" hover:text-pink-600 hover:border-pink-300 -my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
					>
						<span className="sr-only">Next month</span>
						<ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
					</button>
				</div>
				<div className=" hover:text-pink-600 hover:border-pink-300 mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
					<div>M</div>
					<div>T</div>
					<div>W</div>
					<div>T</div>
					<div>F</div>
					<div>S</div>
					<div>S</div>
				</div>
				<div className="mt-2 grid grid-cols-7 text-sm ">
					{days.map((day, dayIdx) => (
						<div key={day.date} className={classNames(dayIdx > 6 && 'border-t border-gray-200', 'py-2 ')}>
							<button
								type="button"
								className={classNames(
									day.isSelected && 'text-white',
									!day.isSelected && day.isToday && 'text-pink-600',
									!day.isSelected && !day.isToday && day.isCurrentMonth && 'text-gray-900',
									!day.isSelected && !day.isToday && !day.isCurrentMonth && 'text-gray-400',
									day.isSelected && day.isToday && 'bg-pink-600',
									day.isSelected && !day.isToday && 'bg-gray-900',
									!day.isSelected && 'hover:bg-gray-200',
									(day.isSelected || day.isToday) && 'font-semibold',
									'mx-auto flex h-8 w-8 items-center justify-center rounded-full hover:text-pink-600 hover:border-pink-300'
								)}
							>
								<time dateTime={day.date}>{day.date.split('-').pop().replace(/^0/, '')}</time>
							</button>
						</div>
					))}
				</div>
			</div>
			<section className="mt-12 md:mt-0 md:pl-14">
				<h2 className="text-base font-semibold leading-6 text-gray-900">
					Schedule for <time dateTime="2022-01-21">January 21, 2022</time>
				</h2>
				<ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
					{meetings.map((meeting) => (
						<li
							key={meeting.id}
							className="group flex items-center space-x-4 rounded-xl px-4 py-2 focus-within:bg-gray-100 hover:bg-gray-100 hover:text-pink-600 hover:border-pink-300"
						>
							<img src={meeting.imageUrl} alt="" className="h-10 w-10 flex-none rounded-full" />
							<div className="flex-auto">
								<p className="text-gray-900">{meeting.name}</p>
								<p className="mt-0.5">
									<time dateTime={meeting.startDatetime}>{meeting.start}</time> -{' '}
									<time dateTime={meeting.endDatetime}>{meeting.end}</time>
								</p>
							</div>
							<Menu as="div" className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100">
								<div>
									<Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-pink-600 hover:border-pink-300">
										<span className="sr-only">Open options</span>
										<EllipsisVerticalIcon className="h-6 w-6" aria-hidden="true" />
									</Menu.Button>
								</div>

								<Transition
									as={Fragment}
									enter="transition ease-out duration-100"
									enterFrom="transform opacity-0 scale-95"
									enterTo="transform opacity-100 scale-100"
									leave="transition ease-in duration-75"
									leaveFrom="transform opacity-100 scale-100"
									leaveTo="transform opacity-0 scale-95"
								>
									<Menu.Items className=" absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
										<div className="py-1">
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
															'block px-4 py-2 text-sm'
														)}
													>
														Edit
													</a>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<a
														href="#"
														className={classNames(
															active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
															'block px-4 py-2 text-sm'
														)}
													>
														Cancel
													</a>
												)}
											</Menu.Item>
										</div>
									</Menu.Items>
								</Transition>
							</Menu>
						</li>
					))}
				</ol>
			</section>
		</div>
		</div>
			</>
	)
}
export default AdminDashboard;