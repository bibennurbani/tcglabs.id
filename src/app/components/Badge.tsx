'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import { useRef } from 'react';

const Badge = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const meshRef = useRef<any>(null);
  const texture = useTexture('/favicon.ico'); // Use your own texture here

  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default Badge;
