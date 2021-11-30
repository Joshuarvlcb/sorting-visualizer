import { bubbleSort } from "./bubbleSort";
import { useState, useRef, useEffect } from "react";
import Item from "./Item";

function App() {
  const [tick, setTick] = useState(0);
  const [range, setRange] = useState(30);
  const [array, setArray] = useState(
    new Array(+range).fill("").map((_, i) => {
      return Math.random() * (100 - 30) + 30;
    })
  );
  useEffect(() => {
    console.log(array);
    const items = [...document.getElementsByClassName("item")];
    console.log(items);
  }, [array]);
  /*
  bubble sort current array
 
  */
  // const liveBubbleSort = () => {
  //   console.log(bubbleSort(array, setArray));
  // };
  // liveBubbleSort();
  return (
    <div className="App">
      <h1>sorting visualizer</h1>
      <input
        type="range"
        min={10}
        max={65}
        onChange={(e) => {
          console.log(e.target.value);
          setRange(e.target.value);
          setArray(
            new Array(+e.target.value).fill("").map((_, i) => {
              return Math.random() * (100 - 30) + 30;
            })
          );
        }}
      />
      <button
        onClick={() => {
          const items = bubbleSort(array);
          const sync = (color, id, items) => {
            setTimeout(() => {
              items[id].style.backgroundColor = color;
            }, 1000);
          };
          let pointer = 0;
          for (let [i, id] of Object.entries(items)) {
            const items = [...document.getElementsByClassName("item")];

            console.log(id[2], id[1]);
            // items[id[0]].style.backgroundColor = "red";
            // if (id[1] == id[2]) {
            //   setTimeout(() => {
            //     items[id[0]].style.backgroundColor = "red";
            //   }, i * 10);
            //   pointer++;
            //   console.log(pointer);
            // } else {
            //   setTimeout(() => {
            //     items[id[0]].style.backgroundColor = "black";
            //   }, i * 10);
            // }

            if (id.includes("swap")) {
              setTimeout(() => {
                items[id[0]].style.height = id[3] + "%";
                items[id[1]].style.height = id[2] + "%";
                items[id[0]].style.backgroundColor = "green";
                items[id[1]].style.backgroundColor = "blue";
                setTimeout(function () {
                  items[id[0]].style.backgroundColor = "red";
                  items[id[1]].style.backgroundColor = "red";
                }, 100);
              }, i * 50);
            } else {
              if (id[1] == id[2]) {
                sync("red", id[0], items);
                console.log(pointer);
              } else {
                sync("black", id[0], items);
              }
            }
            /*
            
            30 is black 
            when j = 30 set 30 = red
            set 29 = black
            when j == 29
  
            */
            // if (id[1] == array.length - 1) {
            //   setTimeout(() => {
            //     items[keepTrackOfI].style.backgroundColor = "red";
            //   }, i * 50);
            //   keepTrackOfI.push(id[0]);
            // } else {
            //   setTimeout(() => {
            //     items[id[0]].style.backgroundColor = "black";
            //     pointer++;
            //   }, i * 50);
            // }

            /*
              show where i is
              i need to change i back to red when we finished the iteration of the array
              get values that are not swapped and % arr.length == 0

              for each iteration i want to check to see if we chnage i to red
              show what we are comparing
            */
            // if (!id.includes("swap")) {
            //   keepTrackOfI++;
            // }
            //animatioms
            // const index = document.getElementById(id[0]).style;
            // const j = document.getElementById(id[1]).style;
            //toggle colors
            // if (id.includes("swap")) {
            //   setTimeout(() => {
            //     items[id[0]].style.height = id[3] + "%";
            //     items[id[1]].style.height = id[2] + "%";
            //     // items[id[0]].style.backgroundColor = "green";
            //     // items[id[1]].style.backgroundColor = "blue";
            //     setTimeout(() => {
            //       items[id[0]].style.backgroundColor = "red";
            //       items[id[1]].style.backgroundColor = "red";
            //     }, 1 * i);
            //   }, i * 100);
            // } else {
            //   setTimeout(() => {
            //     if (items[id[1]] && items[id[0]]) {
            //       items[id[1]].style.backgroundColor = "pink";

            //       items[id[0]].style.backgroundColor = "black";

            //       setTimeout(() => {
            //         // items[id[0]].style.backgroundColor = "red";
            //         items[id[1]].style.backgroundColor = "red";
            //       }, 1 * i);
            //     }
            //   }, i * 100);

            /*

            */
            // setTimeout(() => {
            //   ii++;
            //   console.log(ii);
            //   items.find((elem) => elem.id == id[0]).style.height =
            //     id[1] + "px";
            //   items.find((elem) => elem.id == id[1]).style.height =
            //     id[0] + "px";
            // }, i * 100);

            // items[i].style.height = 100 + "px";

            // if (reset) {
            //   // setTimeout(() => {
            //   //   index.backgroundColor = "blue";
            //   //   j.backgroundColor = "black";
            //   // }, i * 50);
            // } else {
            //   setTimeout(() => {
            //     index.backgroundColor = "red";
            //     index.height = id[1] + "px";
            //     j.height = id[0] + "px";
            //   }, i * 100);
            // }

            /*
          
          */
          }
        }}
      >
        bubble sort
      </button>
      <button>insertion sort</button>
      <button>radix sort</button>
      <button>merge sort</button>
      <button
        onClick={() => {
          setArray(
            new Array(+range).fill("").map((_, i) => {
              return Math.random() * (100 - 30) + 30;
            })
          );
        }}
      >
        generate new array
      </button>
      <div className="array">
        {array.map((height, i) => {
          if (i === array.length - 1) {
            console.log(height);
          }

          return <Item key={height} height={height} />;
        })}
      </div>
    </div>
  );
}

export default App;
