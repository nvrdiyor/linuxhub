"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import { Text, Billboard } from "@react-three/drei";

// Matrix-style terminal code rain
function TerminalCodeRain({ count = 50 }) {
    const group = useRef<THREE.Group>(null);

    const particles = useMemo(() => {
        const items = [];
        const chars = ["$", "#", ">", "/", "~", "sudo", "apt", "nix", "git", "vim", "ssh", "grep", "ls", "cd", "chmod", "0", "1"];

        for (let i = 0; i < count; i++) {
            items.push({
                x: (Math.random() - 0.5) * 12,
                y: Math.random() * 8 - 4,
                z: Math.random() * -5 - 2,
                char: chars[Math.floor(Math.random() * chars.length)],
                speed: Math.random() * 0.02 + 0.01,
                opacity: Math.random() * 0.5 + 0.2,
            });
        }
        return items;
    }, [count]);

    useFrame(() => {
        if (group.current) {
            group.current.children.forEach((child, i) => {
                child.position.y -= particles[i].speed;
                if (child.position.y < -5) {
                    child.position.y = 5;
                }
            });
        }
    });

    return (
        <group ref={group}>
            {particles.map((p, i) => (
                <Text
                    key={i}
                    position={[p.x, p.y, p.z]}
                    fontSize={0.15}
                    color="#22c55e"
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={p.opacity}
                    font="/fonts/jetbrains-mono.woff"
                >
                    {p.char}
                </Text>
            ))}
        </group>
    );
}

// Floating Linux command prompts - many commands rotating around
function FloatingPrompts() {
    const group = useRef<THREE.Group>(null);

    const prompts = useMemo(() => [
        // Package managers
        { text: "$ sudo apt update", color: "#22c55e" },
        { text: "$ pacman -Syu", color: "#1793d1" },
        { text: "$ dnf upgrade", color: "#294172" },
        { text: "$ zypper refresh", color: "#73ba25" },
        { text: "$ emerge --sync", color: "#54487a" },
        { text: "$ nix-env -u", color: "#5277c3" },
        { text: "$ yay -S package", color: "#1793d1" },
        { text: "$ flatpak update", color: "#4a86cf" },
        // System commands
        { text: "# systemctl restart", color: "#a855f7" },
        { text: "$ htop", color: "#22c55e" },
        { text: "$ neofetch", color: "#06b6d4" },
        { text: "$ df -h", color: "#22c55e" },
        { text: "$ free -m", color: "#22c55e" },
        { text: "$ ps aux | grep", color: "#f59e0b" },
        { text: "$ journalctl -xe", color: "#ef4444" },
        { text: "$ dmesg | tail", color: "#a855f7" },
        // File operations
        { text: "$ chmod +x script.sh", color: "#22c55e" },
        { text: "$ chown user:group", color: "#06b6d4" },
        { text: "$ tar -xvf archive.tar", color: "#f59e0b" },
        { text: "$ rsync -avz", color: "#8b5cf6" },
        { text: "$ find / -name", color: "#22c55e" },
        { text: "$ grep -r 'pattern'", color: "#06b6d4" },
        // Network
        { text: "$ ssh user@server", color: "#22c55e" },
        { text: "$ curl -O url", color: "#f59e0b" },
        { text: "$ wget https://", color: "#06b6d4" },
        { text: "$ ip addr show", color: "#a855f7" },
        { text: "$ ping localhost", color: "#22c55e" },
        // Development
        { text: "$ git clone repo", color: "#f97316" },
        { text: "$ docker run -it", color: "#2196f3" },
        { text: "$ vim ~/.config", color: "#22c55e" },
        { text: "$ make && make install", color: "#a855f7" },
        { text: "$ gcc -o output", color: "#06b6d4" },
    ].map((cmd, i) => {
        const angle = (i / 35) * Math.PI * 2;
        const radius = 3 + Math.random() * 2;
        return {
            ...cmd,
            x: Math.cos(angle) * radius,
            y: (Math.random() - 0.5) * 4,
            z: Math.sin(angle) * radius - 4,
            angle,
            radius,
            speed: 0.1 + Math.random() * 0.15,
        };
    }), []);

    useFrame((state) => {
        if (group.current) {
            // Back and forth floating movement (no rotation)
            group.current.children.forEach((child, i) => {
                const p = prompts[i];
                // Float up and down
                child.position.y = p.y + Math.sin(state.clock.elapsedTime * p.speed + i) * 0.4;
                // Drift left and right
                child.position.x = p.x + Math.sin(state.clock.elapsedTime * p.speed * 0.7 + i * 0.5) * 0.3;
            });
        }
    });

    return (
        <group ref={group}>
            {prompts.map((p, i) => (
                <Billboard key={i} position={[p.x, p.y, p.z]}>
                    <Text
                        fontSize={0.1}
                        color={p.color}
                        anchorX="center"
                        anchorY="middle"
                        fillOpacity={0.5}
                    >
                        {p.text}
                    </Text>
                </Billboard>
            ))}
        </group>
    );
}

// Hexagon grid (common in tech/Linux designs)
function HexagonGrid() {
    const mesh = useRef<THREE.LineSegments>(null);

    const geometry = useMemo(() => {
        const points: THREE.Vector3[] = [];
        const size = 0.5;
        const rows = 8;
        const cols = 12;

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                const x = col * size * 1.5 - (cols * size * 0.75);
                const y = row * size * 1.73 - (rows * size * 0.86) + (col % 2 === 0 ? 0 : size * 0.86);

                // Hexagon vertices
                for (let i = 0; i < 6; i++) {
                    const angle1 = (Math.PI / 3) * i;
                    const angle2 = (Math.PI / 3) * ((i + 1) % 6);
                    points.push(
                        new THREE.Vector3(x + Math.cos(angle1) * size * 0.4, y + Math.sin(angle1) * size * 0.4, 0),
                        new THREE.Vector3(x + Math.cos(angle2) * size * 0.4, y + Math.sin(angle2) * size * 0.4, 0)
                    );
                }
            }
        }

        const geo = new THREE.BufferGeometry().setFromPoints(points);
        return geo;
    }, []);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
        }
    });

    return (
        <lineSegments ref={mesh} geometry={geometry} position={[0, 0, -6]}>
            <lineBasicMaterial color="#8b5cf6" transparent opacity={0.15} />
        </lineSegments>
    );
}

// Tux penguin silhouette (simple geometric representation)
function TuxPenguin() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group ref={group} position={[3.5, 0, -3]} scale={0.5}>
            {/* Body */}
            <mesh position={[0, 0, 0]}>
                <sphereGeometry args={[0.8, 32, 32]} />
                <meshStandardMaterial color="#1a1a2e" transparent opacity={0.6} />
            </mesh>
            {/* Belly */}
            <mesh position={[0, 0, 0.4]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#f5f5f5" transparent opacity={0.4} />
            </mesh>
            {/* Head */}
            <mesh position={[0, 0.9, 0]}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color="#1a1a2e" transparent opacity={0.6} />
            </mesh>
            {/* Eyes */}
            <mesh position={[-0.15, 1, 0.35]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>
            <mesh position={[0.15, 1, 0.35]}>
                <sphereGeometry args={[0.1, 16, 16]} />
                <meshStandardMaterial color="#ffffff" transparent opacity={0.8} />
            </mesh>
            {/* Beak */}
            <mesh position={[0, 0.85, 0.5]} rotation={[0.3, 0, 0]}>
                <coneGeometry args={[0.1, 0.2, 8]} />
                <meshStandardMaterial color="#f59e0b" transparent opacity={0.7} />
            </mesh>
        </group>
    );
}

// Floating distro symbols
function DistroSymbols() {
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = state.clock.elapsedTime * 0.05;
        }
    });

    return (
        <group ref={group}>
            {/* NixOS snowflake-like shape */}
            <mesh position={[-3, 1, -4]} rotation={[0, 0, Math.PI / 4]}>
                <torusGeometry args={[0.3, 0.05, 8, 6]} />
                <meshStandardMaterial color="#5277c3" transparent opacity={0.5} wireframe />
            </mesh>

            {/* Arch Linux triangle */}
            <mesh position={[-2, -1.5, -3]}>
                <coneGeometry args={[0.3, 0.5, 3]} />
                <meshStandardMaterial color="#1793d1" transparent opacity={0.4} wireframe />
            </mesh>

            {/* Debian spiral */}
            <mesh position={[2.5, 2, -4]} rotation={[Math.PI / 2, 0, 0]}>
                <torusKnotGeometry args={[0.15, 0.05, 64, 8, 2, 3]} />
                <meshStandardMaterial color="#a80030" transparent opacity={0.4} wireframe />
            </mesh>
        </group>
    );
}

// Floating particles (stars/terminals)
function LinuxParticles({ count = 100 }) {
    const mesh = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Color palette: green (terminal), purple, cyan
        const palette = [
            [0.13, 0.77, 0.36], // Green
            [0.67, 0.33, 0.97], // Purple
            [0.06, 0.71, 0.83], // Cyan
        ];

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 15;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;

            const color = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = color[0];
            colors[i * 3 + 1] = color[1];
            colors[i * 3 + 2] = color[2];
        }

        return { positions, colors };
    }, [count]);

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y = state.clock.elapsedTime * 0.02;
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
                size={0.04}
                vertexColors
                transparent
                opacity={0.7}
                sizeAttenuation
            />
        </points>
    );
}

// Main 3D Scene
function Scene() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} />
            <pointLight position={[-10, -10, -10]} color="#22c55e" intensity={0.3} />

            <HexagonGrid />
            <LinuxParticles count={120} />
            <TuxPenguin />
            <DistroSymbols />
            <FloatingPrompts />
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
