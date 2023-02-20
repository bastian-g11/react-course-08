const Input = ({ name, value, label, onChange, type, inputRef }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        ref={inputRef}
      />
    </div>
  );
};

export default Input;
