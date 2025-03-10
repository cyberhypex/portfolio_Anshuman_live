import React from 'react';
import java from '../assets/java.png';
import SkillCardComponent from './SkillCardComponent';
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

export default function Skills() {
    return (
        <>
        <h1 className="fw-bold text-center  mb-5" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)", marginBottom: "0" }}>Skills</h1>

            <SkillCardComponent image={java} name="Java" />
            <SkillCardComponent image={python} name="Python" />
            <SkillCardComponent image={js} name="Javascript" />
            <SkillCardComponent image={html} name="HTML5" />
            <SkillCardComponent image={css} name="CSS3" />
            <SkillCardComponent image={boot} name="BootStrap CSS" />
            <SkillCardComponent image={tail} name="Tailwind CSS" />
            <SkillCardComponent image={rct} name="React JS" />
            <SkillCardComponent image={nd} name="Node JS" />
            <SkillCardComponent image={exp} name="Express JS" />
            <SkillCardComponent image={sp} name="Spring" />
            <SkillCardComponent image={spb} name="Springboot" />
            <SkillCardComponent image={sps} name="Spring Security" />
            <SkillCardComponent image={msq} name="My-Sql" />    
            <SkillCardComponent image={mng} name="MongoDB" />
            <SkillCardComponent image={dc} name="Docker" />




            

        </>
    );
}
