const Input = ({ name, label, type, inputRef }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} ref={inputRef} />
    </div>
  );
};

export default Input;
