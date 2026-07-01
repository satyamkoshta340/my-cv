// Subtle terminal atmosphere: faint scanlines + drifting glow + vignette.
function AnimatedBackground() {
  return (
    <div className="bg-fx" aria-hidden="true">
      <div className="bg-glow bg-glow--green" />
      <div className="bg-glow bg-glow--cyan" />
      <div className="bg-scanlines" />
      <div className="bg-vignette" />
    </div>
  );
}

export default AnimatedBackground;
