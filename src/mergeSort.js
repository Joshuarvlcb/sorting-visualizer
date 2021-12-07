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
const mergeArrays = (arr1, arr2, items, hi, low) => {
  console.log(hi, low);
  let results = [];
  let i = 0;
  let j = 0;
  let elemenets = [];
  /*
    push dom elements
    pass in hi and low
    after all the while loops are done i slice items array with hi and low  

    ?why do i need to know the low and high why not use i 
    so i can select the elements i want to sort

    ?i need to wait for the left and right to finish
    


     */
  //  console.log(items)

  while (i < arr1.length && j < arr2.length) {
    //global key
    if (arr1[i] < arr2[j]) {
      let key = 0;
      results.push(arr1[i]);
      let find = items.find((id) => {
        return id.id == arr1[i];
      });
      elemenets.push(find);

      i++;
    } else {
      let key = 0;

      results.push(arr2[j]);
      let find = items.find((id) => {
        return id.id == arr2[j];
      });
      elemenets.push(find);
      //   let merge = setInterval(() => {
      // if (key == results.length) clearInterval(merge);
      // items[key].style.height = results[key] + "%";
      // key++;
      //   }, 200);
      j++;
    }
  }
  let key = 0;

  while (i < arr1.length) {
    let key = 0;
    results.push(arr1[i]);
    let find = items.find((id) => {
      return id.id == arr1[i];
    });
    elemenets.push(find);
    // let merge = setInterval(() => {
    //   if (key == results.length) clearInterval(merge);
    //   items[key].style.height = results[key] + "%";

    //   key++;
    // }, 200);
    i++;
  }
  //await

  while (j < arr2.length) {
    let key = 0;
    results.push(arr2[j]);
    let find = items.find((id) => {
      return id.id == arr2[j];
    });

    elemenets.push(find);
    // let merge = setInterval(() => {
    //   if (key == results.length) clearInterval(merge);
    //   items[key].style.height = results[key] + "%";
    //   key++;
    // }, 200);
    j++;
  }
  //await
  /*
    i have to grab all the current elments
    and swap them 
    change the height

    sort the current elemetns in the dom
     console.log(elemenets)
     let step = 0
     /*
    how can i animate every single step
when we push results
setIterval have poiinter
clear iteral when pointers reach results.length
      */
  setTimeout(() => {
    elemenets.forEach((elem, i) => {
      items[i].style.height = results[i] + "%";
    });
  }, j * 200);
  //results
  return results;
};
export const mergeSort = (arr, items, low, hi) => {
  /*
    break up the array into halves until that array is empty or have one empty array
     */
  if (arr.length <= 1) return arr;
  //
  let half = Math.floor(arr.length / 2);
  let indexHalf = Math.floor((hi + 1 + low) / 2);
  console.log(low, hi);
  let left = mergeSort(arr.slice(0, half), items, low, indexHalf - 1);
  let right = mergeSort(arr.slice(half), items, indexHalf, hi);

  return mergeArrays(left, right, items, hi, low);
};
