import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 23px;
    color: #616161;
    font-family: var(--roboto-font);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
    
    && {
        margin: 28px;
    }

    &::before, &::after{
        content: '';
        flex: 1;
        background-color: #616161;
        height: 1px;
    }

    &::before {
        margin-right: 24px;
    }

    &::after {
        margin-left: 24px;
    }
`;

export default Wrapper;