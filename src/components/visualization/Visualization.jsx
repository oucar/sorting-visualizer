import { useState, useEffect } from "react";
import "./Visualization.css";
import Element from "../element/Element";
import { useSelector } from "react-redux";
import mapAlgorithm from "../../utils/mapAlgorithm";

const Visualization = (props) => {
  const sortingAlgorithm = useSelector((state) => state.algorithm.value);
  const toggleRerun = useSelector((state) => state.toggleRerun.value);
  const delay = useSelector((state) => state.delay.value);
  const arrayLength = 65;
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
            () => isCancelled
          );
        } else {
          throw new Error("Mapped algorithm is not a function");
        }
      } catch (error) {
        // runSort();
      }
    };

    runSort();

    return () => {
      isCancelled = true;
    };
  }, [sortingAlgorithm, toggleRerun, delay]);

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
