import { useState } from "react";
import "./App.css";
import Taginput from "./components/Taginput";

const App = () => {
  const [tags, setTags] = useState([]);

  const selectedTags = (tags) => {
    console.log(tags);
  };

  return (
    <div className="App">
      <p>TAGS</p>
      <p>Select time for your event</p>
      <Taginput
        tags={tags}
        setTags={setTags}
        selectedTags={selectedTags}
        suggestions={[
          "JavaScript",
          "Java",
          "HTML",
          "CSS",
          "React",
          "Angular",
          "C",
          "Scala",
        ]}
      />
    </div>
  );
};

export default App;
