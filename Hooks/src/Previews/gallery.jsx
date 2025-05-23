import React, { useState } from 'react'

const Gallery = () => {
    const [selectedFile, setSelectedFile] = useState("") // url
    const [file, setFile] = useState(null) //file -> obj
    const handleChange = (e) => {
        const fileObj = e.target.files[0]
        setFile(fileObj)
        setSelectedFile(URL.createObjectURL(fileObj))
    }
    const renderPreview = () => {
        if(!file && !selectedFile) return null;
        //image preview
        if (file && file.type.startsWith("image")) {
            return (
                <>
                    <img src={selectedFile} width={"300px"} height={"300px"} />
                </>
            )
        }
        //audio preview
        if (file && file.type.startsWith("audio")) {
            return (
                <>
                    <audio controls>
                        <source src={selectedFile} />
                    </audio>
                </>
            )
        }
        //video preview
        if (file && file.type.startsWith("video")) {
            return (
                <>
                    <video controls>
                        <source src={selectedFile} />
                    </video>
                </>
            )
        }
        //pdf preview 
        if (file && file.type == "application/pdf") {
            return (
                <>
                    <iframe src={selectedFile}></iframe>
                </>
            )
        }

    }
    return (
        <div>
            <div>{renderPreview()}</div>
            <input type='file' onChange={handleChange} />
        </div>
    )
}

export default Gallery