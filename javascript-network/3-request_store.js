const people = [
    {
      name: "Alice",
      age: 30,
      skills: ["JavaScript", "HTML", "CSS"],
    },
    {
      name: "Bob",
      age: 25,
      skills: ["Python", "C++", "Java"],
    },
    {
      name: "Charlie",
      age: 35,
      skills: ["JavaScript", "Node.js", "React"],
    },
  ];
  
  // Utilisation de map pour obtenir une liste de compétences de toutes les personnes
  const skillsList = people.map(person => person.skills);
  
  // Utilisation de flat pour aplatir la liste de compétences
  const flattenedSkills = skillsList.flat();

  
  // Utilisation de filter pour filtrer les personnes ayant des compétences en JavaScript
const javascriptDevelopers = people.filter(person =>
    person.skills.includes("JavaScript")
  );

  console.log(javascriptDevelopers)