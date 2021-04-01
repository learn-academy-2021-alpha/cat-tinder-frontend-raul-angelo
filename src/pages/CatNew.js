import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from "react-router-dom"

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createNewCat(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h2 className="submitbox">Add a New Cat</h2>
        <Form className="submitbox">
          <FormGroup className="namebox">
            <Label for="name">Cat's Name: </Label>
            <Input
              type="text"
              name="name"
              value={ this.state.form.name }
              onChange={ this.handleChange }
            />
          </FormGroup>

          <FormGroup className="agebox">
            <Label for="age">Cat's Age: </Label>
            <Input
              type="number"
              name="age"
              value={ this.state.form.age }
              onChange={ this.handleChange }
            />
          </FormGroup>
          <FormGroup className="enjoybox">
            <Label for="enjoys">What does your cat enjoy?: </Label>
            <Input
              type="text"
              name="enjoys"
              value={ this.state.form.enjoys }
              onChange={ this.handleChange }
            />
          </FormGroup>
          	<Button

            onClick={ this.handleSubmit }
      			>
            Add a New Cat
          </Button>
        </Form>
        { this.state.submitted && <Redirect to="/catindex" /> }
      </>
    )
  }
}
export default CatNew
