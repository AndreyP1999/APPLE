
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import style from "./style.module.css";
import { OrbitControls, Stage } from "@react-three/drei";
import { useEffect } from "react";
export const MainCanvas = ({ file }) => {

    let gltf = useLoader(GLTFLoader, '/3d_Model/' + file);
    return (
        <div id="root" style={{ position: "relative" }} className={style.canvas}>
            <Canvas shadows flat linear>

                <directionalLight color="red" position={[0, 5, 0]} />
                <ambientLight color="white" />
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 2.2} />
                <Stage adjustCamera={false} intensity={2} shadows="contact" >
                    <primitive object={gltf.scene} scale={0.2} />
                </Stage>
            </Canvas>
        </div>
    )
}