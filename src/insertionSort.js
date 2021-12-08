export const insertionSort = (arr, items) => {
  /*
    how does inserion sort work?

     gradually sorts by creating a larger left half
    we start at index and look at the item and insert in ascending order
    [5,3,4,1,2] 
    left half = 5
    where does 2 fit in left half?
    left half =  3 5
    where does 4 fit in left half?
    left = 3 4 5
    */

  /*
    we go back becuase it is the sorted
    [5,3,4,1,2] 
    i = 1,3
    j = 0,5 
    if(arr[j] > current) 
    purpose of swapping is to get sorted values
    at the end we insert the value

        [5,4,3,0] 
        [5,4,3,0]
        [5,5,3,0]
        [4,5,3,0]
        [0,3,4,5]


   */

  //   for (let i = 1; i < arr.length; i++) {
  //     let current = arr[i];
  //     for (var j = i - 1; j >= 0 && arr[j] > current; j--) {
  //       arr[j + 1] = arr[j];
  //     }
  //     arr[j + 1] = current;
  // [5,3,4,1,2]
  //   }

  //   for (let i = 1; i < arr.length; i++) {
  //     let current = arr[i];
  //     for (let j = i - 1; j >= 0 && arr[j] > current; j--) {
  //       //swap
  //       //putting greater value which is j up one
  //       arr[j + 1] = arr[j];
  //       //set j == lowest val
  //       arr[j] = current;
  //     }
  //   }

  /*
  steps
  setinterval
  ?what pointers do we need
  i and j
  current = j
  we want i = 1 
  we want j = i - 1  
  stop = true
  ?when will we swap 
  if(arr[j] > current) {
      arr[j + 1] = arr[j]
      arr[j] = current
        stop = true
    }
  ?when will we increment or decrement 
  we want to increment i when j is  === 0 or arr[j] !== current 
  reset j = i - 1 
  current = i
  when do we decrement 
  else j--
  ??when will we stop interval
  we will check when i == 0 
  if stop = true make spot = false
    else stopIterval

!colors
?what do we want to color
    we want to see where i is 
    we want to see where j 
    we want to se what we swap
*/
  let i = 1;
  let j = i - 1;
  let current = arr[i];
  let insertion = setInterval(() => {
    if (arr[j] > current) {
      items[j + 1].style.height = arr[j] + "%";
      items[j].style.height = current + "%";
      arr[j + 1] = arr[j];
      arr[j] = current;
    }
    if (j == 0 || arr[j] < current) {
      i++;
      j = i - 1;
      current = arr[i];
      //reselt colors
      items.forEach(function (elem) {
        elem.style.backgroundColor = "#1358B3";
      });

      if (i == arr.length) {
        clearInterval(insertion);
      }
      for (let key = 0; key <= i - 1; key++) {
        items[key].style.backgroundColor = "#288026";
      }
    } else {
      items[j].style.backgroundColor = "#288026";
      j--;
      items[j].style.backgroundColor = "#FCBA32";
    }
  }, 60);
};
