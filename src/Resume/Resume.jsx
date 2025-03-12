import React from 'react';

export default function Resume() {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div className="card text-center shadow-sm p-3" style={{ width: "18rem", borderRadius: "10px" }}>
                <div className="card-body">
                    <h5 className="card-title fw-bold">View My Resume</h5>
                    <button 
                        className="btn btn-primary mt-2"
                        onClick={() => window.open('https://drive.google.com/file/d/1NvuO_ZAtGZ7rpI_ZZJorDzUTuhmSZ-yf/view?usp=sharing', '_blank')}
                    >
                        Open Resume
                    </button>
                </div>
            </div>
        </div>
    );
}
