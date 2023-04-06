import { FaHtml5, FaCss3, FaPython, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiPostgresql, SiExpress } from 'react-icons/si';


export const Skills = [
    {
      category: "Front End",
      languages: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <DiJavascript1 /> },
        { name: "React.js", icon: <GrReactjs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ]
    },
    {
      category: "Back End",
      languages: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <DiMongodb /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "ExpressJS", icon: <SiExpress /> },
      ]
    },
  ];