import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';

function Particles() {
  const meshRef = useRef<THREE.Points>(null);
  const [time, setTime] = useState(0);
  
  const count = 2000;
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      // Spread particles in a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 3 + Math.random() * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Blue gradient colors
      const intensity = 0.5 + Math.random() * 0.5;
      colors[i * 3] = 0.1 * intensity; // R
      colors[i * 3 + 1] = 0.5 * intensity; // G
      colors[i * 3 + 2] = 1.0 * intensity; // B
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
      
      // Gentle floating motion
      const positions = meshRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + i * 0.01) * 0.001;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3;
      ring1Ref.current.rotation.y = t * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = t * 0.2;
      ring2Ref.current.rotation.z = t * 0.3;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.25;
      ring3Ref.current.rotation.z = t * 0.15;
    }
  });

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#0ea5e9" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[3, 0.01, 16, 100]} />
        <meshBasicMaterial color="#7dd3fc" transparent opacity={0.2} />
      </mesh>
    </>
  );
}

interface ParticleIntroProps {
  onComplete: () => void;
}

export function ParticleIntro({ onComplete }: ParticleIntroProps) {
  const [showText, setShowText] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show text after 1 second
    const textTimer = setTimeout(() => setShowText(true), 1000);
    
    // Start exit animation after 4 seconds
    const exitTimer = setTimeout(() => setIsExiting(true), 4000);
    
    // Complete after 4.5 seconds
    const completeTimer = setTimeout(() => onComplete(), 4500);
    
    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-secondary"
        >
          <Canvas
            camera={{ position: [0, 0, 6], fov: 60 }}
            style={{ background: 'transparent' }}
          >
            <ambientLight intensity={0.5} />
            <Particles />
            <FloatingRings />
          </Canvas>
          
          {/* Centered Logo Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={showText ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold text-primary-foreground tracking-wide">
                Engleo
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={showText ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-lg md:text-xl text-primary-foreground/80 tracking-widest uppercase"
              >
                English with passion
              </motion.p>
            </motion.div>
          </div>
          
          {/* Skip button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            onClick={() => {
              setIsExiting(true);
              setTimeout(onComplete, 500);
            }}
            className="absolute bottom-8 right-8 text-primary-foreground/60 hover:text-primary-foreground transition-colors text-sm tracking-wider"
          >
            Pomiń →
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
