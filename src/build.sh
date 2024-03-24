cd raylib/src
make CUSTOM_CFLAGS=-fPIC
cd ../..

echo bun run index.ts
bun run index.ts
