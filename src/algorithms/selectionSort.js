export const selectionSort = (arr, items, speed) => {
  /*
    how it works?
    it places small values in the beggining of the array very similar to bubble sort

    [5,3,4,1,2]
    every full iteration we get a min and swap the min with the first unsorted item of the array


    use nested loop i and j
    keep track of the minumin values index new min will always be reclared in i loop
    rew min is a index

    j
    if(arr[i] > j){
        min = j
    }

    after j finishes swap index[i] with new min set j = i  
    arr[i] = arr[min]
    arr[min] = temp
    */

  /*
    write down logical steps to get the animations
    understand selectionSort

    counter to know which items are sorted
    setIterval
    have 2 pointers min and j and 
    
    ??how will the comparing work
    min = j
    swap = true

    stop iterval if swap is false esle set it to false
    swap values at the end of the array
    counter++
    set i and j = 0 + counter 1 + counter
    
    increment j only if we are not at the end of the array 

    
    */
  //   for (let i = 0; i < arr.length; i++) {
  //     let min = i;
  //     for (let j = i + 1; j < arr.length; j++) {
  //       if (arr[min] > arr[j]) {
  //         min = j;
  //       }
  //     }
  //     let temp = arr[i];
  //     arr[i] = arr[min];
  //     arr[min] = temp;
  //   }
  //   return arr;
  /*
animation 
show what min is and show j
at the end swap min with i and color new min 

fix colors bug

set old min to blue color
when we get new min set to red

previous we set to blue
incremnet j we set to black

if sorted make it yellow
*/
  let i = 0;
  let j = 1;
  let min = i;
  // items[min].style.backgroundColor = "#EB9AAD";
  return new Promise((resolve) => {
    let selection = setInterval(() => {
      //compare
      /*
    min > j
    min = j
    swap = true

    j === length of arr
    swap is the issue   

    min = red  
    
    */
      if (arr[min] > arr[j]) {
        console.log(min);
        items[min].style.backgroundColor = "#1358B3";
        min = j;
        setTimeout(() => {
          items[min].style.backgroundColor = "#EB9AAD";
        }, 5);
        console.log(min);
        //color of where min is
      }

      /*
    sorting is almost working'
    fix colors
    
    */
      if (j === arr.length - 1) {
        //swap

        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;

        items[i].style.height = arr[i] + "%";
        items[min].style.height = arr[min] + "%";

        //swap height elemenets

        //reselt colors
        items.forEach(function (elem) {
          elem.style.backgroundColor = "#1358B3";
        });

        //make sorted yellow colors
        for (let key = 0; key <= i; key++) {
          items[key].style.backgroundColor = "#288026";
        }
        i++;
        j = i + 1;
        min = i;
        items[min].style.backgroundColor = "#EB9AAD";
        if (j === arr.length - 1) {
          items[min].style.backgroundColor = "#288026";
          items[items.length - 1].style.backgroundColor = "#288026";
          items[items.length - 2].style.backgroundColor = "#288026";
          clearInterval(selection);
          items.forEach(function (elem) {
            elem.style.backgroundColor = "#288026";
          });
          resolve(arr);
        }
      } else {
        //#04948a
        items[j].style.backgroundColor = "#1358B3";
        j++;
        items[j].style.backgroundColor = "#EBE158";
      }

      //swap at the end else increment
    }, speed);
  });
};
