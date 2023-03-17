import React from 'react'
import './Login.css'

function Login() {
  const setData = (data) => {
    for (key in data) {
      window.sessionStorage.setItem(key, data[key]);
    }
  }
  const [name, setname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [ShowLoading, setShowLoading] = useState(false);

  const loginUser = () => {
    axios.post(`${import.meta.env.VITE_SERVER_URL}/api/signIn`,
      {
        contact,
        password,
      },
      {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*"
      },)
      .then(data => {
        setShowLoading(true)
        setData(data.data.data);
        window.location.replace('/dashboard') //Change dashboard to user or company as needed
      })
      .catch(err => console.log(err))
  }
  return (

    <>
      <div className="vh-100 gradient-custom my-5 ">
        <div className="container  ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card log text-white " style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className="pb-5">
                    <h2 className="fw-bold  text-uppercase">Login</h2>
                    <p className="text-white-50 ">
                      Please enter your UserID and password!
                    </p>

                    <div className="form-outline form-white ">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={(e) => { setcontact(e.target.value) }}
                      />
                      <label className="form-label" htmlFor="typeEmailX">
                        Phone
                      </label>
                    </div>

                    <div className="form-outline form-white">
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        onChange={(e) => { setpassword(e.target.value) }}
                      />
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                    </div>

                    <p className="small">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      onClick={loginUser}
                    >
                      Login
                    </button>
                  </div>

                  <div>
                    <p className="">
                      Don't have an account?
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
