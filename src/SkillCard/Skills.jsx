import React from 'react';
import SkillCardComponent from './SkillCardComponent';


import java from '../assets/java.png';
import python from '../assets/python.png';
import js from '../assets/JavaScript.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import boot from '../assets/bootstrap.png';
import tail from '../assets/Tailwind_CSS.png';
import sp from '../assets/spring.png';
import spb from '../assets/springboot.png';
import sps from '../assets/spring-security.png';
import msq from '../assets/my-sql.png';
import rct from '../assets/react.png';
import mng from '../assets/mongoDB.png';
import nd from '../assets/node.png';
import exp from '../assets/express.png';
import dc from '../assets/docker.png';
import gt from '../assets/github.png';
import pm from '../assets/postman.png';

const skills = [
    { image: java, name: "Java" },
    { image: python, name: "Python" },
    { image: js, name: "JavaScript" },
    { image: html, name: "HTML5" },
    { image: css, name: "CSS3" },
    { image: boot, name: "Bootstrap CSS" },
    { image: tail, name: "Tailwind CSS" },
    { image: rct, name: "React JS" },
    { image: nd, name: "Node JS" },
    { image: exp, name: "Express JS" },
    { image: sp, name: "Spring" },
    { image: spb, name: "Spring Boot" },
    { image: sps, name: "Spring Security" },
    { image: msq, name: "MySQL" },
    { image: mng, name: "MongoDB" },
    { image: dc, name: "Docker" },
    { image: gt, name: "GitHub" },
    { image: pm, name: "Postman" }
];

export default function Skills() {
    return (
        <div className="container text-center">
            <h1 className="fw-bold mb-5" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)" }}>
                Skills
            </h1>
            <div className="row justify-content-center">
                {skills.map((skill, index) => (
                    <SkillCardComponent key={index} image={skill.image} name={skill.name} />
                ))}
            </div>
        </div>
    );
}
