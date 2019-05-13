import React, { useRef, useEffect } from "react";
import "./Tilt.css";
import VanillaTilt from "vanilla-tilt";

interface HTMLVanillaTiltElement extends HTMLDivElement {
  vanillaTilt: VanillaTilt;
}

export const Tilt: React.FC = props => {
  const tiltRef = useRef<HTMLVanillaTiltElement>(null);
  useEffect(() => {
    const tiltRefCurrent = tiltRef.current;
    if (tiltRefCurrent) {
      VanillaTilt.init(tiltRefCurrent, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5
      });
    }
    return () => {
      if (tiltRefCurrent) {
        tiltRefCurrent.vanillaTilt.destroy();
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
