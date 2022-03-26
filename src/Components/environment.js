import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useThree } from '@react-three/fiber';

export default function Environment(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/island.glb");
  return (
    <group name="environment" ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-8.48, 256.14, 10.73]}
            rotation={[-Math.PI / 2, 0, 2.86]}
            scale={[493.22, 493.22, 493.22]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Agua_Agua_0.geometry}
              material={materials.Agua}
            />
          </group>
          <group
            position={[735.89, 495.83, 692.58]}
            rotation={[Math.PI, 0.76, 2.68]}
            scale={[100, 100, 100]}
          />
          <group
            position={[314.76, 386.48, 76.62]}
            rotation={[-Math.PI / 2, -0.1, -1.58]}
            scale={[51.63, 63.85, 31.97]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Casa_Casa1_0.geometry}
              material={nodes.Casa_Casa1_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Casa_Tejado_0.geometry}
              material={materials.Tejado}
            />
          </group>
          <group
            position={[321.6, 314.95, 76.62]}
            rotation={[-1.57, -0.1, -1.58]}
            scale={[40.56, 40.56, 40.56]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_Casa1_0.geometry}
              material={nodes.Cube_Casa1_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_maderaCasa_0.geometry}
              material={nodes.Cube_maderaCasa_0.material}
            />
          </group>
          <group
            position={[320.75, 324.61, 67.1]}
            rotation={[-Math.PI / 2, -0.1, -1.58]}
            scale={40.56}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube001_maderaCasa_0.geometry}
              material={nodes.Cube001_maderaCasa_0.material}
            />
          </group>
          <group
            position={[257.31, 284.44, 171.7]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={14.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder_Arbol-_Tronco1_0"].geometry}
              material={nodes["Cylinder_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder_Arbol-_Tronco3_0"].geometry}
              material={nodes["Cylinder_Arbol-_Tronco3_0"].material}
            />
          </group>
          <group
            position={[256.98, 275.71, 185.45]}
            rotation={[-Math.PI / 2, 0, 0.32]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder001_Arbol-_Tronco1_0"].geometry}
              material={nodes["Cylinder001_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Cylinder001_Arbol-_Tronco3_0"].geometry}
              material={nodes["Cylinder001_Arbol-_Tronco3_0"].material}
            />
          </group>
          <group
            position={[247.2, 299.37, 165.86]}
            rotation={[-0.22, -0.22, -0.52]}
            scale={[11.43, 11.43, 11.43]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hacha_Hacha-_Madera_0"].geometry}
              material={materials["Hacha-_Madera"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hacha_Hacha-_metal_0"].geometry}
              material={materials["Hacha-_metal"]}
            />
          </group>
          <group
            position={[124.81, 396.05, 293.76]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas_Arbol_-_Hoja1_0"].geometry}
              material={nodes["Hojas_Arbol_-_Hoja1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas_Arbol_-_Hoja2_0"].geometry}
              material={nodes["Hojas_Arbol_-_Hoja2_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas_Arbol_-_Hoja3_0"].geometry}
              material={nodes["Hojas_Arbol_-_Hoja3_0"].material}
            />
          </group>
          <group
            position={[91.94, 387.78, 355.5]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={27.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas001_Arbol_-_Hoja1_0"].geometry}
              material={nodes["Hojas001_Arbol_-_Hoja1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas001_Arbol_-_Hoja2_0"].geometry}
              material={nodes["Hojas001_Arbol_-_Hoja2_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Hojas001_Arbol_-_Hoja3_0"].geometry}
              material={nodes["Hojas001_Arbol_-_Hoja3_0"].material}
            />
          </group>
          <group
            position={[-184.48, 724.26, -558.05]}
            rotation={[-Math.PI / 2, 0, 0.44]}
            scale={70.91}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere_Cloud_0.geometry}
              material={nodes.Icosphere_Cloud_0.material}
            />
          </group>
          <group
            position={[-571.08, 772.15, 169.82]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere001__0.geometry}
              material={nodes.Icosphere001__0.material}
            />
          </group>
          <group
            position={[529.64, 731.51, 80.78]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere002__0.geometry}
              material={nodes.Icosphere002__0.material}
            />
          </group>
          <group
            position={[449.02, 596.79, 513.51]}
            rotation={[-Math.PI / 2, 0, 0.44]}
            scale={[53.71, 53.71, 53.71]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Icosphere003_Cloud_0.geometry}
              material={nodes.Icosphere003_Cloud_0.material}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              onClick={(e) => console.log('env selected',e.point)}
              castShadow
              receiveShadow
              geometry={nodes["Isla_Terreno_-_Verde_0"].geometry}
              material={materials["Terreno_-_Verde"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Isla_Terreno-_Camino_0"].geometry}
              material={materials["Terreno-_Camino"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Isla_Terreno-_Nieve_0"].geometry}
              material={materials["Terreno-_Nieve"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Isla_Terreno-_Roca_0"].geometry}
              material={materials["Terreno-_Roca"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Isla_Terreno-Base_0"].geometry}
              material={materials["Terreno-Base"]}
            />
          </group>
          <group
            position={[258.48, 490.57, -100.55]}
            rotation={[1.89, 0.88, -2.05]}
            scale={[100, 100, 100]}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[775.79, 290.94, 759.25]}
            rotation={[1.89, 0.88, -2.05]}
            scale={[100, 100, 100]}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[-68.8, 171.34, 328]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane_Hojas_Callendo_0.geometry}
              material={nodes.Plane_Hojas_Callendo_0.material}
            />
          </group>
          <group
            position={[-74.08, 288.71, -272.13]}
            rotation={[-Math.PI / 2, 0, 0.46]}
            scale={[100, 100, 100]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca_Roca2_0.geometry}
              material={nodes.Roca_Roca2_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca_Roca_0.geometry}
              material={nodes.Roca_Roca_0.material}
            />
          </group>
          <group
            position={[-354.42, 281.86, 226.04]}
            rotation={[-Math.PI / 2, 0, 1.62]}
            scale={43.49}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca001_Roca2_0.geometry}
              material={nodes.Roca001_Roca2_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca001_Roca_0.geometry}
              material={nodes.Roca001_Roca_0.material}
            />
          </group>
          <group
            position={[339.23, 284.69, -56.05]}
            rotation={[-1.19, 0.33, 2.11]}
            scale={[43.49, 43.49, 43.49]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca002_Roca2_0.geometry}
              material={nodes.Roca002_Roca2_0.material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Roca002_Roca_0.geometry}
              material={nodes.Roca002_Roca_0.material}
            />
          </group>
          <group
            position={[0, 253.41, -71.91]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Tablero_Puente_0.geometry}
              material={materials.Puente}
            />
          </group>
          <group
            position={[0.1, 261.43, 76.87]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={14.93}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Torii_Torii-_Negro_0"].geometry}
              material={materials["Torii-_Negro"]}
              position={[0.14, 8.56, -0.76]}
              scale={[-1, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Torii_Torii-_Rojo_0"].geometry}
              material={materials["Torii-_Rojo"]}
              position={[0.14, 8.56, -0.76]}
              scale={[-1, 1, 1]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Torii_Torii-Gris_0"].geometry}
              material={materials["Torii-Gris"]}
            />
          </group>
          <group
            position={[-244.99, 237.39, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={57.44}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco_Arbol-_Tronco1_0"].geometry}
              material={nodes["Tronco_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco_Arbol-_Tronco2_0"].geometry}
              material={nodes["Tronco_Arbol-_Tronco2_0"].material}
            />
          </group>
          <group
            position={[-20.48, 224.02, 195.46]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={58.29}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco001_Arbol-_Tronco1_0"].geometry}
              material={nodes["Tronco001_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco001_Arbol-_Tronco2_0"].geometry}
              material={nodes["Tronco001_Arbol-_Tronco2_0"].material}
            />
          </group>
          <group
            position={[213.52, 263.65, -186.3]}
            rotation={[-Math.PI / 2, 0, 1.09]}
            scale={[40.63, 40.63, 40.63]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco002_Arbol-_Tronco1_0"].geometry}
              material={nodes["Tronco002_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco002_Arbol-_Tronco2_0"].geometry}
              material={nodes["Tronco002_Arbol-_Tronco2_0"].material}
            />
          </group>
          <group
            position={[-179.8, 255.27, 364.22]}
            rotation={[-Math.PI / 2, 0, 1.36]}
            scale={[38.09, 38.09, 38.09]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco003_Arbol-_Tronco1_0"].geometry}
              material={nodes["Tronco003_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco003_Arbol-_Tronco2_0"].geometry}
              material={nodes["Tronco003_Arbol-_Tronco2_0"].material}
            />
          </group>
          <group
            position={[193, 263.95, 293.76]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco2_Arbol-_Tronco1_0"].geometry}
              material={nodes["Tronco2_Arbol-_Tronco1_0"].material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["Tronco2_Arbol-_Tronco2_0"].geometry}
              material={nodes["Tronco2_Arbol-_Tronco2_0"].material}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/island.glb");
