
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane } from '@react-three/drei'
import * as THREE from 'three';


export default function Streaming(props) {

    let video = document.createElement('video');
    video.width = 320;
    video.height = 240;
    video.autoplay = true;

    //Camera Detection

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                console.log("success")
            })
            .catch(function (error) {
                console.log("Something went wrong!");
            });
    }

    let videoTexture = new THREE.VideoTexture(video);

    return (
        <Plane args={[100, 60]} position={[20, 300, 100]} rotation={[0, Math.PI , 0]}>
            <meshBasicMaterial map={videoTexture} opacity={0.5} />
        </Plane>
    )
}