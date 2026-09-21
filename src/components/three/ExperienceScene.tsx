"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const particlePositions = (() => {
  const count = 500;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const angle = i * 2.399963;
    const radius = 2.5 + (i % 80) * 0.07;

    positions[i * 3] =
      Math.cos(angle) * radius;

    positions[i * 3 + 1] =
      ((i * 0.173) % 9) - 4.5;

    positions[i * 3 + 2] =
      Math.sin(angle) * radius - 4;
  }

  return positions;
})();

function Moon() {
  const moon = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!moon.current) return;

    moon.current.position.y =
      1.8 +
      Math.sin(state.clock.elapsedTime * 0.25) * 0.025;
  });

  return (
    <>
      <mesh position={[0, 1.8, -5]}>
        <sphereGeometry args={[2.2, 32, 32]} />

        <meshBasicMaterial
          color="#620000"
          transparent
          opacity={0.08}
        />
      </mesh>

      <mesh
        ref={moon}
        position={[0, 1.8, -5]}
      >
        <sphereGeometry args={[1.25, 64, 64]} />

        <meshBasicMaterial color="#a30000" />
      </mesh>
    </>
  );
}

function Particles() {
  const particles = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (!particles.current) return;

    particles.current.rotation.y =
      state.clock.elapsedTime * 0.01;

    particles.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.1) *
      0.015;
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#9d0000"
        size={0.025}
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  );
}

function CameraMotion() {
  useFrame((state) => {
    const targetX = state.pointer.x * 0.2;
    const targetY = state.pointer.y * 0.12;

    state.camera.position.x +=
      (targetX - state.camera.position.x) * 0.02;

    state.camera.position.y +=
      (targetY - state.camera.position.y) * 0.02;

    state.camera.lookAt(0, 0, -3);
  });

  return null;
}

function Scene() {
  return (
    <>
      <color
        attach="background"
        args={["#020202"]}
      />

      <fog
        attach="fog"
        args={["#020202", 4, 15]}
      />

      <ambientLight intensity={0.15} />

      <Moon />

      <Particles />

      <CameraMotion />
    </>
  );
}

export default function ExperienceScene() {
  return (
    <div className="experience-canvas">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}