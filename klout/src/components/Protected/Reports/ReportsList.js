import React, { Component } from 'react'
import axios from 'axios'
import Map from './Map'

class ReportsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            places: [],
            showMap: false
        }
    }

    componentDidMount() {
        this.getReports()
    }

    getReports = () => {
        axios.get("http://localhost:3000/api/reports")
        .then(response => {
            console.log(response)
            this.setState(state => ({
                ...state,
                reports: response.data
            }))
        })
        .catch(err => console.log("Error: ", err))
    }

    
    
    render() {

        const listReports = this.state.reports.map(report => {
            return (
                <li className="list-group-item" key={report.facebook.follows}>
                    <div className="row">
                        
                        <div className="m-3">
                            <h2>{report.facebook.like}</h2>
                            <p>{report.facebook.rate}</p>
                        </div>
                    </div>                    
                </li>
            )
        })

        return (
            <div className="list-group">
                {listReports}
            </div>
        )
    }
}

export default ReportsList
