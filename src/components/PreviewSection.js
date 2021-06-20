import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import WorkIcon from '@material-ui/icons/Work';
import BuildIcon from '@material-ui/icons/Build';
import SchoolIcon from '@material-ui/icons/School';

var protomatch = /^(https?|ftp):\/\//;

const PreviewSection = ({data}) => {
    const check = (item) => item === '' ? null : item;

    const previewPersonalInfo = () => {
        return data.personal.map((item,idx) => {
            return (
                <div key={idx + 50} className="preview__personal">
                    <div className="preview-image">
                        <img src={item.img} alt="portfolioPhoto" />
                    </div>
                    <div className="preview-name-desc">
                        <h1>{item.name}</h1>
                        <p>{item.bio}</p>
                    </div>
                    <div className="preview-social">
                        {item.location !== '' && <p><RoomIcon className="social-preview" /> {item.location}</p>}
                        {item.phone !== '' && <a href={`tel:+${item.phone}`}><PhoneIcon className="social-preview" /> {item.phone}</a>}
                        {item.email !== '' && <a href={`mailto:${item.email}`}><EmailIcon className="social-preview" /> {item.email}</a>}
                        {item.linkedin !== '' && <a href={item.linkedin}><LinkedInIcon className="social-preview" /> {item.linkedin.replace(protomatch, '')}</a>}
                        {item.github !== '' && <a href={item.github}><GitHubIcon className="social-preview" /> {item.github.replace(protomatch, '')}</a>}
                    </div>
                </div>
            )
        })
    }

    const previewWorkSection = () => {
        if(data.experience.length === 0) return null;
        return (
            <div className="preview-experience">
                <h1><WorkIcon className="preview-header-icon" /> Experience</h1>
                {data.experience.map((item,idx) => {
                    return (
                        <div key={idx + 10} className="preview-experience-section">
                            <div className="exp-title">
                                <h3 className="preview-company">{item.company}</h3>
                                <h3 className="preview-position">{item.position}</h3>
                            </div>
                            <div className="worked-for">
                                {`${item.startDate} - ${item.startDate && !item.endDate ? 'Still Working' : item.endDate}`}
                            </div>
                            <p className="exp-description">{item.description}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

    const previewEducationSection = () => {
        if(data.education.length === 0) return null;
        return (
            <div className="preview-education">
                <h1><SchoolIcon className="preview-header-icon" /> Education</h1>
                {data.education.map((item,idx) => {
                    return (
                        <div key={idx + 15} className="preview-education-section">
                            <div className="edu-title">
                                <h3 className="preview-school">{item.school}</h3>
                                <h3 className="preview-degree">{item.degree}</h3>
                            </div>
                            <div className="studied-for">
                                {`${item.startDate} - ${item.startDate && !item.endDate ? 'Still Studying' : item.endDate}`}
                            </div>
                        </div> 
                    )
                })}
            </div>
        )
    }

    const previewSkillsSection = () => {
        if(data.skills.length === 0) return null;

        return (
            <div className="preview-skills">
                <h1><BuildIcon className="preview-header-icon" /> Skills</h1>
                <ul className="skills-listing">
                    {data.skills.map(item => {
                        return (
                            <li key={item.skillsID} className="skills-list-item">{item.skill}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }

    return (
        <main className="section__preview">
            {previewPersonalInfo()}
            {previewWorkSection()}
            {previewEducationSection()}
            {previewSkillsSection()}
        </main>
    )
}

export default PreviewSection
