/* A component in React could be simplified as a JS function. Component name being uppercase will signify custom-made file */
import './ProjectItem.css';

function ProjectItem(){
    return (
        <div className="project-item">   {/* className is JSX property */}
            <div>Languages Used</div>
            <div className="project-item__title">
                <h2>Title</h2>
                <div className="project-item__about">About</div>
            </div>
        </div>
    );
}

export default ProjectItem;