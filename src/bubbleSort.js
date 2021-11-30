export const bubbleSort = (arr, updateArr, tick) => {
  let i = arr.length - 1;
  let j = 0;
  let animations = [];
  //keep track of i and j
  //keep track of finsihed values
  //   let arrClone = arr.slice();
  //   while (true) {
  //     //4 steps
  //     // animations.push([arr[i], arr[j]]);

  //     if (arr[j] > arr[i]) {
  //       let temp = arr[i];
  //       arr[i] = arr[j];
  //       arr[j] = temp;
  //     }
  //     if (j === i) {
  //       i--;
  //       j = 0;
  //     } else {
  //       j++;
  //     }
  //     //return case
  //     if (i === 0) {
  //       break;
  //     }
  //   }

  /*
    we want to set a timeout for the animation 
    the problem is that set timeout is asyncrounous
    use while loop

    */

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        let tj = arr[j];
        arr[i] = arr[j];
        arr[j] = temp;

        animations.push([i, j, temp, tj]);
      }
    }
  }
  return animations;
};
