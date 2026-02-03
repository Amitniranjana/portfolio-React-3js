import { useRef, useEffect } from 'react';
import gsap from 'gsap';

// Self-contained target built with primitives to avoid remote model fetch failures.
const Target = ({ position = [0, 0, 0], scale = 1, rotation = [0, Math.PI / 5, 0] }) => {
  const ref = useRef();
  const tweenRef = useRef();

  useEffect(() => {
    if (!ref.current) return;

    try {
      tweenRef.current = gsap.to(ref.current.position, {
        y: '+=0.35',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Target animation failed', err);
    }

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  // A clean, professional-looking target constructed from torus rings and a stand
  return (
    <group ref={ref} position={position} rotation={rotation} scale={scale}>
      {/* pole / stand */}
      <mesh position={[0, -1.25, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2.5, 16]} />
        <meshStandardMaterial color="#2b2b2b" metalness={0.6} roughness={0.4} />
      </mesh>

      {/* rings (outer to inner) */}
      <mesh position={[0, 0.5, 0.0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.75, 0.12, 16, 64]} />
        <meshStandardMaterial color="#e63946" metalness={0.2} roughness={0.6} />
      </mesh>

      <mesh position={[0, 0.5, 0.01]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.45, 0.11, 12, 64]} />
        <meshStandardMaterial color="#f1faee" metalness={0.1} roughness={0.5} />
      </mesh>

      <mesh position={[0, 0.5, 0.02]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.2, 0.1, 8, 64]} />
        <meshStandardMaterial color="#ffd166" metalness={0.1} roughness={0.5} />
      </mesh>

      {/* small center dot */}
      <mesh position={[0, 0.5, 0.03]}>
        <sphereGeometry args={[0.07, 16, 16]} />
        <meshStandardMaterial color="#1b1b1b" metalness={0.3} roughness={0.4} />
      </mesh>
    </group>
  );
};

export default Target;
