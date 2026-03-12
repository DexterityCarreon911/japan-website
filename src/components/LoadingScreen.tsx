import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Code, Sparkles, BookOpen, Shield } from 'lucide-react';

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    // Three.js scene setup
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Create animated particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle material with Japanese red color
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xdc2626, // Japanese red
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Create rotating torus knot
    const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x991b1b,
      emissive: 0xdc2626,
      emissiveIntensity: 0.2,
      shininess: 100
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xdc2626, 1);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xffffff, 0.5);
    pointLight2.position.set(-2, -3, -4);
    scene.add(pointLight2);

    camera.position.z = 5;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      // Rotate torus knot
      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.005;

      // Float animation
      torusKnot.position.y = Math.sin(Date.now() * 0.001) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Loading simulation
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setShowCredits(true), 500);
          setTimeout(() => onComplete(), 4000);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-dark-navy via-charcoal to-black z-50 flex items-center justify-center">
      {/* Three.js Background */}
      <div ref={mountRef} className="absolute inset-0" />

      {/* Content Overlay */}
      <div className="relative z-10 text-center">
        {/* Loading Phase */}
        {!showCredits && (
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-japanese-red rounded-full mb-6 pulse-red">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Japan Knowledge Library
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Initializing experience...
            </p>

            {/* Loading Bar */}
            <div className="w-64 mx-auto">
              <div className="bg-gray-800 rounded-full h-2 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-japanese-red to-red-600 transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="text-gray-400 text-sm mt-2">{loadingProgress}%</p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Powered by Three.js</span>
            </div>
          </div>
        )}

        {/* Credits Phase */}
        {showCredits && (
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-japanese-red rounded-full mb-6">
              <Code className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4">
              Credits
            </h2>
            
            <div className="space-y-6 max-w-md">
              <div className="bg-dark-navy/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-japanese-red mb-2">
                  Dexter C. Carrreon
                </h3>
                <p className="text-gray-300 mb-4">
                  Creator & Developer
                </p>
                <div className="space-y-2 text-left text-gray-400 text-sm">
                  <p>• Three.js Implementation</p>
                  <p>• Universal Animations</p>
                  <p>• Smooth Transitions</p>
                  <p>• WebGL Integration</p>
                </div>
              </div>

              <div className="bg-dark-navy/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Three.js</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">WebGL</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">React</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">TypeScript</span>
                  <span className="bg-gray-800 px-3 py-1 rounded-full text-xs">Tailwind CSS</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>Academic Project - BS Information Technology</span>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
