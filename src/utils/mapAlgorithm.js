import bubbleSort from "../algorithms/bubbleSort";
import cocktailSort from "../algorithms/cocktailSort";
import heapSort from "../algorithms/heapSort";
import insertionSort from "../algorithms/insertionSort";
import mergeSort from "../algorithms/mergeSort";
import quickSort from "../algorithms/quickSort";
import selectionSort from "../algorithms/selectionSort";
// import shellSort from "../algorithms/shellSort";

// @@TODO: Implement the shell sort algorithm
const bubble = bubbleSort;
const cocktail = cocktailSort;
const heap = heapSort;
const insertion = insertionSort;
const merge = mergeSort;
const quick = quickSort;
const selection = selectionSort;
// const shell = shellSort;

const mapAlgorithm = (algorithmName) => {
  const algorithms = {
    "Bubble Sort": bubble,
    "Cocktail Sort": cocktail,
    "Heap Sort": heap,
    "Insertion Sort": insertion,
    "Merge Sort": merge,
    "Quick Sort": quick,
    "Selection Sort": selection,
    // "Shell Sort": shell,
  };

  return algorithms[algorithmName];
};

export default mapAlgorithm;
