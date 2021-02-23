import React from 'react';
import './Skills.css'

function Skills() {
    return (
        <div className='skills'>
            <h1 className='skills__title'>Skills</h1>
            <div className='skills__images'>
                <div>
                    <img className='skills__image' src='python.png' alt=''/>
                    <img className='skills__image' src='javascript.png' alt=''/>
                    <img className='skills__image' src='mysql.png' alt=''/>
                </div>
                <div>
                    <img className='skills__image' src='react_js.png' alt=''/>
                    <img className='skills__image' src='flask.png' alt=''/>
                    <img className='skills__image' src='node_js.png' alt=''/>
                </div>
                <div>
                    <img className='skills__image' src='html.png' alt=''/>
                    <img className='skills__image' src='css.png' alt=''/>
                    <img className='skills__image' src='fastapi.png' alt=''/>
                </div>
                <div>
                    <img className='skills__image' src='mongo_db.png' alt=''/>
                    <img className='skills__image' src='git.png' alt=''/>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Skills
