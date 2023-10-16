import Wrapper from "../wrappers/Landing";
import Navbar from "../components/LandingNavbar";
import MainContainer from "../components/MainContainer";

const Landing = () => {
    console.log(window.location);
    return (
        <Wrapper>
            <Navbar></Navbar>
            <MainContainer/>
        </Wrapper>
    );
}

export default Landing;