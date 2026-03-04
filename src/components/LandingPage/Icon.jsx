import React from "react";

const Icon = ({ name, size = 24, style = {} }) => (
    <span
        className="material-symbols-outlined"
        style={{ fontSize: size, lineHeight: 1, ...style }}
    >
        {name}
    </span>
);

export default Icon;
