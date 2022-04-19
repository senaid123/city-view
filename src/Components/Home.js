import React, { useState, useEffect } from "react";
import "../Styles/Home.css";
import Container from "./Container";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../FirebaseConfig/Firebase";
import { collection, getDocs } from "firebase/firestore";

const Home = () => {
  const [data, setData] = useState(false);
  const [url, setUrl] = useState("");
  const [city, setCity] = useState("");
  const [posts, setPosts] = useState([]);
  const ref = collection(db, "data");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("data").add({
      Message: city,
      Picture: url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setUrl("");
    setCity("");
  };

  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(ref);
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
    console.log(posts);
  }, []);



  const togglePopup = () => {
    setData(!data);
  };

  return (
    <div className="home">
      <div className="homeButton" onClick={togglePopup}>
        <button>Add a new city</button>
      </div>
      {data && (
        <div className="popup">
          <div className="background">
            <div className="popupContainer">
              <button className="btnClose" onClick={togglePopup}>
                X
              </button>
              <p>Please enter your city picture link</p>
              <input
                type="text"
                placeholder="Drag your link here"
                onChange={(e) => setUrl(e.target.value)}
              />
              <p>Please enter name of city </p>
              <input
                type="text"
                placeholder="Drag your link here"
                onChange={(e) => setCity(e.target.value)}
              />
              <button
                type="submit"
                className="btnConfirm"
                onClick={handleSubmit}
              >
                Confim
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="homeContainer">
        {posts.map((post) => (
          <Container
            key={post.id}
            message={post.Message}
            image={post.Picture}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
