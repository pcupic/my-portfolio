import { TypeAnimation } from 'react-type-animation';

const Typewrite = () => {
  return (
    <TypeAnimation
      sequence={[
        'I am a computer science student.',
        1000, 
        'I am a full-stack developer.',
        1000,
        'I am a JavaScript enthusiast.',
        1000,
        'I am building my own startup.',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

export default Typewrite;
