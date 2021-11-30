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
          for (let [i, id] of Object.entries(items)) {
            const items = [...document.getElementsByClassName("item")];
            //animatioms
            // const index = document.getElementById(id[0]).style;
            // const j = document.getElementById(id[1]).style;
            setTimeout(() => {
              items[id[0]].style.height = id[3] + "px";
              items[id[1]].style.height = id[2] + "px";
            }, i * 50);
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
          }
          /*
          
          */
        }}
      >
        bubble sort
      </button>
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
