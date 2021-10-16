import { useState } from "react";
import SuggestionsListComponent from "./suggestionList";

const Taginput = () => {
  const [tags, setTags] = useState([]);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState([]);

  const suggestions = [
    "JavaScript",
    "Java",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "C",
    "Scala",
  ];

  const onChange = (e) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const onClick = (newTag) => {
    setTags([...tags, newTag]);
    setInput("");
  };

  const addTags = (e) => {
    //adding tag
    if (e.key === "Enter" && e.target.value !== "") {
      setTags([...tags, e.target.value]);
      e.target.value = "";
      setInput("");
    }
  };

  const removeTags = (index) => {
    //remove tag
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return (
    <div className="tags-input">
      <ul>
        {tags.map((tag, index) => (
          <li key={index} placeholder="Add Tag">
            <span>{tag}</span>
            <button onClick={() => removeTags(index)}>X</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={input}
        onKeyUp={(e) => addTags(e)}
        onChange={onChange}
        placeholder="start typing and we shall make sugestion"
      />
      {showSuggestions && input && (
        <SuggestionsListComponent
          filteredSuggestions={filteredSuggestions}
          activeSuggestionIndex={activeSuggestionIndex}
          setFilteredSuggestions={setFilteredSuggestions}
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default Taginput;
