import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import NotFound from './NotFound';

const App = () => (
	<Router>
		<Header />
		<Routes>
			<Route exact path="/" element={<Home />} />
			<Route exact path="/signup" element={<Signup />} />
			<Route exact path="/login" element={<Login />} />
			<Route element={<NotFound />} />
		</Routes>
	</Router>
);
export default App;
