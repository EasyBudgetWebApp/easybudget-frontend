import Wrapper from "../wrappers/Landing";
import Navbar from "../components/LandingNavbar";

const Landing = () => {
    console.log(window.location);
    return (
        <Wrapper>
            <Navbar></Navbar>
        </Wrapper>
    );
}

export default Landing;