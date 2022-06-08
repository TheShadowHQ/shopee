import "./Loading.scss";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading
        type={"spin"}
        color={"#EE4D2D"}
        height={667}
        width={375}
      />
    </div>
  );
};

export default Loading;
