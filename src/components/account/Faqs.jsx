import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import {Heading} from "../index.js";

function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
}

const faqs = [
	{
		question: "What's the best thing about Switzerland?",
		answer:
			"I don't know, but the flag is a big plus.",

	},
	{
		question: "What's the best thing about ube halaya",
		answer:
			"its food sheesh",

	},
	{
		question: "what is december",
		answer:
			"its month sheesh",

	},
	// More questions...
]

const Faqs = () => {
	return (
		<>
		<Heading title="FAQS" />
		<div className="px-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">FREQUENTLY ASKED QUESTIONS</h1>
					<p className="mt-2 text-sm text-gray-700">
						A list of all the questions and answers that you can edit.
					</p>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						className="block rounded-md bg-pink-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-6 00 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
					>
						Add FAQS
					</button>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-300">
								<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
										QUESTIONS
									</th>
									<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
										ANSWERS
									</th>
									<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
										<span className="sr-only">Edit</span>
									</th>
								</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
								{faqs.map((person) => (
									<tr key={person.question}>
										<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
											{person.question}
										</td>
										<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.answer}</td>
										<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
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
										</td>
									</tr>
								))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
		</>
	)
}

export default Faqs;