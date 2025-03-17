import React from 'react';
import lc from '../assets/Leetcode.png';
import cc from '../assets/codechef.png';
import cf from '../assets/codeforces.png';

export default function CodingProfiles() {
    const profiles = [
        {
            name: "LeetCode",
            link: "https://leetcode.com/u/anshgogoi201/",
            image: lc
        },
        {
            name: "Codeforces",
            link: "https://codeforces.com/profile/anshgogoi201",
            image: cf
        },
        {
            name: "CodeChef",
            link: "https://www.codechef.com/users/anshu2619",
            image: cc
        }
    ];

    return (
        <div className="container">
            <h1 className="fw-bold text-center my-4" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)" }}>Coding Profiles</h1>
            <div className="row justify-content-center">
                {profiles.map((profile, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                        <a href={profile.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                            <div className="card shadow-lg text-center p-3" style={{ maxWidth: "165px", margin: "auto" }}>
                                <img src={profile.image} alt={profile.name} className="card-img-top mx-auto" style={{ width: "90px", height: "90px", objectFit: "contain" }} />
                                <div className="card-body p-2">
                                    <h6 className="card-title" style={{ color: "black", margin: 0 }}>
                                        {profile.name}
                                    </h6>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
