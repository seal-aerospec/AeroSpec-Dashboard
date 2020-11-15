import React from 'react'
export default class Suggestion extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      file: URL.createObjectURL(event.target.files[0])
    })
  }

  render() {
    return (
      <div>
        <h2 id="simple-modal-title">Submit Suggestions</h2>
        <input type="file" onChange={this.handleChange}/>
        <img src={this.state.file} alt="user uploads"/>
        <div>
          <input type="text" placeholder="Write Your Suggestion Here!"/>
        </div>
      </div>
    );
  }
}