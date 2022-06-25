import React from "react";

class AddContact extends React.Component {
  render() {
    return (
      <div className="add-contact-block ui main">
        <h2>Add Contact</h2>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" placeholder="Email" name="email" />
          </div>
          <button className="ui button blue">Add</button>
        </form>

      </div>
    );
  }
}

export default AddContact;
