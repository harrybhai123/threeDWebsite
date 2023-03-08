import styled from "styled-components";
import {
  OrbitControls,
  RenderTexture,
  Text,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Container = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: center;
`;

export default function Test() {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshStandardMaterial color="yellow">
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 2]} />
              <color attach="background" args={["pink"]} />
              <Text fontSize={1} color="#555">
                Hello
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  );
}
