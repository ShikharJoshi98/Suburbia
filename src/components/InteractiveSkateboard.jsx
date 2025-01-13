import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Skateboard } from './Skateboard'

const InteractiveSkateboard = () => {
  return (
    <div className='absolute inset-0 z-10 flex items-center   '>
      <Canvas className=''
       camera={{position: [1.5,1,1.4],fov:50}}
      >
        <Suspense>
            <Scene/>
         </Suspense>
       </Canvas>
    </div>
  )
}

function Scene() {
  return (
    <group>
      <OrbitControls/>
      <Environment files={"/src/public/hdr/warehouse-256.hdr"}/>      
      <Skateboard />
      <ContactShadows opacity={0.6} position={[0,-0.08,0]}/>
    </group>
  )
}

export default InteractiveSkateboard