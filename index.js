import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class BouncingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onClick = () => {
    if (!this.state.active && this.props.clickable) { this.activeUntilLastDuration(); }
  };

  onHover = () => {
    if (!this.state.active && this.props.hoverable) { this.activeUntilLastDuration(); }
  };

  activeUntilLastDuration = () => {
    const { delay, text, duration } = this.props;
    this.setState({
      active: true,
    });
    setTimeout(
      () => { this.setState({ active: false }); },
      (text.length * delay) + duration,
    );
  }

  render() {
    const {
      text, className, delay, duration,
    } = this.props;
    const chars = text.split('').map((e, i) => (
      <StyledChar
        key={i}
        text={e}
        delay={delay * i}
        duration={duration}
        active={this.state.active}
        char={e}
      />
    ));

    return (
      <div
        className={className}
        onClick={this.onClick}
        onMouseOver={this.onHover}
      >
        {chars}
      </div>
    );
  }
}

const Char = ({ char, className }) => {
  const escapedHtml = { __html: char.replace(' ', '&nbsp') };
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={escapedHtml}
    />
  );
};

const StyledChar = styled(Char)`
  display: inline-block;
  animation-name:${({ active }) => (active ? boucingCharAnimation : 'none')};
  animation-timing-function: ease-in-out;
  animation-delay: ${({ delay }) => delay}ms;
  animation-duration:${({ duration }) => duration}ms;
`;

const boucingCharAnimation = keyframes`
  0% { transform: translateY(0em); }
  50% { transform: translateY(-0.5em); }
  100% { transform: translateY(0em); }
`;

export default BouncingText;
