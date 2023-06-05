import { useState } from "react";
import "./About.css"

 const About = () => {

    const [showMore, setShowMore] = useState(false);

const toggleShowMore = () => {
       setShowMore(!showMore)
}

    return (
<div className="about-page">

  <section className="intro">
    <h1>
    Welcome to our team's "About Me" page! Here you'll find an introduction to each member of our talented and dedicated team. 
   
   
    Our team consist of four briliant aspiring software engineers, Silis Kleemoff, Wai Leong Chong, and Kinu Wright. 

    </h1>
  </section>

  <section className="silis-card">
    <img src="https://media.licdn.com/dms/image/D4E03AQEQJcW8QU_Bpw/profile-displayphoto-shrink_800_800/0/1677713991542?e=1691625600&v=beta&t=K7D0vJbo1pWf-MAuCtmc-hotzm3oR2i5SYf-nRK2xzY" alt="silis-photo"></img>
    {showMore ? (
              <div>
              <a className="show-more-button" onClick={toggleShowMore}>Show Less ...</a>
              <ul>
                <h2>Hi 👋, I'm Silis Kleemoff</h2>
                <br></br>
                Junior Software Engineer
                 <li> 💻 I'm a Pursuit Fellow </li> 
                 <li> 🌐 I do Fullstack Web Development</li> 
                 <li> 🎮 I also do Unity Game Development</li> 
              </ul>
              <p>I love video games! That's probably why I decided to start making them.</p>
              <a href="https://camo.githubusercontent.com/1b5dc979e1c528d02757f759348d4408b82b738a436baf24f87984d7fd2ef09e/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f7a42787776455a312d7a724266677175776e363649524f332d796d794e4f4630517034767261516d37576856356e53635a787072736c4b6659492d4e385078784d7877" > Visit my game</a>
              <h3>Connect with me:</h3>
              <a href="https://www.linkedin.com/in/silis-kleemoff/"><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="silis-linkedIn"/></a>
              <a href="https://github.com/KleemoffDeveloper"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="silis-github"/></a>
              </div>
             ) : (
             <a className="show-more-button" onClick={toggleShowMore}>Show More ...</a>
            
             )}
  </section>


  <section className="wai-card">
    <img src="https://media.licdn.com/dms/image/D5603AQEJaXpClt02Nw/profile-displayphoto-shrink_800_800/0/1667337566784?e=1691625600&v=beta&t=v-ZQ9oIQcu28E3BvJ6iXSHQF1eFZ8trLm5mTl28Mq5I" alt="wai-photo"></img>
    {showMore ? (
              <div>
              <a className="show-more-button" onClick={toggleShowMore}>Show Less ...</a>
              <h2>Hi 👋, I'm Wai Leong Chong</h2>
             <p>Full-Stack Developer learning at Pursuit, passionate about innovation. In 2017, I cofounded a design studio that assists clients through printing and brand design. In that position, I also helped small businesses design their websites. Before that, I worked as a graphic designer for six years at a printing firm, where I worked on web and paper product design.</p> 
            <ul>
                <li>🌱 Im currently learning Javascript and React</li>
                <li>📫 How to reach me waileongchong@pursuit.org</li>
             </ul>
            <h3>Connect with me:</h3>
            <a href="https://www.linkedin.com/in/wai-leong-chong/"><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="wai-linkedIn"/></a>
            <a href="https://github.com/waiLeongChong"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="wai-github"/></a>




              </div>
             ) : (
             <a className="show-more-button" onClick={toggleShowMore}>Show More ...</a>
            
             )}
  </section>

  {/* <section className="angie-card">
    <img src="https://media.licdn.com/dms/image/C4E03AQFDM-8Ya5rTxQ/profile-displayphoto-shrink_800_800/0/1662908609973?e=1691625600&v=beta&t=DLc6_DSZXSiSJkYIgTmd6sdx33uc0yCMyphApQckXzk" alt="angie-photo"></img>
    {showMore ? (
              <div>
              <a className="show-more-button" onClick={toggleShowMore}>Show Less ...</a>
              
              </div>
             ) : (
             <a className="show-more-button" onClick={toggleShowMore}>Show More ...</a>
            
             )}
  </section> */}

  <section className="kinu-card">
    <img src="https://media.licdn.com/dms/image/D4E03AQEOzfyzXF4XcQ/profile-displayphoto-shrink_800_800/0/1667164033793?e=1691625600&v=beta&t=11KZ0GFeGdnCGc096XdeH8bC78d2sIpPELsbxIT4rU8" alt="kinu-photo"></img>
    {showMore ? (
              <div>
              <a className="show-more-button" onClick={toggleShowMore}>Show Less ...</a>
             <h2>Hi 👋, I'm Kinu Wright</h2>
              </div>
             ) : (
             <a className="show-more-button" onClick={toggleShowMore}>Show More ...</a>
            
             )}
  </section>
</div>
    )
}

export default About;