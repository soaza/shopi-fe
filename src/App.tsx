import "./App.css";
import "antd/dist/reset.css";
import { ItemGallery } from "./components/ItemGallery";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <a href="/login">
        <Button>Login</Button>
      </a>
      <a href="/signup">
        <Button>Signup</Button>
      </a>

      <div style={{ fontSize: 30 }}>Shopi</div>
      <ItemGallery />
    </div>
  );
}

export default App;
