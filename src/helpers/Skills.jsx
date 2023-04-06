import { FaHtml5, FaCss3, FaPython, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import { GrReactjs } from 'react-icons/gr';
import { SiPostgresql, SiExpress, SiHeroku } from 'react-icons/si';
import { BsBootstrap, BsSlack, BsTrello } from 'react-icons/bs';
import { TbBrandZoom } from 'react-icons/tb';


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
    {
      category: "Other Skills",
      languages: [
        { name: "Trello", icon: <BsTrello /> },
        { name: "Slack", icon: <BsSlack /> },
        { name: "Heroku", icon: <SiHeroku /> },
        { name: "Bootstrap", icon: <BsBootstrap /> },
        { name: "Zoom", icon: <TbBrandZoom /> },
      ]
    },
  ];