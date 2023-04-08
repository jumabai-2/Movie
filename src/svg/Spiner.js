import React from 'react';

const Spiner = () => {
    return (
        <div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "rgba(241, 242, 243, 0)",
                    display: "block",
                    shapeRendering: "auto",
                }}
                width="200px"
                height="200px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="32"
                    stroke-width="8"
                    stroke="#1d3f72"
                    stroke-dasharray="50.26548245743669 50.26548245743669"
                    fill="none"
                    stroke-linecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        values="0 50 50;360 50 50"
                    ></animateTransform>
                </circle>
                <circle
                    cx="50"
                    cy="50"
                    r="23"
                    stroke-width="8"
                    stroke="#5699d2"
                    stroke-dasharray="36.12831551628262 36.12831551628262"
                    stroke-dashoffset="36.12831551628262"
                    fill="none"
                    stroke-linecap="round"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        dur="1s"
                        repeatCount="indefinite"
                        keyTimes="0;1"
                        values="0 50 50;-360 50 50"
                    ></animateTransform>
                </circle>
            </svg>
        </div>
    );
};

export default Spiner;