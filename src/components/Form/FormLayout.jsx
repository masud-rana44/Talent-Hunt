const FormLayout = ({ children, ...rest }) => {
  return (
    <form
      {...rest}
      className="w-full max-w-4xl mx-auto p-8 bg-gray-100 mt-12 space-y-4"
    >
      {children}
    </form>
  );
};

export default FormLayout;
