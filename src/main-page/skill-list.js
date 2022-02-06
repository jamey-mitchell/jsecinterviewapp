import { useState } from "react";
import Skill from "../skill";

const SkillList = ({ skills }) => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const nonActiveListGroupItemClass = "list-group-item list-group-item-action";
    const activeListGroupItemClass = "list-group-item list-group-item-action active";

    if (skills)
        return (
            <div className="row">
                <div className="col-3">
                  <div className="list-group">
                    {skills.map(s => (
                      <button className={selectedSkill && (selectedSkill.id === s.id) ? activeListGroupItemClass : nonActiveListGroupItemClass} 
                        key={s.id} 
                        onClick={() => setSelectedSkill(s)}>
                            {s.name}
                        </button>
                    ))}
                  </div>
                </div>
                <div className="col-9">
                    {selectedSkill ? <Skill skill={selectedSkill} /> : <p>Select a skill</p> }
                </div>
            </div>
        );
    return <div>No skills!</div>
};

export default SkillList;