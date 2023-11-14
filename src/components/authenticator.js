import Wrapper from '../wrappers/authenticator.js';

const Authenticator = ({children, to}) => {
    return (
        <Wrapper href={to}>
            {children}
        </Wrapper>
    );
}

export default Authenticator;