import Wrapper from "../wrappers/Input";

const Input = ({name, inputType, placeholder, className}) => {
    return (
        <Wrapper placeholder={placeholder} type={inputType} className={className}>
        </Wrapper>
    )
}

export default Input;