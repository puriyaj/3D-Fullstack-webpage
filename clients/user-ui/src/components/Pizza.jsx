
'use client'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/pizza.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.None} />
        <mesh geometry={nodes.Object_7.geometry} material={materials['None_BaseDiffuse.png']} />
        <mesh geometry={nodes.Object_8.geometry} material={materials['None_BaseDiffuse.png']} />
      </group>
    </group>
  )
}

useGLTF.preload('/pizza.gltf')
