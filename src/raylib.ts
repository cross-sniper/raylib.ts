import { dlopen, FFIType, suffix} from "bun:ffi";
import {$} from "bun";
import {Color} from "./colors";
// `suffix` is either "dylib", "so", or "dll" depending on the platform
// you don't have to use "suffix", it's just there for convenience
await $`g++ main.cpp -o libmain.${suffix} -L raylib/src -I raylib/src -lraylib -Os -O3 -lc -shared -fPIC`
const path = `libmain.${suffix}`;

// works out of the box
const {
  symbols: {
    initWindow,
    closeWindow,
    windowShouldClose,
    beginDrawing,
    endDrawing,
    setTargetFPS,
    isKeyDown
  },
} = dlopen(
  path, // a library name or file path
  {
    initWindow: {
      args: ["int","int","char"],
      returns: FFIType.void // void * | on the lib it returns NULL
    },
    closeWindow: {
      args: [],
      returns: FFIType.void // void * | on the lib it returns NULL
    },
    beginDrawing: {
      args: [],
      returns: FFIType.void // void * | on the lib it returns NULL
    },
    endDrawing: {
      args: [],
      returns: FFIType.void // void * | on the lib it returns NULL
    },
    windowShouldClose: {
      args: [],
      returns: FFIType.bool
    },
    setTargetFPS:{
    	args:["int"],
    	returns: FFIType.void
    },
    isKeyDown:{
      args:["int"],
      returns: FFIType.bool
    },

  },
);

// these functions require a wrapper
const {
  symbols: {
    _bg_clear,
    drawRectangle
  },
} = dlopen(path, {
    _bg_clear:
    {
      args:["int","int","int","int"],
      returns: FFIType.void
    },
    drawRectangle:
    {
      args:["int","int","int","int","int","int","int","int"],
      returns: FFIType.void
    }
})

function clearBackground(color: Color){
  _bg_clear(color.r, color.g, color.b, color.a);
}
function drawRect(x:number, y:number, w:number, h:number,color: Color){
  drawRectangle(x,y,w,h,color.r, color.g, color.b, color.a);
}

export const raylib = {
    initWindow,
    closeWindow,
    windowShouldClose,
    beginDrawing,
    endDrawing,
    clearBackground,
    drawRect,
    setTargetFPS,
    isKeyDown
}
