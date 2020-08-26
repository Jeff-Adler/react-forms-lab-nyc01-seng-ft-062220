import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {tweet : "",
                  charsRemaining: props.maxChars
                  };
  }

  handleInputChange = (enteredTweet) => {
    const charCount = this.props.maxChars - enteredTweet.length
    this.setState({tweet : enteredTweet,
                  charsRemaining: charCount
                  })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
        type="text" 
        name="message" 
        id="message" 
        onChange={event => this.handleInputChange(event.target.value)} 
        maxLength={this.props.maxChars} value={this.state.tweet}
        />
        <p>Remaining characters: {this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
