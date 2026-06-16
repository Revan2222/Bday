import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { textToPoints } from '../utils/textToPoints';

const STAR_COUNT = 1100;

/**
 * StarNameField — the particle system. Stars start scattered randomly
 * in a sphere, then morph into the shape of `name` once `formed` is true.
 * Each frame lerps current positions toward the active target set.
 */
function StarNameField({ name, formed }) {
  const pointsRef = useRef();
  const colorRef = useRef();

  // random scattered start positions
  const randomPositions = useMemo(() => {
    const arr = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const r = 9 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5;
      arr[i * 3 + 2] = r * Math.cos(phi) - 4;
    }
    return arr;
  }, []);

  // target positions sampled from the text canvas
  const targetPositions = useMemo(() => {
    const pts = textToPoints(name, { pointCount: STAR_COUNT });
    const arr = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const p = pts[i % pts.length] || [0, 0, 0];
      arr[i * 3] = p[0];
      arr[i * 3 + 1] = p[1];
      arr[i * 3 + 2] = p[2];
    }
    return arr;
  }, [name]);

  const current = useMemo(() => randomPositions.slice(), [randomPositions]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(current, 3));
    return geo;
  }, [current]);

  useFrame((state) => {
    const positions = pointsRef.current.geometry.attributes.position.array;
    const target = formed ? targetPositions : randomPositions;
    const speed = formed ? 0.04 : 0.015;

    for (let i = 0; i < STAR_COUNT * 3; i++) {
      positions[i] += (target[i] - positions[i]) * speed;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // gentle ambient rotation + twinkle via material size oscillation
    pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.06;
    if (colorRef.current) {
      const t = state.clock.elapsedTime;
      colorRef.current.size = formed ? 0.09 + Math.sin(t * 3) * 0.015 : 0.07;
    }
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        ref={colorRef}
        size={0.08}
        color={formed ? '#FFD93D' : '#B7C9FF'}
        transparent
        opacity={0.95}
        sizeAttenuation
      />
    </points>
  );
}

function ShootingStars() {
  const groupRef = useRef();
  const stars = useMemo(
    () =>
      Array.from({ length: 5 }).map(() => ({
        start: new THREE.Vector3(
          (Math.random() - 0.5) * 16,
          6 + Math.random() * 4,
          -2 - Math.random() * 4
        ),
        speed: 0.06 + Math.random() * 0.05,
        delay: Math.random() * 200,
      })),
    []
  );
  const refs = useRef([]);

  useFrame(() => {
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      const s = stars[i];
      mesh.position.x -= s.speed;
      mesh.position.y -= s.speed * 0.6;
      if (mesh.position.x < -12) {
        mesh.position.copy(s.start);
      }
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((s, i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)} position={s.start}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#FFFFFF" />
        </mesh>
      ))}
    </group>
  );
}

function Rocket() {
  const ref = useRef();
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = -3 + Math.sin(state.clock.elapsedTime * 0.6) * 0.3;
    ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.4) * 0.05;
  });
  return (
    <group ref={ref} position={[-4.5, -3, -1]} rotation={[0, 0, 0.3]}>
      <mesh>
        <coneGeometry args={[0.3, 0.8, 12]} />
        <meshBasicMaterial color="#FF4D4D" />
      </mesh>
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 0.6, 12]} />
        <meshBasicMaterial color="#FFD93D" />
      </mesh>
    </group>
  );
}

function Moon() {
  return (
    <mesh position={[5, 3.5, -3]}>
      <sphereGeometry args={[1.1, 24, 24]} />
      <meshBasicMaterial color="#F4F1E8" />
    </mesh>
  );
}

export default function SpaceScene({ name, formed }) {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 50 }} dpr={[1, 1.6]}>
      <ambientLight intensity={1.2} />
      <StarNameField name={name} formed={formed} />
      <ShootingStars />
      <Rocket />
      <Moon />
    </Canvas>
  );
}
