import React, { Component } from 'react';
import './ProjectInfo.css';
import 'loaders.css/src/animations/ball-pulse.scss';
import {
  Link
} from 'react-router-dom';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Player } from 'video-react';
import arrowImage from '../download.svg';
import firstVideo from '../../img/Reporter/ReporterVideo.mov'
import firstImage from '../../img/Reporter/ReporterLogin.png';
import secondImage from '../../img/Reporter/ReporterMap.png';
import thirdImage from '../../img/Reporter/ReporterReport.png';
import fourthImage from '../../img/Reporter/ReporterWebbCity.png';
import visualImage1 from '../../img/AkademiskaHus/OurMission.png';
import visualImage2 from '../../img/AkademiskaHus/ForWho.png';
import visualImage3 from '../../img/AkademiskaHus/Users.png';
import visualImage4 from '../../img/AkademiskaHus/UsersBigDown.png';
import visualImage5 from '../../img/AkademiskaHus/WireframeSideWays.png';
import visualImage6 from '../../img/AkademiskaHus/Margins.png';
import visualImage7 from '../../img/AkademiskaHus/AkademiskaHusPrototyp.gif';
import visualImage8 from '../../img/AkademiskaHus/Introduction.png';
import visualImage9 from '../../img/Knowel/cms.png';
import visualImage10 from '../../img/Knowel/time.png';
import visualImage11 from '../../img/Knowel/future.png';





// var data = [
//   {sectionRubrik:"Our Mission", sectionText:"Jag och Karl-Anton fick uppdraget att skapa en helt ny grafisk identitet och hemsida till non-profit föreningen Knowel som jobbar med att sprida en entreprenörs värdegrund.", visualImage:visualImage1},
//   {sectionRubrik:"Our mission", sectionText:"I and Sarah Bengtsson were assigned the mission to inspire Akademiska Hus  on how they could build a mobile interface for their customers.", visualImage:visualImage1},
//   {sectionRubrik:"For who", sectionText:"Akademiska hus is a state owned property owner, who mostly owns property’s located on different university campuses. In size, it is Sweden's second largest property owner.", visualImage:visualImage2},
//   {sectionRubrik:"Users", sectionText:"We discussed about which users we would prioritize to target this new service to and who would need it. We found that we would primarily need to solve the communication between Akademiska hus – Customer/Tenants – Users/the people who use academic house properties.", visualImage:visualImage3},
//   {sectionRubrik:"Research", sectionText:"We started our entire process by doing market research to investigate if there were any other similar solutions on the market today. We also discussed about Akademiska hus current service and who used it and what the actual problem were.", visualImage:visualImage4},
//   {sectionRubrik:"Problem", sectionText:"During our interviews we noticed that it is hard for Akademiska hus customers service staff to report property faults. Which lower the value of the service that Akademiska hus provides (Property’s for campuses) for both the customer and the customers customer (students, teachers etc.).", visualImage:visualImage5},
//   {sectionRubrik:"Solution", sectionText:"To make it easier to report faults, we came up with a web app which you can use as a tool to report faults on the go. After careful considerations we selected these five functions to be developed.", visualImage:visualImage6},
//   {sectionRubrik:"End result", sectionText:"We created a tool that will make the fault reporting possible wherever you are, it will be easier and a lot faster then the current solution. Because of that, the communication between Akademiska hus and their customers will be improved, and the customers will have a better experience then before.", visualImage:visualImage7},

//   {sectionRubrik:"Dynamics", sectionText:"We put the text over the image to create more dynamics in the image as well as making it feel more analog and adventurous.", visualImage:visualImage8},
//   {sectionRubrik:"CMS", sectionText:"The page is built on Contentful's CMS system. We put a lot of effort into making the cms easy to handle so that Knowel's members can easily add new journeys, which hopefully will make the website updated more often and make the site more relevant in the future.", visualImage:visualImage9},
//   {sectionRubrik:"Limits", sectionText:"We had a sharp time pressure (120 hours) on us for such a big project, which meant we had to enter the production phase early. Due to this, we added more time to intervene and get feedback from Knowel instead of future users.", visualImage:visualImage10},
//   {sectionRubrik:"Next Step", sectionText:"We believe that the next step is to bring out the word about Knowel even more to local businesses, and show them how Knowel can add add value. Which can be done by anything from Cold Calling to mingling.", visualImage:visualImage11}
// ]

class projectAkademiskaHus extends Component {
  constructor(props) {
    super(props);
    this.state= {
      loading: true,
      introContainerClass:"introContainer",
      projectInfoAnimated: "projectInfoTextContainer"
    };
  }

  //  componentWillMount() {
  //   window.scrollTo(0, 0)
  // }


  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 1300);

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
   scrollTo() {
    scroll.scrollTo(window.innerHeight);
  }

  // renderInformation(data) {
  //   console.log(data);
  //   return(
  //   <Section className="section2">
  //       <div className="sectionTextContainer">
  //         <div>
  //           <h1 className="sectionRubrik">{data.sectionRubrik}</h1> 
  //           <h3 className="sectionText">
  //           {data.sectionText}
  //           </h3> 
  //        </div>
  //       </div>
  //       <div className="visualImageContainer">
  //         <img src={visualImage1} className="visualImage"/>
  //       </div>
  //     </Section>
  //     )
  // }


  backArrow(){
    let arrowColor ="#F7E0BC";
    if(window.location.href !== "http://localhost:3000/projectAkademiskaHus#1" ){
      arrowColor = "black"
    }
    else {
      arrowColor ="#F7E0BC"
    }
    return (
      <Link to="/">
              <svg className="backArrow" width="52px" height="93px" viewBox="0 0 52 93">
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g id="Ny-ProjektInfo" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard-Copy" transform="translate(-91.000000, -82.000000)" fill-rule="nonzero" fill={arrowColor}>
                          <g id="download-copy" transform="translate(117.000000, 128.500000) rotate(-270.000000) translate(-117.000000, -128.500000) translate(70.500000, 102.500000)">
                              <path d="M84.9874097,1.41601919 L46.499259,39.9134375 L8.01110829,1.41138537 C6.17611424,-0.423608686 3.20776422,-0.423608686 1.37277017,1.41138537 C-0.457590057,3.24637942 -0.457590057,6.21936326 1.37277017,8.05435731 L43.1779661,49.8734547 L43.1779661,49.8734547 L43.1779661,49.8734547 C45.0083263,51.7084488 47.9813102,51.7084488 49.8116704,49.8734547 L91.6168663,8.05474346 C93.4472266,6.21974941 93.4472266,3.24213175 91.6168663,1.40713769 C89.7911399,-0.418974863 86.8177699,-0.418974863 84.9874097,1.41601919 Z" id="Expand_More"></path>
                          </g>
                      </g>
                  </g>
              </svg>
      </Link>
      )
  }
  pageRender(loading) {
    console.log(loading)
    // console.log(data[1], 'pageRender');
    if(loading === true) {
      setTimeout(() => this.setState({ introContainerClass: "introContainerFinished introContainer", projectInfoAnimated: "projectInfoTextContainer projectInfoTextContainerAnimated" }), 1400);
      console.log("Loading")
      return(
          <div className="animationContainer"> 
            <div className="dot"></div>
            <h1 style={{color: "#F5F5F5", fontSize:"20vw", zIndex:"1000000", alignSelf:"center",fontFamily: 'Poppins', fontWeight:1000}}> Loading </h1>
            </div>);
    }
    return (
        <div>
        <div>
         <div className={this.state.introContainerClass}>
            <div className={this.state.projectInfoAnimated}>
              <h1 className="projectInfoRubrik"> Akademiska Hus </h1>
              <h2 className="projectInfoSubRubrik"> A mobile interface that assists Akademiska hus workforce throughout their day.</h2>
              <div className="infoSubContainerContainer">
              <div className="infoSubContainer"><h3 className="noMargin">visit</h3> <a href="https://invis.io/9SJ6OV3R5K6#/298515109_Guide"><h4>Website</h4></a></div>
              <div className="infoSubContainer"><h3 className="noMargin">status</h3><h4>Complete</h4></div>
              <div className="infoSubContainer"><h3 className="noMargin">year</h3><h4>2018</h4></div>
              </div>
          </div>
          <div className="readMoreContainer">
            <a onClick={this.scrollTo} style={{cursor:"pointer"}}> <h2 className="readMoreText"> Read More </h2></a>
            <div className="readMoreLine"> </div>
          </div>
          </div>
          </div>
          <div className="projectContentSection">
            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Our mission </h1>
              <p className="projectContentText">I and Sarah Bengtsson were assigned the mission to inspire Akademiska Hus  on how they could build a mobile interface for their customers.</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> The client </h1>
              <p className="projectContentText">Akademiska hus is a state owned property owner, who mostly owns property’s located on different university campuses. In size, it is Sweden's second largest property owner.</p>
            </div>

            <div className="projectContentContainer" style={{marginBottom:"25vh"}}> 
              <h1 className="projectContentSubHeader"> My Role </h1>
              <p className="projectContentText">My role in the project was to do the UI/UX work so everything from interviewing to the finising details on the design.</p>
            </div>

            <h1 style={{ alignSelf: "center", fontSize:"46px",fontFamily: "poppins", marginBottom:"37px"}} >Discover</h1>
            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Market resarch </h1>
              <p className="projectContentText">We started our entire process by doing market research to investigate if there were any other similar solutions on the market today. We noticed that many of Akademiska hus konkurrenter had applications where their customers could report propety faults.</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Problem </h1>
              <p className="projectContentText">During our interviews we noticed that it is hard for Akademiska hus customers service staff to report property faults. Which lower the value of the service that Akademiska hus provides (Property’s for campuses) for both the customer and the customers customer (students, teachers etc.)</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Interviewing Result </h1>
              <p className="projectContentText">
                - You can not report faults easy on your phone.
                <br/>- The report system on Akademiska hus website is difficult and annoying to use.
                <br/>- You can not send an image with the report.
                <br/>- You need to write in your personal information every time you report.
                <br/>- Long response time between akademiska hus operating technicians and customers service staff.
                <br/>- There is also no easy way to communicate your information to customers.
              </p>
            </div>

            <div className="projectContentContainer" style={{marginBottom:"5vh"}}> 
              <h1 className="projectContentSubHeader"> Users </h1>
              <p className="projectContentText" style={{ width:"30%"}}>We discussed about which users we would prioritize to target this new service to and who would need it. We found that we would primarily need to solve the communication between Akademiska hus – Customer/Tenants – Users/the people who use academic house properties.</p>
              <img src={visualImage4} className="projectContentImage" style={{ width:"14%"}}/>
            </div>

            <h1 style={{ alignSelf: "center", fontSize:"46px",fontFamily: "poppins", marginBottom:"37px"}} >Exploration</h1>

             <div className="projectContentContainer" style={{marginBottom:"1vh"}}> 
              <h1 className="projectContentSubHeader"> Wireframing </h1>
              <p className="projectContentText">When we made the first wireframes we took into account that the users of the product would largely be non-technical.  And that the product should feel just as natural for them as a hammer or a notebook.</p>
            </div>
            <img src={visualImage5} className="projectContentFullHeightImage"/>
             <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> User testing </h1>
              <p className="projectContentText">During the usertests we noticed that the users had problems reading the serif fontface so we switched to the easily recognizable roboto instead. We also understood that the users wanted it to be possible to open the faults you had reported without switching view so they quickly could read the faults.</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Solution </h1>
              <p className="projectContentText">To make it easier to report faults, we came up with a web app which you can use as a tool to report faults on the go. After discussion with both Akademiska hus and their users we selected these five functions to be developed:
                <br/>- Sending picture with the faults form. 
                <br/>- Being able to quickly see your reported faults and their status (inactive, active, archived).
                <br/>- Information about property interference and other information, which should be easily relayed if needed.
                <br/>- It should be easy to find the contact information for the person who is responsible for the school you take care of.</p>
            </div>

            <h1 style={{ alignSelf: "center", fontSize:"46px",fontFamily: "poppins", marginBottom:"37px"}} >Design</h1>

            <div className="projectContentContainer" style={{marginBottom:"25vh"}}> 
              <h1 className="projectContentSubHeader"> Interface </h1>
              <p className="projectContentText" style={{ width:"22%"}}>The application were created with 32px margins and 4 column layout.  We used google material design 2.0 because we felt that it was a waste of time to create new elements.</p>
              <img src={visualImage6} className="projectContentImage"/>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Introduction </h1>
              <p className="projectContentText">We made a short tutorial for first-time users, to help them understand the meaning of the application.</p>
            </div>
            <img src={visualImage8} className="projectContentFullHeightImage" style={{width:"84%", marginBottom:"15vh", height:"unset"}}/>
            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> High definition Protype </h1>
              <iframe className="projectContentPrototype" width="438" height="930" src="//invis.io/4QMRL5AMBZH" frameBorder="0" allowFullScreen></iframe>
            </div>

          </div>
        </div>
      )
  } 
  render() {
    return (
      <div>
      {this.backArrow()}
      {this.pageRender(this.state.loading)}
      </div>
      
    );
  }
}

export default projectAkademiskaHus;
