import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import {Heading} from "../index.js";


const people = [
	{ name: 'Jasmyn Icee', title: 'Front-end Developer', email: 'icee@example.com', role: 'Member' },
	{ name: 'Kuya Aziz', title: 'Front-end Developer', email: 'aziz@example.com', role: 'Member' },
	{ name: 'Princess Iah', title: 'Front-end Developer', email: 'cess@example.com', role: 'Member' },
	{ name: 'Nefretiri', title: 'Front-end Developer', email: 'nef@example.com', role: 'Member' },
	// More people...
]


function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}
const Dropdown = () => {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-pink-600 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-100">
					<span className="sr-only">Open options</span>
					<EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
									Delete
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
const ServicesTable = () => {
	return (
		<>
			<Heading title="Services" />
			<div className="px-4 sm:px-6 lg:px-8 ">
				<div className="sm:flex sm:items-center">
					<div className="sm:flex-auto">
						<h1 className="text-base font-semibold leading-6 text-gray-900 text-[23px]" >Services</h1>

					</div>
					<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
						<button
							type="button"
							className="block rounded-md bg-pink-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-300 hover:border-pink-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600 "
						>
							Add service
						</button>
					</div>
				</div>
				<div className="mt-8 flow-root">
					<div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8 ">
						<div className=" inline-block py-2 align-middle sm:px-6 lg:px-8 w-full">
							<table className="w-full divide-y divide-gray-300">
								<thead>
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
										Name
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Title
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Email
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										Role
									</th>
									<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
								</thead>
								<tbody className="bg-white">
								{people.map((person, personIdx) => (
									<tr key={person.email} className={personIdx % 2 === 0 ? undefined : 'bg-gray-50'}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 ">
											{person.name}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
										<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
											<Dropdown/>
											{/*<a href="#" className="text-pink-600 hover:text-pink-900">*/}
											{/*    Edit<span className="sr-only">, {person.name}</span>*/}
											{/*</a>*/}
										</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ServicesTable;