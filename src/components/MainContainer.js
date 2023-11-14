import Wrapper from "../wrappers/MainContainer";
import dragon from "../graphics/dragon-guarding-treasure.png";
import RoundedButton from "./RoundedButton";
import { Link, useNavigate } from "react-router-dom";

const MainContainer = () => {
  const navigate = useNavigate();

  const clickHandler = (event) => {
    event.preventDefault();
    navigate('/register');
  }
  return (
    <Wrapper>
      <div className="info-area">
        <h1>Take charge of your finances</h1>
        <ul>
          <li>Effortlessly track your spending</li>
          <li>Stick to a budget & Save money</li>
          <li>Visualize your financial situation</li>
        </ul>
        <RoundedButton
          label="Start with a demo account"
          className={"demo-account"}
          to={'/register'}
          onClickHandler={clickHandler}
        ></RoundedButton>
      </div>
      <div className="graphic-area">
        <img alt="dragon-protecting-trreasure" src={dragon} />
      </div>
    </Wrapper>
  );
};

export default MainContainer;
