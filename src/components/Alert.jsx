// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import errorIcon from "../assets/error-icon.png";
import warningIcon from "../assets/warning-icon.png";
import infoIcon from "../assets/info-icon.png";
import successIcon from "../assets/success-icon.png";

function Alert(props) {
  const textDict = {
    error: { src: errorIcon, color: "hsla(360, 80%, 88%, 1)" },
    warning: {
      src: warningIcon,
      color: "hsla(22, 80%, 88%, 1)",
    },
    info: { src: infoIcon, color: "hsla(43, 80%, 88%, 1)" },
    success: {
      src: successIcon,
      color: "hsla(119, 74%, 89%, 1)",
    },
  };
  return (
    <div
      css={css`
        width: 650px;
        height: 76px;
        border-radius: 10px;
        display: flex;
        box-sizing: border-box;
        background-color: ${textDict[props.text]?.color ??
        textDict.error.color};
        padding: 26px, 20px, 26px, 20px;
        gap: 15px;
        item-alignment: center;
        margin-top: 30px;
      `}
    >
      <div
        css={css`
          margin-top: 26px;
          margin-left: 20px;
        `}
      >
        <img
          src={textDict[props.text]?.src ?? textDict.error.src}
          alt={`${props.text} icon`}
          css={css`
            width: 24px;
            height: 24px;
          `}
        />
      </div>

      <h3
        css={css`
          color: hsla(0, 0%, 27%, 1);
          font-family: Kanit;
          font-size: 20px;
          font-weight: 700;
          line-height: 29.9px;
          text-align: left;
        `}
      >
        This is {props.text} box
      </h3>
    </div>
  );
}

export default Alert;
