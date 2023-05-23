import React from "react";

export default function FetchWorkouts() {
  let apiKey = "F+4iu2lDKVy8M8iOlr/QVQ==zNV01NhPTVlgFKh7";

  async function getWorkout() {
    const response = await fetch("https://api.api-ninjas.com/v1/exercises/?", {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
      contentType: "application/json",
    });
    const jsonResponse = await response.json();
    return jsonResponse;
  }

  getWorkout();

  return <div>Boom Bow</div>;
}
