import delay from "../utils/delay";
import sequenceHighlight from "../utils/sequenceHighlight";
import generateRandomSequence from "../utils/generateRandomSequence";

const bubbleSort = async (
  setterFunc,
  setActiveIndex,
  delayMilliSeconds,
  arrayLength,
  setMetaData,
  metaData,
  cancellationCheckFn
) => {
  if (cancellationCheckFn && cancellationCheckFn()) {
    setActiveIndex([]);
    return;
  }

  let iterations = 0;
  let comparisons = 0;
  let swaps = 0;
  let shifts = 0;

  const arr = generateRandomSequence(arrayLength);
  setterFunc([...arr]);
  await delay(500);

  if (arrayLength <= 1) return arr;

  for (let i = 0; i < arrayLength; i++) {
    if (cancellationCheckFn && cancellationCheckFn()) {
      setActiveIndex([]);
      return;
    }
    for (let j = 0; j < arrayLength - i - 1; j++) {
      await delay(delayMilliSeconds);

      if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([]);
        return;
      }

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

        setMetaData({
          iterations: iterations,
          comparisons: comparisons,
          swaps: (swaps += 1),
          shifts: shifts,
        });
      }

      setActiveIndex([j, j + 1]);
      // pass in new array ∵ react compares by reference
      setterFunc([...arr]);

      setMetaData({
        iterations: (iterations += 1),
        comparisons: (comparisons += 1),
        swaps: swaps,
        shifts: shifts,
      });
    }
  }

  sequenceHighlight(arrayLength, setActiveIndex, 10);
};

export default bubbleSort;
