import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { FlyControls, Sky, DeviceOrientationControls, PerspectiveCamera } from '@react-three/drei'

export default function Controller(props) {
    const [moveForward, setmoveForward] = useState(false)

    console.log("adsasdadadadsxDDD");


    console.log("PROPS", props.position)
    const { camera, gl } = useThree()

    document.addEventListener('keydown', (event) => {
        let keyName = event.key;
        console.log("PRESSED", keyName)

        if (keyName == "w") {
          camera.position.x = camera.position.x + 1;
        }
      });
    
      document.addEventListener('keyup', (event) => {
        let keyName = event.key;
    
        if (keyName == 87) {
          setmoveForward(false)
        }
      });

    return (
       null
    )
}