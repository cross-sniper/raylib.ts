import { RED } from "./colors";
import { KeyboardKey } from "./keys";
import { raylib } from "./raylib";

// Initial position and speed of the rectangle
let x: number = 400;
let y: number = 300;
const speed: number = 5;

// Initialize the window
raylib.initWindow(800, 600, "Simple Game");

// Set the target frames per second
raylib.setTargetFPS(60);

// Main game loop
while (!raylib.windowShouldClose()) {
    // Begin drawing
    raylib.beginDrawing();

    // Clear the background
    raylib.clearBackground({ r: 0, g: 0, b: 0, a: 255 });

    // Check for key presses and update the position of the rectangle
    if (raylib.isKeyDown(KeyboardKey.KEY_A)) {
        x -= speed;
    }
    if (raylib.isKeyDown(KeyboardKey.KEY_D)) {
        x += speed;
    }
    if (raylib.isKeyDown(KeyboardKey.KEY_W)) {
        y -= speed;
    }
    if (raylib.isKeyDown(KeyboardKey.KEY_S)) {
        y += speed;
    }

    // Draw the rectangle at the updated position
    raylib.drawRect(x, y, 20, 20, RED);

    // End drawing
    raylib.endDrawing();
}

// Close the window
raylib.closeWindow();
