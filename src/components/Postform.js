import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      shorturl: ""
    };
    this.baseState = this.state;
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.url,
      body: this.state.shorturl
    };
    //this.setState((this.state = { url: "", shorturl: "" })); // reset the form field
    this.setState(this.baseState);
    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>URL: </label>
            <input
              type="text"
              name="url"
              onChange={this.onChange}
              value={this.state.url}
            />
          </div>
          <br />
          <div>
            <label>Short URL: </label>
            <input
              type="text"
              name="shorturl"
              onChange={this.onChange}
              value={this.state.shorturl}
            />
          </div>
          <br />
          <button type="submit">
            https://ntap.co/
            {this.state.shorturl}
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
