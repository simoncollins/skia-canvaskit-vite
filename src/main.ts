import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

// @ts-ignore
import CanvasKitInit from "canvaskit-wasm/bin/canvaskit.js";
import CanvasKitWasm from "canvaskit-wasm/bin/canvaskit.wasm?url";
import { Canvas, CanvasKit } from "canvaskit-wasm";

CanvasKitInit({ locateFile: () => CanvasKitWasm }).then(
  (CanvasKit: CanvasKit) => {
    const surface = CanvasKit.MakeCanvasSurface('foo');
    const paint = new CanvasKit.Paint();
    paint.setColor(CanvasKit.Color4f(0.9, 0, 0, 1.0));
    paint.setStyle(CanvasKit.PaintStyle.Stroke);
    paint.setAntiAlias(true);
    const w = 100; // size of rect
    const h = 60;
    let x = 10; // initial position of top left corner.
    let y = 60;
    let dirX = 1; // box is always moving at a constant speed in one of the four diagonal directions
    let dirY = 1;

    function drawFrame(canvas: Canvas) {
      // boundary check
      if (x < 0 || x+w > 300) {
        dirX *= -1; // reverse x direction when hitting side walls
      }
      if (y < 0 || y+h > 300) {
        dirY *= -1; // reverse y direction when hitting top and bottom walls
      }
      // move
      x += dirX;
      y += dirY;

      canvas.clear(CanvasKit.WHITE);
      const rr = CanvasKit.RRectXY(CanvasKit.LTRBRect(x, y, x+w, y+h), 25, 15);
      canvas.drawRRect(rr, paint);
      surface?.requestAnimationFrame(drawFrame);
    }
    surface?.requestAnimationFrame(drawFrame);
  });

app.innerHTML = `
  <h1>Hello Skia CanvasKit on Vite!</h1>
  <canvas id=foo width=300 height=300></canvas>
`

