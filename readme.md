Bouncing Text
===

> A styled react component. Liven your text up.

Bounce the text by clicking/hovering on it.  
The animation will not be triggered until last animation has finished!

## Usage:

```js
import BouncingText from './BouncingText';

const MyBouncingText = () => {
  <BouncingText
    className={myClassName}
    text={myTextToShow} 
    clickable
    hoverable 
    delay={ms} 
    duration={ms}
  >
};

export default MyBouncingText;

```

## API

### BouncingText

| Porperty | Description | Type | Default |
| -------- | -------- | -------- | -- |
| className | specify class name of whole text | String     | -- |
| text | text to display | String    | -- |
| click | whether triggerable by clicking | Boolean    | false |
| hover | whether triggerable by hovering     | Boolean     | false |
| delay | delay for each text. every character's delay will time the index of itself. (ms) | Number   | -- |
| duration | duration for each text. duration start after delay for each character. (ms)  | Number    | -- |

You should not keep `text`, `delay`, `duration` empty.