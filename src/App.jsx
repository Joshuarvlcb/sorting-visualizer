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
  const [speed, setSpeed] = useState(100);
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
      <header className="header">
        <input
          type="range"
          min={10}
          max={80}
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
        <div className="button-container">
          <button
            onClick={async () => {
              const DOMitems = [...document.getElementsByClassName("item")];

              await new Promise((resolve) =>
                resolve(bubbleSort(array, DOMitems))
              );
            }}
          >
            bubble sort
          </button>
          <button>insertion sort</button>
          <button>radix sort</button>
          <button>merge sort</button>
        </div>
        <button
          onClick={() => {
            //complementary colors adobe color wheel
            setArray(
              new Array(+range).fill("").map((_, i) => {
                return Math.random() * (100 - 30) + 30;
              })
            );
          }}
        >
          generate new array
        </button>
      </header>
      <div className="array-container">
        <div className="array">
          {array.map((height, i) => {
            if (i === array.length - 1) {
              console.log(height);
            }

            return <Item key={height} height={height} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
