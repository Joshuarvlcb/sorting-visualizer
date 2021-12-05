export const bubbleSort = async (arr, items) => {
  let iteration = {
    i: 0,
    j: 1,
    sorted: true,
    done: 0,
  };

  //keep track of i and j
  //keep track of finsihed values
  //   let arrClone = arr.slice();

  let j = 0;
  const done = async () => {
    let hi = new Promise(function (resolve, reject) {
      setTimeout(() => {
        if (iteration.sorted === "done") resolve(true);
        else reject(false);
      }, j * 40);
    });
    return hi;
  };
  let counter = 0;
  let bubble;
  bubble = setInterval(() => {
    if (arr[iteration.j] < arr[iteration.i]) {
      // console.log(items[iteration.j], items[iteration.i]);
      // console.log(arr[iteration.j], arr[iteration.i]);
      /*
        [40,30]
        30,40
        40 = 30
        30 = 40
*/
      let temp = arr[iteration.j];
      arr[iteration.j] = arr[iteration.i];
      arr[iteration.i] = temp;
      items[iteration.i].style.height = arr[iteration.i] + "%";
      items[iteration.j].style.height = arr[iteration.j] + "%";
    }
    if (iteration.j == arr.length - (1 + counter)) {
      iteration.j = 1;
      counter++;

      //get sorted bar turn htem into green
    } else {
      iteration.j++;
      console.log(counter);
      items[iteration.j].style.backgroundColor = "rgb(84, 189, 221)";
    }
    if (iteration.i == arr.length - (1 + counter)) {
      items[iteration.i].style.backgroundColor = "#04948A";
      iteration.i = 0;
      //get sorted bar turn htem into green
      /*
        how can we get the sorted bar    
      */
      if (counter == arr.length - 1) {
        items[iteration.i].style.backgroundColor = "#28E0D4";
        clearInterval(bubble);
      }
      items[items.length - counter].style.backgroundColor = "#28E0D4";
    } else {
      items[iteration.i].style.backgroundColor = "#04948a";
      iteration.i++;
      items[iteration.i].style.backgroundColor = "#FFA159";
    }
  }, 50);

  // while (bubble) {
  //   index++;
  //   j++;
  //   /*
  //   true

  //      check every full iteration if i sorted if i set stop = break

  //       reset color meaning clear previous background colors;
  //       reset i and j after they hot arr,length and check to see if we made any changes;

  //       fix j bug
  //       fix colors
  //       make it sort properly
  //       have a state to end

  //     we are dragging greatest value at the end
  //    [30,23,455,24];
  //    let i = arr[i];
  //    let j  = arr[i + 1]
  // if(i < j){
  //   i = j
  //   j = next
  // }
  // 30 > 23
  // items[j] = i
  // items[i] = j

  //     compare i and j
  //     move up i and j
  //     placed when value is placed at the end hightlight it green
  //     if we are done sorting break
  //       */
  //   /*
  //       items
  //       arr[itrations]

  //       swap
  //       we never swap the values in our array
  //      */

  //   // if (stop === "break") break;
  //   //if everything is sorted: return true and break
  // }

  //   // await compare();

  //   // setTimeout(() => {
  //   //   items[i].style.backgroundColor = "red";
  //   //   items[i].style.backgroundColor = "red";
  //   // }, 100);
  //   // await new Promise((resolve) => {
  //   //   if (i == arr.length - 1) {
  //   //     i = 0;
  //   //     resolve();
  //   //   }
  //   // });
  //   // await new Promise((resolve) => {
  //   //   if (j == arr.length - 1) {
  //   //     j = 0;
  //   //     resolve();
  //   //   }
  //   // });
  //   // await new Promise((resolve) => {
  //   //   index++;
  //   //   resolve();
  //   // });
  // }

  /*
    we want to set a timeout for the animation 
    the problem is that set timeout is asyncrounous
    use while loop

    */
  // let counter = 0;
  // for (let i = arr.length; i > 0; i--) {
  //   counter++;
  //   for (let j = 0; j < i; j++) {
  //     // animations.push([i - 1, j, arr.length - counter]);
  //     if (arr[j] > arr[i]) {
  //       let temp = arr[i];
  //       let tj = arr[j];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //       animations.push([i, j, temp, tj, "swap"]);
  //     }
  //   }
  // }
};
