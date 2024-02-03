import { useEffect, useRef } from "react";

const Canvas = (props) => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    canvas.width = 1280;
    canvas.height = 1280;
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = props.product.src;
    img.onload = () => {
      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = canvas.width / 2 - (img.width / 2) * scale;
      const y = canvas.height / 2 - (img.height / 2) * scale;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
  }, [props.product]);

  return <canvas ref={ref} {...props} />;
};

export default Canvas;
