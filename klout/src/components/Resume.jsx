import React, { Component } from "react";
import axios from "axios";

export class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }
  componentDidMount = () => {
    this.getAllReports();
  };
  getAllReports = () => {
    axios.get("http://localhost:3000/api/reports").then(({ data }) => {
      this.setState({ reports: data });
    });
  };
  handleDelete = () => {};
  render() {
    const Reports = this.state.reports.map(function (report) {
      return report;
    });
    return (
      <div>
        <h2> Reports</h2>
        {Reports}
      </div>
    );
  }
}

export default Resume;
