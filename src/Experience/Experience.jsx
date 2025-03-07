export default function Experience(){
    return(
        <>
        <h1 className="fw-bold text-center  mb-5" style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.4)", marginBottom: "0" }}>Experience</h1>
        <div className="experience-section mt-5">
          <div className="card shadow-sm mb-4" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="card-body">
              <h5 className="card-title ">Healthletic Lifestyle</h5>
              <p className="card-subtitle mb-2 text-muted">Duration: Feb'25 - Current</p>
              <p className="card-text fw-bold">Backend Developer Intern</p>
              <p>Working with the backend team to develop various endpoints as per requirements. </p><p>Worked with NodeJS and ExpressJS till now. </p><p>Currently working to design endpoints for HMS.</p>
            </div>
          </div>
          <div className="card shadow-sm" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="card-body">
              <h5 className="card-title">GeeksForGeeks</h5>
              <p className="card-subtitle mb-2 text-muted">Duration: July'23 - July'24</p>
              <p className="card-text fw-bold">Campus Mantri (Ambassador)</p>
              <p>Created a community of students to promote the company in Assam Engineering College.</p>
            </div>
          </div>
        </div>
        </>
    )
}
