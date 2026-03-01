import "./slider-thumb.style.css";

export interface SliderThumbProps {
  inClass?: string;
  width?: string;
  position?: string;
}

export function SliderThumb({ inClass, width, position }: SliderThumbProps) {
  return (
    <div
      style={{ width }}
      className={`aspect-square rounded-[62%_47%_82%_35%/45%_45%_80%_66%] blob-animate blur-lg ${inClass} ${position}`}
    ></div>
  );
}
