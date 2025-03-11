console.log("App.js hii");

const titles = {
  title: "lidia",
  subtitle: "",
  options: [],
};

const namee = "lidia maria";
const getName = (name) => name.split(" ")[0];
const template = (
  <div>
    <h1>{titles.title}</h1>
    {titles.subtitle && <p>{titles.subtitle}</p>}
    {titles.options.length > 0 ? (
      <p>Here are your options</p>
    ) : (
      <p>no options</p>
    )}
    {getName("lidia maria")}
  </div>
);

const user = {
  name: "lidia",
  age: 20,
  location: "",
};

const getLocation = (location) => {
  if (location) {
    return <p>location: {location}</p>;
  }
  return <p>location not found</p>;
};

const addOne = () => {
  count++;
  renderCounterApp();
};

const minusOne = () => {
  count--;
  renderCounterApp();
};

const reset = () => {
  count = 0;
  renderCounterApp();
};

let count = 0;

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template2 = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(template2, appRoot);
};

renderCounterApp();
