import { useEffect, useState } from 'react';
import './main-page.css';
import Header from './header';
import SkillList from "./skill-list";

// This is the top-level component of the application.
// It is a function component, which is typical for React
function App() {

  // state is private data for the component that can survive re-renders
  // the useState function returns an array containing two items
  // the first is the variable that will reflect the value of the state
  // and the second is the function to set it
  const [allSkills, setAllSkills] = useState([{ name: "Loading...", description: "be patient please"}]);

  // useEffect is a hook from the react library that enables us to create side effects when the state of a component changes
  // a hook is a function that takes two parameters, the first is a function
  // and the second is an array of values that indicate WHEN the function should be executed
  // leaving that array empty, as in this example, causes the function to execute just once,
  // when the component is first rendered.
  useEffect(() => {
    // This defines an asynchronous function
    const fetchSkills = async () => {
      // The URL here is just a simple service I spun up on Azure, which responds with a JSON object of skills
      const response = await fetch("https://jsecinterviewwebapiexampleapi.azure-api.net/skills");
      const skills = await response.json();
      setAllSkills(skills);
    }; 
    // call the function we just defined
    fetchSkills();
  }, [allSkills]);

// The function returns the JSX to be rendered
  return (
    <div className='container'>
      <Header subtitle="Just for you, my first React app"/>
      <div className="mt-3">
        <h4>Why do you want Jamey on your team?</h4>
        <p>Select from the list below to find out!</p>
      </div>
      <SkillList skills={allSkills} />
    </div>
  );
}

export default App;
