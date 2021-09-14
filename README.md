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

## mixins & include
mixins are a way for us to group together a bunch of css properties and values so that it can be included in many different css rules.

mixins 可以讓具有相同屬性的部份抽離出來

並且在有共用的 css selector 再用 include 的方式將其引入

例如我可能有很多 button 的屬性都是一樣的，
就可以將一樣的部分出離出來，變成 mixin 

```scss
@mixin btn() {
	text-decoration: none;
	cursor: pointer;
	display: inline-block;
	border: 0;
	padding: $base-padding $base-padding * 2;
	border-radius: $base-border-radius;
}
```

上面就是之後再要使用的地方

```scss
.btn {
	@include btn()
}
```

這樣即可


注意到 btn 類似 function ，他可以帶入參數
```scss
@mixin btn($bg-color) {
	text-decoration: none;
	cursor: pointer;
	display: inline-block;
	border: 0;
	padding: $base-padding $base-padding * 2;
	border-radius: $base-border-radius;
	background-color: $bg-color;
}
```

mixin 還可以讓函式的參數具有預設值

```scss
@mixin btn($bg-color: #e2e2e2) {
	text-decoration: none;
	cursor: pointer;
	display: inline-block;
	border: 0;
	padding: $base-padding $base-padding * 2;
	border-radius: $base-border-radius;
	background-color: $bg-color;
}
```

引入
```scss
.btn {
	@include btn;  // 會直接使用 #e2e2e2 的預設值
}
```

## functions
Function 與 mixin 很像，但是不同的是他只會`回傳單一的值`

```scss
@function light-comp($color) {
	$complement: complement($color);  // 變數定義
	$light-complement: lighten($complement, 30%);

	@return $light-complement;
}
```

使用 `@function` 定義 function，並使用 `@return` 將值回傳


## utilities function
- margin-4
- padding-left-3
- opacity-40

建立一些常用的輔助屬性