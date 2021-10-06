import React,{useState} from 'react'
import uploadFile from './firebase';


function UploadFile() {
    const [selectedFile, setSelectedFile] = useState();

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
	};

	const handleSubmission = () => {
    uploadFile(selectedFile,selectedFile.name)	
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
            <p>Name : {selectedFile.name}</p>
            <p>Filetype : {selectedFile.type}</p>
            <p>Size : {selectedFile.size}</p>
            <p>Last Modified : {selectedFile.lastModifiedDate.toLocaleDateString()}</p>
          </div>
        ): 
        (
				<p>Select a File</p>
			  )
      }
      <button className="submitBtn" onClick={()=>handleSubmission()}>
      Upload Image
      </button>
      </div>
    )
}

export default UploadFile
