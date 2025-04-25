// import { Fragment } from "react";
function ListGroup() {
  return (
    // <h1></h1> in react a component can not return more than one element, so we can use a fragment to wrap the elements, or we can use a div to wrap the elements, but it is not recommended to use divs as they add extra nodes to the DOM, so we use fragments
    <>
      <ul className="list-group">
        <li className="list-group-item">An item</li>
        <li className="list-group-item">A second item</li>
        <li className="list-group-item">A third item</li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul>
    </>
  );
}
export default ListGroup; // export default is used to export a single component, it can be imported in any file with any name, but only one default export is allowed in a file
