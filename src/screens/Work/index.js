import React from "react";
import { Link} from "react-router-dom";
import image from '/Users/famillebouassami/myresume/src/components/images/hdsi.png'
import bio from '/Users/famillebouassami/myresume/src/components/images/bio.jpg'
import snip from '/Users/famillebouassami/myresume/src/components/images/snipfeed.png'
import styles from './Style.css'


function Work() {
    
    
      
    

    

    

    return (
        <div>
            <h1 className = "Title">Work Experience</h1>
            <hr className="Line"/>
            <img className = "logo" src={image} alt="Italian Trulli"/>
            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I am currently working with Professor Mikio Aoi
                on studying the efficiency of Model-based targeted dimensionality reduction on understanding neurons' activity in 
                the prefrontal cortex. </p>
                
                <p style={{margin : 0, paddingTop:0}} className = "ProjectLink"><a href="https://colab.research.google.com/drive/1aOFX5-iTEUwJleiUf90Iln4pDCUoTUS6#scrollTo=ET1quX2bFw1J" target="_blank" rel="noreferrer">Python code</a></p>

            </div>
            <div className="vlContainer">
            <div className="vl">

                </div>



            
            </div>
            <div className = "logoDiv">
            <img className = "logo_2" src={bio} alt="Italian Trulli"/>
            
            </div>

            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:0}}>I worked with Professor Johnatan Aljadeff on understanding the stability of information processing in the brain from December 2020 to June 2021.</p>
                <Link to = "/Aljadeff">
                    <p style={{margin : 0, paddingTop:0}} className = "ProjectLink">Project report</p>
                </Link>
            </div>

            <div className="vlContainer">
            <div className="vl">

                </div>



            
            </div>


            <div className = "logoDiv">
            <img style = {{marginTop:50}} className = "logo_2" src={snip} alt="Italian Trulli"/>
            
            </div>

            <div className = "textContainer">
                <p className = "workDescription" style = {{marginBottom:50, marginTop:10}}>
                    I have been working at Snipfeed as a part time data science intern since July 2021.
                    I worked with a team of computer scientists and designers on creating new monetization tools 
                    for creators. I also worked on testing new web app features to increase user retention
                </p>
                
            </div>



        </div>



    )
}

export default Work;