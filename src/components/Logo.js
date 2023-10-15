import logoPath from '../graphics/easy-budget-round.png';
import Wrapper from '../wrappers/Logo';

const Logo = () => {
    return (
        <Wrapper>
            <img src={logoPath}></img>
            <p>easyBudget</p>
        </Wrapper>
    )
}

export default Logo;