'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useState, useRef } from 'react';
import { Mesh } from 'three';

const RotatingTicket = () => {
  const texture = useTexture('/ticket-background.png'); // Ensure correct path
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Animate rotation based on hover state
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += hovered ? 0.05 : 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.1 : 1} // Slight scale effect on hover
    >
      <boxGeometry args={[4, 2.5, 0.2]} /> {/* Adjust ticket size */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

const Ticket = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <RotatingTicket />
    </Canvas>
  );
};

export default Ticket;
