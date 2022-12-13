import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";

const Home = () => {
  const url = "https://axios-example-cw.herokuapp.com/api/tutorials";

  const getTutorials = async () => {
    const data = await axios(url);
    console.log(data);
  };

  return (
    <div>
      <AddTutorial />
      <TutorialList />
    </div>
  );
};

export default Home;
