
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

    // Apply all nested model transforms.
    clone.updateMatrixWorld(true);

    const box = new THREE.Box3().setFromObject(clone);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    const largestDimension = Math.max(size.x, size.y, size.z);
    const scale = 3.2 / largestDimension;

    // Center the model inside a parent group.
    const group = new THREE.Group();
    group.add(clone);

    clone.position.sub(center);
    group.scale.setScalar(scale);

    return group;
  }, [scene]);

  useFrame((state, delta) => {
    if (!kingRef.current) return;

    kingRef.current.rotation.y -= delta * 0.45;

    kingRef.current.rotation.x = THREE.MathUtils.lerp(
      kingRef.current.rotation.x,
      state.pointer.y * 0.2,
      0.06
    );

    kingRef.current.rotation.z = THREE.MathUtils.lerp(
      kingRef.current.rotation.z,
      -state.pointer.x * 0.15,
      0.06
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
