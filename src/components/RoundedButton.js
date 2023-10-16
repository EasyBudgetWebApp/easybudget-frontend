import Wrapper from "../wrappers/RoundedButton";

const RoundedButton = ({label, className}) => {
    return (
        <Wrapper className={className}>
            <p>{label}</p>
        </Wrapper>
    )
}

export default RoundedButton;