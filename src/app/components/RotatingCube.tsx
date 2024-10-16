'use client'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface RotatingCubeProps {
  color?: string;
}

const RotatingCube = ({ color = 'blue' }: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null);

  // Rotate the cube
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default RotatingCube;
