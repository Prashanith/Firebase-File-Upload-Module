import React,{useState} from 'react'
import uploadFile from './firebase';
import { Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';


function UploadFile() {
    const [selectedFile, setSelectedFile] = useState();

	const changeHandler = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
    // let file=e.target.files[0];
    // if(file){
    //   if(fileType.includes(file.type)){
    //     let reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onloadend = (e) =>{
    //           setSelectedFile(e.target.result);
    //         }
    //   }
    //   else{
    //     setSelectedFile(null);
    //   }
    // }
    // else{
    //   console.log('select your file');
    // }
	};

	const handleSubmission = () => {
    uploadFile(selectedFile,selectedFile.name);
	}; 

    return (
        <div className="App">
          <label class="custom-file-upload">
            <input type="file" name="file" onChange={changeHandler} /> 
            Add File         
          </label>
          {
            selectedFile ? 
            (
              <div className="info">
                <p>{selectedFile}</p>
              </div>
            ): 
            (
            <p>Select a File</p>
            )
          }
        <button className="submitBtn" onClick={()=>handleSubmission()}>
        Upload Image
        </button>
        <div
            style={{
                height: '750px',
                width: '900px',
                marginLeft: 'auto',
                marginRight: 'auto',
            }}
        >
            {
              selectedFile &&
              <Viewer
                fileUrl={selectedFile}
            />
            }
        </div>
      
      </div>
    )
}

export default UploadFile
