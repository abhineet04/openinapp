// import React from 'react'

// function Rout() {
//   return (
//     <div>
//         <h1>hi</h1>
      
//     </div>
//   )
// }

// export default Rout
import React, { Component } from "react";
import './Rout.css'
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
} from "react-router-dom";
import Home from "./component/Home";

import Contact from "./component/Contact";
import Upload from "./component/Upload";
import Afuploaded from "./component/Afuploaded";




class Rout extends Component {
	render() {
		return (
			
			<Router>
				<div className="App">
					<ul className="App-header">
						<li>
							<Link to="/">Home</Link>
						</li>
						{/* <li>
							<Link to="/about">
								About Us
							</Link>
						</li> */}
						<li>
							<Link to="/contact">
								Contact
							</Link>
						</li>
                        <li className="uplod">
							<Link to="/Upload">
								upload
							</Link>
						</li>
						<li className="subb">
							<Link to="/Afuploaded">
								SUBMIT
							</Link>
						</li>
					</ul>
					<Routes>
						<Route
							exact
							path="/"
							element={<Home />}
						></Route>
						 {/* <Route
							exact
							path="/about"
							element={<About />}
						></Route> */}
						<Route
							exact
							path="/contact"
							element={<Contact />}
						></Route> 
                        <Route
							exact
							path="/upload"
							element={<Upload />}
						></Route>
						<Route
							exact
							path="/Afuploaded"
							element={<Afuploaded />}
						></Route>
					</Routes>
				</div>
			</Router>
						
		);
	}
}

export default Rout;

