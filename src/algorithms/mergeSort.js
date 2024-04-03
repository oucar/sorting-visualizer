import delay from "../utils/delay";
import sequenceHighlight from "../utils/sequenceHighlight";

const mergeSort = async (arr, updateArr, setActiveIndex, delayMilliSeconds) => {
  const length = arr.length;
  let width = 1;

  while (width < length) {
    let left = 0; // start index of left array

    while (left < length) {
      const mid = left + width;
      const right = Math.min(left + 2 * width, length); // start index of right array
      await merge(
        arr,
        left,
        mid,
        right,
        updateArr,
        setActiveIndex,
        delayMilliSeconds
      );
      left += 2 * width;
    }

    width *= 2;
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
  delayMilliSeconds
) => {
  const leftArr = arr.slice(left, mid);
  const rightArr = arr.slice(mid, right);
  let [i, j, k] = [0, 0, left];

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      setActiveIndex([left + i, mid + j]);
      arr[k] = leftArr[i];
      updateArr([...arr]);
      await delay(delayMilliSeconds);
      i++;
    } else {
      setActiveIndex([left + i, mid + j]);
      arr[k] = rightArr[j];
      updateArr([...arr]);
      await delay(delayMilliSeconds);
      j++;
    }

    k++;
  }

  while (i < leftArr.length) {
    setActiveIndex([left + i, mid + j]);
    arr[k] = leftArr[i];
    updateArr([...arr]);
    await delay(delayMilliSeconds);
    i++;
    k++;
  }

  while (j < rightArr.length) {
    setActiveIndex([left + i, mid + j]);
    arr[k] = rightArr[j];
    updateArr([...arr]);
    await delay(delayMilliSeconds);
    j++;
    k++;
  }
};

export default mergeSort;
