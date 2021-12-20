import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UploadFile from './Components/UploadFile';
import Gallery from './Components/Gallery';
import {  Worker } from '@react-pdf-viewer/core';


function FileUploadPage(){
	 

	return(
   <div className="Page">
           <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js">

      <Router>
        <nav className="navbar">
          <div className="menu">
            <ul className="menu">
            <li className="item">
              <Link to="/">Upload</Link>
            </li>
            <li className="item">
              <Link to="/gallery">Gallery</Link>
            </li>
            </ul>
          </div>      
        </nav>
        <Switch>
          <Route path="/gallery">
            <Gallery/>        
          </Route> 
          <Route path="/">
            <UploadFile/>
          </Route>
        </Switch>
      </Router> 
      </Worker>     
		</div>
	)
}

export default FileUploadPage;