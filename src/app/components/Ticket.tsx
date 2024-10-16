'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState } from 'react';
import { OrbitControls, useTexture } from '@react-three/drei';
import { Mesh } from 'three';

// This component handles the actual 3D ticket rendering
const TicketMesh = () => {
  const texture = useTexture('/texture/ticket-background.png'); // Update with real texture URL
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

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
      <boxGeometry args={[2, 3, 0.05]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

// Main Ticket component with the Canvas and overlay
const Ticket = () => {
  return (
    <div className="relative w-64 h-96">
      <Canvas style={{ height: '100%', width: '100%' }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} enablePan={false} />
        <TicketMesh /> {/* TicketMesh is now inside the Canvas */}
      </Canvas>

      {/* Add overlay for ticket text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
        <h3 className="text-xl font-bold">Next.js Conf</h3>
        <p className="text-3xl font-bold">Biben Hasan</p>
        <p className="text-lg">DEVSTACK</p>
        <p className="text-lg">October 24th</p>
        <p className="text-sm">VIRTUAL</p>
      </div>
    </div>
  );
};

export default Ticket;
