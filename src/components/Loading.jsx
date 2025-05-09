import React from "react";
import HashLoader from "react-spinners/HashLoader";

const Loading = () => {
  return (
    <div style={styles.container}>
      <HashLoader
        color="#5F7ADB"
        loading
        size={110}
        speedMultiplier={1}
      />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 9999,
  },
};

export default Loading;
