import React, { Component } from "react";
import api from "../../api";
import { Button, CustomInput, Form, Input, FormGroup, Label } from "reactstrap";
/* Todo:
- Cleaner way to set state back to false, see handlesubmit
- cleaner way to make sure https:// is in input field
- Styling. eg. grouping of checkboxes, no need for reactstrap?
- Sizes of form
- No need for Reactstrap?
*/
export default class AddLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "https://",
      description: "",

      JavaScript: false,
      Mongo: false,
      Express: false,
      Node: false,
      React: false,
      HTML: false,
      Framework: false,
      Frontend: false,
      Backend: false,
      Tutorial: false,
      Git: false,
      Job: false,
      Design: false,
      Tools: false,
      API: false,
      Humour: false,
      Other: false,

      message: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.allTrue = this.allTrue.bind(this);
  }

  handleInputChange(event) {
    if (!this.state.url.startsWith("https://")) {
      setTimeout(() => {
        this.setState({
          message: null,
          url: "https://"
        });
      }, 3000);

      this.setState({
        message: "Url must start with 'https://"
      });
    }

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  allTrue(obj) {
    let newArray = [];
    for (var o in obj)
      if (obj[o] === true) {
        newArray.push(o);
      }
    return newArray;
  }

  handleClick(e) {
    e.preventDefault();
    let type = this.allTrue(this.state);

    let data = {
      url: this.state.url,
      description: this.state.description,
      type: type
    };
    api
      .addLink(data)
      .then(result => {
        this.setState({
          url: "https://",
          description: "",
          message: `Your link  has been created`,
          JavaScript: false,
          Mongo: false,
          Express: false,
          Node: false,
          React: false,
          HTML: false,
          Framework: false,
          Frontend: false,
          Backend: false,
          Tutorial: false,
          Git: false,
          Job: false,
          Design: false,
          Tools: false,
          API: false,
          Humour: false,
          Other: false
        });
        setTimeout(() => {
          this.setState({
            message: null
          });
        }, 2000);
      })
      .catch(err => this.setState({ message: err.toString() }));
  }

  render() {
    return (
      <Form>
        {this.state.message && (
          <div className="info info-secondary">{this.state.message}</div>
        )}
        <FormGroup>
          <Label for="url">Url</Label>
          <Input
            type="url"
            name="url"
            id="url"
            value={this.state.url}
            placeholder="Type in link here"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            name="description"
            value={this.state.description}
            id="description"
            placeholder="Enter a description"
            onChange={this.handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleCheckbox">Keyword</Label>
          <div>
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.JavaScript}
              name="JavaScript"
              id="JavaScript"
              label="JavaScript"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Mongo}
              name="Mongo"
              id="Mongo"
              label="Mongo"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Express}
              name="Express"
              id="Express"
              label="Express"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Node}
              name="Node"
              id="Node"
              label="Node"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.React}
              name="React"
              id="React"
              label="React"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.HTML}
              name="HTML"
              id="HTML"
              label="HTML & CSS"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Framework}
              name="Framework"
              id="Framework"
              label="Framework/Library"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Frontend}
              name="Frontend"
              id="Frontend"
              label="Frontend"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Backend}
              name="Backend"
              id="Backend"
              label="Backend"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Tutorial}
              name="Tutorial"
              id="Tutorial"
              label="Tutorial"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Git}
              name="Git"
              id="Git"
              label="Git"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Job}
              name="Job"
              id="Job"
              label="Job/Career"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Design}
              name="Design"
              id="Design"
              label="Design"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Tools}
              name="Tools"
              id="Tools"
              label="Tools & Editors"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.API}
              name="API"
              id="API"
              label="API"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Humour}
              name="Humour"
              id="Humour"
              label="Humour"
            />
            <CustomInput
              onChange={this.handleInputChange}
              type="checkbox"
              checked={this.state.Other}
              name="Other"
              id="Other"
              label="Other"
            />
          </div>
        </FormGroup>
        <Button onClick={e => this.handleClick(e)}>Create link</Button>
      </Form>
    );
  }
}
