import React, { useState } from "react";
import Page from "./Page.css";

const Page1 = () => {
  const [submit, setSubmit] = useState("");
  const [data, setData] = useState([]);
  let [data2, setData2] = useState([]);
  const [check, setCheck] = useState(false);

  const markUnMarkCheck = (event) => {
    setCheck(event.target.checked);
    console.log(event.target.parentElement);
    console.log(event.target.checked);
  };

  const handleRight = (e) => {
    if (check == true) {
      console.log("checked");
      console.log(check);
    } else {
      console.log(check);
    }
  };

  const handleLeft = (e) => {};

  function handleSubmit() {
    data.push(submit);
    setData([...data]);
    console.log(data);
    setSubmit("");
  }
  return (
    <>
      <div id="baap">
        <div id="input">
          Enter What You Want to add :{" "}
          <input
            type="text"
            style={{ height: "20px", width: "60vw" }}
            value={submit}
            onChange={(e) => {
              setSubmit(e.target.value);
            }}
          />
          <input
            type="button"
            value={"Submit"}
            style={{ marginLeft: "20px" }}
            onClick={handleSubmit}
          />
        </div>
        <div id="mainContainer">
          <div className="LeftContainer">
            Left Container
            <ul>
              {data &&
                data.map((event, index) => {
                  return (
                    <li key={index}>
                      {" "}
                      <input
                        type="checkbox"
                        value={check}
                        onChange={markUnMarkCheck}
                      />{" "}
                      {event}{" "}
                    </li>
                  );
                })}
            </ul>
          </div>

          <button onClick={handleLeft}> --Left </button>
          <button onClick={handleRight}> Right-- </button>

          <div className="RightContainer">
            Right Container
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page1;
