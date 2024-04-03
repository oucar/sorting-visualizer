import { useState, useEffect } from "react";
import "./Visualization.css";
import Element from "../element/Element";
import { useSelector } from "react-redux";
import mapAlgorithm from "../../utils/mapAlgorithm";

const Visualization = (props) => {
  const sortingAlgorithm = useSelector((state) => state.algorithm.value);
  const toggleRerun = useSelector((state) => state.toggleRerun.value);
  const delay = useSelector((state) => state.delay.value);
  const arrayLength = 100;
  const [activeIndex, setActiveIndex] = useState([]);
  const [currentArray, setCurrentArray] = useState([]);

  useEffect(() => {
    let isCancelled = false;

    const runSort = async () => {
      try {
        const sortFunction = mapAlgorithm(sortingAlgorithm);
        if (typeof sortFunction === "function") {
          await sortFunction(
            setCurrentArray,
            setActiveIndex,
            delay,
            arrayLength,
            props.setMetaData,
            {
              iterations: 0,
              comparisons: 0,
              swaps: 0,
              shifts: 0,
            },
            // Pass the cancellation check function to the sort function
            () => isCancelled
          );
        } else {
          throw new Error("Mapped algorithm is not a function");
        }
      } catch (error) {
        console.log("ERROR: Sort was cancelled. " + error);
      }
    };

    runSort();

    return () => {
      isCancelled = true;
    };
  }, [sortingAlgorithm, toggleRerun]);

  const elements = currentArray.map((el, index) => (
    <Element
      key={index}
      orderNo={index}
      width={0.7}
      height={el * 6}
      active={activeIndex.includes(index)}
      sorted={false}
    />
  ));

  return <div className="visualization">{elements}</div>;
};

export default Visualization;
