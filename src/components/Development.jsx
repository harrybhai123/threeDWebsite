import White_plaster from "./White-plaster-3d-model";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function Development() {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.1}>
      <White_plaster />
    </Stage>
    <OrbitControls enableZoom={false} />
  </Canvas>
  )
}
