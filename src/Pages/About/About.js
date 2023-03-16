import pic from "./Chris2.JPG";

export default function About() {
  return (
    <div className="New-container">
      <div className="row">
        <img className="chris_img_2" src={pic} alt="Chris" />
      </div>
      <div className="row">
        <h1 className="Main-intro-header">Hi, I'm Chris</h1>
      </div>
      <div className="row">
        <p>
          I’m a Software developer and copywriter with a passion for solving
          problems.
        </p>
      </div>
      <div className="row">
        <h3 style={{color:"#028495"}}>What is your background?</h3>
      </div>
      <div className="row">
        <p>
          My career has taken many twists and turns over the years. <br/><br/>I started
          out as a marketing executive while still in college, but I quickly
          realized that it wasn't my thing. <br/><br/>From there, I moved into real
          estate, where I worked as a realtor for nearly three years.<br/> <br/>While I
          loved every bit of it, the pandemic left me jobless and searching for
          a new path.<br/> <br/>It was then that I discovered a passion for copywriting. I
          had always loved writing, ever since I was a kid, and it was amazing
          to discover that I could turn this passion into a career.<br/> <br/>I've been
          copywriting ever since, and currently ply my trade at SeedX, an
          amazing marketing agency in Texas.
        </p>
      </div>
      <div className="row">
        <h3 style={{color:"#028495"}}>What About Software Engineering?</h3>
      </div>
      <div className="row">
        <p>
          One of the things I have learned about myself is that I wanted to use my skills to solve bigger
          problems, especially those uniquely African problems that could change the quality of life on the continent. <br />  <br />That's why I
          decided to learn software development and started building <a href="https://www.joomba.co">Joomba</a>, a
          proptech dedicated to transforming the rental experience in Africa.
          It's a passion project that I'm really excited about.
        </p>
      </div>
    </div>
  );
}
