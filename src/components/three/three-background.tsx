"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";

// Floating particles component
function Particles({ count = 200 }) {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random positions in a sphere
            const x = (Math.random() - 0.5) * 10;
            const y = (Math.random() - 0.5) * 10;
            const z = (Math.random() - 0.5) * 5;

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Gradient colors from purple to cyan
            const t = Math.random();
            colors[i * 3] = 0.5 + t * 0.3; // R
            colors[i * 3 + 1] = 0.3 + t * 0.3; // G
            colors[i * 3 + 2] = 0.8 + t * 0.2; // B
        }

        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.05;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[particles.positions, 3]}
                />
                <bufferAttribute
                    attach="attributes-color"
                    args={[particles.colors, 3]}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.03}
                vertexColors
                transparent
                opacity={0.8}
                sizeAttenuation
            />
        </points>
    );
}

// Floating geometric shapes
function FloatingShapes() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <group ref={group}>
            {/* Torus */}
            <mesh position={[-2, 0.5, -2]} rotation={[Math.PI / 4, 0, 0]}>
                <torusGeometry args={[0.5, 0.15, 16, 32]} />
                <meshStandardMaterial
                    color="#8b5cf6"
                    transparent
                    opacity={0.6}
                    wireframe
                />
            </mesh>

            {/* Octahedron */}
            <mesh position={[2.5, -0.5, -1.5]}>
                <octahedronGeometry args={[0.4]} />
                <meshStandardMaterial
                    color="#06b6d4"
                    transparent
                    opacity={0.6}
                    wireframe
                />
            </mesh>

            {/* Icosahedron */}
            <mesh position={[0, 1.5, -3]}>
                <icosahedronGeometry args={[0.3]} />
                <meshStandardMaterial
                    color="#a855f7"
                    transparent
                    opacity={0.5}
                    wireframe
                />
            </mesh>
        </group>
    );
}

// Animated ring
function AnimatedRing() {
    const ring = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (ring.current) {
            ring.current.rotation.x = state.clock.elapsedTime * 0.2;
            ring.current.rotation.z = state.clock.elapsedTime * 0.1;
        }
    });

    return (
        <mesh ref={ring} position={[0, 0, -4]}>
            <torusGeometry args={[2, 0.02, 16, 100]} />
            <meshStandardMaterial
                color="#8b5cf6"
                emissive="#8b5cf6"
                emissiveIntensity={0.5}
                transparent
                opacity={0.4}
            />
        </mesh>
    );
}

// Main 3D Scene
function Scene() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={0.5} />

            <Particles count={150} />
            <FloatingShapes />
            <AnimatedRing />
        </>
    );
}

// Exported component
export function ThreeBackground() {
    return (
        <div className="absolute inset-0 -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 60 }}
                style={{ background: "transparent" }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Scene />
                </Suspense>
            </Canvas>
        </div>
    );
}
