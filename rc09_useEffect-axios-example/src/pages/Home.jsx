import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  //? CRUD: (GET-READ)
  const getTutorials = async () => {
    try {
      const { data } = await axios(url);
      console.log(data);
      setTutorials(data);
    } catch (error) {}
  };

  //? didmount
  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div>
      <AddTutorial />
      <TutorialList tutorials={tutorials} />
    </div>
  );
};

export default Home;
