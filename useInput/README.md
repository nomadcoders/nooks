# Usage

```js
import useInput from "@nooks/use-input"

const App = () => {
  const noAt = value => !value.includes("@");
  const name = useInput("Mr. ", noAt);
  return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" {...name} />
    </div>
  );
};
```
