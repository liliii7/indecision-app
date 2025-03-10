console.log("App.js hii");

const titles = {
    title: 'lidia',
    subtitle: '',
    options: []
}

const namee = 'lidia maria'
const getName = (name) => name.split(' ')[0];
const template = (
  <div>
    <h1>{titles.title}</h1>
    {titles.subtitle && <p>{titles.subtitle}</p>}
    {titles.options.length > 0 ? <p>Here are your options</p> : <p>no options</p>}
    {getName("lidia maria")}
  </div>
);

const user = {
    name: 'lidia',
    age: 20,
    location: ''
}

const getLocation = (location) => {
    if(location) {
        return <p>location: {location}</p>
    }
    return <p>location not found</p>
}

const template2 = (
  <div>
    <h1>{user.name}</h1>
    <p>age: {user.age}</p>
    <p>{getLocation(user.location)}</p>
  </div>
);

const appRoot = document.getElementById("app");


ReactDOM.render(template, appRoot);
