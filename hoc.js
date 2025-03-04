// Higher Order Component

/* 
HOC - It is a function that takes a component as an input and returns a new component with additional 
functionality or modified behavior.
*/

const withFancyText = (WrappedComponent) => {
  return (props) => {
    const fancyStyle = { fontStyle: "italic", fontWeight: "Bold" };
    return (
      <div style={fancyStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

// usage

const TextComponent = (props) => <p>{props.text}</p>;
const FancyTextComponent = withFancyText(TextComponent);
