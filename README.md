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

## Maps
Maps -> Key value pairs
```scss
$colors : (
	"primary": $primary,
	
)
```

- map-get    取得值
- map-has-key  是否有 key
- map-remove  移除
- map-merge  合併

## loop
使用 loop 主要有兩個關鍵字 `@each` 與 `@for`

@each 主要使用於 map 的物件

```scss
@each $key, $val in $xxx {
	// css rule
}
```

for 的話就是使用於迭代
```scss
@for $i from 1 through 9 {
	.text-#{$key}-dark-#{$i} {
		// css rule
	}
}
```
## Conditional (@if)
```scss
@if ( 10>  5) {
	.test-if {
		color: black;
	}
} @else {
	.test-if-2 {
		color: white;
	}
}
```

## Parent Selector
The parent selector, `&` is a special selector invented by Sass that's used in `nested selectors` to refer to the outer selector.

```scss
.alert {
	&:hover {
		font-weight: bold;
	}
}
```

在巢狀規則中使用，將外面的 selector 透過 & 串接起來

```css
.btn { ... }

.btn_astralweb { ... }
```

改為 

```scss
.btn {
	&_astralweb {
		...
	}
}
```