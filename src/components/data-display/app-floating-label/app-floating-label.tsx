import { useState } from "react";

import "./app-floating-label.scss";

export const FloatingLabel = (props: any) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value, showLabel } = props;

  const labelClass = focus || (value && value?.length !== 0) ? "label label-float" : "label ml-2";

  return (
    <div
      className={`float-label ${showLabel === "hidden" && "mb-0"}`}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <div className={`text-grey  z-40 ${labelClass} ${showLabel}`}>{label}</div>
    </div>
  );
};
