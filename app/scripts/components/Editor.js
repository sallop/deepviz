import React, { Component, PropTypes } from 'react';
//import styles from '../../styles/App.scss';
//import styles from '../../styles/MemberTable.scss';
import styles from '../../styles/Editor.scss';
import * as constants from '../constants';

const InputForms = (state) => class extends Component {
  constructor(props){
    super(props);
    this.state = state;
  }

  handleChange(key, event){
    this.setState({
      [key]: event.target.value
    });
  }

  getText(key){
    return this.state[key];
  }

  render(){
    const member = constants.MEMBER

    const tmpl = (key) => (
      <li key={key}>
        <label>{member[key]}:
        </label>
          <input type="text" value={this.state[key]} onChange={this.handleChange.bind(this, key)} />
      </li>
    );

    const formTags = Object.keys(this.state).map(tmpl);

    console.log(`formTags = ${formTags}`);

    return (
      <div>
        {formTags}
      </div>
    );
  }
}

const Editor = ({member}) => {
  var tags = [];
  var form = (
    <form>
      <label>
        Name:<input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
  var InputPane = InputForms({...member});
  console.log(`Editor member = ${JSON.stringify(member)}`)
  return (
    <div>
      <InputPane />
    </div>
  );
}

export default Editor;
