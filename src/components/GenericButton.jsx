const GenericButton = ({ onClick, children }) => {
  return (
    <button className="" onClick={onClick}>
      {children}
    </button>
  );
};

export default GenericButton;
