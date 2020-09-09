import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export class Resume extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reports: []
        }
    }
    componentDidMount = () => {
        this.getAllPlaces()
    }
    getAllPlaces = () => {
        axios.get('http://localhost:5000/api/reports/')
        .then(({data}) => {
            this.setState({reports: data})
        })    
    }
    handleDelete = () => {
        
    }
    render() {
        const ReportsList = this.state.reports.map(report => (
            <div key={report._id}>
                <h4>{report.name} - {report.description}</h4>
                <Link className='btn btn-primary' to={'/edit/' + report._id}>Edit</Link>
                <button className='btn btn-danger' onClick={this.handleDelete}>Delete report</button>
            </div>
        ))
        return (
            <div>
                <h2>Manage your Reports</h2>
                {ReportsList}
            </div>
        )
    }
}

export default Admin