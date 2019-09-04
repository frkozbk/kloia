import React, { useState } from "react";
import { validateEmail } from "../../../../../util/validate";
import "./SubscribeTab.style.scss";
const SubscribeTab = () => {
  const [text, setText] = useState("");
  const [valid, setValid] = useState(true);
  function validateInput() {
    setValid(validateEmail(text));
  }
  return (
    <div className={`${!valid ? "notValid" : ""} subcribe`}>
      <input
        type="email"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Email adress"
      />
      <button
        onClick={validateInput}
        className={`subcribe-btn ${!valid ? "notValid" : ""}`}
      >
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeTab;
