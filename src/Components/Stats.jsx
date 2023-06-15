import React, { useEffect } from "react";
import Graph from "./Graph";
import { auth, db } from "../firebaseConfig";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";

const Stats = ({
  wpm,
  accuracy,
  correctChars,
  incorrectChars,
  missedChars,
  graphData,
}) => {
  // console.log(graphData);
  let timeSet = new Set();

  const newGraph = graphData.filter((i) => {
    if (!timeSet.has(i[0])) {
      timeSet.add(i[0]);
      return i;
    }
  });

  const pushDataToDB = async () => {
    if (isNaN(accuracy)) {
      toast.error("Invalid Test!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const { uid } = auth.currentUser;
    // const resultRef = db.collection("Results");
    //use await to wait for the promise to resolve

    try {
      const resultRef = await addDoc(collection(db, "Results"), {
        wpm: wpm,
        accuracy: accuracy,
        timeStamp: new Date(),
        characters: `${correctChars}/${incorrectChars}/${missedChars} `,
        userId: uid,
      });
      toast.success("Data saved to Database!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.log(resultRef);
    } catch (e) {
      toast.error("not able to save data", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    if (auth.currentUser) {
      pushDataToDB();
    } else {
      toast.warn("Login to save data!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, []);

  return (
    <div className="stats_box">
      <div className="left_stats">
        <div className="title">WPM</div>
        <div className="subtitle">{wpm}</div>

        <div className="title">Accuracy</div>
        <div className="subtitle">{accuracy}</div>

        <div className="title">Characters</div>
        <div className="subtitle">
          Correct Characters :- {correctChars} <br />
          Incorrect Characters :- {incorrectChars}
          <br />
          Missed Characters :- {missedChars}
        </div>
      </div>
      <div className="right_stats">
        {/* wpm vs time graph */}
        <Graph graphData={newGraph} />
      </div>
    </div>
  );
};

export default Stats;
