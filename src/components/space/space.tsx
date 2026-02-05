import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import { Earth } from '../space/earth'
import { SkyBox } from '../space/skyBox'

// Component to handle autoRotate logic inside the Canvas
function AutoRotateController() {
  const { controls } = useThree()
  const [autoRotate, setAutoRotate] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isInteractingRef = useRef<boolean>(false)

  useEffect(() => {
    const orbitControls = controls as any
    if (!orbitControls) return

    const handleInteractionStart = () => {
      if (!isInteractingRef.current) {
        isInteractingRef.current = true

        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
          timeoutRef.current = null
        }
        // Turn off autoRotate when user starts interacting
        setAutoRotate(false)
      }
    }

    const handleInteractionEnd = () => {
      if (isInteractingRef.current) {
        isInteractingRef.current = false

        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
        // Set timeout to re-enable autoRotate after 8 seconds
        timeoutRef.current = setTimeout(() => {
          setAutoRotate(true)
        }, 8000)
      }
    }

    // Try to add event listeners to the controls instance
    const controlsInstance = orbitControls.instance || orbitControls
    if (controlsInstance && controlsInstance.addEventListener) {
      controlsInstance.addEventListener('start', handleInteractionStart)
      controlsInstance.addEventListener('end', handleInteractionEnd)
    }

    // Also listen to DOM events on the canvas
    const canvas = document.querySelector('canvas')

    if (canvas) {
      let isMouseDown = false

      const handleMouseDown = () => {
        isMouseDown = true
        handleInteractionStart()
      }

      const handleMouseUp = () => {
        isMouseDown = false
        handleInteractionEnd()
      }

      const handleMouseMove = () => {
        if (isMouseDown) {
          handleInteractionStart()
        }
      }

      const handleWheel = () => {
        handleInteractionStart()
        // Reset timeout on each wheel event
        if (wheelTimeoutRef.current) {
          clearTimeout(wheelTimeoutRef.current)
        }
        wheelTimeoutRef.current = setTimeout(() => {
          handleInteractionEnd()
        }, 100) // Small delay to detect end of wheel interaction
      }

      canvas.addEventListener('mousedown', handleMouseDown, { passive: true })
      canvas.addEventListener('mouseup', handleMouseUp, { passive: true })
      canvas.addEventListener('mousemove', handleMouseMove, { passive: true })
      canvas.addEventListener('touchstart', handleInteractionStart, { passive: true })
      canvas.addEventListener('touchend', handleInteractionEnd, { passive: true })
      canvas.addEventListener('wheel', handleWheel, { passive: true })

      // Cleanup function
      return () => {
        canvas.removeEventListener('mousedown', handleMouseDown)
        canvas.removeEventListener('mouseup', handleMouseUp)
        canvas.removeEventListener('mousemove', handleMouseMove)
        canvas.removeEventListener('touchstart', handleInteractionStart)
        canvas.removeEventListener('touchend', handleInteractionEnd)
        canvas.removeEventListener('wheel', handleWheel)
        if (wheelTimeoutRef.current) {
          clearTimeout(wheelTimeoutRef.current)
        }
        if (controlsInstance && controlsInstance.removeEventListener) {
          controlsInstance.removeEventListener('start', handleInteractionStart)
          controlsInstance.removeEventListener('end', handleInteractionEnd)
        }
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current)
        }
      }
    }

    // Cleanup if no canvas found
    return () => {
      if (controlsInstance && controlsInstance.removeEventListener) {
        controlsInstance.removeEventListener('start', handleInteractionStart)
        controlsInstance.removeEventListener('end', handleInteractionEnd)
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [controls])

  // Update the controls autoRotate property
  useFrame(() => {
    const orbitControls = controls as any
    if (!orbitControls) return

    const controlsInstance = orbitControls.instance || orbitControls
    if (controlsInstance && controlsInstance.autoRotate !== autoRotate) {
      controlsInstance.autoRotate = autoRotate
    }
  })

  return null
}

export default function SpaceScene() {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <OrbitControls
        makeDefault
        enablePan
        enableZoom
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={1.25}
        maxDistance={5}
        enableDamping
        dampingFactor={0.05}
      />
      <AutoRotateController />

      <SkyBox />

      <ambientLight intensity={5.5} />
      {/* <directionalLight lookAt={[0, 0, 0]} position={[0, 5, 5]} intensity={8} /> */}

      <mesh position={[15, 5, 5]}>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial color="#00ff00" />
      </mesh>

      <Earth />
    </Canvas>
  )
}
