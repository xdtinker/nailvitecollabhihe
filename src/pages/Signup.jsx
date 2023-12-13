import { auth, db } from "../config/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
	doc,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Signup = () => {
	const [data, setData] = useState({});
	const navigate = useNavigate()
	const handleInput = (e) => {
		const id = e.target.id;
		const value = e.target.value;

		setData({ ...data, [id]: value });
	};

	const handleSignup = async (e) => {
		e.preventDefault();
		try {
			const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
			console.log(res);
			// // Set only signup-related data in the user document
			// await setDoc(doc(db, "users", res.user.uid), {
			// 	...data,
			// 	// Any other signup-related information
			// 	timeStamp: serverTimestamp(),
			// });

			// Redirect or handle the signup success
			navigate(-1);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-md">
					<img
						className="mx-auto h-10 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="Your Company"
					/>
					<h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create your Account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
					<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
						<form className="space-y-6" onSubmit={handleSignup} method="POST">
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Email address
								</label>
								<div className="mt-2">
									<input
										id="email"
										name="email"
										type="email"
										autoComplete="email"
										required
										onChange={handleInput}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="mt-2">
									<input
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										onChange={handleInput}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>

							<div className="flex items-center justify-between">
								<div className="text-sm leading-6">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>

							<div>
								<button
									type="submit"
									className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Sign up
								</button>
							</div>
						</form>
					</div>

					<p className="mt-10 text-center text-sm text-gray-500">
						Already have an account?
						<a
							href="/auth"
							className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
						>
							Click to Login.
						</a>
					</p>
				</div>
			</div>
		</>
	)
}

export default Signup