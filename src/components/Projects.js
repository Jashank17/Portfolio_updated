// Import Assets
import plot4 from '../assets/plot4.png';
import pubg from '../assets/pubg.png';


const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Plot 4 - Gaming with AI</h3>
                    <img src={plot4} alt="Plot 4 Page" />
                    <p>Plot 4 is two player game which has attractive UI and has been trained
with multiple AI algorithms. Technologies used: HTML, CSS, JS, EEL, Py.
                    </p>

                    <a href="https://drive.google.com/file/d/1_0wtBQnsn-JkytlgCL3r2mhIIn46G0Go/view" target="_blank" className="button">Download Now</a>
                    <a href="https://www.irjmets.com/uploadedfiles/paper/volume2/issue_6_june_2020/1959/1628083067.pdf" target="_blank" className="button">Publication</a>
					
                </div>

               

                <div className="projects__card">
                    <h3>Pubg Management System - DBMS </h3>
                    <img src={pubg} alt="pubg Landing Page" />
                    <p>PUBG Management Svstem is based on Online battle royale game
developed by PUBG Corporation. This Project emphasis on Storing, Modifying and Deleting Player data. Technologies
Used: .NET, SQL Server.
                    </p>

                    
                </div>
				<div className="projects__card">
                    <h3>Employee Management System</h3>
                    
                    <p>Employee Management System allows you to store,
manage, and track all employee data. It holds a variety of employee personnel fields such as name, age, job title, salary,
length of service, etc for HR to refer from. Technologies Used: Python, Tkinter, Files
                    </p>

                    
                </div>
            </div>
        </section>
    );
}

export default Projects;