export const quickSort = async (
  arr,
  left = 0,
  right = arr.length - 1,
  items,
  speed
) => {
  let time = 50;
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
    await syncSetTimeout(0);
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
    //check to see if array is sorted
    //!stop multiple processes
    //!have left and right pointer
    let pivot = arr[start];
    let swapIndex = start;

    //loop from start to end
    // console.log(start);
    //reset pivot color
    // await pivotIndex(start, "black");
    // await pivotIndex(swapIndex, "yellow");
    await pivotIndex(end, "red");
    await syncSetTimeout(speed);

    for (let i = start; i < end + 1; i++) {
      console.log(speed);
      //   await pivotIndex(i, "red", 20);
      if (i !== end) {
        await pivotIndex(i, "#FF8170", speed);
      }
      if (pivot > arr[i]) {
        // await pivotIndex(swapIndex, "#04948a");
        // await pivotIndex(swapIndex, "#04948a");
        swapIndex++;
        // await pivotIndex(swapIndex, "yellow");

        // await pivotIndex(swapIndex, "black");
        await asyncSwap(i, swapIndex);

        // items[i].style.height = arr[swapIndex] + "%";
        // // items[swapIndex].style.height = arr[start] + "%";
        let temp = arr[i];
        arr[i] = arr[swapIndex];
        arr[swapIndex] = temp;

        // items[i].style.height = arr[swapIndex] + "%";
        // items[swapIndex].style.height = temp + "%";
      }
    }
    //swap
    await asyncSwap(start, swapIndex);
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;

    for (let i = start; i < end; i++) {
      await pivotIndex(i, "#1358B3");
    }
    await syncSetTimeout(speed);
    //pivot
    await pivotIndex(swapIndex, "#288026", 50);

    await pivotIndex(end, "#1358B3");

    return swapIndex;
  };

  if (left < right) {
    //use while loop to animate left and right pointers
    let pivIndex = await pivot(arr, left, right);
    //left
    //right

    await quickSort(arr, left, pivIndex - 1, items, speed);
    await quickSort(arr, pivIndex + 1, right, items, speed);
  } else {
    if (left < arr.length && right > -1 && right < arr.length) {
      items[left].style.backgroundColor = "#288026";
      items[right].style.backgroundColor = "#288026";
    }
  }
  return arr;
};
