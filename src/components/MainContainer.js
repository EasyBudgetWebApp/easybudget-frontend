import Wrapper from "../wrappers/MainContainer";
import { Link } from "react-router-dom";

//graphic
import dragonImage from "../graphics/dragonImage";

const MainContainer = () => {
  return (
    <Wrapper>
      <div className="info-area">
        <h1>Take charge of your finances</h1>
        <ul>
          <li>Effortlessly track your spending</li>
          <li>Stick to a budget & Save money</li>
          <li>Visualize your financial situation</li>
        </ul>
        <Link to="/register" className="demo-account">
          Start with a demo account
        </Link>
      </div>
      <div className="graphic-area">{dragonImage}</div>
    </Wrapper>
  );
};

export default MainContainer;
