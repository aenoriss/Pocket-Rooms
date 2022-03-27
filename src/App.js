import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Environment from "./Components/environment";
import Avatar from "./Components/avatar";
import { PerspectiveCamera, Sky, DeviceOrientationControls, OrbitControls, FirstPersonControls, softShadows } from '@react-three/drei'
import Streaming from "./Components/streaming.js"
import Controller from '../src/Components/controller';


function App() {

  document.addEventListener("click", handleStart, true);
  document.addEventListener("ontouchstart", handleStart, true);

  function handleStart(){
    let element = document.getElementById("canvas");

    element.requestFullscreen()
    .then(function () {
      // element has entered fullscreen mode successfully
    })
    .catch(function (error) {
      // element could not enter fullscreen mode
      // error message
      console.log(error.message);
    });
  }

  window.screen.orientation.onchange = function() {

    if (this.type.startsWith('landscape')) {
      console.log("xDDDD")
      document.documentElement.webkitRequestFullscreen();
    } else {
      document.webkitExitFullscreen();
    }

};
  return (
    <div className="App"> 
      <Canvas id="canvas">
        <Suspense fallback={null}>
          <Avatar />
          <Controller />
          <Environment />
          <ambientLight />
        </Suspense>
        <Streaming />
        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <pointLight position={[10, 10, 10]} />

      </Canvas>



    </div >
  );
}

export default App;
