import React, {useState} from 'react';
import "../index.css";
import githubLogo from "../static/githublogo.png"
import codechef from "../static/codechef.png"
import Hackerrank from "../static/Hackerrank.png"
import linkedin from "../static/linkedinlogo.png"
import mail from "../static/mail.png"
import medium from "../static/Medium.png"
import twitter from "../static/twitter.png"
import location from "../static/location.png"
import company from "../static/company.png"
import link from "../static/link.png"
import Repos from './Repos';


function ProfileHeader(props) {
    
      const [data, setData] = useState( { developerId : props.developerId.match.params.developerId});
   
    
      function componentDidMount()
      {
          
          fetchUserDetails();
      }

      function fetchUserDetails()
      {
        fetch(`/api/developers/${data.developerId}`).then(response => response.json()).then(data => 
            {
                setData(data);
            })
      }

  
        
        return( <div class="profile-page"><div class="profile-header">
            <div class="profile-header-1">Developer Information</div>
            <div class="profile-header-2">All Developers</div>
            </div>
            <div class="profile-intro">
                <div class="profile-image"><img class="avatar-image" src={data.avatar_url ? data.avatar_url : ""} alt="profileimage"></img></div>
                <div class="profile-details">
                <div class="profile-name">{data.name}</div>
                <div class="profile-bio">   <p>{data.bio}</p></div> 
                <div class="profile-links">
                    {data.github_id && <a href={data.url} class="profile-logo"><img src={githubLogo} alt="github logo" class="img-logo"></img></a>}
                    {data.Twitter && <a href={data.Twitter} class="profile-logo"><img src={twitter} alt="twitter logo" class="img-logo"></img></a>}
                    {data.codechef && <a href={data.codechef} class="profile-logo"><img src={codechef} alt="codechef logo" class="img-logo"></img></a>}
                    {data.Hackerrank && <a href={data.Hackerrank} class="profile-logo"><img src={Hackerrank} alt="Hackerrank logo" class="img-logo"></img></a>}
                    {data.linkedin && <a href={data.linkedin} class="profile-logo"><img src={linkedin} alt="linkedin logo" class="img-logo"></img></a>}
                    {data.mail && <a href={data.mail} class="profile-logo"><img src={mail} alt="mail logo" class="img-logo"></img></a>}
                    {data.medium && <a href={data.medium} class="profile-logo"><img src={medium} alt="medium logo" class="img-logo"></img></a>}
                </div>
                <div class="profile-location">
                    {data.location && <div class="location-data"><img src={location} alt="mail logo" class="img-logo"></img>{data.location}</div>}
                    {data.company && <div class="location-data"><img src={company} alt="company logo" class="img-logo"></img>{data.company}</div>}
                    {data.blog && <div class="location-data"><a href={data.blog}><img src={link} alt="link logo" class="img-logo"></img>{data.blog}</a></div>}
                </div> 
                </div>                
                </div>
                <Repos developerId={data.developerId}/>
            </div>)
  
}

export default ProfileHeader;