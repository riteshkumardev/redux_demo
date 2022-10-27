import { useSelector } from "react-redux";
import "./App.css";
import Form from "./component/Form";
import Navbar from "./component/Navbar";
import Table from "./component/Table";

function App() {
  const { isEdit, changepath } = useSelector((el) => el);
  return (
    <div>
      <Navbar />
      {isEdit || changepath ? <Form /> : <Table />}
    </div>
  );
}

export default App;
