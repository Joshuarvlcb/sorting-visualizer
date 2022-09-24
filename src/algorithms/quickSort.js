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

  const asyncSwap = async (i, j) => {
    await syncSetTimeout(500);
    items[i].style.height = arr[j] + "%";
    items[j].style.height = arr[i] + "%";
  };
  const pivotIndex = async (start, color, time = 0) => {
    /*
    ?how to reset color for new pivot 
    at the end of the for loop set current pivot to turquise
    */
    // if (start !== 0) {

    //   items[start].style.backgroundColor = "#04948a";
    // }

    if (start > items.length - 1) return;
    await syncSetTimeout(time);
    items[start].style.backgroundColor = color;
  };

  const pivot = async (arr, start = 0, end = arr.length - 1) => {
    //check to see if array is sorted
    //!stop multiple processes
    //!have left and right pointer
    let pivot = arr[start];

    //loop from start to end
    // console.log(start);
    //reset pivot color
    // await pivotIndex(start, "black");
    // await pivotIndex(swapIndex, "yellow");
    await pivotIndex(start, "red");
    await syncSetTimeout(speed);

    let i = start;
    let j = end;
    const swap = (arr, left, right) => {
      return ([arr[left], arr[right]] = [arr[right], arr[left]]);
    };
    while (i < j) {
      await syncSetTimeout(200);

      do {
        i++;
        await pivotIndex(i, "lightgreen", speed);
      } while (arr[i] <= pivot);
      await pivotIndex(i, "green", speed);

      do {
        j--;
        await pivotIndex(j, "lightgreen", speed);
      } while (arr[j] > pivot);
      await pivotIndex(j, "green", speed);

      if (i < j) {
        await asyncSwap(i, j);
        swap(arr, i, j);
      }
      await pivotIndex(i, "lightgreen", speed);
      await pivotIndex(j, "lightgreen", speed);
    }

    await syncSetTimeout(speed);

    await pivotIndex(j, "black");
    await syncSetTimeout(speed);

    await asyncSwap(start, j);
    swap(arr, start, j);

    await syncSetTimeout(500);

    for (let i = start; i <= end + 1; i++) {
      await pivotIndex(i, "#1358B3", speed / 2);
    }

    // for (let i = start; i < end + 1; i++) {
    //   console.log(speed);
    //   //   await pivotIndex(i, "red", 20);
    //   if (i !== end) {
    //     await pivotIndex(i, "#FF8170", speed);
    //     items[i].classList.add("transition");
    //   }
    //   if (pivot > arr[i]) {
    //     // await pivotIndex(swapIndex, "#04948a");
    //     // await pivotIndex(swapIndex, "#04948a");
    //     swapIndex++;
    //     // await pivotIndex(swapIndex, "yellow");

    //     // await pivotIndex(swapIndex, "black");
    //     await asyncSwap(i, swapIndex);

    //     // items[i].style.height = arr[swapIndex] + "%";
    //     // // items[swapIndex].style.height = arr[start] + "%";
    //     let temp = arr[i];
    //     arr[i] = arr[swapIndex];
    //     arr[swapIndex] = temp;

    //     // items[i].style.height = arr[swapIndex] + "%";
    //     // items[swapIndex].style.height = temp + "%";
    //   }
    // }
    //swap
    // await asyncSwap(start, swapIndex);
    // let temp = arr[start];
    // arr[start] = arr[swapIndex];
    // arr[swapIndex] = temp;

    // for (let i = start; i < end; i++) {
    //   await pivotIndex(i, "#1358B3");
    //   items[i].classList.remove("transition");
    // }
    // //pivot
    // await pivotIndex(swapIndex, "#288026", 50);

    // await pivotIndex(end, "#1358B3");

    return j;
  };

  if (left < right) {
    //use while loop to animate left and right pointers
    let pivIndex = await pivot(arr, left, right);
    //left
    //right

    await quickSort(arr, left, pivIndex, items, speed);
    await quickSort(arr, pivIndex + 1, right, items, speed);
  }

  return arr;
};
