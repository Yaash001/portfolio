
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

function KingModel() {
  const { scene } = useGLTF("/models/chess-king.glb");
  const kingRef = useRef<THREE.Group>(null);

  const model = useMemo(() => {
    const clone = scene.clone(true);
    clone.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const largestDimension = Math.max(size.x, size.y, size.z);
    const scale = 3.2 / largestDimension;

    const group = new THREE.Group();
    group.add(clone);
    clone.position.sub(center);
    group.scale.setScalar(scale);

    return group;
  }, [scene]);

  useFrame((state, delta) => {
    const king = kingRef.current;
    if (!king) return;

    const time = state.clock.elapsedTime;
    const pointer = state.pointer;

    // Slow continuous rotation
    king.rotation.y -= delta * 0.3;

    // Smooth 3D mouse-responsive tilt
    const targetRotationX =
      pointer.y * 0.18 + Math.sin(time * 0.7) * 0.025;

    const targetRotationZ = -pointer.x * 0.13;

    king.rotation.x = THREE.MathUtils.damp(
      king.rotation.x,
      targetRotationX,
      4,
      delta
    );

    king.rotation.z = THREE.MathUtils.damp(
      king.rotation.z,
      targetRotationZ,
      4,
      delta
    );

    // Floating depth and parallax
    king.position.x = THREE.MathUtils.damp(
      king.position.x,
      pointer.x * 0.14,
      4,
      delta
    );

    king.position.y = THREE.MathUtils.damp(
      king.position.y,
      Math.sin(time * 0.9) * 0.045 + pointer.y * 0.09,
      4,
      delta
    );
  });

  return <primitive ref={kingRef} object={model} />;
}

export default function ChessKing() {
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[4, 5, 5]} intensity={3} />
        <directionalLight position={[-4, 2, -3]} intensity={1.5} />

        <Suspense fallback={null}>
          <KingModel />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/chess-king.glb");
