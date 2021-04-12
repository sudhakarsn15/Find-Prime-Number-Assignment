import "./styles.css";

export default function App() {
  function determinePrime() {
    var inputTextValue = document.getElementById("inputText").value;
    var resultDiv = document.getElementById("prime");
    let isPrime = true;
    if (!/^[0-9]+$/.test(inputTextValue)) {
      window.alert("Only numbers are allowed");
    } else if (inputTextValue <= 0) {
      window.alert("Please enter positive integer");
    } else if (inputTextValue == 1) {
      window.alert("1 is neither prime nor composite number.");
    } else if (inputTextValue > 1) {
      for (let i = 2; i < inputTextValue; i++) {
        if (inputTextValue % i == 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        resultDiv.innerHTML = inputTextValue + " is a prime number";
      } else {
        resultDiv.innerHTML = inputTextValue + " is a not prime number";
      }
    }
  }

  return (
    <div className="App">
      <h1>Assignment 1</h1>
      <p>Input a number in a text box</p>
      <p>
        <input id="inputText"></input>
      </p>
      <p>Have a buttton below the text box called "Find Prime</p>
      <p>
        <button onClick={determinePrime}>Find Prime</button>
      </p>
      <p>
        On click of the button the JS used defined function <br />-
        determinePrime is called which should display the result in the
        {"<p id='prime'/>"}
      </p>
      <br />
      <p id="prime"></p>
      <br />
      <NewApp />
    </div>
  );
}

export function NewApp() {
  function multiplFunc(event) {
    var multiValue = document.getElementById("inputBox1").value;
    var multiLimit = document.getElementById("inputBox2").value;
    var multiArray = [];
    var multObject = {};
    var selectedValue = event.target.value;
    if (selectedValue === "forLoopOption") {
      window.alert("calling for loop");
      for (i = 1; i <= multiLimit; i++) {
        console.log(multiValue, "x", i, "=", multiValue * i);
        [(multiValue, "x", i, "=", multiValue * i)];
        multiArray.push(multObject);
      }
    } else if (selectedValue === "whileLoopOption") {
      window.alert("calling for while loop");
      var index = 1;
      while (index <= multiLimit) {
        console.log(multiValue, "x", i, "=", multiValue * i);
        index++;
      }
    }
  }

  return (
    <div>
      <h1>Assignement 2</h1>
      <p>Have 2 text box</p>
      <p>One for enter the number</p>
      <p>
        <input id="inputBox1"></input>
      </p>
      <p>other to enter limit</p>
      <p>
        <input id="inputBox2"></input>
      </p>

      <p>
        Say, <u>first text box is 5</u> and <u>second text box is 20</u>
        <br />
        the it should print the muliplication table from 1 to 20
      </p>
      <br />
      <br />
      <p>Have 2 radio button like this</p>
      <p>
        <input
          type="radio"
          value="forLoopOption"
          name="radioButton"
          onClick={multiplFunc}
        ></input>{" "}
        using for loop
      </p>
      <p>
        <input
          type="radio"
          value="whileLoopOption"
          name="radioButton"
          onClick={multiplFunc}
        ></input>{" "}
        uing while loop
      </p>
      <p>
        {/* <button onClick={multiplFunc}>Genrate multiplication</button> */}
      </p>
      <p id="printValues"></p>
    </div>
  );
}
