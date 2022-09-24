import React, { useState } from "react";

export const BubbleSort = async (arr, items, speed) => {
  let iteration = {
    i: 0,
    j: 1,
    sorted: true,
    done: 0,
  };

  //keep track of i and j
  //keep track of finsihed values
  //   let arrClone = arr.slice();

  let counter = 0;
  let bubble;
  return new Promise((resolve, reject) => {
    bubble = setInterval(() => {
      if (arr[iteration.j] < arr[iteration.i]) {
        let temp = arr[iteration.j];
        arr[iteration.j] = arr[iteration.i];
        arr[iteration.i] = temp;
        items[iteration.i].style.height = arr[iteration.i] + "%";
        items[iteration.j].style.height = arr[iteration.j] + "%";
      }
      if (iteration.j == arr.length - (1 + counter)) {
        iteration.j = 1;
        counter++;
      } else {
        iteration.j++;
        items[iteration.j].style.backgroundColor = "#EB9AAD";
      }
      if (iteration.i == arr.length - (1 + counter)) {
        items[iteration.i].style.backgroundColor = "#1358B3";
        iteration.i = 0;
        //get sorted bar turn htem into green
        /*
          how can we get the sorted bar    
        */
        if (counter == arr.length - 1) {
          items[iteration.i].style.backgroundColor = "#288026"; //green
          clearInterval(bubble);
          resolve(arr);
        }
        items[items.length - counter].style.backgroundColor = "#288026"; //green
      } else {
        items[iteration.i].style.backgroundColor = "#1358B3";
        iteration.i++;
        items[iteration.i].style.backgroundColor = "#EBE79D";
      }
      /*
      calc speed using bars 
       min={10}
        max={60}
      bars > 10 < 25
      150


      bars > 25 < 40
      100

      bars > 40 <= 60
      50
      */
    }, speed);
  });
};
