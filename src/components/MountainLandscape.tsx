
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Mountain = ({ position, scale, color }: { position: [number, number, number], scale: number, color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create mountain geometry using a cone with custom vertices for more realistic shape
  const geometry = useMemo(() => {
    const geo = new THREE.ConeGeometry(1, 2, 8);
    const positions = geo.attributes.position.array as Float32Array;
    
    // Add some randomness to make it look more natural
    for (let i = 0; i < positions.length; i += 3) {
      positions[i] += (Math.random() - 0.5) * 0.1; // x
      positions[i + 1] += (Math.random() - 0.5) * 0.1; // y
      positions[i + 2] += (Math.random() - 0.5) * 0.1; // z
    }
    
    geo.attributes.position.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <meshLambertMaterial color={color} />
    </mesh>
  );
};

const MountainScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  const mountains = useMemo(() => {
    const mountainArray = [];
    const colors = ['#2563eb', '#1e40af', '#1e3a8a', '#3b82f6', '#60a5fa'];
    
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3 + Math.random() * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const scale = 0.5 + Math.random() * 1.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      mountainArray.push(
        <Mountain
          key={i}
          position={[x, -1, z]}
          scale={scale}
          color={color}
        />
      );
    }
    return mountainArray;
  }, []);

  return (
    <group ref={groupRef}>
      {mountains}
      {/* Central peak */}
      <Mountain position={[0, 0, 0]} scale={2} color="#1e3a8a" />
    </group>
  );
};

const MountainLandscape = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true }}
        className="cursor-grab active:cursor-grabbing"
      >
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#3b82f6" />
        
        <MountainScene />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={4}
          maxDistance={15}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
        />
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          3D Mountain Landscape
        </h2>
        <p className="text-lg text-blue-200">Drag to explore • Scroll to zoom</p>
      </div>
    </div>
  );
};

export default MountainLandscape;
