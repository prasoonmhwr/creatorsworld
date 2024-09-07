'use client'
import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
import { useGLTF, useHelper } from "@react-three/drei";

export default function Experience(props :any) {
  const r = document.querySelector(':root');
  const rs = getComputedStyle(r!);
  const threeModelColorType = rs.getPropertyValue('--three-model-mode').trim().split('"')[1];
  const threeModelPlaceHolder = rs.getPropertyValue('--special-font').trim();
  const { scene } = useGLTF("./model/StageDark.glb");
  const lightRef = useRef()
  
  useEffect(()=>{
    scene.children.forEach((child)=>  {child.receiveShadow = true , child.castShadow=true})
  },[scene])
  return (
    <>
    <directionalLight   castShadow position={ [-10, 10, -1] } intensity={ 4.0 } rotation={[0,Math.PI/2,0]} shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.001} />
    <directionalLight   castShadow position={ [20, 10, 1] } intensity={ 4.0 } rotation={[0,-Math.PI/2,0]} shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.001}/>
    <pointLight   intensity={100.0} position={ [6, 2.5, -3.5] } color={'#FFD700'}/>   
    <pointLight  ref={lightRef} intensity={100.0} position={ [-5.9, 2.0, -3.1] } color={'#FFD700'}/>

    <Suspense
      fallback={
        <mesh position-y={-0.8} scale={[2, 3, 2]}>
          <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
          <meshBasicMaterial wireframe color={threeModelPlaceHolder} />
        </mesh>
      }
    >
      {scene.children && <group {...props} dispose={null} position={[0, -1.3, 0]} scale={[0.3,0.28,0.28]} rotation={[0,Math.PI + (Math.PI/2)+0.02,0]}>
        <primitive object={scene} />
        </group>}
    </Suspense>
    </>
  );
}
useGLTF.preload("./Stage5.glb");
