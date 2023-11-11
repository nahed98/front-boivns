import React, { Component } from "react";

class supplied extends Component {
  state = {};

  render() {
    const dash = [
      {
        name: "hello",
        address: "hello",
        Date: "hello",
        numberHeads: "hello",
        portEntry: "hello",
      },

      {
        name: "hello1",
        address: "hello1",
        Date: "hello1",
        numberHeads: "hello1",
        portEntry: "hello1",
      },
    ];
    return (
      <table class="table">
        <thead class="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">Date</th>
            <th scope="col">Number of Heads</th>
            <th scope="col">Port of entry</th>
          </tr>
        </thead>
        <tbody>
          {dash.map((d) => (
            <tr>
              <th scope="row">{d.name}</th>
              <td>{d.address}</td>
              <td>{d.Date}</td>
              <td>{d.numberHeads}</td>
              <td>{d.portEntry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default supplied;
