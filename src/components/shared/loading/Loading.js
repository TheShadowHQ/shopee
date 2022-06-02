import "./Loading.scss";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="loading-container">
      <ReactLoading
        class
        type={"spin"}
        color={"#EE4DC2"}
        height={667}
        width={375}
      />
    </div>
  );
};

export default Loading;
