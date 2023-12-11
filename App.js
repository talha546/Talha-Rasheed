// import logo from './logo.svg';
import React from 'react';
import './App.css';

// function App() {
 

function App() {
  const name = "Hello world";
  const abc = { name: "hello world object" };
  const number = 12345;
  const data = ["we", "are", "uniqe"];
  const list = [
    { name: "world no 1 car" },
    { name: "world no 1 bike" },
    { name: "world no 1 watch " },
  ];
  const complex = [
    { company: "Mercedes", Jobs: ["Benz C-Class", "Benz E-Class"] },
    { company: "LandCruiser", Jobs: ["Toyota Land Cruiser", " Prado"] }
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.shafaq.com/media/arcella/1697820719299.jpeg" className="App-logo" alt="logo" />
        <p>{name}</p>
        <p>{number}</p>
        <p>{abc.name}</p>
         <ol>
           {data.map(function (item, index) {
            return <li key={index}>{item}</li>;
          })}
        </ol>
        <ul>
          {list.map(function (item, index) {
            return <li key={index}>{item.name}</li>;
          })}
        </ul>
        <table border="3px">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Jobs</th>
            </tr>
          </thead>
          <tbody>
            {complex.map(function (item, index) {
              return (
                <tr key={index}>
                  <td>{item.company}</td>
                  <td>
                    <ul>
                      {item.Jobs.map(function (job, index) {
                        return <li key={index}>{job}</li>;
                      })}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
