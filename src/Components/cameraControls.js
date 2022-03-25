import * as THREE from 'three'
import ReactDOM from 'react-dom'
import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useLoader, extend, useFrame, useThree } from '@react-three/fiber'
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js';

extend({ FlyControls })

export default function CameraControls() {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame((state, delta) => ref.current.update(delta))
  return <FlyControls ref={ref} args={[camera, gl]} />
}