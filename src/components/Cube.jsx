import { RenderTexture, Text, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Cube() {
    const textRef = useRef()
    useFrame((state) => textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2);
    return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color="#f8f8fc">
        <RenderTexture attach="map">
                    <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#8585b3"]} />
          <Text ref={textRef} fontSize={2} color="#555">
            think!
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
}
