import React from "react";
// import axios from "axios";

export default function FetchWorkouts() {
  let apiKey = "F+4iu2lDKVy8M8iOlr/QVQ==zNV01NhPTVlgFKh7";
  let muscle = "biceps";

  fetch("https://api.api-ninjas.com/v1/exercises", {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
    contentType: "application/json",
  })
    .then(function (response) {
      // successful request
      const workoutData = response;
      console.log(response.data);
    })
    .catch(function (error) {
      // handle error
      console.error(`Error: ${error}`);
    });


  //   axios
  //     .get("https://api.api-ninjas.com/v1/exercises?muscle=" + muscle)
  //     .then(function (response) {
  //       // successful request
  //       const workoutData = response.data;
  //       console.log(workoutData);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.error(`Error: ${error}`);
  //     });

  return <div>Boom Bow</div>;
}
