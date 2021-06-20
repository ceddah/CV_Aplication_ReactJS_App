import React, {useState,useRef} from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';
import DeleteIcon from '@material-ui/icons/Delete';

const InputSection = ({data,setData}) => {
    const [skillsInput,setSkillsInput] = useState('');
    const dummyRef = useRef();

    //Try the same approach when setting new data for exp and edu. data.education[idx].name
    //IF this doesn't work for inputs try adding to each new field ID

    const handleSkillsSubmit = (e) => {
        e.preventDefault();
        const newSkill = {
            skill: skillsInput,
            skillID: getRandomID()
        };
        if(skillsInput !== '') {
            setData({...data, skills: [...data.skills, newSkill]});
            setSkillsInput('');
            dummyRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    const handleSkillsRemove = (id) => {
        const newSkills = data.skills.filter(item => item.skillID !== id);
        setData({...data, skills: newSkills});
    }

    const handleChangePersonalInfo = (e) => {
        const {name,value} = e.target;
        setData({...data, personal: {...data.personal, [name]: value}});
    }

    const handleChangeExperience = (handleFor, e, id) => {
        const {name,value} = e.target
        const newData = data[handleFor].map(item => {
            if(item.id === id) {
                return {...item, [name]: value}
            }
            return item;
        })
        setData({...data, [handleFor]: newData});
    }

    const renderExperienceInputs = () => {
        return data.experience.map((item,index) => {
            return (
                <div key={index} className="form-control-field">
                    <div className="controlled-inputs">
                        <input value={data.experience[index].position} onChange={(e) => handleChangeExperience('experience', e, item.id)} type="text" name="position" placeholder="Your position here" />
                        <input value={data.experience[index].company} onChange={(e) => handleChangeExperience('experience', e, item.id)} type="text" name="company" placeholder="Your company here" />
                        <textarea value={data.experience[index].description} onChange={(e) => handleChangeExperience('experience', e, item.id)} name="description" cols="30" rows="5" placeholder="Job description here (optional)"></textarea>
                    </div>
                    <div className="dates">
                        <div className="dates-control">
                            <p>Start Date:</p>
                            <input value={data.experience[index].startDate} onChange={(e) => handleChangeExperience('experience', e, item.id)} type="date" name="startDate" />
                        </div>
                        <div className="dates-control">
                            <p>End Date:</p>
                            <input value={data.experience[index].endDate} onChange={(e) => handleChangeExperience('experience', e, item.id)} type="date" name="endDate" />
                        </div>
                        <button className="remove-input" ><DeleteIcon /> Delete</button>
                    </div>
                </div>
            )
        })
    }

    const renderEducationInputs = () => {
        return data.education.map((item,index) => {
            return (
                <div key={index + 5} className="form-control-field">
                    <div className="controlled-inputs">
                        <input value={data.education[index].school} onChange={(e) => handleChangeExperience('education', e, item.id)} type="text" name="school" placeholder="Your school here" />
                        <input value={data.education[index].degree} onChange={(e) => handleChangeExperience('education', e, item.id)} type="text" name="degree" placeholder="Your degree here" />
                    </div>
                    <div className="dates">
                        <div className="dates-control">
                            <p>Start Date:</p>
                            <input value={data.education[index].startDate} onChange={(e) => handleChangeExperience('education', e, item.id)} type="date" name="startDate" />
                        </div>
                        <div className="dates-control">
                            <p>End Date:</p>
                            <input value={data.education[index].endDate} onChange={(e) => handleChangeExperience('education', e, item.id)} type="date" name="endDate" />
                        </div>
                        <button className="remove-input" ><DeleteIcon /> Delete</button>
                    </div>
                </div>
            )
        })
    }

    const getRandomID = () => new Date().getTime();

    const addAnotherFieldForExp = (val1,val2,val3,id) => {
        setData({...data, experience: [...data.experience, { [val1]: '', [val2]: '', [val3]: '',startDate: '', endDate: '', id }]});
    }

    const addAnotherFieldForEdu = (val1,val2,id) => {
        setData({...data, education: [...data.education, { [val1]: '', [val2]: '',startDate: '', endDate: '', id }]});
    }

    return (
        <main className="section__inputs">
            <section className="personal-info">
                <div className="your-image">
                    <label htmlFor="imageInput">
                        <img src={data.personal.img} alt="personalPhoto" />
                    </label>
                    <input type="file" name="img" id="imageInput" />
                </div>
                <div className="personal-info__inputs">
                    <input value={data.personal.name} onChange={handleChangePersonalInfo} type="text" name="name"  autoComplete="off" placeholder="Input your name here"/>
                    <textarea value={data.personal.bio} onChange={handleChangePersonalInfo} name="bio" cols="30" rows="5" placeholder="Small bio about yourself here"></textarea>
                </div>
                <div className="contact-info">
                    <div className="contact-form-control">
                        <RoomIcon fontSize="small" />
                        <input value={data.personal.location} onChange={handleChangePersonalInfo} type="text" name="location" placeholder="Your location here" />
                    </div>
                    <div className="contact-form-control">
                        <PhoneIcon fontSize="small" />
                        <input value={data.personal.phone} onChange={handleChangePersonalInfo} type="tel" name="phone" placeholder="Your phone here" />
                    </div>
                    <div className="contact-form-control">
                        <EmailIcon fontSize="small" />
                        <input value={data.personal.email} onChange={handleChangePersonalInfo} type="email" name="email" placeholder="Your email here" />
                    </div>
                    <div className="contact-form-control">
                        <LinkedInIcon fontSize="small" />
                        <input value={data.personal.linkedin} onChange={handleChangePersonalInfo} type="url" name="linkedin" placeholder="Your Linkedin here" />
                    </div>
                    <div className="contact-form-control">
                        <GitHubIcon fontSize="small" />
                        <input value={data.personal.github} onChange={handleChangePersonalInfo} type="url" name="github" placeholder="Your Github here" />
                    </div>
                </div>
            </section>

            <section className="sect experience">
                <h1 className="sect__header"><WorkIcon className="header-icon" /> Experience</h1>
                <div className="sect__inputs">
                    {renderExperienceInputs()}
                </div>
                <button onClick={() => addAnotherFieldForExp('position','company', 'description', getRandomID())} className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
            </section>
            <section className="sect education">
            <h1 className="sect__header"><SchoolIcon className="header-icon"/> Education</h1>
                <div className="sect__inputs">
                    {renderEducationInputs()}
                </div>
                <button onClick={() => addAnotherFieldForEdu('school', 'degree', getRandomID())} className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
            </section>
            <section className="sect skills">
                <h1 className="sect__header"><BuildIcon className="header-icon" /> Skills</h1>
                <div className="skills_input">
                    <form onSubmit={handleSkillsSubmit}>
                        <input value={skillsInput} onChange={(e) => setSkillsInput(e.target.value)} type="text" name="skills"  placeholder="Your skills here" />
                        <button className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
                    </form>
                    <ul className="skills_list">
                       {data.skills.map(item => {
                           return (
                            <li key={item.skillID}>
                                <span>{item.skill}</span>
                                <CloseIcon className="close-icon" onClick={() => handleSkillsRemove(item.skillID)} />
                            </li>
                           )
                       })}
                    </ul>
                </div>
            </section>
            <div ref={dummyRef} className="dummyDiv"></div>
        </main>
    )
}

export default InputSection