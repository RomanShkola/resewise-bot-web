import './App.css';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';
import Home from "./pages/home/home.component";
import ScheduleView from "./pages/schedule/schedule-view.component";
import NoMatch from "./pages/other/page-404.component";
import ScheduleEditView from "./pages/schedule/schedule-single-edit.component";
import {useEffect, useState} from "react";
import ScheduleSingleView from "./pages/schedule/schedule-single-view.component";

function App() {
	return (
			<Router>
			{/*	<Routes>*/}
			{/*		<Route path="/" element={<Home/>}/>*/}
			{/*		<Route path="/schedule" element={<ScheduleView/>}/>*/}
			{/*		<Route path="/schedule-edit" element={<ScheduleEditView/>}/>*/}
			{/*		<Route path="/schedule-add" element={<ScheduleAddView/>}/>*/}
			{/*		<Route path="*" element={<NoMatch/>}/>*/}
			{/*	</Routes>*/}
				<Content/>
			</Router>

	);
}

function Content() {
	const location = useLocation();

	const [displayLocation, setDisplayLocation] = useState(location);
	const [transitionState, setTransitionState] = useState("fadeIn");

	console.log(location, displayLocation, transitionState)

	useEffect(() => {
		if (location !== displayLocation) setTransitionState("fadeOut");
	}, []);

	return (
		<div className={`${transitionState} App`}
			onAnimationEnd={() => {
				if (transitionState === "fadeOut") {
					setTransitionState("fadeIn");
					setDisplayLocation(location);
				}
			}}
		>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/schedules" element={<ScheduleView/>}/>
				<Route path="/schedule" element={<ScheduleSingleView/>}/>
				<Route path="/schedule-edit" element={<ScheduleEditView/>}/>
				<Route path="*" element={<NoMatch/>}/>
			</Routes>
		</div>
	)
}

export default App;
