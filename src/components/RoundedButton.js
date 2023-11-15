import Wrapper from "../wrappers/RoundedButton";

const RoundedButton = ({label, className, onClickHandler}) => {
    return (
        <Wrapper className={className} onClick={onClickHandler}>
            <p>{label}</p>
        </Wrapper>
    )
}

export default RoundedButton;