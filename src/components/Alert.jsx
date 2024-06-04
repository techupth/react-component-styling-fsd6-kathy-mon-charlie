// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import icon1 from "../assets/image/alert-circle.png";

export function Alert(props) {
    return(
        <div
            css={css`
                width: 650px;
                height: 76px;
                background-color: ${props.colors};
                font-size: 20px;
                align-items: center;
                display: flex;
                border-radius: 10px;
                margin: 10px;
                color: #444444;
                padding-left: 20px;
                `}
                >
                <div 
                    css={css`
                       margin-right: 20px;`}
                       >
                    {props.logo}
                    {props.name}
                </div>
                </div>
           
    )
}
