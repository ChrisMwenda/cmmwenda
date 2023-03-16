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
        <h6>What is your background?</h6>
      </div>
      <div className="row">
        <p>
          My career has taken many twists and turns over the years. I started
          out as a marketing executive while still in college, but I quickly
          realized that it wasn't my thing. From there, I moved into real
          estate, where I worked as a realtor for nearly three years. While I
          loved every bit of it, the pandemic left me jobless and searching for
          a new path. It was then that I discovered a passion for copywriting. I
          had always loved writing, ever since I was a kid, and it was amazing
          to discover that I could turn this passion into a career. I've been
          copywriting ever since, and currently ply my trade at SeedX, an
          amazing marketing agency in Texas.
        </p>
      </div>
      <div className="row">
        <h6>What About Software Engineering?</h6>
      </div>
      <div className="row">
        <p>
          I also realized that I wanted to use my skills to solve bigger
          problems, especially those that are uniquely African. That's why I
          decided to learn software development and started building Joomba, a
          proptech dedicated to transforming the rental experience in Africa.
          It's a passion project that I'm really excited about.
        </p>
      </div>
    </div>
  );
}
