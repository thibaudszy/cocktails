import React from "react";

export default function AwesomeAnimals() {
  const animals = [
    "Chicken",
    "Sloth",
    "Porcupine",
    "Killer whale",
    "Velociraptor",
  ];
  return (
    <div>
      {animals.map((animal) => {
        return (
          <li>{`Awesomeness level ${
            animals.indexOf(animal) + 1
          }: ${animal}`}</li>
        );
      })}
    </div>
  );
}
