import Wrapper from "../wrappers/MainContainer";
import dragon from "../graphics/dragon-guarding-treasure.png";
import RoundedButton from "./RoundedButton";
import { Link } from "react-router-dom";

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
        <Link to='/register'>
          <RoundedButton
            label="Start with a demo account"
            className={"demo-account"}
          ></RoundedButton>
        </Link>
      </div>
      <div className="graphic-area">
        <img alt="dragon-protecting-trreasure" src={dragon} />
      </div>
    </Wrapper>
  );
};

export default MainContainer;
