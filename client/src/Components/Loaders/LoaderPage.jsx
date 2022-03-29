import { SpinnerCircular } from "spinners-react";

const Loader = () => {
  return (
    <div className="page-loader">
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color="#0070f3"
        secondaryColor="rgba(0, 0, 0, 0.1)"
      />
    </div>
  );
};

export default Loader;
