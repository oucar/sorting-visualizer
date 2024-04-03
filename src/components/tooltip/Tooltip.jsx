import { useState } from "react";
import "./Tooltip.css";

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showToolTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, 500);
  };

  const hideToolTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  const tooltipClassName = `Tooltip-Tip ${props.direction || 'right'}`;

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showToolTip}
      onMouseLeave={hideToolTip}
    >
      {props.children}
      {active && (
        <div className={tooltipClassName}>
          {props.content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
