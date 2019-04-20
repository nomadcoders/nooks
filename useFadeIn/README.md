# @nooks/use-fade-in

React Hook to fade in any element.

## Installation

#### yarn

`yarn add @nooks/use-fade-in`

#### npm

`npm i @nooks/use-fade-in`

## Usage

```js
import React from "react";
import useFadeIn from "@nooks/use-fade-in";

function App() {
  const fadeIn = useFadeIn(5, 10);
  return <h1 {...fadeIn}>This will fade in.</h1>;
}
```

### Arguments

| Argument | Type   | Description                                     | Required | Default value |
| -------- | ------ | ----------------------------------------------- | -------- | ------------- |
| duration | number | Sets the duration of the transition. In seconds | no       | 1             |
| delay    | number | Delays of transition's start. In seconds        | no       | 0             |

### Return

`useScroll` returns an object containing the following:

| Name  | Type      | Description                                                               |
| ----- | --------- | ------------------------------------------------------------------------- |
| ref   | React Ref | A ref created to fadeIn the element                                       |
| style | Object    | Style object containing `{opacity:0}` to give to the element as a default |

It's recommended to just spread the returned object on the element as shown in the Usage section above.
