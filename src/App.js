import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import JobList from './components/JobList'
import AddJobForm from './components/AddJobForm'
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: []
    }   
  }
 
  componentDidMount() {
    let apiURL = "./listings.json";
    fetch(apiURL)
        .then(response => response.json())
        .then(response =>
            this.setState({ data: response})
        )
}

  addJob = job => {
    const { data } = this.state
    this.setState({
      data: [job, ...data]
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <JobList list={this.state.data} />
          <AddJobForm addJob={this.addJob}/>
        </main>
        <Footer />
      </div>
    );
  }
}
export default App;
