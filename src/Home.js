// import { Button } from "@mui/material";
import pic from "./Chris.png";

export default function Home() {
  return (
    <div className="New-container">
      <div className="row">
        <img className="chris_img" src={pic} alt="Chris" />
      </div>
      <div className="row">
        <h1 className="Main-intro-header">Hi, I'm Chris</h1>
      </div>
      <div className="row">
        <p>
          I’m a Software Developer, Entrepreneur and Writer living in Nairobi.
          Currently working as a copywriter and exploring a budding interest in code.
        </p>
      </div>
      <div className="row">
        <div className="btn-grp col">
        <a type="button" className="lets_talk" href="/portfolio"> Check Out My Previous Work</a>
          {/* <Button variant="outlined" color="primary" href="/blog">
            Check Out My Previous Work
          </Button> */}
        </div>
                <div className="btn-grp col">
                <a className="lets_talk" href="/"> Lets Talk!</a>
          {/* <Button variant="outlined">Let's Talk</Button> */}
        </div>
      </div>
      <div className="row">
        <div class="line-1"></div>
      </div>
    </div>
  );
}


