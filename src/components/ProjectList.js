import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */
      projects.map((project)=>{
      return <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
      })
      }</div>
    </div>
  );
}

export default ProjectList;


// // ColorItem component
// function ColorItem(props) {
//   return <li style={{ color: props.color }}>{props.color}</li>;
// }

// // ColorList component
// function ColorList() {
//   const colors = [
//     "firebrick",
//     "rebeccapurple",
//     "salmon",
//     "darkslategray",
//     "hotpink",
//   ];

//   const colorElements = colors.map((color) => {
//     return <ColorItem key={color} color={color} />;
//   });
//   // etc
// } 