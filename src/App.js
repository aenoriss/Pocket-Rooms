import logo from './logo.svg';
import './App.css';
import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import Environment from "./Components/environment";
import CameraControls from './Components/cameraControls';
import Avatar from "./Components/avatar";
import { FirstPersonControls, Sky, DeviceOrientationControls } from '@react-three/drei'
import Box from "./Box"


function App() {
  return (
    <div className="App">
      <Canvas>
        <Suspense fallback={null}>
          <Environment />
          <ambientLight />
          <Avatar/>
          <CameraControls/>
          <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
