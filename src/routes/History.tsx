import React from 'react';

export interface IListItem
{
    eventKey: string,
    text: string
}

const hidden_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "none";
  }
}

const show_sidebar = () => {
  const sideBarElement = document.getElementById("mySidebar");
  if (sideBarElement) {
    sideBarElement.style.display = "block";
  }
}

function History() {
  let lateralBar: IListItem[] = [];
  lateralBar = [
    {
      eventKey: "zero_item",
      text: "| | |"
    },
    {
      eventKey: "first_item",
      text: "All Card"
    },
    {
      eventKey: "second_item",
      text: "Trap Cards"
    },
    {
      eventKey: "third_item",
      text: "Magic Cards"
    },
    {
      eventKey: "fourth_item",
      text: "Monster Cards"
    },
  ]
  
  return (
    <div>
       <div className="w3-sidebar w3-bar-block w3-border-right" style={{display: "block"}} id="mySidebar">
          <button onClick={() => hidden_sidebar()} className="w3-bar-item w3-large">Close &times;</button>
          <a href="/cards" className="w3-bar-item w3-button">Link 1</a>
          <a href="/" className="w3-bar-item w3-button">Link 2</a>
          <a href="/cards" className="w3-bar-item w3-button">Link 3</a>
      </div>

      <div className="w3-teal">
        <button className="w3-button w3-teal w3-xlarge" onClick={(e) => show_sidebar()}>☰</button>
      </div>
    </div>
  );
}

export default History;