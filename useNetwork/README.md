# @nooks/use-network

React Hook to listen when the user goes online or offline.

## Installation

#### yarn

`yarn add @nooks/use-network`

#### npm

`npm i @nooks/use-network`

## Usage

```js
import React from "react";
import useNetwork from "@nooks/use-network";

function App() {
  const onNetworkChange = isOnline =>
    console.log(isOnline ? "We are back online" : "We just got offline");
  const isOnline = useNetwork(onNetworkChange);
  return <h1>{isOnline ? "We are online" : "We are offline"}</h1>;
}
```

### Arguments

| Argument        | Type     | Description                                           | Arguments          | Required |
| --------------- | -------- | ----------------------------------------------------- | ------------------ | -------- |
| onNetworkChange | function | Function to be called when the network status changes | isOnline : Boolean | no       |

### Return

| Return value | Type    | Description                                         | Default value |
| ------------ | ------- | --------------------------------------------------- | ------------- |
| isOnline     | Boolean | A boolean representing if the user is online or not | true          |
