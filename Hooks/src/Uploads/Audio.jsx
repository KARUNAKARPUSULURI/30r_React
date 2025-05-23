import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Audio = () => {
    const [audioFile, setAudioFile] = useState(null)
    const [title, setTitle] = useState("")
    const [audios, setAudios] = useState([]);
    const [uploadedAudio, setUplaodedAudio] = useState(null)
    const cloudName = "dqxlshkcy"
    const audio_preset_name = "audio-upload-preset"
    const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`
    const jsonUrl = "http://localhost:3000/media"
    const handleChange = (e) => {
        const selectedAudioFile = e.target.files[0]
        setAudioFile(selectedAudioFile)
    }

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append("file", audioFile)
        formData.append("upload_preset", audio_preset_name)
        formData.append("resource_type", "auto")
        const data = await axios.post(cloudinaryUrl, formData)
        const generetedUrl = data.data.secure_url;
        const payload = {
            title: title,
            url: generetedUrl
        }
        const response = await axios.post(jsonUrl, payload)
        console.log(response)
        setUplaodedAudio(response.data)
    }

    const getAudios = async () => {
        const data = await axios.get(jsonUrl)
        setAudios(data.data)
    }

    useEffect(async () => {
        getAudios()
    }, [uploadedAudio])
    return (
        <div>
            <div>
                <input type='text' placeholder='song name' name='title' onChange={(e) => setTitle(e.target.value)} />
                <input type='file' accept='audio/*' onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>
            </div>
            <div>
                {audios && audios.map((ele, index) => (
                    <>
                        <p>{ele.title}</p>
                        <audio controls>
                            <source src={ele.url} />
                        </audio>
                    </>
                ))}
            </div>
        </div>
    )
}

export default Audio