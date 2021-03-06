import React, {useState} from 'react'
import './styles/App.scss';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import InputSection from './InputSection';
import PreviewSection from './PreviewSection';
import Sidebar from './Sidebar';
import { template } from './templateData';

//DELETE BUTTONS FOR INPUTS ARE NOT WORKING

const App = () => {
    const [preview,setPreview] = useState(false);
    const [data,setData] = useState({
        personal: [
            {
                img: './default-placeholder.png',
                name: '',
                bio: '',
                location: '',
                phone: '',
                email: '',
                linkedin: '',
                github: '',
                id: 777
            }
        ],
        experience: [
            {
                position: '',
                company: '',
                description: '',
                startDate: '',
                endDate: '',
                id: 1624163188501
            }
        ],
        education: [
            {
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                id: 1624137888211
            }
        ],
        skills: []
    });

    const turnPreviewOn = () => setPreview(!preview); 

    const turnTemplateData = () => setData(template);

    return (
        <div className="App">
            <header className="App__header">
                <div>
                    <LibraryBooksIcon className="book-icon" />
                    <h2>Make Your CV!</h2>
                </div>
                <h4>Export automatically to PDF!</h4>
            </header>

            <section className="section">
                {!preview && <InputSection data={data} setData={setData} />}
                {preview && <PreviewSection data={data} />}
                <Sidebar isPreview={preview} turnPreview={turnPreviewOn} turnTemplateData={turnTemplateData} />
            </section>
        </div>
    )
}

export default App
