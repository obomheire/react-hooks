import { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle);
    },
  }));
  return (
    <div>
      <button>Button From Child</button>
    <div>
      {toggle && <span>Toggle</span>}
    </div>
    </div>
  );
});

export default Button;