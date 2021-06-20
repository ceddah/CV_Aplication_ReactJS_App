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

    const handleChangeAllInputs = (objKey, e, id) => {
        const {name,value} = e.target
        const newData = data[objKey].map(item => {
            if(item.id === id) {
                return {...item, [name]: value}
            }
            return item;
        })
        setData({...data, [objKey]: newData});
    }

    const removeInputField = (objKey,id) => {
        const newData = data[objKey].filter(item => item.id !== id);
        setData({...data, [objKey]: newData});
    }

    const handleFileInputChange = (e) => {
        const newImage = URL.createObjectURL(e.target.files[0]);
        const newData = data.personal.map(item => {
            if(item.id === 777) {
                return {...item, [e.target.name]: newImage}
            }
            return item;
        })
        setData({...data, personal: newData});
    }

    const getRandomID = () => new Date().getTime();

    const addAnotherFieldForExp = (val1,val2,val3,id) => {
        setData({...data, experience: [...data.experience, { [val1]: '', [val2]: '', [val3]: '',startDate: '', endDate: '', id }]});
    }

    const addAnotherFieldForEdu = (val1,val2,id) => {
        setData({...data, education: [...data.education, { [val1]: '', [val2]: '',startDate: '', endDate: '', id }]});
    }

    const renderExperienceInputs = () => {
        return data.experience.map((item,index) => {
            return (
                <div key={index} className="form-control-field">
                    <div className="controlled-inputs">
                        <input value={data.experience[index].position} onChange={(e) => handleChangeAllInputs('experience', e, item.id)} type="text" name="position" placeholder="Your position here" />
                        <input value={data.experience[index].company} onChange={(e) => handleChangeAllInputs('experience', e, item.id)} type="text" name="company" placeholder="Your company here" />
                        <textarea value={data.experience[index].description} onChange={(e) => handleChangeAllInputs('experience', e, item.id)} name="description" cols="30" rows="5" placeholder="Job description here (optional)"></textarea>
                    </div>
                    <div className="dates">
                        <div className="dates-control">
                            <p>Start Date:</p>
                            <input value={data.experience[index].startDate} onChange={(e) => handleChangeAllInputs('experience', e, item.id)} type="date" name="startDate" />
                        </div>
                        <div className="dates-control">
                            <p>End Date:</p>
                            <input value={data.experience[index].endDate} onChange={(e) => handleChangeAllInputs('experience', e, item.id)} type="date" name="endDate" />
                        </div>
                        <button onClick={() => removeInputField('experience', item.id)} className="remove-input" ><DeleteIcon /> Delete</button>
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
                        <input value={data.education[index].school} onChange={(e) => handleChangeAllInputs('education', e, item.id)} type="text" name="school" placeholder="Your school here" />
                        <input value={data.education[index].degree} onChange={(e) => handleChangeAllInputs('education', e, item.id)} type="text" name="degree" placeholder="Your degree here" />
                    </div>
                    <div className="dates">
                        <div className="dates-control">
                            <p>Start Date:</p>
                            <input value={data.education[index].startDate} onChange={(e) => handleChangeAllInputs('education', e, item.id)} type="date" name="startDate" />
                        </div>
                        <div className="dates-control">
                            <p>End Date:</p>
                            <input value={data.education[index].endDate} onChange={(e) => handleChangeAllInputs('education', e, item.id)} type="date" name="endDate" />
                        </div>
                        <button onClick={() => removeInputField('education', item.id)} className="remove-input" ><DeleteIcon /> Delete</button>
                    </div>
                </div>
            )
        })
    }

    return (
        <main className="section__inputs">
            <section className="personal-info">
                <div className="your-image">
                    <label htmlFor="imageInput">
                        <img src={data.personal[0].img} alt="personalPhoto" />
                    </label>
                    <input type="file" onChange={handleFileInputChange} name="img" id="imageInput" />
                </div>
                <div className="personal-info__inputs">
                    <input value={data.personal[0].name} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="text" name="name"  autoComplete="off" placeholder="Input your name here"/>
                    <textarea value={data.personal[0].bio} onChange={(e) => handleChangeAllInputs('personal', e, 777)} name="bio" cols="30" rows="5" placeholder="Small bio about yourself here"></textarea>
                </div>
                <div className="contact-info">
                    <div className="contact-form-control">
                        <RoomIcon fontSize="small" />
                        <input value={data.personal[0].location} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="text" name="location" placeholder="Your location here" />
                    </div>
                    <div className="contact-form-control">
                        <PhoneIcon fontSize="small" />
                        <input value={data.personal[0].phone} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="tel" name="phone" placeholder="Your phone here" />
                    </div>
                    <div className="contact-form-control">
                        <EmailIcon fontSize="small" />
                        <input value={data.personal[0].email} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="email" name="email" placeholder="Your email here" />
                    </div>
                    <div className="contact-form-control">
                        <LinkedInIcon fontSize="small" />
                        <input value={data.personal[0].linkedin} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="url" name="linkedin" placeholder="Your Linkedin here" />
                    </div>
                    <div className="contact-form-control">
                        <GitHubIcon fontSize="small" />
                        <input value={data.personal[0].github} onChange={(e) => handleChangeAllInputs('personal', e, 777)} type="url" name="github" placeholder="Your Github here" />
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