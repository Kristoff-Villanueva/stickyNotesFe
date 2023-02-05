import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Public from "./components/Public";
import Login from "./components/Login";

import React from "react";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}></Route>
			<Route index element={<Public />} />
			<Route path="login" element={<Login />} />
		</Routes>
	);
}

export default App;
