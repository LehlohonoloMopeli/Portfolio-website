import React from 'react';
import Project from './Project';
import './Portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h1 className='portfolio__title'>Portfolio</h1>
            <div className='portfolio__projects'>
                <Project
                    className='portfolio__project'
                    title='Accounting Software'
                    description='Server side application for an accounting software 
                    which requires little to zero accounting accounting knowledge from users. 
                    Bypasses the double entry system. This project is not yet hosted,
                    nor is it on github. But I am available for private show of the code
                    and the custom APIs.'
                    github=''
                    weblink=''
                    url='accounting.png'
                    tools='Tools: Python, FastAPI, Mysql, SQLAlchemy, Micro-services architecture.'
                />
                <Project
                    className='portfolio__project'
                    title='Covid-19 Tracker'
                    description='Displays worldwide covid 19 statistics.'
                    github='https://github.com/LehlohonoloMopeli/covid-19-tracker-app'
                    weblink='https://covid-19-tracker-app-ae159.web.app'
                    url='covid_1.png'
                    tools = 'Tools: React-js, disease.sh API(s), chartjs, react-leaflet'
                />
                <Project
                    className='portfolio__project'
                    title='Messaging App'
                    description='Real-time messaging web application similar to Microsoft-Teams.'
                    github='https://github.com/LehlohonoloMopeli/react-chat-application'
                    weblink='https://lehlohonolo-chat-application.web.app'
                    url='messaging.png'
                    tools='Tools: React-js, Chat Engine'
                />
                <Project
                    className='portfolio__project'
                    title='Tinder Clone'
                    description='Clone of the famous online dating site, Tinder.'
                    github=''
                    weblink='https://tinder-clone-1eebc.web.app'
                    url='tinder_1.png'
                    tools='Tools: MERN Stack (React-js, Mongodb, ExpressJs, NodeJs)'
                />
            </div>
            
        </div>
    )
}

export default Portfolio
