import React, { Component } from 'react'

class AddJobForm extends React.Component {
constructor(props) {
        super(props)
        this.state = {
            title: "",
            pay: "",
            description: "",
            interested: ""
        }
    }
        onSubmit = (event) => {
            event.preventDefault()
            const { title, pay, description, interested } = this.state
            const newJob = {
                title,
                pay,
                description,
                interested
            }
            this.props.addJob(newJob)
        }

        onChange = (e) => this.setState({[e.target.name]: e.target.value})

        render() {
         
            return (
                <aside id="side-bar">
                    <h3>Add a Job</h3>
                    <form className="job-form" onSubmit={this.onSubmit}>
                        <label htmlFor="title">Title</label>
                            <input
                                name="title"
                                type="text"
                                onChange={this.onChange} />   
                        <label htmlFor="pay">Compensation</label>
                            <input
                                name="pay"
                                type="text" 
                                onChange={this.onChange}/>
                        <label htmlFor="description">Description</label>
                            <textarea 
                                name="description"
                                rows="8"
                                cols="40"
                                onChange={this.onChange}       
                            />           
                        <input type="submit" value="submit" />
                    </form>
                </aside>
            )
        }
}
export default AddJobForm