/*
    spliting up merging and sorting
    works by decomposing an array into smaller arrays of 0 or 1 elements then builfing up a 
    newly sorted array


*/
/*
steps
break down the array into tiny pieces
then merge array when the size is 0 or 1


how can i  show this when merging the array
just get this to work without animation

how can i animate every single step
when we push results
setIterval have poiinter
clear iteral when pointers reach results.length

 push dom elements
 pass in hi and low
 after all the while loops are done i slice items array with hi and low  

 we create the sub array and it waits for the right array to finsih
create left show using setIterval then wait for the right to finish to combine
promises


*/

// setInterval(() => {}, 200);
const waitforme = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
// const asyncSwap = async (item, val) => {
//   await syncSetTimeout(25);
//   item.style.height = val + "%";
// };
async function merge(ele, low, mid, high, speed) {
  let delay = speed;
  console.log(`low=${low}, mid=${mid}, high=${high}`);
  const n1 = mid - low + 1;
  const n2 = high - mid;
  console.log(`n1=${n1}, n2=${n2}`);
  let left = new Array(n1);
  let right = new Array(n2);

  for (let i = 0; i < n1; i++) {
    await waitforme(delay);
    // console.log("In merge left loop");
    // console.log(ele[low + i].style.height + " at " + (low + i));
    // color
    ele[low + i].style.background = "#EB9AAD";
    left[i] = ele[low + i].style.height;
  }
  for (let i = 0; i < n2; i++) {
    await waitforme(delay);
    // console.log("In merge right loop");
    // console.log(ele[mid + 1 + i].style.height + " at " + (mid + 1 + i));
    // color
    ele[mid + 1 + i].style.background = "#EBE79D";
    right[i] = ele[mid + 1 + i].style.height;
  }
  await waitforme(delay);
  let i = 0,
    j = 0,
    k = low;
  while (i < n1 && j < n2) {
    await waitforme(delay);
    // console.log("In merge while loop");
    // console.log(parseInt(left[i]), parseInt(right[j]));

    // To add color for which two r being compared for merging

    if (parseInt(left[i]) <= parseInt(right[j])) {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }

      ele[k].style.height = left[i];
      i++;
      k++;
    } else {
      // color
      if (n1 + n2 === ele.length) {
        ele[k].style.background = "green";
      } else {
        ele[k].style.background = "lightgreen";
      }
      ele[k].style.height = right[j];
      j++;
      k++;
    }
  }
  while (i < n1) {
    await waitforme(delay);
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = left[i];
    i++;
    k++;
  }
  while (j < n2) {
    await waitforme(delay);
    // color
    if (n1 + n2 === ele.length) {
      ele[k].style.background = "green";
    } else {
      ele[k].style.background = "lightgreen";
    }
    ele[k].style.height = right[j];
    j++;
    k++;
  }
}

export async function mergeSort(ele, l, r, speed) {
  if (l >= r) {
    return;
  }
  const m = l + Math.floor((r - l) / 2);
  //   console.log(`left=${l} mid=${m} right=${r}`, typeof m);
  await mergeSort(ele, l, m, speed);
  await mergeSort(ele, m + 1, r, speed);
  await merge(ele, l, m, r, speed);
}
