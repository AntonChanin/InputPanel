import React from 'react';
import './typer.styles.css';

const TYPING_SPEED = 150;
const DELETING_SPEED = 30;

export default class Typer extends React.Component {

  state = {
    text: '',
    isDeleting: false,
    loopNum: 0,
    typingSpeed: TYPING_SPEED
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? dataText : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
    });

    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 500);   
    }
     else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <div className="typer" >
        {this.state.text !== this.props.dataText && this.props.last && <><span>{'> waiting typing...'}</span><br/></>}
        <span>{this.props.last ? this.state.text : this.props.dataText }</span>
        {this.state.text !== this.props.dataText && <span id={this.props.last  ? 'cursor' : 'done'}>{this.props.last  ? '|' : ''}</span>}
        {this.state.text === this.props.dataText && this.props.dataText && this.props.last && <><br/><span>{'> end task'}<br/>{'> wait new message...'}</span></>}
      </div>
    );
  }
}
