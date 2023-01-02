import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Signup = () => {
	//State management
	const [signupData, setSignupData] = useState({
		userName: '',
		email: '',
		password: '',
		password2: '',
		successMsg: 'false',
		errorMsg: 'false',
		loadingInfo: 'false',
	});

	//Destructure state to have a direct access to them
	const {
		userName,
		email,
		password,
		password2,
		// successMsg,
		// errorMsg,
		// loadingInfo,
	} = signupData;

	const handleChange = (e) => {
		setSignupData({ ...signupData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(signupData);
	};

	const signupForm = () => (
		<section className="vh-100">
			<div className="container h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col-lg-10 col-xl-10">
						<div className="card text-black">
							<div className="card-body p-md-0 card-background">
								<div className="row justify-content-center">
									<div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
										<p className="text-center h4 fw-bold mb-3 mx-1 mx-md-4 mt-1">
											Sign up
										</p>
										<form className="mx-1 mx-md-3" onSubmit={handleSubmit}>
											<div className="d-flex flex-row align-items-center mb-4">
												<i className="fas fa-user fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input
														name="userName"
														value={userName}
														type="text"
														id="form3Example1c"
														className="form-control mt-4"
														onChange={handleChange}
													/>
													<label className="form-label" for="form3Example1c">
														Your Name
													</label>
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-2">
												<i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input
														name="email"
														value={email}
														type="email"
														id="form3Example3c"
														className="form-control mt-4"
														onChange={handleChange}
													/>
													<label className="form-label" for="form3Example3c">
														Your Email
													</label>
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-2">
												<i className="fas fa-lock fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input
														name="password"
														value={password}
														type="password"
														id="form3Example4c"
														className="form-control mt-4"
														onChange={handleChange}
													/>
													<label className="form-label" for="form3Example4c">
														Password
													</label>
												</div>
											</div>

											<div className="d-flex flex-row align-items-center mb-2">
												<i className="fas fa-key fa-lg me-3 fa-fw"></i>
												<div className="form-outline flex-fill mb-0">
													<input
														name="password2"
														value={password2}
														type="password"
														id="form3Example4cd"
														className="form-control mt-4"
														onChange={handleChange}
													/>
													<label className="form-label" for="form3Example4cd">
														Confirm password
													</label>
												</div>
											</div>

											<div className="form-check d-flex justify-content-center mb-4">
												<input
													className="form-check-input me-2 "
													type="checkbox"
													value=""
													id="form2Example3c"
												/>
												<label className="form-check-label" for="form2Example3">
													I agree all statements in{' '}
													<a href="#!">Terms of service</a>
												</label>
											</div>

											<div className="d-flex justify-content-center mx-2 mb-1 mb-lg-2">
												<button
													type="submit"
													className="btn btn-primary btn-lg"
												>
													Register
												</button>
											</div>
											<div className="d-flex justify-content-center mx-2 mb-1 mb-lg-2">
												<p>
													Already a user? <Link to="/login">Login here</Link>
												</p>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
	return (
		<div className="signup-img row h-100">
			<section className="signup-container" id="signup">
				{signupForm()}
			</section>
		</div>
	);
};

export default Signup;
