'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useState, useRef } from 'react';
import { Mesh } from 'three';

const RotatingTicket = () => {
  const texture = useTexture('/ticket-background.png'); // Ensure the image path is correct
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
    >
      <boxGeometry args={[3, 2, 0.1]} /> {/* Box representing the ticket */}
      <meshBasicMaterial map={texture} /> {/* Use texture as the ticket background */}
    </mesh>
  );
};

const Ticket = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <RotatingTicket /> {/* Move the ticket component inside Canvas */}
      </Canvas>
    </div>
  );
};

export default Ticket;
