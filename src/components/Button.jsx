// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

function Button(props) {
  const colorDict = {
    Primary: "hsla(221, 94%, 47%, 1)",
    Secondary: "hsla(198, 94%, 47%, 1)",
    Error: "hsla(2, 68%, 60%, 1)",
    Success: "hsla(166, 65%, 43%, 1)",
  };
  return (
    <button
      css={css`
        box-sizing: border-box;
        width: 171.19px;
        height: 50px;
        border-radius: 4px;
        padding: 0px, 16px, 0px, 16px;

        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: hsla(0, 0%, 100%, 1);
        background-color: ${colorDict[props.type] ?? "none"};
      `}
    >
      Large
    </button>
  );
}
export default Button;
