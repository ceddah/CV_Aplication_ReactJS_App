import React from 'react'
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

const InputSection = () => {
    return (
        <main className="section__inputs">
            <section className="personal-info">
                <div className="your-image">
                    <img src="./default-placeholder.png" alt="as" />
                </div>
                <div className="personal-info__inputs">
                    <input type="text" name="name"  autoComplete="off" placeholder="Input your name here"/>
                    <textarea name="bio" cols="30" rows="5" placeholder="Small bio about yourself here"></textarea>
                </div>
                <div className="contact-info">
                    <div className="contact-form-control">
                        <RoomIcon fontSize="small" />
                        <input type="text" name="location" placeholder="Your location here" />
                    </div>
                    <div className="contact-form-control">
                        <PhoneIcon fontSize="small" />
                        <input type="tel" name="phone" placeholder="Your phone here" />
                    </div>
                    <div className="contact-form-control">
                        <EmailIcon fontSize="small" />
                        <input type="email" name="email" placeholder="Your email here" />
                    </div>
                    <div className="contact-form-control">
                        <LinkedInIcon fontSize="small" />
                        <input type="url" name="linkedin" placeholder="Your Linkedin here" />
                    </div>
                    <div className="contact-form-control">
                        <GitHubIcon fontSize="small" />
                        <input type="url" name="github" placeholder="Your Github here" />
                    </div>
                </div>
            </section>

            <section className="sect experience">
                <h1 className="sect__header"><WorkIcon className="header-icon" /> Experience</h1>
                <div className="sect__inputs"></div>
                <button className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
            </section>
            <section className="sect education">
            <h1 className="sect__header"><SchoolIcon className="header-icon"/> Education</h1>
                <div className="sect__inputs"></div>
                <button className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
            </section>
            <section className="sect skills">
                <h1 className="sect__header"><BuildIcon className="header-icon" /> Skills</h1>
                <div className="skills_input">
                    <form>
                        <input type="text" name="skills"  placeholder="Your skills here" />
                        <button className="add-more"><AddCircleIcon className="add-more__btn" />Add More</button>
                    </form>
                    <ul className="skills_list">
                        <li>
                            <span>123</span>
                            <CloseIcon className="close-icon" />
                        </li>
                        <li>
                            <span>asdsasd</span>
                            <CloseIcon className="close-icon"/>
                        </li>
                        <li>
                            <span>zzz92</span>
                            <CloseIcon className="close-icon"/>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default InputSection
