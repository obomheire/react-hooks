import React, { useRef } from "react";
import Button from "./Button";

function UseInperativeHandleHook() {
  const buttonRef = useRef(null);
  return (
    <div>
      <div>
      <button onClick={() => { buttonRef.current.alterToggle(); }} > Button From Parent </button>
      </div>
      <Button ref={buttonRef} />
    </div>
  );
}

export default UseInperativeHandleHook;
