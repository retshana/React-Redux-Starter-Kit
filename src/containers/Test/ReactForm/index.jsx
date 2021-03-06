import React, { Component } from 'react';
import { Form, Text } from 'react-form';

export default class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form
          onSubmit={(submittedValues) => this.setState({ submittedValues })}>
          {formApi => (
            <div>
              <button
                onClick={() => formApi.addValue('siblings', '')}
                type="button"
                className="mb-4 mr-4 btn btn-success">Add Sibling
              </button>
              <form onSubmit={formApi.submitForm} id="dynamic-form">
                <label htmlFor="dynamic-first">
                  First name
                  <Text field="firstName" id="dynamic-first" />
                </label>
                {formApi.values.siblings && formApi.values.siblings.map((sibling, i) => (
                  <div key={`sibling${i}`}>
                    <label htmlFor={`sibling-name-${i}`}>
                      Name
                      <Text
                        field={[
                        'siblings',
                        i,
                        ]}
                        id={`sibling-name-${i}`}
                      />
                    </label>
                    <button
                      onClick={() => formApi.removeValue('siblings', i)}
                      type="button"
                      className="mb-4 btn btn-danger"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button type="submit" className="mb-4 btn btn-primary">Submit</button>
              </form>
            </div>
          )}
        </Form>
      </div>
    );
  }
}
