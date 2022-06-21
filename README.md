# skia-canvaskit-vite
Starter repo for using Skia CanvasKit with [Vite](https://vitejs.dev/) as the bundler. I had issues getting this working so hopefully this will help you get past them quicker.

Credit goes to [@chientrm](https://github.com/chientrm) for finding [a way that works](https://github.com/vitejs/vite/discussions/7901#discussioncomment-2706743). 

Hopefully the integration story will get better in future builds of CanvasKit.

This repo just demonstrates loading CanvasKit with Vite as the bundler and then running the [simple animation loop demo](https://skia.org/docs/user/modules/quickstart/#basic-draw-loop).

## Usage

1. `npm ci`
2. `npm run dev` to start [development server](http://localhost:3000)
3. `npm run build` to build for production
4. `npm run preview` to start [preview server](http://localhost:4173) for production build
