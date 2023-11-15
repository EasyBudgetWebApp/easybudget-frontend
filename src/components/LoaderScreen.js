import Wrapper from "../wrappers/LoaderScreen";
import { HashLoader } from "react-spinners";

const LoaderScreen = ({ className }) => {
  return (
    <Wrapper>
      <div className={`loader-spinner ${className}`}>
        <HashLoader size={60} color='#3212c4'/>
      </div>
    </Wrapper>
  );
};

export default LoaderScreen;
