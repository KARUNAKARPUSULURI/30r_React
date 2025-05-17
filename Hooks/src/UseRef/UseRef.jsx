import React, { useEffect, useRef } from 'react';
import video from "./video.mp4"

const UseRef = () => {
    const imgRef = useRef(null)
    const paragraphRef = useRef(null)
    const inputRef = useRef("hello")
    const videoRef = useRef(null)
    //controlled components -> state -> form -> event ->e.target.value -> state
    //uncontrolled components -> useref -> ref attribute -> Here you target or access the dom element directly 
    // document.getElementsByTagName("p")[0].innerText = "my wish value"
    // //#p > {
    // //textContent : "",
    // //inner
    // //}
    // ref -> reference -> it takes an object with a default property called current
    // ref = {current : ""}
    console.log("before", paragraphRef)
    const handleClick = () => {
        console.log("after", paragraphRef.current.textContent)
        paragraphRef.current.textContent = "Hello world"
    }
    const handleSubmit = () => {
        // console.log(inputRef.current.focus())
        inputRef.current.focus();
    }
    const handlePlay = () => {
        videoRef.current.play()
    }
    const handlePause = () => {
        videoRef.current.pause()
    }
    useEffect(()=>{
        videoRef.current.pause();
    }, [])
    const value = inputRef.current
    return (
        <div>
            <h1>{value}</h1>
            <p ref={paragraphRef}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto consequatur reiciendis mollitia enim ipsam velit nobis ipsa minima veniam. Voluptates vel eveniet atque, deleniti velit voluptatem dolores similique nam aperiam.
            </p>
            <button onClick={handleClick}>Click</button>
            <input ref={inputRef} type='text' />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                <video ref={videoRef} height={"200px"} width={"250px"} controls={false}>
                    <source src={video} />
                </video>
                <div>
                    <button onClick={handlePlay}>Play</button>
                    <button onClick={handlePause}>Pause</button>
                </div>
            </div>
        </div>
    )
}

export default UseRef