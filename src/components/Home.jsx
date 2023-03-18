import React from "react";
import "./Home.css";
function Home() {
  return (
    <>
      {/* <!-- Masthead--> */}
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
            <div className="col-lg-8 align-self-end">
              <h1 className="font-weight-bold">Welcome</h1>
              <hr className="divider" />
            </div>
            <div className="col-lg-8 align-self-baseline">
              <p className="text-white-75 mb-5">
              Our website offers a reliable employee verification service that helps recruiters make informed hiring decisions by providing them with accurate background and experience information on potential candidates.
              </p>
              <a className="btn btn-primary btn-xl" href="#about">
                Find Out More
              </a>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="page-section " id="about">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className=" mt-0">About us</h2>
              <hr className="divider divider-light" />

              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                  <div className="card card-bg">
                    <div className="card-body">
                      <h5 className="card-title">Aniruddha Upadhya K</h5>
                      <p className="card-text">
                      I'm a student of NMAM Institute of Tehcnology,persuing B.E in Electronic and Communication Engineering.I'm a Web Dev enthusiast who is eager to learn and understand new technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-bg">
                    <div className="card-body">
                      <h5 className="card-title">Srivatsa R Upadhya</h5>
                      <p className="card-text">
                      I'm a student of NMAM Institute of Tehcnology,persuing B.E in Computer Science and  Engineering.I'm a Web Dev enthusiast who is eager to learn and understand new technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-bg">
                    <div className="card-body card-bg">
                      <h5 className="card-title">Kishor S Naik</h5>
                      <p className="card-text">
                      I am a student of NMAM Institute of Technology, pursuing a Bachelor’s degree in Information Science and  Engineering. I am passionate about web development and always eager to learn and understand new technologies.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card card-bg">
                    <div className="card-body">
                      <h5 className="card-title">Ganesh Nayak</h5>
                      <p className="card-text">
                      I am a student of NMAM Institute of Technology, pursuing a Bachelor’s degree in Computer Science and  Engineering. I am passionate about web development and always eager to learn and understand new technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <a className="btn btn-light btn-xl mt-3" href="#services">
                Get Started!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/*       
        <!-- Contact--> */}
      <section className="page-section" id="contact">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-lg-8 col-xl-6 text-center">
              <h2 className="mt-0 text-white">Let's Get In Touch!</h2>
              <hr className="divider" />
              <p className="text-muted mb-5 text-white">
                Ready to start your next project with us? Send us a messages and
                we will get back to you as soon as possible!
              </p>
            </div>
          </div>
          <div className="row gx-4 gx-lg-5 justify-content-center mb-5">
            <div className="col-lg-6">
              <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                {/* <!-- Name input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    placeholder="Enter your name..."
                    data-sb-validations="required"
                  />
                  <label htmlFor="name">Full name</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                {/* <!-- Email address input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    data-sb-validations="required,email"
                  />
                  <label htmlFor="email">Email address</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div className="invalid-feedback" data-sb-feedback="email:email">
                    Email is not valid.
                  </div>
                </div>
                {/* <!-- Phone number input--> */}
                <div className="form-floating mb-3">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="(123) 456-7890"
                    data-sb-validations="required"
                  />
                  <label htmlFor="phone">Phone number</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
                {/* <!-- Message input--> */}
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    type="text"
                    placeholder="Enter your message here..."
                    style={{height: "10rem"}}
                    data-sb-validations="required"
                  ></textarea>
                  <label htmlFor="message">Message</label>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
                {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                <div className="d-none" id="submitSuccessMessage">
                  <div className="text-center mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    To activate this form, sign up at
                    <br />
                    <a href=""/>
                      
                  </div>
                </div>
                {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                <div className="d-none" id="submitErrorMessage">
                  <div className="text-center text-danger mb-3">
                    Error sending message!
                  </div>
                </div>
                {/* <!-- Submit Button--> */}
                <div className="d-grid">
                  <button
                    className="btn btn-primary btn-xl"
                    id="submitButton"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
