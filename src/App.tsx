import Message from "./Message"; // import the Message component from Message.tsx file, it is a default export, so we can import it with any name
function App() {
  return (
    <div>
      <Message />
    </div>
  );
}

export default App; // export default is used to export a single component, it can be imported in any file with any name, but only one default export is allowed in a file
