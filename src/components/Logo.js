import logoPath from '../graphics/easy-budget-round (1).png';
import Wrapper from '../wrappers/Logo';

const Logo = () => {
    return (
        <Wrapper className='logo'>
            <img src={logoPath}></img>
            <p>easyBudget</p>
        </Wrapper>
    )
}

export default Logo;