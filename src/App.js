import './App.css';
import image from "./image.jpeg";
import github from "./GitHub-Mark-120px-plus.png";
import linkedin from "./LI-In-Bug.png";
import insta from "./240px-Instagram_icon.png";
import twitter from "./logo-twitter-png-5860.png";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="Profile-Img" alt="Profile" />
        <div class="changing-words">
          <span class="firstName">Chandra Mauli Sharma</span>
          <br></br>
          <span class="lastName">Android | Game | Java</span>
        </div>
        <div className='Dock'>
          <div className="row">
            <div className="column">
              <a href='https://github.com/Chandra-Mauli-Sharma'><img src={github} alt="github" className='social-links' /></a>
            </div>
            <div className="column">
            <a href='https://www.linkedin.com/in/chandra-mauli-sharma-375b87200/'><img src={linkedin} alt="linkedin" className='social-links' /></a>
            </div>
            <div className="column">
            <a href='https://www.instagram.com/chandra_mauli_sharma/'><img src={insta} alt="insta" className='social-links' /></a>
            </div>
            <div className="column">
            <a href='https://twitter.com/Chandra65827611'><img src={twitter} alt="twitter" className='social-links' /></a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
