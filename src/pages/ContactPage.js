import React, { Component } from 'react';
import '../styles/Contact.css'
import {Prompt} from 'react-router-dom';

class ContactPage extends Component {
  state = {
    value: "",
    isEmpty: true
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
      isEmpty: true
    })
  }

  handleChange = (e) => {
    const value = e.target.value;

    if(value.length > 0) {
      this.setState({
        value,
        isEmpty: false
      })
    } else {
      this.setState({
        isEmpty: true
      })
    }
    
  }

  render() {
    return (
      <div className="contact">
        <form onSubmit={this.handleSubmit}>
          <h3>Napisz do nas!</h3>
          <textarea value={this.state.value} onChange={this.handleChange} placeholder="Wpisz wiadomość..."></textarea>
          <button>Wyślij</button>
        </form>

        <Prompt 
          when={!this.state.isEmpty}
          message="Masz nie wypełniony formularz. Czy napewno chcesz opuścić tę stronę?"
        />
      </div>
    )
  }
}

export default ContactPage;
