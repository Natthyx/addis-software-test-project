import StyledButton from "./styles/StyledButton";

function Button({
  children,
  type,
  setIsModelOpen,
  setModelType,
  handleDelete,
  handleAdd,
  handleEditable,
  handleEdit,
}) {
  if (type === "add")
    return (
      <StyledButton
        $backgroundColor={"#006fD0"}
        onClick={
          setIsModelOpen
            ? () => {
                setModelType(type);
                setIsModelOpen(true);
              }
            : handleAdd()
        }
      >
        {children}
      </StyledButton>
    );

  if (type === "delete")
    return (
      <StyledButton $backgroundColor={"red"} onClick={handleDelete}>
        {children}
      </StyledButton>
    );

  if (type === "edit")
    return (
      <StyledButton
        $backgroundColor={"green"}
        $margin={"20px"}
        onClick={
          setIsModelOpen
            ? () => {
                setModelType(type);
                setIsModelOpen(true);
                handleEditable();
              }
            : handleEdit()
        }
      >
        {children}
      </StyledButton>
    );
}

export default Button;
