import React, { Component } from 'react';
import styled from 'styled-components';

class BouncingText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  onClick = () => {
    if (!this.state.active) {
      this.setState({
        active: true,
      });
    }
  }
  onHover = () => {
    if (!this.state.active) {
      this.setState({
        active: true,
      });
    }
  }

  unActivate = () => {
    this.setState({
      active: false,
    });
  }

  delay = ms => ({
    animationDelay: `${ms * this.props.delay}ms`,
  })

  render() {
    const {
      text, className, click, hover,
    } = this.props;
    const chars = text.split('').map((e, i, that) => (
      <Char
        style={this.delay(i)}
        active={this.state.active}
        unActive={i === that.length - 1 ? () => { this.unActivate(); } : null}
        key={i}
      >
        {`${e}`}
      </Char>
    ));

    return (
      <div
        className={className}
        onClick={click ? this.onClick : null}
        onMouseOver={hover ? this.onHover : null}
      >
        {chars}
      </div>
    );
  }
}

const Char = ({
  children, active, style, unActive,
}) => (active ? <span style={style} onAnimationEnd={unActive} className="bouncing-char">{children}</span> : <span>{children}</span>);
export default styled(BouncingText)`
  .bouncing-char {
    display: inline-block;
    animation: bouncingChar .5s ease-in-out;
  }

  @keyframes bouncingChar {
    0% { transform: translateY(0em); }
    50% { transform: translateY(-.5em); }
    100% { transform: translateY(0em); }  
  }
`;
