import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import '../Styles/Login.css'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      const userType = document.querySelector('input[name="choice"]:checked').value

      // Todo : Later do it on basis of user role
      if (userType === "doctor") {
        navigate("/doctor-profile")
      }
      else if (userType === "patient") {
        navigate("/profile")
      }
      else if (userType === "hospital") {
        navigate("/hospital-profile")
      }
      else {
        navigate("/login")
      }
    } catch {
      setError('Wrong email or password')
    }
    setLoading(false)
  }

  return (
    <section className="ftco-section">
      <div className={`toast ${error ? 'show' : ''}`} id="toast">
        <div class="toast-header">
        <strong class="me-auto">Error</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
        </div>
        <div className="toast-body">
          {/* text in red */}
          <div>
            {error}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                <div className="text w-100">
                  <h2>Welcome to login</h2>
                  <p>Don't have an account?</p>
                  <Link className="btn btn-white btn-outline-white" to="/signup">Sign Up</Link>
                </div>
              </div>
              <div className="login-wrap p-4 p-lg-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4" style={{ color: "black" }}>Sign In</h3>
                  </div>
                </div>
                <form onSubmit={handleSubmit} className="signin-form">
                  {/* {error && <Alert variant="danger">{error}</Alert>} */}
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">Email</label>
                    <input ref={emailRef} type="email" className="form-control" placeholder="Username" required />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">Password</label>
                    <input ref={passwordRef} type="password" className="form-control" placeholder="Password" required />
                  </div>
                  <div className="form-group" id="submit">
                    <button disabled={loading} type="submit" className="form-control btn btn-primary submit px-3">{loading ? "Sending..." : "Sign In"}</button>
                  </div>
                  {/* choice for doctor,patient or hospital using radio button */}
                  <div className="form-group d-md-flex mt-3">
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">Doctor
                        <input type="radio" name="choice" defaultValue="doctor" defaultChecked />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">Patient
                        <input type="radio" name="choice" defaultValue="patient" />
                        <span className="checkmark" />
                      </label>
                    </div>
                    <div className="w-50 text-left">
                      <label className="checkbox-wrap checkbox-primary mb-0">Hospital
                        <input type="radio" name="choice" defaultValue="hospital" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                  <div className="form-group d-md-flex float-left">
                    <div className="text-md-right">
                      <a href="/forgot-password">Forgot Password?</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
