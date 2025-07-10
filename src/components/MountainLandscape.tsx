
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Stars, Text, Cylinder, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

// Island Base Component
const IslandBase = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const islandGeometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(8, 10, 1, 32);
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} position={[0, -2, 0]} geometry={islandGeometry}>
      <meshLambertMaterial color="#8B7355" />
    </mesh>
  );
};

// Road Component
const Road = () => {
  const roadPoints = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-6, -1.5, 0),
      new THREE.Vector3(-3, -1.5, 4),
      new THREE.Vector3(0, -1.5, 3),
      new THREE.Vector3(3, -1.5, 0),
      new THREE.Vector3(4, -1.5, -4),
      new THREE.Vector3(0, -1.5, -5),
      new THREE.Vector3(-4, -1.5, -3),
      new THREE.Vector3(-6, -1.5, 0)
    ]);
    
    const geometry = new THREE.TubeGeometry(curve, 100, 0.3, 8, true);
    return geometry;
  }, []);

  return (
    <mesh geometry={roadPoints}>
      <meshLambertMaterial color="#444444" />
    </mesh>
  );
};

// Mountain Range Component
const MountainRange = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Main peak */}
      <mesh position={[0, 0, 0]}>
        <coneGeometry args={[1.5, 3, 8]} />
        <meshLambertMaterial color="#654321" />
      </mesh>
      {/* Secondary peaks */}
      <mesh position={[-1.5, -0.5, 0.5]}>
        <coneGeometry args={[1, 2.5, 8]} />
        <meshLambertMaterial color="#8B4513" />
      </mesh>
      <mesh position={[1.2, -0.3, -0.8]}>
        <coneGeometry args={[0.8, 2, 8]} />
        <meshLambertMaterial color="#A0522D" />
      </mesh>
    </group>
  );
};

// Building Complex Component
const BuildingComplex = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Skyscraper */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[0.6, 3, 0.6]} />
        <meshLambertMaterial color="#B0C4DE" />
      </mesh>
      {/* Office building */}
      <mesh position={[-1, 0.5, 0.5]}>
        <boxGeometry args={[0.8, 2, 0.8]} />
        <meshLambertMaterial color="#D3D3D3" />
      </mesh>
      {/* Small building */}
      <mesh position={[1, 0.2, -0.5]}>
        <boxGeometry args={[0.5, 1.2, 0.7]} />
        <meshLambertMaterial color="#F5F5DC" />
      </mesh>
      {/* Building details - windows */}
      <mesh position={[0, 1.5, 0.31]}>
        <planeGeometry args={[0.4, 0.8]} />
        <meshLambertMaterial color="#87CEEB" />
      </mesh>
    </group>
  );
};

// Hindu Temple Component
const HinduTemple = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Main temple structure */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[1.2, 1.5, 2, 8]} />
        <meshLambertMaterial color="#CD853F" />
      </mesh>
      {/* Temple dome */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshLambertMaterial color="#DAA520" />
      </mesh>
      {/* Spire */}
      <mesh position={[0, 2.8, 0]}>
        <coneGeometry args={[0.3, 1.2, 8]} />
        <meshLambertMaterial color="#FFD700" />
      </mesh>
      {/* Temple pillars */}
      <mesh position={[-1, 0.3, 1]}>
        <cylinderGeometry args={[0.1, 0.1, 1.2]} />
        <meshLambertMaterial color="#D2691E" />
      </mesh>
      <mesh position={[1, 0.3, 1]}>
        <cylinderGeometry args={[0.1, 0.1, 1.2]} />
        <meshLambertMaterial color="#D2691E" />
      </mesh>
    </group>
  );
};

// Waterfall Component
const Waterfall = ({ position }: { position: [number, number, number] }) => {
  const waterfallRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (waterfallRef.current) {
      waterfallRef.current.material.opacity = 0.6 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Rock face */}
      <mesh position={[0, 1, 0]}>
        <boxGeometry args={[2, 3, 0.5]} />
        <meshLambertMaterial color="#696969" />
      </mesh>
      {/* Water stream */}
      <mesh ref={waterfallRef} position={[0, 0, 0.3]}>
        <planeGeometry args={[0.5, 3]} />
        <meshLambertMaterial color="#ADD8E6" transparent opacity={0.6} />
      </mesh>
      {/* Water pool */}
      <mesh position={[0, -1.3, 0.5]}>
        <cylinderGeometry args={[1.5, 1.5, 0.2]} />
        <meshLambertMaterial color="#4169E1" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

// Monument Component
const Monument = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Monument base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[1.5, 1.5, 0.5]} />
        <meshLambertMaterial color="#2F4F4F" />
      </mesh>
      {/* Monument pillar */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 3]} />
        <meshLambertMaterial color="#708090" />
      </mesh>
      {/* Monument top */}
      <mesh position={[0, 2.8, 0]}>
        <sphereGeometry args={[0.6]} />
        <meshLambertMaterial color="#B8860B" />
      </mesh>
    </group>
  );
};

// Tree Component
const Tree = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 1.2]} />
        <meshLambertMaterial color="#8B4513" />
      </mesh>
      {/* Foliage */}
      <mesh position={[0, 1.2, 0]}>
        <sphereGeometry args={[0.6]} />
        <meshLambertMaterial color="#228B22" />
      </mesh>
    </group>
  );
};

// Electricity Pole Component
const ElectricityPole = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      {/* Main pole */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 3]} />
        <meshLambertMaterial color="#654321" />
      </mesh>
      {/* Cross beam */}
      <mesh position={[0, 2.2, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.5]} />
        <meshLambertMaterial color="#654321" />
      </mesh>
      {/* Power lines (simplified) */}
      <mesh position={[0, 2.1, 0]}>
        <cylinderGeometry args={[0.01, 0.01, 0.1]} />
        <meshLambertMaterial color="#000000" />
      </mesh>
    </group>
  );
};

// Bush Component
const Bush = ({ position }: { position: [number, number, number] }) => {
  return (
    <group position={position}>
      <mesh position={[0, 0.2, 0]}>
        <sphereGeometry args={[0.4, 8, 6]} />
        <meshLambertMaterial color="#32CD32" />
      </mesh>
      <mesh position={[0.2, 0.15, 0.2]}>
        <sphereGeometry args={[0.3, 8, 6]} />
        <meshLambertMaterial color="#228B22" />
      </mesh>
    </group>
  );
};

// Main Landscape Scene
const LandscapeScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const roadSideObjects = useMemo(() => {
    const objects = [];
    const positions = [
      [-4, -1.5, 2], [2, -1.5, 3], [-2, -1.5, -3], [5, -1.5, -2],
      [-5, -1.5, -1], [3, -1.5, 4], [-1, -1.5, -4], [4, -1.5, 1]
    ];

    positions.forEach((pos, index) => {
      const [x, y, z] = pos as [number, number, number];
      if (index % 3 === 0) {
        objects.push(<Tree key={`tree-${index}`} position={[x, y, z]} />);
      } else if (index % 3 === 1) {
        objects.push(<Bush key={`bush-${index}`} position={[x, y, z]} />);
      } else {
        objects.push(<ElectricityPole key={`pole-${index}`} position={[x, y, z]} />);
      }
    });

    return objects;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Island base */}
      <IslandBase />
      
      {/* Road system */}
      <Road />
      
      {/* Different landscape sections */}
      <MountainRange position={[-5, -1, -2]} />
      <BuildingComplex position={[4, -1.5, 2]} />
      <HinduTemple position={[-3, -1.5, 4]} />
      <Waterfall position={[5, -1, -4]} />
      <Monument position={[-4, -1.5, -4]} />
      
      {/* Road side objects */}
      {roadSideObjects}
    </group>
  );
};

const MountainLandscape = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-slate-900 via-blue-900 to-slate-800">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 60 }}
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
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={0.5}
          castShadow
        />
        
        <LandscapeScene />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
        
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          enableRotate={true}
          minDistance={8}
          maxDistance={25}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2.2}
          autoRotate={false}
        />
      </Canvas>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center z-10">
        <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          3D Island Landscape
        </h2>
        <p className="text-lg text-blue-200">
          Explore the diverse landscape • Mountains • Buildings • Temple • Waterfall • Monument
        </p>
        <p className="text-sm text-blue-300 mt-1">
          Drag to explore • Scroll to zoom
        </p>
      </div>
    </div>
  );
};

export default MountainLandscape;
