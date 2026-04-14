import React from "react";

function Button({ text, variant = "primary", onClick, type = "button" }) {
  const className =
    variant === "secondary" ? "secondaryButton" : "primaryButton";

  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;