import { useState } from "react";
import "./About.css"

function TeamMember({
  memberSrc,
  memberAlt,
  header1,
  listSection,
  paragraph1,
  special,
  projectHref,
  projectSrc,
  projectAlt,
  linkedInHref,
  linkedInSrc,
  GithubHref,
  GithubSrc
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="member-card">
      <img src={memberSrc} alt={memberAlt}></img>
      {showMore ? (
        <div>
          <a className="show-more-button" onClick={() => setShowMore(!showMore)}>Show Less ...</a>

          <h2>{header1}</h2>
          <br></br>
          {listSection}
          {paragraph1}
          {special ? <a href={special} > Visit my game</a> : null}

          <h3>Check out my project</h3>
          <a href={projectHref}><img src={projectSrc} alt={projectAlt} /></a>



          <h3>Connect with me:</h3>
          <a href={linkedInHref}><img src={linkedInSrc} alt="linkedIn" /></a>
          <a href={GithubHref}><img src={GithubSrc} alt="github" /></a>
        </div>
      ) : (
        <a className="show-more-button" onClick={() => setShowMore(!showMore)}>Show More ...</a>

      )}
    </section>
  );
}

const About = () => {
  return (
    <div className="about-page">

      <section className="intro">
        <h1>
          Welcome to our team's "About Me" page! Here you'll find an introduction to each member of our talented and dedicated team.


          Our team consist of four briliant aspiring software engineers, Silis Kleemoff, Wai Leong Chong, and Kinu Wright.

        </h1>
      </section>
      <TeamMember
        memberSrc={'https://media.licdn.com/dms/image/D4E03AQEQJcW8QU_Bpw/profile-displayphoto-shrink_800_800/0/1677713991542?e=1691625600&v=beta&t=K7D0vJbo1pWf-MAuCtmc-hotzm3oR2i5SYf-nRK2xzY'}
        memberAlt={'silis-photo'}
        header1={`Hi 👋, I'm Silis Kleemoff`}
        listSection={(<ul>
          Junior Software Engineer
          <li> 💻 I'm a Pursuit Fellow </li>
          <li> 🌐 I do Fullstack Web Development</li>
          <li> 🎮 I also do Unity Game Development</li>
          <li> ⚡ Fun fact: I graduated High School when I was 16.</li>
        </ul>)}
        paragraph1={`I love video games! That's probably why I decided to start making them.`}
        special={'https://camo.githubusercontent.com/1b5dc979e1c528d02757f759348d4408b82b738a436baf24f87984d7fd2ef09e/68747470733a2f2f706c61792d6c682e676f6f676c6575736572636f6e74656e742e636f6d2f7a42787776455a312d7a724266677175776e363649524f332d796d794e4f4630517034767261516d37576856356e53635a787072736c4b6659492d4e385078784d7877'}
        projectHref={'https://kleemoffdeveloper.github.io/project-weather-app/'}
        projectSrc={'src/components/Projects/3659a243-5688-4563-8f00-5b5c9ff5cc53.png'}
        projectAlt={'silis-project'}
        linkedInHref={'https://www.linkedin.com/in/silis-kleemoff/'}
        linkedInSrc={'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png'}
        GithubHref={'https://github.com/KleemoffDeveloper'}
        GithubSrc={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
      />

      <TeamMember
        memberSrc={'https://media.licdn.com/dms/image/D5603AQEJaXpClt02Nw/profile-displayphoto-shrink_800_800/0/1667337566784?e=1691625600&v=beta&t=v-ZQ9oIQcu28E3BvJ6iXSHQF1eFZ8trLm5mTl28Mq5I'}
        memberAlt={'wai-photo'}
        header1={`Hi 👋, I'm Wai Leong Chong`}
        listSection={(<ul>
          <p>Full-Stack Developer learning at Pursuit, passionate about innovation. In 2017, I cofounded a design studio that assists clients through printing and brand design. In that position, I also helped small businesses design their websites. Before that, I worked as a graphic designer for six years at a printing firm, where I worked on web and paper product design.</p>
          <li> 💻 I'm a Pursuit Fellow </li>
          <li> 🌐 I do Fullstack Web Development</li>
          <li> 🎮 I also do Unity Game Development</li>
          <li> ⚡ Fun fact: I graduated High School when I was 16.</li>
        </ul>)}
        paragraph1={``}

        projectHref={'https://waileongchong.github.io/portfolio-project/'}
        projectSrc={'src/components/Projects/ca63fc2d-c577-48de-ac65-eb2d7b32d905.png'}
        projectAlt={'wai-project'}
        linkedInHref={'https://www.linkedin.com/in/wai-leong-chong/'}
        linkedInSrc={'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png'}
        GithubHref={'https://github.com/waiLeongChong'}
        GithubSrc={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
      />


      <TeamMember
        memberSrc={'https://media.licdn.com/dms/image/D4E03AQEOzfyzXF4XcQ/profile-displayphoto-shrink_800_800/0/1667164033793?e=1691625600&v=beta&t=11KZ0GFeGdnCGc096XdeH8bC78d2sIpPELsbxIT4rU8'}
        memberAlt={'kinu-photo'}
        header1={`Hi 👋, I'm Kinu Wright`}
        listSection={(<ul>
          <p>The charismatic and captivating Kinu here, ready to tackle my current journey in becoming a software engineer. I see life as a game, sometimes we get a good break and sometimes we have to go backwards. Maybe we meet a partner, have a child, buy a car, lose a job, and sometimes go back to school. But inevitably, whatever new adventure life throws at us, we have to continue playing. The lesson is to move with perseverance and grit and you will succeed.</p>
          <li>💻 I'm learning how to code</li>
          <li>👯 I'm a mom of two</li>
          <li>⚡ Fun fact: I was born on a leap year.</li>
        </ul>)}
        paragraph1={``}

        projectHref={'https://wrightkinu.github.io/Portfolio-Project/index.html'}
        projectSrc={'src/components/Projects/64097a43-2ba4-48d4-98b1-ad6c2c89aa84.png'}
        projectAlt={'kinu-project'}
        linkedInHref={'https://www.linkedin.com/in/kinu-wright/'}
        linkedInSrc={'https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png'}
        GithubHref={'https://github.com/wrightKinu'}
        GithubSrc={'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'}
      />
    </div>
  )
}

export default About;
