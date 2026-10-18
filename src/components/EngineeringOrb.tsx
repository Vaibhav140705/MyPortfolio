
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function OrbitalCore() {
  const coreRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.x += delta * 0.16;
      coreRef.current.rotation.y += delta * 0.28;
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2.5;
      ringRef.current.rotation.z += delta * 0.12;
    }

    // Gentle response to pointer movement.
    state.camera.position.x +=
      (state.pointer.x * 0.28 - state.camera.position.x) * 0.025;
    state.camera.position.y +=
      (state.pointer.y * 0.2 - state.camera.position.y) * 0.025;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.35}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.05, 4]} />
          <MeshDistortMaterial
            color="#43e8ff"
            emissive="#075a85"
            emissiveIntensity={0.8}
            roughness={0.18}
            metalness={0.65}
            distort={0.22}
            speed={1.6}
          />
        </mesh>

        <mesh scale={1.13}>
          <icosahedronGeometry args={[1.05, 2]} />
          <meshBasicMaterial
            color="#b8f7ff"
            wireframe
            transparent
            opacity={0.22}
          />
        </mesh>
      </Float>

      <mesh ref={ringRef} rotation={[Math.PI / 2.5, 0, 0]}>
        <torusGeometry args={[1.55, 0.012, 12, 160]} />
        <meshBasicMaterial color="#9b7bff" />
      </mesh>

      <mesh rotation={[0.9, 0.35, 0.4]}>
        <torusGeometry args={[1.8, 0.008, 8, 160]} />
        <meshBasicMaterial
          color="#43e8ff"
          transparent
          opacity={0.65}
        />
      </mesh>

      <Sparkles
        count={90}
        scale={4.8}
        size={2}
        speed={0.35}
        color="#8beeff"
        opacity={0.8}
      />

      <pointLight position={[3, 2, 3]} intensity={24} color="#43e8ff" />
      <pointLight position={[-3, -1, -2]} intensity={18} color="#9b7bff" />
    </group>
  );
}

export default function EngineeringOrb() {
  return (
    <div
      className="h-[560px] w-full sm:h-[640px] lg:h-[680px]"
      aria-label="Interactive animated 3D engineering-inspired orb"
      role="img"
    >
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <OrbitalCore />
      </Canvas>
    </div>
  );
}
