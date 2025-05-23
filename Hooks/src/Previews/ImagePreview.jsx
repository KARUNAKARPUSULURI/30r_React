import React, { useState } from 'react'
import "./ImagePreview.css"

//input -> file -> pdf, txt, img, vid -> files ->
//blob -> usecase -> Creating object URLs for displaying images/files
//URL -> createObjectUrl -> temp url -> http://localhost:5173/fhghjkash-ajsd-jhads-ads 


const ImagePreview = () => {
    const [selectedFile, setSelectedFile] = useState("")
    const handleChange = (e) => {
        const fileObj = e.target.files[0]
        
        console.log(fileObj)
        setSelectedFile(URL.createObjectURL(fileObj))
        //file readers()
    }
    return (
        <div>
            {/* <div style={{width : "100%", height : "100vh"}}> */}
            {/* <iframe src={selectedFile} title='' width = "100%" height = "100vh"></iframe> */}
            {/* {selectedFile} */}
            {/* <img src={selectedFile} height={"200px"} width={"300px"} /> */}
            {/* {
                    selectedFile &&
                    <audio controls>
                        <source src={selectedFile} />
                    </audio>
                } */}
            {/* {
                    selectedFile &&
                    <video controls>
                        <source src={selectedFile} />
                    </video>
                } */}
            {/* </div> */}
            // {/* <input type='file' onChange={handleChange} /> */}
            // {/* <button>Upload</button> */}
            <div className="pdf-viewer-container">
                <div className="pdf-display-area">
                    <iframe
                        src={selectedFile}
                        title="PDF Viewer"
                        className="pdf-iframe"
                    />
                </div>
                <div className="file-input-section">
                    <label htmlFor="pdf-upload" className="file-input-label">
                        Choose PDF File
                    </label>
                    <input
                        type="file"
                        id="pdf-upload"
                        accept=".pdf,application/pdf"
                        onChange={handleChange}
                        className="file-input"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImagePreview