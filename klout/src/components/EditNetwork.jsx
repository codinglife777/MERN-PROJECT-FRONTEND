import React, { Component } from 'react'
import axios from 'axios'

export class EditNetwork extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            
        }
    }
    componentDidMount = () => {
        this.getNetwork()
    }
    getNetwork = () => {
        const { params } = this.props.match
        axios.get('http://localhost:3000/api/network/' + params.id)
        .then(({data}) => {
            this.setState({
                username: data.username,
               
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleChange = ({target}) => {
        const {username, value} = target
        this.setState({
            [username]: value
        })
    }
    handleSave = e => {
        e.preventDefault()
        const { params } = this.props.match
        axios.put('http://localhost:3000/api/network/' + params.id, this.state)
        .then(response => {
            console.log(response)
            //Poner un redirect a List o a Details
        }) 
        .catch((err)=>{
            console.log(err)
        })   
    }
    render() {
        return (
            <div>
                <h2>Edit your Network</h2>
                <form onSubmit={this.handleSave}>
                    <label>Username</label>
                    <input 
                        type="text" 
                        name='name' 
                        value={this.state.username}
                        onChange={this.handleChange} />
                   
                   
                    <input 
                        type="submit" 
                        value='SAVE' />
                </form>
            </div>
        )
    }
}

export default EditPlace
