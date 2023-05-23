import React from "react";
import { useState, useEffect } from "react";

export default function Form() {
    const [formState, setFormState] = useState({});
    
    // useEffect(() => {
    //     console.log('useEffect running')
    //     setFormState({muscleChoiceVal: 'abdominals', workoutTypeVal: 'cardio', difficultyChoiceVal: 'beginner', addedWorkoutVal: ''})
    // },[])

  let muscles = [
    "abdominals",
    "abductors",
    "adductors",
    "biceps",
    "calves",
    "chest",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "lower_back",
    "middle_back",
    "neck",
    "quadriceps",
    "traps",
    "triceps",
  ];
  const mapMuscles = muscles.map((muscle, i) => {
    return (
      <option key={i} value={muscle}>
        {muscle}
      </option>
    );
  });

  const types = [
    "cardio",
    "olympic_weightlifting",
    "plyometrics",
    "powerlifting",
    "strength",
    "stretching",
    "strongman",
  ];

  const mapTypes = types.map((workoutType, i) => {
    return (
      <option key={i} value={workoutType}>
        {workoutType}
      </option>
    );
  });

  const difficultyLvls = ["beginner", "intermediate", "expert"];

  const mapDiffLvls = difficultyLvls.map((diffLvl, i) => {
    return (
      <option key={i} value={diffLvl}>
        {diffLvl}
      </option>
    );
  });

    
    function customizeWorkout() {
          //search api data for muscle, workoutType, diffLvl, and addedWorkout
    //retrieve those results
        //send to custom page component
  }
    
    
    
    
  function handleSubmit(e) {
    e.preventDefault();
    //musclesQ
    let muscleChoiceVal = e.target.children[1].children[2].value;
    //typeQ
    let workoutTypeVal = e.target.children[2].children[2].value;
    //difficultyQ
    let difficultyChoiceVal = e.target.children[3].children[2].value;
    //addedWorkoutQ
    let addedWorkoutVal = e.target.children[4].children[1].value;

    //sets state to object containing choices
    setFormState({
      muscleChoiceVal,
      workoutTypeVal,
      difficultyChoiceVal,
      addedWorkoutVal,
    });
    console.log(formState);

    customizeWorkout()

  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="wholeForm">
        <h3>Let's get started!</h3>

        <div className="firstQ">
          <label htmlFor="muscleChoice">What do you want to hit today?</label>
          <br></br>
          <select
            placeholder="muscle groups dropdown"
            id="muscleChoice"
            name="muscleChoice"
          >
            {mapMuscles}
          </select>
        </div>

        <div className="secondQ">
          <label htmlFor="typeChoice">
            What kind of exercise do you want to do?
          </label>
          <br></br>
          <select
            placeholder="type workout dropdown"
            id="typeChoice"
            name="typeChoice"
          >
            {mapTypes}
          </select>
        </div>

        <div className="thirdQ">
          <label htmlFor="difficultyChoice">
            What is your level of experience?
          </label>
          <br></br>
          <select
            placeholder="difficulty dropdown"
            id="difficultyChoice"
            name="difficultyChoice"
          >
            {mapDiffLvls}
          </select>
        </div>

        <div className="fourthQ">
          <p>Is there a particular workout you'd like to add to the regimen?</p>
          <input
            id="addedWorkout"
            placeholder="search for workout"
            path="?name="
          ></input>
        </div>

        <input type="submit" value="Get Custom Workout" />
      </form>
    </div>
  );
}
