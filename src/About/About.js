import React from 'react'
import { Card, CardContent } from '@material-ui/core'
import './About.css'

function About() {
    return (
        <div className='about'>
            <h1 className='about__title'>About Me</h1>
            <div className='about__container'>

                <div className='about__container__text'>
                    <p2 className='about__subtitle'>Full-Stack Developer</p2>

                    <Card className='about__body'>
                        <CardContent className='about__body__contents'>
                            <p2>
                                I am a deeply passionate software developer who continuously improves his skills. I was born 
                                and am still based in Johannesburg, South Africa. I have good understanding of finance, mathematics, and
                                mathematical statistics as a result of completing two years of studies in an Actuarial Science
                                degree. The combination of good math skills and programming make me a great at solving 
                                technical problems. I am also a fan of art, beauty and aesthetics, which is why I like and 
                                develop front-end for software as well.
                            </p2>
                            <div className='about__body__btn'>
                                <a href="resume.pdf" class="about__resume" download>MY RESUME</a>
                            </div>
                        </CardContent>
                    </Card>
                    
                </div>

                <img src='profile.jpg' alt="" class="about__img"></img>

            </div>
                
        </div>
    )
}

export default About
