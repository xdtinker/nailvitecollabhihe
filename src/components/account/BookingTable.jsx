import {Heading} from "../index.js";

const people = [
	{ Name: 'Datu Aziz', Date: '10-22-2023', Email: 'datuaziz@example.com', Service: 'Spa Pedicure' },
	{ Name: 'Princess Iah', Date: '10-23-2023', Email: 'princessiah@example.com', Service: 'Manicure' },
	{ Name: 'Jasmyn Icee', Date: '10-24-2023', Email: 'jasmynicee@example.com', Service: 'Polygel Nails' },
	{ Name: 'Nefretiri', Date: '10-25-2023', Email: 'nefretiri@example.com', Service: 'Acrylic Nails' },
	// More people...
]

const BookingTable = () => {
	return (
		<>
		<Heading title="Booking" />
		<div className="px-4 sm:px-6 lg:px-8 mt-5">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">Booking</h1>
					<p className="mt-2 text-sm text-gray-700">
						This is the booking table.
					</p>
				</div>
				<div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
					<button
						type="button"
						className="block rounded-md bg-pink-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
					>
						Add user
					</button>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
						<table className="min-w-full divide-y divide-gray-300">
							<thead>
							<tr>
								<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
									Name
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Date
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Email
								</th>
								<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
									Service
								</th>
								<th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
									<span className="sr-only">Edit</span>
								</th>
							</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
							{people.map((person) => (
								<tr key={person.Email}>
									<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
										{person.Name}
									</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.Date}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.Email}</td>
									<td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.Service}</td>
									<td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
										<a href="#" className="text-pink-600 hover:text-pink-900">
											Edit<span className="sr-only">, {person.Name}</span>
										</a>
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
export default BookingTable;