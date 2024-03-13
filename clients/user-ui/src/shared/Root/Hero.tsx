'use client'
import * as THREE from 'three'
import { Canvas,useFrame } from "@react-three/fiber";
import {Mar} from '../../components/Mar'
import {Model} from '../../components/Pizza'
import {Iphone} from '../../components/Iphone'
import {Ketchap} from '../../components/Ketchap'
import { OrbitControls, ScrollControls , Scroll, useScroll } from "@react-three/drei";
import { useRef, useState } from 'react'
import { Object3DEventMap, Vector3 } from 'three'
import { Html } from '@/src/components/html';
import Image from 'next/image';
const Pizza = () => {
  const ref =useRef<THREE.Group<Object3DEventMap>>(null!)
  useFrame((state,delta) => {
  ref.current.rotation.x = 1
 
  ref.current.rotation.y += delta

  })
  return (
    <group ref={ref}>
      <Model />
      <OrbitControls enableZoom={false} />
    </group>
  )
}

const Hero = () => {
  //const [off,setOff] = useState<number>(1)

  const Pizza2 = () => {
    const scroll = useScroll()
    const ref =useRef<THREE.Group<Object3DEventMap>>(null!)
    useFrame((state,delta) => {
      const offset = 1 - scroll.offset
      // if (offset < 0.8) {
      //   setOff(offset)
      // }
      ref.current.rotation.z = 0
      ref.current.rotation.x = 1
      ref.current.rotation.y += delta/3
      state.camera.position.set(offset , offset, offset)
      state.camera.lookAt(0, 0, 0)
     
   
    
    })
    return (
      <group ref={ref}>
        <Mar position={[0,0,0]}/>
        <OrbitControls enableZoom={false} />
      </group>
    )
  }
  const Scene = () => {
     useFrame(({ mouse, camera }) => {
      camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 2, 0.03)
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 2, 0.01)
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
      camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
    })
    return (
      <ScrollControls pages={3}>
         <Scroll>
         
         <Pizza2/>

         </Scroll>

       <Scroll html>
        <Html />
       </Scroll>
       </ScrollControls>
    )
  }
  return (<div>
     <div  className="w-full  h-full bg-black flex items-center z-0 absolute">
     
        <Canvas >
        <directionalLight position={[1,0,0]} intensity={3}/>
        
        <Scene/>
        
      </Canvas>
      <div className="bg-slate-700 absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[10rem] rounded-full blur-[10rem] sm:w-[20rem] dark:bg-[#946263]"></div>
        <div className="bg-slate-600 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div> 
     
    
      </div>
   
      

      <div className={`hidden absolute bottom-0  justify-center w-full`} >
      
       
         
      </div>
      
    
  </div>
   
  );
};

export default Hero;
