import { useState, useRef, useEffect } from "react";
import Item from "./Item";
import { bubbleSort } from "./bubbleSort";
import { selectionSort } from "./selectionSort";
import { insertionSort } from "./insertionSort";
import { mergeSort } from "./mergeSort";
import { radixSort } from "./radixSort";
import { quickSort } from "./quickSort";

function App() {
  const [disable, setDisable] = useState(false);
  const [tick, setTick] = useState(0);
  const [range, setRange] = useState(30);
  const [array, setArray] = useState(
    new Array(+range).fill("").map((_, i) => {
      return Math.random() * (70 - 30) + 30;
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
        <div className="col">
          <input
            type="range"
            min={10}
            max={100}
            disabled={disable}
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
          <p className="size">size and speed</p>
        </div>

        <div className="button-container">
          <button
            disabled={disable}
            onClick={async () => {
              const DOMitems = [...document.getElementsByClassName("item")];
              setDisable(true);
              await new Promise((resolve) =>
                resolve(bubbleSort(array, DOMitems, setDisable))
              );
            }}
          >
            bubble sort
          </button>
          <button
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              selectionSort(array, DOMitems);
            }}
          >
            selection sort
          </button>
          <button
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              console.log(insertionSort(array, DOMitems));
            }}
          >
            insertion sort
          </button>
          <button
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              console.log(mergeSort(array, DOMitems, 0, array.length - 1));
            }}
          >
            merge sort
          </button>
          <button
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              console.log(radixSort(array, DOMitems));
            }}
          >
            radix sort
          </button>
          <button
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              console.log(quickSort(array, 0, array.length - 1, DOMitems));
            }}
          >
            quick sort
          </button>
        </div>
        <button
          disabled={disable}
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
