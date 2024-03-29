import { useState, useEffect } from "react";
import Item from "./components/Item";
import { BubbleSort } from "./algorithms/bubbleSort";
import { selectionSort } from "./algorithms/selectionSort";
import { insertionSort } from "./algorithms/insertionSort";
import { mergeSort } from "./algorithms/mergeSort";
import { quickSort } from "./algorithms/quickSort";

function App() {
  const [disable, setDisable] = useState(false);
  const [range, setRange] = useState(35);
  const [array, setArray] = useState(
    new Array(+range).fill("").map((_, i) => {
      return Math.random() * (70 - 30) + 30;
    })
  );
  const [activeAlgo, setActiveAlgo] = useState(null);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const array = [23, 56, 78, 2, 1, 34, 67, Infinity];
    const partition = (arr, l, r) => {
      const swap = (arr, left, right) => {
        return ([arr[left], arr[right]] = [arr[right], arr[left]]);
      };

      let pivot = arr[l];

      let i = l;
      let j = r;
      while (i < j) {
        do {
          i++;
        } while (arr[i] <= pivot);
        do {
          j--;
        } while (arr[j] > pivot);

        if (i < j) {
          swap(arr, i, j);
        }
      }

      swap(arr, l, j);
      return j;
    };

    const quick = (l, r) => {
      if (l < r) {
        const pivot = partition(array, l, r);
        quick(l, pivot);
        quick(pivot + 1, r);
      } else return;
    };
    quick(0, array.length - 1);
    console.log(array);
  }, [speed]);
  const calcSpeed = (range) => {
    let speed = 100;
    if ((range >= 10) & (range <= 25)) {
      speed = 150;
    } else if (range >= 25 && range <= 40) {
      speed = 100;
    } else if (range >= 40 && range <= 60) {
      speed = 50;
    }
    return speed;
  };
  return (
    <div className="App">
      <header className="header">
        <div className="col">
          <input
            type="range"
            min={10}
            max={60}
            value={range}
            disabled={disable}
            onChange={(e) => {
              setRange(e.target.value);
              setArray(
                new Array(+e.target.value).fill("").map((_, i) => {
                  return Math.random() * (70 - 30) + 30;
                })
              );
              const DOMitems = [...document.getElementsByClassName("item")];
              DOMitems.forEach((curr) => {
                curr.style.backgroundColor = "#1358b3";
              });
              setSpeed(calcSpeed(range));
            }}
          />
          <p>size & speed</p>
        </div>

        <div className="button-container">
          <button
            style={{
              color: `${
                activeAlgo == "bubble" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={async () => {
              setActiveAlgo("bubble");
              const DOMitems = [...document.getElementsByClassName("item")];
              setDisable(true);
              BubbleSort(array, DOMitems, speed).then((res) => {
                setDisable(false);
                setArray(res);
              });
            }}
          >
            bubble sort
          </button>
          <button
            style={{
              color: `${
                activeAlgo == "selectionSort" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              setDisable(true);

              setActiveAlgo("selectionSort");
              selectionSort(array, DOMitems, speed).then((res) => {
                setDisable(false);
                setArray(res);
              });
            }}
          >
            selection sort
          </button>
          <button
            style={{
              color: `${
                activeAlgo == "insertionSort" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={() => {
              const DOMitems = [...document.getElementsByClassName("item")];
              setDisable(true);

              setActiveAlgo("insertionSort");

              insertionSort(array, DOMitems, speed).then((res) => {
                setDisable(false);
                setArray(res);
              });
            }}
          >
            insertion sort
          </button>
          <button
            style={{
              color: `${
                activeAlgo == "mergeSort" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={() => {
              setDisable(true);
              setActiveAlgo("mergeSort");

              const DOMitems = [...document.getElementsByClassName("item")];
              mergeSort(DOMitems, 0, array.length - 1, speed).then((_) => {
                setDisable(false);
                setArray(array.sort((a, b) => a - b));
              });
            }}
          >
            merge sort
          </button>
          {/* <button
            style={{
              color: `${
                activeAlgo == "radixSort" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={() => {
              setDisable(true);

              setActiveAlgo("radixSort");
              const DOMitems = [...document.getElementsByClassName("item")];
              radixSort(array, DOMitems, speed).then((res) => {
                setDisable(false);
                setArray(res);
              });
            }}
          >
            radix sort
          </button> */}
          <button
            style={{
              color: `${
                activeAlgo == "quickSort" && disable
                  ? "#00E01A"
                  : !disable
                  ? "white"
                  : "red"
              }`,
            }}
            disabled={disable}
            onClick={async () => {
              setDisable(true);

              setActiveAlgo("quickSort");
              const DOMitems = [...document.getElementsByClassName("item")];

              quickSort([...array, 0], 0, array.length, DOMitems, speed).then(
                (res) => {
                  setDisable(false);
                  setArray(res);
                }
              );
            }}
          >
            quick sort
          </button>
        </div>
        <button
          disabled={disable}
          style={{ color: `${disable ? "red" : "white"}` }}
          onClick={() => {
            //complementary colors adobe color wheel
            setArray(
              new Array(+range).fill("").map((_, i) => {
                return Math.random() * (70 - 30) + 30;
              })
            );
            const DOMitems = [...document.getElementsByClassName("item")];
            DOMitems.forEach((curr) => {
              curr.style.backgroundColor = "#1358b3";
            });
          }}
        >
          generate new array
        </button>
      </header>
      <div className="array-container">
        <div className="array">
          {array.map((height) => {
            return <Item height={height} />;
          })}
        </div>
        <div className="transition"></div>
      </div>
    </div>
  );
}

export default App;
