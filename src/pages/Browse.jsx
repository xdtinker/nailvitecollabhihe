import { Heading } from "../components";
import { Collection } from "../components/browse";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firestore.js";
import { useState, useEffect } from "react";

const Browse = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "collabcol"));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Heading />
      <Collection data={data} />
    </>
  );
};

export default Browse;
