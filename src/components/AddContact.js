import React from "react";

class AddContact extends React.Component {
  state = {
    name: '',
    email: ''
  }

  add = (e) => {
    e.preventDefault();
    if ( this.state.name === '' || this.state.email === '') {
      alert('All fileds are manadetory!')
      return
    }
    this.props.contactHandler(this.state);
    this.setState({name: '', email: ''});
  }
  render() {
    return (
      <div className="add-contact-block ui main">
        <h2>Add Contact</h2>
        <form className="ui form"  onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={this.state.name}
              onChange={(e) => {this.setState({name: e.target.value})}}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={(e) => {this.setState({email: e.target.value})}}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>

      </div>
    );
  }
}

export default AddContact;
