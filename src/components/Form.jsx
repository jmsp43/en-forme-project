import React from "react";

export default function Form() {
  return (
    <div>
      <section className="wholeForm">
        <h3>Let's get started!</h3>

        <div className="firstQ">
          <label htmlFor="muscleChoice">What do you want to hit today?</label>
          <br></br>
          <select
            placeholder="muscle groups dropdown"
            id="muscleChoice"
            name="muscleChoice"
          >
            <option value="quadriceps">Quadriceps</option>
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
            <option value="powerlifting">Powerlifting</option>
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
            <option value="beginner">Beginner</option>
          </select>
        </div>

        <div className="fourthQ">
          <p>Is there a particular workout you'd like to add to the regimen?</p>
          <input placeholder="search for workout"></input>
        </div>
        <button>Get My Custom Workout</button>
      </section>
    </div>
  );
}
