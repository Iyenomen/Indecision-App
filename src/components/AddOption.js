import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  // constructor(props) {
  //   super(props);
  //   this.handleAddOption = this.handleAddOption.bind(this);

  // }
  handleAdd = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);
    console.log('option', option)
    console.log('error', error)

    this.setState(() => ({ error }));
    if (!error) {
      e.target.elements.option.value = '';
    }
  }

  render() {

    return (
      <div>
        {this.state.error && <p className="add-option-error">{this.state.error}</p>}
        <form className="add-option" onSubmit={this.handleAdd}>
          <input className="add-option__input" type='text' name='option'></input>
          <button type="submit" className="button">Add Option</button>
        </form>
      </div>
    );
  }
}