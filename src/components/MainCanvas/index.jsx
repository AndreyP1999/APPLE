
import { Canvas } from "@react-three/fiber";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import style from "./style.module.css";
import { OrbitControls } from "@react-three/drei";
export const MainCanvas = ({ file }) => {
        let gltf = useLoader(GLTFLoader, '/3d_Model/apple _watch/' + file);
    return (
        <div id="root" className={style.canvas}>
            <Canvas shadows flat linear>
                <directionalLight color="red" position={[0, 5, 0]} />
                <ambientLight color="white" />
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 3.2} maxPolarAngle={Math.PI / 2.2} />

                <primitive object={gltf.scene} scale={0.4} />

            </Canvas>
        </div>
    )
}