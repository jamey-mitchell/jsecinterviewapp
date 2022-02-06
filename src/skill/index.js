import "./skill.css";

const Skill = ({ skill }) => {
    return ( 
        <div className="row">
            <h5 className="col-md-12">{skill.description}</h5>
        </div>
     );
}
 
export default Skill;