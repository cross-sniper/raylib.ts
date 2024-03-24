#include <cstddef>
namespace rlib {
#include "raylib.h"
}
typedef unsigned char uc;
#define COLOR int r, int g, int b, int a
extern "C" void *initWindow(int width, int heigth, char *title) {
  rlib::InitWindow(width, heigth, title);
  return NULL;
}
extern "C" bool windowShouldClose() { return rlib::WindowShouldClose(); }
extern "C" void *setTargetFPS(int fps) {
  rlib::SetTargetFPS(fps);
  return NULL;
}
extern "C" void *closeWindow() {
  rlib::CloseWindow();
  return NULL;
}

extern "C" void *beginDrawing() {
  rlib::BeginDrawing();
  return NULL;
}

extern "C" void *endDrawing() {
  rlib::EndDrawing();
  return NULL;
}
extern "C" void *_bg_clear(COLOR) {
  rlib::Color c = {(uc)r, (uc)g, (uc)b, (uc)a};
  rlib::ClearBackground(c);
  return NULL;
}

extern "C" void *drawRectangle(int x, int y, int width, int height, COLOR) {
  rlib::Color c = {(uc)r, (uc)g, (uc)b, (uc)a};
  rlib::DrawRectangle(x, y, width, height, c);
  return NULL;
}
extern "C" bool isKeyDown(int key){
  return rlib::IsKeyDown(key);
}