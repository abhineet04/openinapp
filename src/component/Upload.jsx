// import React from 'react'

// function Upload() {
//   return (
//     <div>
//         <h2>this is upload</h2>

//     </div>
//   )
// }

// export default Upload
// Filename - App.js

import axios from "axios";
import "./Upload.css";


 import React, { Component } from "react";


class Upload extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4 className="sub">Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  render() {
    return (
      <>
      
        <div className="xx">
          <h1>BASE</h1>
        </div>
        <div className="list">
        <h2 >Dashboard </h2>
        <h2>Upload</h2>
        <h2>Invoice</h2>
        <h2>Schedule</h2>
        <h2>Calende</h2>
        <h2>Notification</h2>
        <h2>Setting</h2>

        </div>
       

        <div className="upld">
          <h1 className="nav">Upload CSV</h1>
          {/* <h3>File Upload using React!</h3> */}
          <div className="ddd">
            <input  className =" fil"type="file" onChange={this.onFileChange} />
            <button  className ="up"onClick={this.onFileUpload}>Upload!</button>
          </div>
          {this.fileData()}
        </div>
       
      </>
    );
  }
}

export default Upload;
