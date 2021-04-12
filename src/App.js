import "./styles.css";

export default function App() {
  function determinePrime() {
    var inputTextValue = document.getElementById("inputText").value;
    console.log("here", inputTextValue);
    let isPrime = true;
    // check if number is equal to 1
    if (inputTextValue === 1) {
      alert.show("1 is neither prime nor composite number.");
    }
    // check if number is greater than 1
    else if (inputTextValue > 1) {
      // looping through 2 to number-1
      for (let i = 2; i < inputTextValue; i++) {
        if (inputTextValue % i == 0) {
          isPrime = false;
          break;
        }
      }

      if (isPrime) {
        // console.log(`${inputTextValue} is a prime number`);
        console.log(inputTextValue, "is a prime number");
      } else {
        console.log(inputTextValue, "is a not prime number");
      }
    }

    // check if number is less than 1
    else {
      console.log("The number is not a prime number.");
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
      <br />
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
    </div>
  );
}
