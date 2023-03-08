import Maza from "./Maza";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function ProductDesign() {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.9}>
      <Maza />
    </Stage>
    <OrbitControls enableZoom={false} />
  </Canvas>
  )
}
