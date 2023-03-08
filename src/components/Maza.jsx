/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 maza.gltf --transform
Author: Museo Nacional de Historia Natural de Chile (https://sketchfab.com/MNHNcl)
License: CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
Source: https://sketchfab.com/3d-models/maza-estrellada-de-piedra-inca-584bfa5a91844d8daed67cac1cd2df9d
Title: Maza estrellada de piedra Inca
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/maza-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.mesh_0.geometry}
          material={materials.defaultMat}
          position={[0.42, -0.29, -0.46]}
          rotation={[0.84, 0.08, 1.99]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/maza-transformed.glb");