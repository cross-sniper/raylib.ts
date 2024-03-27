# raylib.ts

raylib.ts aims to allow you to use typescript(bun) + raylib

| FFIType   | C Type       | Aliases               |
|-----------|--------------|-----------------------|
| cstring   | char*        |                       |
| function  | (void*)(*)() | fn, callback         |
| ptr       | void*        | pointer, void*, char*|
| i8        | int8_t       | int8_t                |
| i16       | int16_t      | int16_t               |
| i32       | int32_t      | int32_t, int          |
| i64       | int64_t      | int64_t               |
| i64_fast  | int64_t      |                       |
| u8        | uint8_t      | uint8_t               |
| u16       | uint16_t     | uint16_t              |
| u32       | uint32_t     | uint32_t              |
| u64       | uint64_t     | uint64_t              |
| u64_fast  | uint64_t     |                       |
| f32       | float        | float                 |
| f64       | double       | double                |
| bool      | bool         |                       |
| char      | char         |                       |
