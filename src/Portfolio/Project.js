import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './Project.css'

function Project({url, title, github, weblink, description, tools}) {
    return (
        <Card className='project'>
            <CardContent>
                <h2 className='project__title'>{title}</h2>
                <div className='project__image__container'>
                    <img className='project__image' src={url} alt=''/>
                </div>
                
                <h2 className='project__description__tag'>Description</h2>
                <Card className='project__description'>
                    <CardContent>
                        <p><span><strong>{description}</strong></span>
                            <span>{tools}</span>
                        </p>
                    </CardContent>
                </Card>

                <div className='project__links'>
                    <div>
                        <a href= {github} class="project__github__link">Github link</a>
                    </div>
                    <div>
                        <a href={weblink} class="project__live__link">Web-app link</a>
                    </div>

                    
                </div>
                
            </CardContent>
        </Card>
    )
}

export default Project
