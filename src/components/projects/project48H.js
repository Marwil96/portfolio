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
import visualImage1 from '../../img/03_print.png';
import visualImage2 from '../../img/48H.jpg';
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
              <h1 className="projectInfoRubrik"> 48H </h1>
              <h2 className="projectInfoSubRubrik"> Second place in Swedens biggest design competition for students.</h2>
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
              <h1 className="projectContentSubHeader"> 48H </h1>
              <p className="projectContentText">48H är en reklamtävling för studenter som studerar media och kommunikation. Under två dygn jobbade vi i team av 4 för att utforma en print- och en digital annons.</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Uppdrag </h1>
              <p className="projectContentText">Goodsports ville ha en reklamstrategi för att öka den allmänna kunskapen om Goodsports</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Uppdragsgivaren </h1>
              <p className="projectContentText">Goodsports är en icke vinstdrivande stiftelse som verkar för integration genom idrott.</p>
            </div>

            <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Min roll </h1>
              <p className="projectContentText">Min roll i projektet var att göra print designen.</p>
            </div>

             <div className="projectContentContainer"> 
              <h1 className="projectContentSubHeader"> Idé & Strategi </h1>
              <p className="projectContentText">Det sägs att lika barn leker bäst. Vi vill säga att lika barn inte alltid leker bäst. Olikheter behövs för att lära och utmana varandra samt skapa nya förutsättningar. Med projektet Skolträffen vill Goodsport sudda ut gränser mellan individer, bostadsområden och fördomar genom att få ungdomar att mötas.

<br/><br/>Vi vill skapa en print som får folk att tänka till och engagerar, en print som är utvecklingsbar och som kan tas ut i alla kanaler. Alla med en smartphone känner till fenomenet autocorrect – funktionen som gör vänliga hälsningar till snuskiga inbjudningar, som både förenklar och förvirrar. Hur kan vi skapa en tankeprocess med hjälp av något så simpelt som autocorrect? Genom att, via en sms-konversation, försöka sudda ut det naturliga alternativet vill vi öppna upp för möjligheten att umgås över stadsdelsgränserna. 

<br/><br/>Vi ser en möjlighet att ta ut printen på olika språk beroende på vilket område den visas i, vare sig det är i en tidning eller i en busskur. Genom att göra olika prints kan den ses med olika perspektiv. Vi alla behöver göra förändringen tillsammans. Ett exempel kan vara att ha två printannonser på två olika språk som sitter på 11:ans spårvagn från Bergsjön till Saltholmen, eller röda linjen från Norsborg till Danderyds sjukhus
</p>
            </div>

            <div className="projectContentContainer"> 
              <img src={visualImage1} className="projectContentImage" style={{ maxWidth:"80%"}}/>
            </div>
            <div className="projectContentContainer" style={{marginBottom:"25vh"}}> 
              <img src={visualImage2} className="projectContentImage" style={{ maxWidth:"80%"}}/>
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
