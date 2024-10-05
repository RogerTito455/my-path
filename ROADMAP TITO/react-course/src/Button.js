import PropTypes, { func } from "prop-types";

export function Button({ text, name = "New User" }) {
  console.log(text);
  return (
    <button onClick={function () {
      console.log('Hola mundo')
    }}>
      {text} - {name}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};
