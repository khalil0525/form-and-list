import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserForm />
      <UserList />
      {/* Conditionally render the modal based on the validation */}
    </div>
  );
}

export default App;
