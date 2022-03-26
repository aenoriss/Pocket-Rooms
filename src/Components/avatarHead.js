import * as THREE from 'three';
import { Circle, Planes } from "@react-three/drei";



export default function AvatarBody(props) {
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

    let videoTexture = new THREE.VideoTexture(video)

    return (
        <Circle args={[8, 50]} {...props}>
            <meshBasicMaterial map={videoTexture} opacity={0.5} />
        </Circle>

    );
}
