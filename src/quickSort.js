export const quickSort = async (
  arr,
  left = 50,
  right = arr.length - 1,
  items
) => {
  /*
        we split up the array that are 0 or 1 item
        we select single elemenet called pivit pont finding the index wher the pivit would end up in the sorted array

        show pivit point and two pointers
        pivit put all values less than it behind and greater values than it in front of it

        pivit should be in the middle

        steps 
        ?what do we want to show 
        i want to see where the pivot is
        i want to see swapping happeing form right to left and pviot make a settimeiut a promise
        show we are swapping
        two pointers that collapse with each other
     */
  const syncSetTimeout = (ms) => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  const asyncSwap = async (start, swap) => {
    await syncSetTimeout(100);
    items[start].style.height = arr[swap] + "%";
    items[swap].style.height = arr[start] + "%";
  };
  const pivotIndex = async (start, color, time = 0) => {
    /*
    ?how to reset color for new pivot 
    at the end of the for loop set current pivot to turquise
    */
    // if (start !== 0) {

    //   items[start].style.backgroundColor = "#04948a";
    // }

    await syncSetTimeout(time);
    items[start].style.backgroundColor = color;
  };

  const pivot = async (arr, start = 0, end = arr.length - 1) => {
    //!stop multiple processes
    //!have left and right pointer 
    await syncSetTimeout(100);
    let pivot = arr[start];
    let swapIndex = start;
    //loop from start to end
    // console.log(start);
    //reset pivot color
    await pivotIndex(start, "pink");
    await pivotIndex(end, "blue");

    console.log(items[start]);

    for (let i = start + 1; i < arr.length; i++) {
      if (pivot > arr[i]) {
        swapIndex++;
        await asyncSwap(i, swapIndex);
        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;
        // items[i].style.height = arr[swapIndex] + "%";
        // items[swapIndex].style.height = temp + "%";
      }
    }
    await pivotIndex(start, "#04948a");
    await pivotIndex(end, "#04948a");

    console.log(items[start]);

    // for (let i = start + 1; i < end; i++) {
    //   await pivotIndex(i, "#04948a", 20);
    // }
    // for (let i in items) {
    //   await pivotIndex(i, "#04948a", 70);
    // }
    // setTimeout(() => {
    //   items[start].style.height = arr[swapIndex] + "%";
    //   items[swapIndex].style.height = temp + "%";
    // }, start * 100);
    //swap
    await asyncSwap(start, swapIndex);
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;
    await syncSetTimeout(100);

    // await pivotIndex(start, "blue");

    return swapIndex;
  };
  if (left < right) {
    //use while loop to animate left and right pointers
    let pivIndex = await pivot(arr, left, right);
    //left
    //right
    Promise.all([
      quickSort(arr, left, pivIndex - 1, items),
      quickSort(arr, pivIndex + 1, right, items),
    ]);
  }
  return arr;
};
