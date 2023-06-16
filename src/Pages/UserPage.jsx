import React, { useEffect, useState } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { CircularProgress } from "@mui/material";
import TableUserData from "../Components/TableUserData";
import Graph from "../Components/Graph";
import UserInfo from "../Components/UserInfo";
import LoadingComponent from "../Components/LoadingComponent";

const UserPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [graphData, setGraphData] = useState([]);
  const [loader,setLoader] = useState(true);
  const [user, loading] = useAuthState(auth);
  const fetchUserData = async () => {
    const { uid } = auth.currentUser;
    let tempData = [];
    let tempGraphData = [];
    //create a query with the where condition
    const resultQuery = query(
      collection(db, "Results"),
      orderBy("timeStamp", "desc"),
      where("userId", "==", uid)
    );
    // Get the query snapshot
    const resultsRef = await getDocs(resultQuery);

    // Loop over the documents in the sanpshot
    resultsRef.forEach((docs) => {
      // console.log(docs.data())
      tempData.push({ ...docs.data() });
      tempGraphData.push([
        docs.data().timeStamp.toDate().toLocaleString().split(",")[0],
        docs.data().wpm,
      ]);
    });
    setData(tempData);
    setGraphData(tempGraphData);
    setLoader(false);
  };

  useEffect(() => {
    if (!loading) {
      fetchUserData();
    }
    if (!loading && !user) {
      navigate("/");
    }
  }, [loading]);

  if (loading || loader) {
    return (<div className="center_of_screen">
             <LoadingComponent/>
           </div>)
  }
  return (
    <div className="App">
      <UserInfo data={data} />
      <div className="graph-user-page">
        <Graph graphData={graphData} />
      </div>
      <TableUserData data={data} />
    </div>
  );
};

export default UserPage;
