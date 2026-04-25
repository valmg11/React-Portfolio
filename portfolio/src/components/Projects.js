import project1 from '../assets/placeholder.jpg'

function Projects() {
    return (
        <>
        <div>
            <h2>My Projects</h2>
        </div>
        <div className="projectsDiv" id="projects">
            <div className="project1">
                <h3>Project 1</h3>
                <div className="project1Flex">
                    <img className="project1Img" src={project1} alt="project 1"/>
                    <p>blah blah blah words blah i love seals lalala</p>
                </div>
            </div>
            <div className="project2">
                <h3>Project 2</h3>
                <div className="project2Flex">
                    <p>blah blah blah words blah i love seals lalala</p>
                    <img className="project1Img" src={project1} alt="project 1"/>
                </div>
            </div>
            <div className="project3">
                <h3>Project 3</h3>
                <div className="project3Flex">
                    <img className="project1Img" src={project1} alt="project 3"/>
                    <p>blah blah blah words blah i love seals lalala</p>
                </div>
            </div>
            
        </div>
        </>
    );
}

export default Projects;