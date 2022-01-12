import { useState, useEffect } from "react";

const Loading = () => {
  const [value, setValue] = useState("Loading...");

  const refresh = () => {
    window.location.reload();
  };

  useEffect(() => {
    setTimeout(() => {
      setValue(
        <>
          {" "}
          Unable to fetch weather <br />
          <button style={refreshStyle} onClick={refresh}>
            R
          </button>{" "}
        </>
      );
    }, 5000);
  }, []);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          margin: "20px auto",
          padding: "20px auto",
        }}
      >
        {" "}
        {value}{" "}
      </h2>
    </div>
  );
};

const refreshStyle = {
  color: "#0c032b",
  cursor: "pointer",
  backgroundColor: "#00FFFF",
  border: "1px double #0c032b",
  borderRadius: " 50%",
  height: "35px",
  width: "35px",
  margin: "10px 0",
};

export default Loading;
