import delay from "../utils/delay";
import sequenceHighlight from "../utils/sequenceHighlight";
import generateRandomSequence from "../utils/generateRandomSequence";

const mergeSort = async (
  updateArr,
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

  setMetaData({
    iterations: metaData.iterations,
    comparisons: metaData.comparisons,
    swaps: metaData.swaps,
    shifts: metaData.shifts,
  });

  const arr = generateRandomSequence(arrayLength);
  updateArr([...arr]);
  await delay(500);

  const length = arr.length;
  let width = 1;

  while (width < length) {
    if (cancellationCheckFn && cancellationCheckFn()) {
      setActiveIndex([]);
      return;
    }

    setMetaData({
      iterations: (metaData.iterations += 1),
      comparisons: metaData.comparisons,
      swaps: metaData.swaps,
      shifts: metaData.shifts,
    });

    let left = 0;

    while (left < length) {
      if (cancellationCheckFn && cancellationCheckFn()) {
        setActiveIndex([]);
        return;
      }

      setMetaData({
        iterations: (metaData.iterations += 1),
        comparisons: metaData.comparisons,
        swaps: metaData.swaps,
        shifts: metaData.shifts,
      });

      const mid = left + width;
      const right = Math.min(left + 2 * width, length);
      await merge(
        arr,
        left,
        mid,
        right,
        updateArr,
        setActiveIndex,
        delayMilliSeconds,
        setMetaData,
        metaData,
        cancellationCheckFn
      );
      left += 2 * width;
    }

    width *= 2;
    sequenceHighlight(length, setActiveIndex, delayMilliSeconds);
  }

  sequenceHighlight(length, setActiveIndex, delayMilliSeconds);
};

const merge = async (
  arr,
  left,
  mid,
  right,
  updateArr,
  setActiveIndex,
  delayMilliSeconds,
  setMetaData,
  metaData,
  cancellationCheckFn
) => {
  if (cancellationCheckFn && cancellationCheckFn()) {
    setActiveIndex([]);
    return;
  }

  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);
  let [i, j, k] = [0, 0, left];

  while (i < leftArr.length && j < rightArr.length) {
    if (cancellationCheckFn && cancellationCheckFn()) {
      setActiveIndex([]);
      return;
    }

    setMetaData({
      iterations: (metaData.iterations += 1),
      comparisons: (metaData.comparisons += 1),
      swaps: metaData.swaps,
      shifts: metaData.shifts,
    });

    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      updateArr([...arr]);
      setActiveIndex([k]);
      await delay(delayMilliSeconds);
      i++;
    } else {
      arr[k] = rightArr[j];
      updateArr([...arr]);
      setActiveIndex([k]);
      await delay(delayMilliSeconds);
      j++;
    }

    k++;
  }

  setMetaData({
    iterations: metaData.iterations,
    comparisons: (metaData.comparisons += 1),
    swaps: metaData.swaps,
    shifts: metaData.shifts,
  });

  while (i < leftArr.length) {
    if (cancellationCheckFn && cancellationCheckFn()) {
      setActiveIndex([]);
      return;
    }

    setMetaData({
      iterations: (metaData.iterations += 1),
      comparisons: metaData.comparisons,
      swaps: metaData.swaps,
      shifts: metaData.shifts,
    });

    arr[k] = leftArr[i];
    updateArr([...arr]);
    setActiveIndex([k]);
    await delay(delayMilliSeconds);
    i++;
    k++;
  }

  while (j < rightArr.length) {
    if (cancellationCheckFn && cancellationCheckFn()) {
      setActiveIndex([]);
      return;
    }

    setMetaData({
      iterations: (metaData.iterations += 1),
      comparisons: metaData.comparisons,
      swaps: metaData.swaps,
      shifts: metaData.shifts,
    });

    arr[k] = rightArr[j];
    updateArr([...arr]);
    setActiveIndex([k]);
    await delay(delayMilliSeconds);
    j++;
    k++;
  }
};

export default mergeSort;
