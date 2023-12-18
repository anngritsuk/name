import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastName: "",
      firstName: "",
      patronymicName: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { lastName, firstName, patronymicName } = this.state;

    return (
      <div className="container">
        <div className="wrapper">
          <div>
            <input
              type="text"
              className="input"
              name="lastName"
              onChange={this.handleChange}
              value={lastName}
            />
          </div>
          <div>
            <input
              type="text"
              className="input"
              name="firstName"
              onChange={this.handleChange}
              value={firstName}
            />
          </div>
          <div>
            <input
              type="text"
              className="input"
              name="patronymicName"
              onChange={this.handleChange}
              value={patronymicName}
            />
          </div>
        </div>
        <div className="output">
          <div>{lastName} </div>
          <div>{firstName} </div>
          <div>{patronymicName}</div>
        </div>
      </div>
    );
  }
}
