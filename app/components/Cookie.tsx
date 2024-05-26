import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import { useRef } from "react";

import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

import { a } from "@react-spring/three";
import Spline from "@splinetool/react-spline";

function Cookie(props: { cookies: number; setCookies: Function }) {
  const cookieRef = useRef(0);
  function handleClick(e: any): void {
    if (e.target.name === "cookie") {
      cookieRef.current = cookieRef.current + 1;
      props.setCookies(cookieRef.current);
    }
  }
  // function onLoad(spline: any) {
  //   const obj = spline.findObjectByName("cookie");
  //   cookieRef.current = obj;
  // }

  return (
    <Spline
      scene="https://prod.spline.design/kU6Tapc5PaWam2dt/scene.splinecode"
      onMouseDown={handleClick}
    />
  );
}

export default Cookie;
