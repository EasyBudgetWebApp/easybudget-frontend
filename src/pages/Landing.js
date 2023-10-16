import Wrapper from "../wrappers/Landing";
import Navbar from "../components/LandingNavbar";
import MainContainer from "../components/MainContainer";
import Footer from "../components/LandingFooter";

const Landing = () => {
    console.log(window.location);
    return (
        <Wrapper>
            <Navbar></Navbar>
            <MainContainer/>
            <Footer/>
        </Wrapper>
    );
}

export default Landing;