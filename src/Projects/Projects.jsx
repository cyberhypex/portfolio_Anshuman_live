import React from 'react';

export default function Projects() {
    const projects = [
        {
            name: "WeatherAPI-springBoot",
            description: "This is a backend project utilizing the Weather API to access various weather information. I have used REST template to post a GET request from the API URL and designed endpoints to successfully retrieve various information.",
            link: "https://github.com/cyberhypex/weatherAPI-springboot.git"
        },
        {
            name: "MusTunes",
            description: "This is an HTML5-CSS3 only built website for a music app. I did this to enhance my HTML5 and CSS3 skills.",
            link: "https://github.com/cyberhypex/musTunes.git"
        },
        {
            name: "SpringTodo",
            description: "I have made this todo application using Spring Boot as backend and used Thymeleaf for rendering UI. Used MySQL as the database.",
            link: "https://github.com/cyberhypex/spring-todo.git"
        }
    ];

    return (
        <div className="container">
            <h1 className="fw-bold text-center mb-5" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)" }}>Projects</h1>
            <div className="row d-flex flex-wrap justify-content-center">
                {projects.map((project, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex">
                        <div className="card shadow-lg w-100 d-flex flex-column p-3" style={{ minHeight: "220px" }}>
                            <div className="card-body d-flex flex-column justify-content-between">
                                <h5 className="card-title text-center">{project.name}</h5>
                                <p className="card-text text-center" style={{ flexGrow: 1 }}><strong>{project.description}</strong></p>
                                <div className="text-center">
                                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Check GitHub</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
