import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import "./WebcamCapture.css"

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router-dom';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}

function WebcamCapture() {

    const webcamRef = useRef(null)
    const dispatch = useDispatch();
    const history = useHistory()

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview")
    }, [webcamRef])

    return (
        <div className={"webcamCapture"}>
            <Webcam 
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat={"image/jpeg"}
                videoConstraints={videoConstraints}
                mirrored={true}
            />

            <RadioButtonUncheckedIcon
                className={"webcamCapture__button"}
                onClick={capture}
                fontSize={"large"}
            />

        </div>
    )
}

export default WebcamCapture