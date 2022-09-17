import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleulowclick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    settext(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const clear = () => {
    console.log("clear was clicked" + text);
    let newText = "";
    settext(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleCopy = () => {
    console.log("i am copy");
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges(); //selecet text removw ho
    props.showAlert("Copied to Clipboard!", "success");
  };

  const handleonchange = (event) => {
    console.log("on change");
    settext(event.target.value);
  };
  const [text, settext] = useState("");
  // text="new text"; //worng way to chnge the state
  //   settext = "new text";
  return (
    <>
      <div
        className="conatiner"
        style={{ color: props.mode === "dark" ? "white" : "#1C1C1C " }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#1C1C1C " : "white",
              color: props.mode === "dark" ? "white" : "#1C1C1C ",
            }}
            id="myBox"
            rows="9"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-1"
          onClick={handleupclick}
        >
          Convert to uppercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-2 my-1"
          onClick={handleulowclick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-2 my-1"
          onClick={clear}
        >
          Clear text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary  mx-2 my-1"
          onClick={handleCopy}
        >
          Copy text
        </button>
      </div>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "#1C1C1C " }}
      >
        <h2>WordCounter</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes to read
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
