import React, { useRef, useEffect } from "react";
import "./Tilt.css";
import VanillaTilt from "vanilla-tilt";

interface HTMLVanillaTiltElement extends HTMLDivElement {
  vanillaTilt: VanillaTilt;
}

export const Tilt: React.FC = props => {
  const tiltRef = useRef<HTMLVanillaTiltElement>(null);
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
      });
    }
    return () => {
      if (tiltRef.current) {
        tiltRef.current.vanillaTilt.destroy();
      }
    };
  }, []);
  return (
    <div ref={tiltRef} className="tilt-root">
      <div className="tilt-child">{props.children}</div>
    </div>
  );
};

export const Usage = () => (
  <div className="totally-centered">
    <Tilt>
      <div className="totally-centered">vanilla-tilt</div>
    </Tilt>
  </div>
);
