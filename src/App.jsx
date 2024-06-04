/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const buttonList = ["Primary", "Secondary", "Error", "Success"];
  const alertList = ["error", "warning", "info", "success"];
  return (
    <div className="App">
      <div
        className="button-components-section"
        css={css`
          width: 331.11px;
          font-family: "Sarabun", sans-serif;
        `}
      >
        {/* Render ตัว Button 2 แบบ */}
        {buttonList.map((item, index) => (
          <div
            key={index}
            css={css`
              margin-bottom: 40px;
              display: flex;
              justify-content: space-between;
            `}
          >
            <span>{item}</span>
            <Button type={item} key={index} />
          </div>
        ))}
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        {alertList.map((item, index) => (
          <Alert text={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
