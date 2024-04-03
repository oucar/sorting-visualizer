import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../features/delaySlice";
import "./MetaData.css";
import padNumberWithZeros from "../../utils/padNumbersWithZeros";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

const MetaData = (props) => {
  const sortingAlgorithm = useSelector((state) => state.algorithm.value);
  const delay = useSelector((state) => state.delay.value);
  const dispatch = useDispatch();

  return (
    // @@TODO: complete tooltips
    <div className="meta-data">
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p className="meta-data__algorithm">{sortingAlgorithm}</p>
      </Tooltip>
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p>Iterations: {padNumberWithZeros(props.metaData.iterations)}</p>
      </Tooltip>
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p>Comparisons: {padNumberWithZeros(props.metaData.comparisons)}</p>
      </Tooltip>
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p>Swaps: {padNumberWithZeros(props.metaData.swaps, 3)}</p>
      </Tooltip>
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p>Shifts: {padNumberWithZeros(props.metaData.shifts, 3)}</p>
      </Tooltip>
      <Tooltip
        title="Add"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 300 }}
        arrow
      >
        <p>
          Delay: {padNumberWithZeros(delay, 3)}ms &nbsp;
          <span
            className="change-delay increase"
            onClick={() => dispatch(increment())}
          >
            &#9650;
          </span>
          &nbsp;
          <span
            className="change-delay decrease"
            onClick={() => dispatch(decrement())}
          >
            &#9660;
          </span>
        </p>
      </Tooltip>
    </div>
  );
};

export default MetaData;
