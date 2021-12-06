export const quickSort = (arr, left = 0, right = arr.length - 1) => {
  /*
        we split up the array that are 0 or 1 item
        we select single elemenet called pivit pont finding the index wher the pivit would end up in the sorted array

        show pivit point and two pointers
        pivit put all values less than it behind and greater values than it in front of it

        pivit should be in the middle


        steps 
        ?what do we want to show 
        i want to see where the pivot is
        i want to see swapping happeing form right to left and pviot
     */
  const pivot = (arr, start = 0, end = arr.length - 1) => {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
      }
    }
    //swap
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;
    return swapIndex;
  };
  if (left < right) {
    console.log(arr);
    let pivIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivIndex - 1);
    //right
    quickSort(arr, pivIndex + 1, right);
  }
  return arr;
};
