import "./square-background.style.css";

export function SquareBackground() {
  return (
    <div className="hero absolute! w-full z-0">
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </div>
  );
}
