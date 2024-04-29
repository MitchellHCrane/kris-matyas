import "../css/profile.css";
import "../css/App.css";
import ParticlesBg from "particles-bg";

function Profile() {
  return (
    <div className="profile-div">
      <div className="particle-bg">
        <ParticlesBg
          color="#2ca4f2"
          num={75}
          type="cobweb"
          bg={true}
          config={{ rps: 0.00001 }}
        />
      </div>
      <div className="profile-grid">
        <div className="columnPic">
          <img
            className="troyProfilePic"
            src="../images/krisHeadshot.jpg"
            alt="Kris Matyas Mortgage Broker"
          />
        </div>
        <div>
          <h1 className="profileName">Kris Matyas</h1>
          <h2 className="NMLS">Mortgage Broker (NMLS #864775)</h2>
          {/* <p className="profileP">
            Hello! I&apos;m Kris, I look forward to helping you along your home
            buying experience. I&apos;ve provided a few useful links to get you
            started.
          </p> */}
          <p className="profileP">
            Meet Kristopher, an Army veteran, seasoned real estate investor, and
            mortgage expert with over two decades of experience in the industry.
            Beyond his professional expertise, he's a devoted husband and father
            to four wonderful dogs. Outside of work, Kristopher enjoys quality
            time with his family, globe-trotting adventures, and tackling
            challenging obstacle races like the Dirty Dash, Terrain Race, and
            Tough Mudder.
          </p>
          <p className="profileP">
            With a deep understanding of the unique needs of veterans,
            Kristopher specializes in VA loans, assisting countless former
            military personnel in purchasing new homes, entering the real estate
            market, or refinancing their existing loans. He's committed to
            guiding his clients through every step of the process, from the
            initial loan application to the final closing, always prioritizing
            clarity and education.
          </p>
          <p className="profileP">
            Beyond his work with veterans, Kristopher has helped thousands of
            individuals achieve their homeownership dreams and make savvy
            investments, empowering them to lead fulfilling lives. His expertise
            extends to assisting both buyers and investors in navigating the
            complexities of the real estate market, supported by his dedicated
            team of Realtors.
          </p>
          <p className="profileP">
            Get in touch with Kristopher today and discover firsthand why
            collaborating with The Mortgage Rebel is the smart choice for you!
            Below are a few useful links to get you started.
          </p>
          <div className="buttonBlueDiv">
            <a href="#getStarted" className="buttonBlue">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
