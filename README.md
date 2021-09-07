# sass_tutorial
Learn sass from The .Net Ninja

## npm install -D gulp gulp-sass gulp
## npm install -g gulp

## SASS Variables
Define variables with '$' then variable names

use '$' with variable name in css property value.

## SASS Partial @import
- sass partial 可以分割 scss 檔案，再將他們透過 `@import` 引入
- 檔案前面加上 _ 代表這個檔案是 partial sass 編譯器不會去編譯此檔案

## Project structure

** -> 找尋資料夾所有階層

## Nested
可以寫內嵌 css 的寫法
會比原本的 css 寫法更加簡潔

## Math
```scss
$base-font-size: 1rem
$font-size-sm: $base-font-size * 0.75
```

除法必須另外處理

1. 引入 sass:math
-> @use 'sass:math'

2. 使用
```scss
border-radius: math.div($base-border-radius, 4);
```

@debug 可印出運算結果或是想要印的訊息