// Start coding here
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export function Button(props) {
    return(
        <div>
            <button
                css={css`
                    display: block;
                    width: 170px;
                    height: 50px;
                    border: none;
                    border-sadius: 4px;
                    font-size: 16px;
                    background-color: ${props.color
                    };
                `}
                >
                    {props.text}
                </button>
        </div>
    )
}

