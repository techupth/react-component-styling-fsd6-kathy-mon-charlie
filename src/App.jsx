import "./App.css";
import { Button } from "./components/Button.jsx";
import { Alert } from "./components/Alert.jsx";


function App() {

  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button color="#074ee8" text="Primary" />
        <Button color="#07a4e8" text="Secoundary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert colors="#F9C8C8" name="This is error alert box"  />
        <Alert colors="#F9D9C8" name="This is warning alert box"  />
        <Alert colors="#F9EBC8" name="This is info alert box"  />
        <Alert colors="#CEF7CD" name="This is success alert box"  />
      </div>
    </div>
  );
}

export default App;
