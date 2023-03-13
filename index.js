const NUMBER_OF_INTEGERS = [8000, 16000, 32000, 64000, 128000];
const NUMBER_OF_STRINGS = [2000, 4000, 8000, 16000, 32000];
//const NUMBER_OF_INTEGERS = [8000, 16000];
//const NUMBER_OF_STRINGS = [2000]; 

function App() {
  const [isLoadingIntegers, setIsLoadingIntegers] = React.useState(false);
  const [isLoadingStrings, setIsLoadingStrings] = React.useState(false);
  const [selectionIntegers, setSelectionIntegers] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [insertionIntegers, setInsertionIntegers] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [bubbleIntegers, setBubbleIntegers] = React.useState([0, 0, 0, 0, 0]);
  //cocktail sort
  const [bubbleIntegersImprouved, setBubbleIntegersImprouved] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  //Comb sort
  const [bubbleSecondIntegersImprouved, setBubbleSecondIntegersImprouved] =
    React.useState([0, 0, 0, 0, 0]);
  //Binary search sort
  const [insertionIntegersImprouved, setInsertionIntegersImprouved] =
    React.useState([0, 0, 0, 0, 0]);

  const [selectionStringsResults, setSelectionStringsResults] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [insertionStringsResults, setInsertionStringsResults] = React.useState([
    0, 0, 0, 0, 0,
  ]);
  const [bubbleStringsResuts, setBubbleStringsResults] = React.useState([
    0, 0, 0, 0, 0,
  ]);
React.useEffect(() => {
    console.log('Component did mount or update');
    // Perform side effects here
    return () => {
      console.log(bubbleIntegers);
      console.log("unmout")
      // Clean up side effects here
    };
  });
  /* const lab1 = () => {
    console.log("lab1 called");

    sortForIntegers();
    sortForStrings();
  }; */

  const calculateExecutionTime = (arr, myFunction) => {
    const startTime = new Date().getTime();
    myFunction(arr);
    const endTime = new Date().getTime();
    return endTime - startTime;
  };

  const selectionSortIntegers = (arr2) => {
    let arr = arr2;

    for (let i = 0; i < arr.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[min]) {
          min = j;
        }
      }
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const insertionSortIntegers = (arr2) => {
    let arr = arr2;
    for (let i = 1; i < arr.length; i++) {
        
      let j = i - 1;
      let temp = arr[i];
      while (j >= 0 && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
      
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const bubbleSortIntegers = (arr2) => {
    let arr = arr2;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const selectionSortStrings = (strings) => {
    for (let i = 0; i < strings.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < strings.length; j++) {
        if (strings[j] > strings[min]) {
          min = j;
        }
      }
      [strings[i], strings[min]] = [strings[min], strings[i]];
    }
    if (!check_if_sorted_strings(strings)) {
      console.error("NOT SORTED SELCECTION!!!");
    }
  };

  const insertionSortStrings = (strings) => {
    for (let i = 0; i < strings.length - 1; i++) {
      for (let j = i + 1; j > 0; j--) {
        if (strings[j] < strings[j - 1]) {
          [strings[j - 1], strings[j]] = [strings[j], strings[j - 1]];
        } else {
          break;
        }
      }
    }
    if (!check_if_sorted_strings(strings)) {
      console.error("NOT SORTED INSERTION!!!");
    }
  };

  const bubbleSortStrings = (strings) => {
    for (let i = 0; i < strings.length; i++) {
      for (let j = 0; j < strings.length - i - 1; j++) {
        if (strings[j] > strings[j + 1]) {
          [strings[j], strings[j + 1]] = [strings[j + 1], strings[j]];
        }
      }
    }
    if (!check_if_sorted_strings(strings)) {
      console.error("NOT SORTED!!! BUBBLE");
    }
  };
  const bubbleSortIntegersImprouved = (arr2) => {
    let arr = arr2;
    let start = 0,
      end = arr.length,
      swapped = true;

    while (swapped) {
      swapped = false;
      for (let i = start; i < end - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }

      end--;
      if (!swapped) break;

      swapped = false;
      for (let i = end - 1; i > start; i--) {
        if (arr[i - 1] > arr[i]) {
          let temp = arr[i];
          arr[i] = arr[i - 1];
          arr[i - 1] = temp;
          swapped = true;
        }
      }

      start++;
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };
  const insertionSortImprouved = (arr) => {
    
    function binarySearch(a, item, low, high)
{
  
    if (high <= low)
        return (item > a[low]) ?
                       (low + 1) : low;
  
    let mid = Math.floor((low + high) / 2);
  
    if(item == a[mid])
        return mid + 1;
  
    if(item > a[mid])
        return binarySearch(a, item,
                            mid + 1, high);
          
    return binarySearch(a, item, low,
                            mid - 1);
}
for (let i = 1; i < arr.length; i++)
        {
            let j = i - 1;
            let x = arr[i];
  
            // Find location to insert
            // using binary search
            let loc = Math.abs(
                binarySearch(arr, x,
                                    0, j));
  
            // Shifting array to one
            // location right
             
            while (j >= loc)
            {
                arr[j + 1] = arr[j];
                j--;
            }
  
            // Placing element at its
            // correct location
            arr[j+1] = x;
        }

    
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };
  const bubbleSortIntegersSecondImprouvement = (arr) => {
    function getNextGap(gap)
    {
        // Shrink gap by Shrink factor
        gap = parseInt((gap*10)/13, 10);
        if (gap < 1)
            return 1;
        return gap;
    }
    let n = arr.length;
   
        // initialize gap
        let gap = n;
   
        // Initialize swapped as true to
        // make sure that loop runs
        let swapped = true;
   
        // Keep running while gap is more than
        // 1 and last iteration caused a swap
        while (gap != 1 || swapped == true)
        {
            // Find next gap
            gap = getNextGap(gap);
   
            // Initialize swapped as false so that we can
            // check if swap happened or not
            swapped = false;
   
            // Compare all elements with current gap
            for (let i=0; i<n-gap; i++)
            {
                if (arr[i] > arr[i+gap])
                {
                    // Swap arr[i] and arr[i+gap]
                    let temp = arr[i];
                    arr[i] = arr[i+gap];
                    arr[i+gap] = temp;
   
                    // Set swapped
                    swapped = true;
                }
            }
        }
    
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };

  const sortForIntegers = () => {
    //setIsLoadingIntegers(true);
    console.log("method called");
    let selectionMethodResuts = [];
    let insertionMethodResults = [];
    let bubbleMethodResults = [];
    let bubbleMethodImprouvedResuts = [];
    let insertionIntegersImprouvedResults = [];
    let bubbleMethodSecondImprouvedResults = [];
     NUMBER_OF_INTEGERS.map((length) => {
      let arr = generateIntegerArray(length);
      // selection/insertion/Bubble
      

       selectionMethodResuts.push(
        calculateExecutionTime(arr, selectionSortIntegers)
      );
        arr = generateIntegerArray(length);
      insertionMethodResults.push(
        calculateExecutionTime(arr, insertionSortIntegers)
      );
       arr = generateIntegerArray(length);
      bubbleMethodResults.push(calculateExecutionTime(arr, bubbleSortIntegers));
       arr = generateIntegerArray(length);
      bubbleMethodImprouvedResuts.push(
        calculateExecutionTime(arr, bubbleSortIntegersImprouved)
      );
       let arr3 = generateIntegerArray(length);
      insertionIntegersImprouvedResults.push(
        calculateExecutionTime(arr3, insertionSortImprouved)
      );
       let arr4 = generateIntegerArray(length);
      bubbleMethodSecondImprouvedResults.push(
        calculateExecutionTime(arr4, bubbleSortIntegersSecondImprouvement)
      );
    });
    setInsertionIntegers(insertionMethodResults);
    //setIsLoadingIntegers(false);
    setBubbleIntegers(bubbleMethodResults);
    setSelectionIntegers(selectionMethodResuts);
    setBubbleIntegersImprouved(bubbleMethodImprouvedResuts);
    setInsertionIntegersImprouved(insertionIntegersImprouvedResults);
    setBubbleSecondIntegersImprouved(bubbleMethodSecondImprouvedResults);
  };
  const sortForStrings = async () => {
    console.log("method called");
    //setIsLoadingStrings(true);
    let selectionMethodResuts = [];
    let insertionMethodResults = [];
    let bubbleMethodResults = [];
     NUMBER_OF_STRINGS.map((length) => {
      let strings = generateStringArray(length);
      selectionMethodResuts.push(
        calculateExecutionTime(strings, selectionSortStrings)
      );
      insertionMethodResults.push(
        calculateExecutionTime(strings, insertionSortStrings)
      );
      bubbleMethodResults.push(
        calculateExecutionTime(strings, bubbleSortStrings)
      );
    });
    //setIsLoadingStrings(false);
    setBubbleStringsResults(bubbleMethodResults);
    setInsertionStringsResults(insertionMethodResults);
    setSelectionStringsResults(selectionMethodResuts);
  };
  return (
    <div>
      <p>Lab 1</p>
      <h2>For Integers :</h2>
      {isLoadingIntegers && <div className="loader"></div>}
      <button onClick={sortForIntegers}>Sort Integers in All methods :</button>
      <h6>Selection Method : </h6>
      <p>selectionMethodResuts: </p>
      {selectionIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Insertion Method : </h6>
      <p>insertionMethodResuts: </p>
      {insertionIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Bubble Method : </h6>
      <p>bubbleMethodResuts: </p>
      {bubbleIntegers.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Bubble Method IMPROUVED: </h6>
      <p>bubbleMethodImprouvedResuts: IMPROUVED</p>
      {bubbleIntegersImprouved.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Insertion Method IMPROUVED: </h6>
      <p>insertionMethodResuts: IMPROUVED</p>
      {insertionIntegersImprouved.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>SECOND Bubble Method IMPROUVED: </h6>
      <p>bubbleMethodImprouvedResuts: IMPROUVED SECOND</p>
      {bubbleSecondIntegersImprouved.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}

      <h2>For Strings :</h2>
      {isLoadingStrings && <div className="loader"></div>}
      <button onClick={sortForStrings}>Sort Integers in All methods : (~32 second wait)</button>
      <h6>Selection Method : </h6>
      <p>selectionMethodResuts: </p>
      {selectionStringsResults.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Insertion Method : </h6>
      <p>insertionMethodResuts: </p>
      {insertionStringsResults.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
      <h6>Bubble Method : </h6>
      <p>bubbleMethodResuts: </p>
      {bubbleStringsResuts.map((result, index) => (
        <li key={index}>{result} ms</li>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

function check_if_sorted(arr) {
  let i = 1;
  let is_sorted = 1;
  while (i < arr.length && is_sorted) {
    if (arr[i - 1] > arr[i]) {
      is_sorted = 0;
      break;
    }
    i += 1;
  }
  return is_sorted;
}
function check_if_sorted_strings(str) {
  let i = 1;
  let is_sorted = 1;
  while (i < str.length && is_sorted) {
    if (str[i - 1] < str[i]) {
      is_sorted = 0;
      break;
    }
    i += 1;
  }
  return is_sorted;
}

 function generateIntegerArray(length) {
  let arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * 100)); // generates a random integer between 0 and 99
  }
  return arr;
}

function generateStringArray(length) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let strings = [];
  for (let i = 0; i < length; i++) {
    let stringLength = Math.floor(Math.random() * 3) + 4;
    let randomString = "";
    for (let j = 0; j < stringLength; j++) {
      const randomCharIndex = Math.floor(Math.random() * chars.length);
      randomString += chars[randomCharIndex];
    }
    strings.push(randomString);
  }
  
  return strings;
}
