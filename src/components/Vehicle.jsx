import React from "react";
import "./Vehicle.css";

const Vehicle = () => {
  return (
    <>
      <div className="first-container">
        <div className="first-text">
          <h1>XC60</h1>
          <p>A safe way to move a family around in style.</p>
        </div>
      </div>

      <div className="second-section">
        <div className="left"></div>
        <div className="right">
          <h1>
            Safe. Relaxing. <br /> Good to ride in. <br /> Subtly decorated.
          </h1>

          <p>
            The Volvo XC60 sits right at the heart of <br /> the big-selling
            mid-size crossover crowd. <br /> It’s handsome and luxurious and it
            wraps <br /> you in a safety blanket as comprehensive <br /> as the
            Swedish welfare state.
          </p>
        </div>
      </div>

      <div className="third-section">
        <h1>How does it work</h1>

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia <br /> deserunt mollit anim id est laborum.{" "}
        </p>

        <div className="options">
          <div className="option">
            <div className="option-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M512 80c8.8 0 16 7.2 16 16l0 32L48 128l0-32c0-8.8 7.2-16 16-16l448 0zm16 144l0 192c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-192 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0z" />
              </svg>
            </div>
            <div>
              <p>
                Select your preferred payment <br /> method.
              </p>
            </div>
          </div>

          <div className="option">
            <div className="option-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M135.2 117.4L109.1 192l293.8 0-26.1-74.6C372.3 104.6 360.2 96 346.6 96L165.4 96c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32l181.2 0c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2l0 144 0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L96 400l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48L0 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
              </svg>
            </div>
            <div>
              <p>
                Enter your pickup point and <br />
                time, select your car.
              </p>
            </div>
          </div>

          <div className="option">
            <div className="option-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </div>
            <div>
              <p>
                Our taxi driver picks you up at <br /> the given location and
                time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fourth-section">
        <div className="left-text">
          <h1>
            We Provide <br /> Car Service
          </h1>

          <p>
            We are your one-stop shop for complete auto care for every make and
            model of vehicle.
          </p>
          <button onClick={() => alert("Button clicked!")}>READ MORE</button>
        </div>
        <div>
          <img
            src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/b9df833743ec511aaf30c26e/pexelsphoto3874342.jpeg"
            alt=""
          />
        </div>
      </div>

      <div className="fifth-section">
        <div className="fifth-container">
          <img
            src="//images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/bc48a0cb914d58289d18e4d9/pexelsphoto3806275.jpeg"
            alt=""
          />
          <div className="three-divs">
            <div className="left-div">
              <h1>Air Filter Change</h1>
              <p>
                Donec volutpat, purus et tempus convallis, odio quam consectetur
                nulla, sit amet auctor augue ligula ac ipsum. Curabitur
                elementum...
              </p>
            </div>
            <div className="right-div">
              <h1>Battery-water</h1>
              <p>
                Donec volutpat, purus et tempus convallis, odio quam consectetur
                nulla, sit amet auctor augue ligula ac ipsum. Curabitur
                elementum...
              </p>
            </div>
            <div className="img-div">
              <img
                src="//images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/fd12b1fdd8b25bdfb3eee767/pexelsphoto3806288.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>


      <div class="pricing-section">
  <div class="pricing-container">
    <div class="pricing-card">
      <h2>Taxi</h2>
      <img src="https://images01.nicepage.com/b5/e9/b5e94a25741dca619aa54b1f08ab425d.png" alt="Taxi" />
      <p>The taxi you know</p>
      <ul>
        <li>Price based on taximeter</li>
        <li>Executed by local taxi fleets</li>
        <li>Online and offline payment</li>
        <li>24/7 support hotline</li>
      </ul>
    </div>

    <div class="pricing-card">
      <h2>Economy+</h2>
      <img src="https://images01.nicepage.com/97/52/975255a895e0efd3c75c073d5e0e89f3.png" alt="Economy+" />
      <p>For budget travelers</p>
      <ul>
        <li>Fixed price</li>
        <li>English-speaking driver</li>
        <li>Automated flight and train tracking</li>
        <li>45 minutes waiting time after landing</li>
        <li>Pickup with name sign in arrivals hall</li>
        <li>Children seats available on request</li>
        <li>Online and offline payment</li>
        <li>24/7 support hotline</li>
      </ul>
    </div>

    <div class="pricing-card">
      <h2>Business Class</h2>
      <img src="https://images01.nicepage.com/69/ab/69ab11c48df6f674467cc0f1db1a99fc.png" alt="Business Class" />
      <p>Business traveler's favourite</p>
      <ul>
        <li>Black car guaranteed</li>
        <li>Fixed price</li>
        <li>English-speaking driver</li>
        <li>Automated flight and train tracking</li>
        <li>45 minutes waiting time after landing</li>
        <li>Pickup with name sign in arrivals hall</li>
        <li>Children seats available on request</li>
        <li>Online and offline payment</li>
        <li>24/7 support hotline</li>
      </ul>
    </div>
  </div>
</div>


<div class="car-section">
  <div class="car-container">
    <div class="car-image">
      <img src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/b45b5094672c5cb3919a7f66/lamborghinicarspeedprestige38570.jpeg" alt="Car" />
    </div>
    <div class="car-text">
      <h2>Safe. Relaxing. Good to <br /> ride in. Subtly <br /> decorated.</h2>
    </div>
  </div>
</div>


    </>
  );
};

export default Vehicle;
