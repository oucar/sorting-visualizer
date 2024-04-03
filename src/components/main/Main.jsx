import "./Main.css";
import { useState } from "react";
import MetaData from "../meta-data/MetaData";
import Visualization from "../visualization/Visualization";

const Main = () => {
  const [metaData, setMetaData] = useState({
    iterations: 0,
    comparisons: 0,
    swaps: 0,
    shifts: 0,
  });

  return (
    <div className="main">
      <MetaData metaData={metaData} />
      <Visualization setMetaData={setMetaData} metaData={metaData} />
    </div>
  );
};

export default Main;
