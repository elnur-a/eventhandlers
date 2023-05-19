import MyButton from "./components/myButton/MyButton";
import CustomForm from "./components/customForm/CustomForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>My app</h1>
      <CustomForm />
      {/* <MyButton name="Get Cash Here" type="large" /> */}
    </div>
  );
}

export default App;
