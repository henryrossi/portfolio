import * as React from "react";
import Tuna from "./tuna.png";

export default function Pixels() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current == null) {
      return;
    }    
    const canvas = ref.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    if (ctx == null) {
      return;
    }

    const image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    image.src = Tuna;
  }, []);

  return <canvas ref={ref} width="160" height="144"></canvas>;
}