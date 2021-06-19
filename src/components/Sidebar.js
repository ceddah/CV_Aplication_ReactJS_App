import React,{useState} from 'react'
import ListAltIcon from '@material-ui/icons/ListAlt';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';

const Sidebar = ({isPreview,turnPreview}) => {
    return (
        <aside className="section__sidebar">
            <h2 className="sidebar-title">Preview Mode</h2>
            <div className="switch">
                <Button variant="contained" color={isPreview ? 'primary' : 'default'} onClick={turnPreview} >Preview</Button>
            </div>
            {!isPreview && <p className="warning">You must enable Preview Mode to be able to download the PDF!</p>}
            <h2 className="sidebar-title">Options</h2>
            {isPreview && <button className="download-pdf set-template"><GetAppIcon /> <span>Download PDF</span></button>}
            <button className="set-template"><ListAltIcon /> <span>Template CV</span></button>
            <h2 className="sidebar-title">Instructions</h2>
            <div className="info">
                <p>Fill the inputs you deem necessary, no input is obligatory, however some do require specific formats:</p>
                <ul>
                    <li>Phone requires a number format</li>
                    <li>Email requires a valid email format</li>
                    <li>Github and Linkedin require a valid URL format </li>
                </ul>
            </div>
            <p className="warning">Fields left blank will be ommited in the preview mode and exported PDF</p>
        </aside>
    )
}

export default Sidebar
