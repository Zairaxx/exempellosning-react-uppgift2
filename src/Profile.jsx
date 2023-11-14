import { useState } from "react";

export default function Profile(props) {
  let [showProfile, setShowProfile] = useState(false);

  //W ? T :F
  //   2 + 2 === 4 ? "True" : "False";
  return (
    <div style={{ border: "2px solid black" }}>
      <p>
        Namn: {props.profile.name}{" "}
        <button
          onClick={() => {
            setShowProfile(!showProfile);
          }}
        >
          {showProfile ? "Show less" : "Show more"}
        </button>
      </p>
      {showProfile && (
        <>
          <p>Last name: {props.profile.lastName}</p>
          <p>Age : {props.profile.age}</p>
          <p>Hobby: {props.profile.hobby}</p>
        </>
      )}
    </div>
  );
}
