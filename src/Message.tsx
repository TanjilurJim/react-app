//function based component

//PascalCasing for component names, when react component is created, it should be in PascalCasing
function Message() {
  // jsx syntax, javascript xml, html like syntax in react, it is not html, it is jsx
  const name = "Jim";
  if (name) return <h1> Hello World {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message; // export default is used to export a single component, it can be imported in any file with any name, but only one default export is allowed in a file
