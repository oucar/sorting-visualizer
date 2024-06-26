import "./Navigation.css";
import AppsIcon from "@mui/icons-material/Apps";
import Menu from "../menu/Menu";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useState } from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useDispatch } from "react-redux";
import { toggleRerun } from "../../features/toggleRerunSlice";

const Navigation = () => {
  const dispatch = useDispatch();

  const style = {
    transform: "scale(1.1))",
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const handleRerun = () => {
    dispatch(toggleRerun());
  };

  return (
    <div className="navigation">
      <div className="nav__items">
        <div>
          <div
            className="nav__item"
            onClick={() => setMenuVisible((prev) => !prev)}
          >
            {menuVisible ? (
              <DisabledByDefaultIcon style={{ ...style, color: "#274c77" }} />
            ) : (
              <AppsIcon style={style} />
            )}
          </div>
        </div>

        <div>
          <div className="nav__item" onClick={handleRerun}>
            <RefreshIcon style={{ style }} />
          </div>
        </div>
      </div>

      <Menu menuVisible={menuVisible} setMenuVisible={setMenuVisible} />
    </div>
  );
};

export default Navigation;
