import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { useRef } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

import { a } from "@react-spring/three";

function Cookie(props: { cookies: number; setCookies: Function }) {
  const cookieRef = useRef();
  function handleClick(): void {
    props.setCookies(props.cookies + 1);
  }

  const { nodes, materials } = useGLTF("/3d/cookie.glb"); //WHY DID NO ONE TELL ME IT HAD TO BE THE PUBLIC FOLDER
  return (
    <Canvas
      camera={{ position: [0, 0, 10] }}
      id="cookie"
      className="fixed cursor-pointer"
    >
      <Suspense fallback={true}>
        <directionalLight />
        <ambientLight />
        <pointLight />
        {/* <spotLight /> */}
        <hemisphereLight />
        <OrbitControls enablePan={false} enableZoom={false} />
        <a.group
          onClick={handleClick}
          dispose={null}
          rotation={[8.5, 1.5, 5]}
          position={[0, 0, 0]}
        >
          <mesh
            //@ts-ignore
            geometry={nodes.Sphere.geometry}
            material={materials["Material.001"]}
            position={[-0.443, -0.016, 0.124]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[-3.892, -0.549, -3.892]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere.geometry}
            material={materials["Material.002"]}
            position={[-2.559, 0.292, 1.217]}
            scale={[0.689, 0.273, 0.689]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere001.geometry}
            material={materials["Material.002"]}
            position={[-0.61, 0.384, -1.725]}
            rotation={[0.044, -0.448, 0.068]}
            scale={[1.344, 0.533, 1.344]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere002.geometry}
            material={materials["Material.002"]}
            position={[-0.327, 0.274, 0.499]}
            rotation={[2.805, 0.625, -3.048]}
            scale={[0.9, 0.357, 0.9]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere003.geometry}
            material={materials["Material.002"]}
            position={[-0.991, 0.37, 2.156]}
            rotation={[0.044, -0.448, 0.068]}
            scale={[0.403, 0.16, 0.403]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere004.geometry}
            material={materials["Material.004"]}
            position={[-0.175, -0.206, 0.388]}
            rotation={[3.097, -0.036, -3.136]}
            scale={[-2.51, -0.32, -1.929]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere005.geometry}
            material={materials["Material.005"]}
            position={[1.856, 0.306, -0.483]}
            rotation={[0.109, -1.197, 0.151]}
            scale={[0.795, 0.372, 0.511]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere006.geometry}
            material={materials["Material.006"]}
            position={[1.856, 0.22, 1.312]}
            rotation={[3.093, -0.597, -3.12]}
            scale={[0.684, 0.372, 0.551]}
          />
          <mesh
            //@ts-ignore
            geometry={nodes.Icosphere007.geometry}
            material={materials["Material.007"]}
            position={[-2.582, 0.37, -0.759]}
            rotation={[1.004, -1.524, 1.052]}
            scale={[0.301, 0.16, 0.283]}
          />
        </a.group>
      </Suspense>
    </Canvas>
  );
}

export default Cookie;
