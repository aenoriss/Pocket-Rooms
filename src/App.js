import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Environment from "./Components/environment";
import Avatar from "./Components/avatar";
import { PerspectiveCamera, Sky, DeviceOrientationControls, OrbitControls, FirstPersonControls } from '@react-three/drei'
import Box from "./Box"


function App() {

  return (
    <div className="App">

      <Canvas>

        <Suspense fallback={null}>
          <Avatar />
          <Environment />
          <ambientLight />
        </Suspense>

        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        <pointLight position={[10, 10, 10]} />

      </Canvas>



    </div >
  );
}

export default App;
