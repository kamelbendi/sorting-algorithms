const NUMBER_OF_INTEGERS = [8000, 16000, 32000, 64000, 128000];
const NUMBER_OF_STRINGS = [2000, 4000, 8000, 16000, 32000];
/* const NUMBER_OF_INTEGERS = [8000, 16000];
const NUMBER_OF_STRINGS = [2000]; */

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
  //shell sort
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

  const selectionSortIntegers = (arr) => {
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

  const insertionSortIntegers = (arr) => {
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

  const bubbleSortIntegers = (arr) => {
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
  const bubbleSortIntegersImprouved = (arr) => {
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
    let n = arr.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
      for (let i = gap; i < n; i += 1) {
        let temp = arr[i];

        let j;
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap];
        }

        arr[j] = temp;
      }
    }
    if (!check_if_sorted(arr)) {
      console.error("NOT SORTED!!!");
    }
  };
  const bubbleSortIntegersSecondImprouvement = (arr) => {
    function is_array_sorted(arr) {
      var sorted = true;
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          sorted = false;
          break;
        }
      }
      return sorted;
    }

    var iteration_count = 0;
    var gap = arr.length - 2;
    var decrease_factor = 1.25;

    // Repeat iterations Until array is not sorted

    while (!is_array_sorted(arr)) {
      // If not first gap  Calculate gap
      if (iteration_count > 0)
        gap = gap == 1 ? gap : Math.floor(gap / decrease_factor);

      // Set front and back elements and increment to a gap
      var front = 0;
      var back = gap;
      while (back <= arr.length - 1) {
        // Swap the elements if they are not ordered

        if (arr[front] > arr[back]) {
          var temp = arr[front];
          arr[front] = arr[back];
          arr[back] = temp;
        }

        // Increment and re-run swapping

        front += 1;
        back += 1;
      }
      iteration_count += 1;
    }
  };

  const sortForIntegers = () => {
    setIsLoadingIntegers(true);
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
      console.log(arr);

      selectionMethodResuts.push(
        calculateExecutionTime(arr, selectionSortIntegers)
      );
      insertionMethodResults.push(
        calculateExecutionTime(arr, insertionSortIntegers)
      );
      bubbleMethodResults.push(calculateExecutionTime(arr, bubbleSortIntegers));
      bubbleMethodImprouvedResuts.push(
        calculateExecutionTime(arr, bubbleSortIntegersImprouved)
      );
      insertionIntegersImprouvedResults.push(
        calculateExecutionTime(arr, insertionSortImprouved)
      );
      bubbleMethodSecondImprouvedResults.push(
        calculateExecutionTime(arr, bubbleSortIntegersSecondImprouvement)
      );
    });
    console.log("hello?");
    console.log(selectionMethodResuts);
    console.log(insertionMethodResults);
    console.log(bubbleMethodResults);
    setIsLoadingIntegers(false);
    setBubbleIntegers(bubbleMethodResults);
    setSelectionIntegers(selectionMethodResuts);
    setInsertionIntegers(insertionMethodResults);
    setBubbleIntegersImprouved(bubbleMethodImprouvedResuts);
    setInsertionIntegersImprouved(insertionIntegersImprouvedResults);
    setBubbleSecondIntegersImprouved(bubbleMethodSecondImprouvedResults);
  };
  const sortForStrings = () => {
    console.log("method called");
    setIsLoadingStrings(true);
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
    setIsLoadingStrings(false);
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
      <button onClick={sortForStrings}>Sort Integers in All methods :</button>
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
