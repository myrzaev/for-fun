import React, { useRef, Suspense } from "react";
// import { useGLTF, OrbitControls, Stars, PerspectiveCamera  } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber"

// useGLTF.preload("scene.gltf");

// export const Scene = ({ ...props }) => {
//   const group = useRef();
//   const { nodes, materials } = useGLTF("scene.gltf");
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group rotation={[-Math.PI / 2, 0, 0]}>
//         <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
//           <mesh
//             geometry={nodes.pCube23_offwhite_balloon_0.geometry}
//             material={materials.offwhite_balloon}
//           />
//           <mesh
//             geometry={nodes.pCube23_white_balloon_0.geometry}
//             material={materials.white_balloon}
//           />
//           <group position={[0, 1, 0]}>
//             <mesh
//               geometry={nodes.pCube28_phong4_0.geometry}
//               material={materials.phong4}
//             />
//             <mesh
//               geometry={nodes.pCube28_purple_atomic_0.geometry}
//               material={materials.purple_atomic}
//             />
//           </group>
//           <group
//             position={[0, 6, -5]}
//             rotation={[-Math.PI / 2, 0, -Math.PI]}
//             scale={0.22}
//           >
//             <mesh
//               geometry={nodes.pCylinder2_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//             <mesh
//               geometry={nodes.pCylinder2_purple_atomic_0.geometry}
//               material={materials.purple_atomic}
//             />
//             <mesh
//               geometry={nodes.pCylinder2_lambert1_0.geometry}
//               material={materials.lambert1}
//             />
//           </group>
//           <group
//             position={[0, 13.29, -5.16]}
//             rotation={[0, 0, -Math.PI / 2]}
//             scale={0.87}
//           >
//             <mesh
//               geometry={nodes.pCylinder4_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group position={[-2.29, 11, -5.16]} scale={0.87}>
//             <mesh
//               geometry={nodes.pCylinder5_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group
//             position={[0, 8.71, -5.16]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={0.87}
//           >
//             <mesh
//               geometry={nodes.pCylinder6_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group
//             position={[2.29, 11, -5.16]}
//             rotation={[0, 0, Math.PI]}
//             scale={0.87}
//           >
//             <mesh
//               geometry={nodes.pCylinder7_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group
//             position={[-0.94, 6, -2]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube29_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//           <group
//             position={[0, 11, 9]}
//             rotation={[Math.PI / 2, 0, 0]}
//             scale={1.2}
//           >
//             <mesh
//               geometry={nodes.pCube30_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group
//             position={[0, 11, -9]}
//             rotation={[Math.PI / 2, 0, -Math.PI]}
//             scale={1.2}
//           >
//             <mesh
//               geometry={nodes.pCube31_red_fins_0.geometry}
//               material={materials.red_fins}
//             />
//           </group>
//           <group
//             position={[-0.95, 6, 0]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube32_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//           <group
//             position={[-0.94, 6, 2]}
//             rotation={[0, 0, Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube33_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//           <group
//             position={[0.94, 6, 2]}
//             rotation={[Math.PI, 0, -Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube34_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//           <group
//             position={[0.95, 6, 0]}
//             rotation={[Math.PI, 0, -Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube35_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//           <group
//             position={[0.94, 6, -2]}
//             rotation={[Math.PI, 0, -Math.PI / 2]}
//             scale={0.5}
//           >
//             <mesh
//               geometry={nodes.pCube36_phong6_0.geometry}
//               material={materials.phong6}
//             />
//           </group>
//         </group>
//       </group>
//     </group>
//   );
// }

export default function Model() {
  return (
    <Suspense fallback="Loading...">
      <div style={{ height: 200, width: '100%' }}>
        Model
      </div>
      {/* <Canvas>
        <OrbitControls />
        <PerspectiveCamera />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Scene />
      </Canvas> */}
    </Suspense>
  )
}