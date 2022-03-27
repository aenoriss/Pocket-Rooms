
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Plane, Html } from '@react-three/drei'
import * as THREE from 'three';
import { Scene } from 'three';
import '../App.css';

export default function Streaming(props) {

    function traveler(e){
        console.log("EVENT", e);
    }

    return (
        <Plane args={[100, 60]} position={[20, 300, 100]} rotation={[0, Math.PI, 0]}>
            <Html className="content" transform>
                <div className="wrapper" onclick={"myFunction()"}>
                    <iframe  width="100%" height="100%"  src="https://www.youtube.com/embed/yTvxE8y1llQ?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Html>
        </Plane>
    )
}