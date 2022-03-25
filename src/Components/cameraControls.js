import React, { Suspense, useRef } from "react";
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FlyControls} from '@react-three/drei';


import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function CameraControls( ){
    // Get a reference to the Three.js Camera, and the canvas html element.
    // We need these to setup the OrbitControls component.
    // https://threejs.org/docs/#examples/en/controls/OrbitControls
   
    const {
        camera,
        gl: { domElement },
      } = useThree();  

      console.log(camera, "CAMERAAA")

    // Ref to the controls, so that we can update them on every frame using useFrame
    const controls = useRef();
    useFrame((state) => controls.current.update());
    return <FlyControls ref={controls} attach = "camera"/>;

  };