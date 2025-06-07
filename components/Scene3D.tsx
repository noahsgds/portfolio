'use client'

import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber'
import { 
  Environment, 
  PerspectiveCamera,
} from '@react-three/drei'
import { Suspense, useRef, useEffect, useState } from 'react'
import { Group } from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as THREE from 'three'

function Model({ type = "rh", isHovered = false }) {
  const basePath = type === "dev" 
    ? "/rp_free_posed_people_BLD/rp_mei_posed_001_BLD"
    : "/rp_free_posed_people_BLD/rp_dennis_posed_004_BLD";

  const modelPath = `${basePath}/${type === "dev" ? "rp_mei_posed_001_30k" : "rp_dennis_posed_004_30k"}.OBJ`;
  const group = useRef<Group>(null)
  const [isDragging, setIsDragging] = useState(false)
  const previousMouseX = useRef(0)
  const currentRotation = useRef(0)
  const targetRotation = useRef(0)
  const autoRotationSpeed = useRef(0)
  
  useEffect(() => {
    const loader = new OBJLoader();
    loader.load(modelPath, (object) => {
      object.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: type === "dev" ? 0x4f46e5 : 0x0ea5e9,
            metalness: 0.2,
            roughness: 0.8,
          });
        }
      });
      
      if (group.current) {
        group.current.clear();
        group.current.add(object);
        object.scale.set(0.02, 0.02, 0.02);
        object.position.set(0, -2, 0);
        object.rotation.set(0, -Math.PI / 2, 0);
      }
    });
  }, [modelPath, type]);

  const handlePointerDown = (e: ThreeEvent<PointerEvent>) => {
    setIsDragging(true)
    previousMouseX.current = e.clientX
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
    if (isDragging && group.current) {
      const deltaX = e.clientX - previousMouseX.current
      targetRotation.current += deltaX * 0.03
      previousMouseX.current = e.clientX
    }
  }

  const handlePointerLeave = () => {
    setIsDragging(false)
  }

  useFrame((state, delta) => {
    if (group.current) {
      if (isHovered && !isDragging) {
        // Accélération progressive de la rotation
        autoRotationSpeed.current = THREE.MathUtils.lerp(autoRotationSpeed.current, 1.0, 0.1)
        group.current.rotation.y += delta * autoRotationSpeed.current
      } else {
        // Décélération progressive de la rotation
        autoRotationSpeed.current = THREE.MathUtils.lerp(autoRotationSpeed.current, 0, 0.1)
        if (!isDragging) {
          group.current.rotation.y += delta * autoRotationSpeed.current
        }
      }

      // Animation fluide pour le drag
      if (isDragging) {
        currentRotation.current += (targetRotation.current - currentRotation.current) * 0.15
        group.current.rotation.y = currentRotation.current
      }
    }
  })

  return (
    <group 
      ref={group}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    />
  )
}

interface Scene3DProps {
  type?: "rh" | "dev";
}

export default function Scene3D({ type = "rh" }: Scene3DProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="w-full h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas className="bg-gradient-to-b from-black to-zinc-900">
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          <ambientLight intensity={0.8} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
          <directionalLight
            position={[5, 8, 5]}
            intensity={0.8}
            castShadow
          />

          <PerspectiveCamera
            makeDefault
            position={[0, 0, 8]}
            fov={50}
          />

          <Model type={type} isHovered={isHovered} />
        </Suspense>
      </Canvas>
    </div>
  )
} 