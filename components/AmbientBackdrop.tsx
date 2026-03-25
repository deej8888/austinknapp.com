import type { CSSProperties } from "react";

type SnowParticleStyle = CSSProperties &
  Record<"--drift-start" | "--drift-end" | "--flake-opacity", string>;

const snowParticles: SnowParticleStyle[] = Array.from(
  { length: 22 },
  (_, index) => {
    const size = 2 + (index % 4);

    return {
      left: `${(index * 8.7 + (index % 5) * 11) % 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      filter: `blur(${(index % 3) * 0.35}px)`,
      animationDuration: `${14 + (index % 7) * 2.6}s`,
      animationDelay: `${-index * 1.7}s`,
      "--drift-start": `${-24 + (index % 6) * 7}px`,
      "--drift-end": `${18 - (index % 5) * 6}px`,
      "--flake-opacity": `${0.18 + (index % 6) * 0.08}`,
    };
  },
);

export default function AmbientBackdrop() {
  return (
    <div aria-hidden className="ambient-stage">
      <div className="ambient-orb ambient-orb-one" />
      <div className="ambient-orb ambient-orb-two" />
      <div className="ambient-orb ambient-orb-three" />

      <div className="ambient-snow">
        {snowParticles.map((style, index) => (
          <span key={index} className="snow-particle" style={style} />
        ))}
      </div>
    </div>
  );
}
