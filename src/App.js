import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Navigation from "./navigation/Navigation";
import HomePage from "./HomePage";
import Lista from "./lista/Lista";

import { useEffect, useState } from "react";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getLocalStorage());
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || desc === "") {
      return;
    }

    const newItem = { title, desc };
    console.log(newItem);

    setList([...list, newItem]);

    setIsAdding(false);
    setTitle("");
    setDesc("");
  };

  const deleteItem = (index) => {
    let arr1 = list.slice(0, index);
    let arr2 = list.slice(index + 1);
    setList([...arr1, ...arr2]);
  };

  const moveUp = (first, second) => {
    let newList = [...list];
    let temp = newList[first];
    newList[first] = newList[second];
    newList[second] = temp;

    setList(newList);
  };

  const moveDown = (first, second) => {
    let newList = [...list];
    let temp = newList[first];
    newList[first] = newList[second];
    newList[second] = temp;

    setList(newList);
  };

  return (
    <React.Fragment>
      <Router>
        <Navigation list={list}></Navigation>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/lista">
          <Lista
            list={list}
            deleteItem={deleteItem}
            moveUp={moveUp}
            moveDown={moveDown}
          ></Lista>
          <div class="text-center" style={{ marginBottom: "3rem" }}>
            <button class="newItem btn" onClick={() => setIsAdding(!isAdding)}>
              Add New
            </button>
          </div>
          {isAdding && (
            <form class="newItemForm">
              <div class="text-center">
                <h3>Item Details</h3>
              </div>
              <div class="form-control">
                <label htmlFor="title">Item: </label>
                <input
                  name="itemTitle"
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                ></input>
              </div>
              <div class="form-control">
                <label htmlFor="desc">Description: </label>
                <textarea
                  name="itemDesc"
                  id="desc"
                  cols="30"
                  rows="7"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                ></textarea>
              </div>
              <button class="submitItem" onClick={handleSubmit}>
                Add
              </button>
            </form>
          )}
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
