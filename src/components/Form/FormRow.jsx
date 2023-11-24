const FormRow = ({ children, label, error }) => {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && (
        <label
          htmlFor={children.props?.id}
          className={` text-[#444] mb-1 font-medium`}
        >
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-sm">{error}</span>}
    </div>
  );
};

export default FormRow;
