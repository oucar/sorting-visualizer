// Function to perform merge sort and generate animations
export function getMergeSortAnimations(array: number[]): number[][] {
    // Array to store animations
    const animations: number[][] = []; 
    if (array.length <= 1) return [array]; 
    // Create a copy of the input array for sorting
    const auxiliaryArray = array.slice(); 
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations); 
    return animations; 
  }
  
  // Recursive helper function to perform merge sort
  function mergeSortHelper(
    // The main array being sorted
    mainArray: number[], 
    startIdx: number, 
    endIdx: number, 
    auxiliaryArray: number[], 
    animations: number[][] 
  ): void {
    // Base case: if start index and end index are equal, return
    if (startIdx === endIdx) return; 
    const middleIdx = Math.floor((startIdx + endIdx) / 2); 
    // Recursively call mergeSortHelper for left and right halves
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    // Merge the two sorted halves
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  // Function to merge two sorted subarrays into one
  function doMerge(
    mainArray: number[], 
    startIdx: number, 
    middleIdx: number, 
    endIdx: number, 
    auxiliaryArray: number[],
    animations: number[][] 
  ): void {
    // Pointer for the main array
    let k = startIdx; 
    // Pointer for the left subarray
    let i = startIdx; 
    // Pointer for the right subarray
    let j = middleIdx + 1; 
    // Merge the two sorted subarrays into the main array
    while (i <= middleIdx && j <= endIdx) {
      // Push indices to highlight the elements being compared
      animations.push([i, j]);
      // Push indices again to revert the color after comparison
      animations.push([i, j]);
      // If element at index i is smaller or equal, move it to mainArray and increment i
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // If element at index j is smaller, move it to mainArray and increment j
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    // Move remaining elements of left subarray, if any
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    // Move remaining elements of right subarray, if any
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  