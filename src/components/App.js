import React, {useState} from 'react'
import './styles/App.scss';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import InputSection from './InputSection';
import PreviewSection from './PreviewSection';
import Sidebar from './Sidebar';

const App = () => {
    const [preview,setPreview] = useState(false)

    const turnPreviewOn = () => setPreview(!preview); 
    console.log(preview);
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
                {!preview && <InputSection />}
                {preview && <PreviewSection />}
                <Sidebar isPreview={preview} turnPreview={turnPreviewOn} />
            </section>
        </div>
    )
}

export default App
