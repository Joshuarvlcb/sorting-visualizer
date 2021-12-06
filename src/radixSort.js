export const radixSort = (arr, items) => {
  /*
    how it works
    its a integer sorting algorithm doesnt make comparisons
    
    if a number has more digits its larget than number with fewer digits 
    
    [1222,2,33,23,232] 
    we create 10 buckets
    we start by looking right most digit and group the numbers in the buckets based off that number
    
    after we form them back into a list
    repeat process with next digit from the right
    
    
    steps
    i will iterate largest length of a number times from our array
    
    while j is iterating we push values in our buckets
    
    when j is  done use a setiteraval to change the array values
    after we change values iterate j one more time
    increment i 
    
    clear iterval when i == count
    */
  //returns the digit in num at the given place value
  const getDigit = (num, place) => {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  };
  //how many times will we place into buckets
  //pass in number it returns how many digits are in there
  const digitCount = (num) => {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  };
  //return count of biggest number
  const mostDigits = (arr) => {
    let max = 0;
    for (let number of arr) {
      max = Math.max(max, digitCount(number));
    }
    return max;
  };
  let used = [""];
  let pre = 0;
  const randomize = (bucket) => {
    //!!gaol is to return unique value
    if (bucket?.length == 0) return;
    //?how to randomize i & j
    /*
        let i = (math.random() * 1 + 9) + 1
        num  -1
        let j = (math.random() * 1 + buckets[i].length) + 1
        num  -1
  check to see if previous of used does == i
  randomize(buckets)
  check to see if there are items in i if not splice it
  if(buckets[i].length == 0){
      splice(1,i)
      return randomize(buckets)
  }
  !undefined error USE optional chaining
    if(buckets[i][j].length == 0){
      return randomize(buckets)
  }
  let temp = arr[i][j]
  arr[i]splice(1,j)
  return temp
  after we randomize splice j
      buckets

  */
    //!make it zero indexed
    const i = Math.floor(Math.random() * 9);
    if (bucket[i]?.length == 0) {
      bucket.splice(i, 1);
      return randomize(bucket);
    }
    //pre
    if (i === used[pre]) {
      return randomize(bucket);
    }
    used.push(i);
    pre++;
    const j = Math.floor(Math.random() * bucket[i]?.length);
    if (Number.isNaN(j)) {
      return randomize(bucket);
    } else {
      let temp = bucket[i][j];
      console.log(bucket[i][j]);
      bucket[i].splice(j, 1);
      return temp;
    }
  };

  let largestDigit = mostDigits(arr);
  let k = 0;
  let j = 0;
  let go = true;
  let buckets = Array.from({ length: 10 }, () => []);
  const radix = setInterval(() => {
    if (j == arr.length - 1 && go) {
      items[j].style.backgroundColor = "#04948a";
      k++;
      //sort
      arr = [].concat(...buckets);
      j = 0;
      //loop over items and give them new values
      //we want this to happen only wher we are done looping
      //stop
      go = false;
      let key = 0;

      /*
      randamize bucket
      [[23][23][23223,232]]
      randamize i and j
      splice j
      splice i if no more exist
    ?how to know what ive used so far
    global vaariable 
    function will call itself only if i was previous
    {0 34
    1
    2
    3
    4
    5

}
    */
      let copy = Object.entries(arr);
      console.log(copy);
      items[key].style.backgroundColor = "red";
      const animateBars = setInterval(() => {
        //randomize index
        //items = indexValue
        let val = Math.floor(Math.random() * copy.length - 1) + 1;
        // copy.splice(val, 1);
        /*
        store index and value
        index = value
        */
        console.log(val);
        items[val].style.backgroundColor = "#04948a";
        items[val].style.height = copy[val][1] + "%";
        key++;
        items[val].style.backgroundColor = "red";

        if (key == arr.length) {
          items[val].style.backgroundColor = "#04948a";

          setTimeout(() => {
            go = true;
            buckets = Array.from({ length: 10 }, () => []);
          }, 50);
          clearInterval(animateBars);
        }
      }, 20);

      used = [];
      if (k == largestDigit) {
        //animate bars
        //clearInterval
        console.log(arr);
        clearInterval(radix);
      }
    } else if (go) {
      /*
      bucket logic
      get the index of the number then push number
      */
      buckets[getDigit(arr[j], k)].push(arr[j]);
      items[j].style.backgroundColor = "#04948a";
      j++;
      items[j].style.backgroundColor = "black";
    }
  }, 50);

  //   for (let i = 0; i < largestDigit; i++) {
  // let digitBuckets = Array.from({ length: 10 }, () => []);
  // for (let j = 0; j < arr.length; j++) {
  //   digitBuckets[getDigit(arr[j], i)].push(arr[j]);
  // }
  // console.log(digitBuckets);
  // arr = [].concat(...digitBuckets);
  //   }
  //   return arr;
};
