import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Laptop from "./Laptop";



export default function WebDesign() {
  return (
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <Laptop />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
