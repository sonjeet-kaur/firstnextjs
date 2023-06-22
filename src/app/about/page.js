'use client'
// import { Label } from "@fluentui/react";
import React, { useState } from "react";
import styles from '../page.module.css';
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";

function About() {
    const router = useRouter();
    function home(name) {
        router.push(name);
    }
    function login() {
        router.push("/login");
    }
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    //   const navigate = useNavigate();

    function reset() {
        setEmail("");
        setPassword("");
    }

    const LoginUser = async (e) => {
        e.preventDefault();
        let data = await axios.post("http://localhost:3002/profile", {

            email: email,
            password: password,
        })
        console.log('data', data.ok);
        if (data.status) {
            reset();
            toast("Submitted Successfully!");

            setTimeout(() => {
                navigate("/home");
            }, 2000);
            localStorage.setItem("auth", 'true');
        }
    }

    return (
        <>

            <div className="custom_container vsm">
                <div className="row main-rowdiv">
                    <div className="col-6">
                        <h1 className={styles.maindiv}>About Page</h1>
                        <Button className={styles.btn} onClick={() => home("/")}>
                            Back to home
                        </Button>
                        <Button className={styles.btn} onClick={() => home("/login")}>
                           
                           Login Page
                        </Button>
                        {/* <Button className={styles.btn} onClick={() => home("/about/aboutinner1")}>
                           
                          AboutInner1
                        </Button> */}
                        {/* <div className="login-imgdiv">
              <img src={login_img}></img>
            </div> */}

                    </div>

                    {/* <div className="form-div"> */}
                        {/* <div className="form-maindiv">
            //   <div className={styles.toastClass} >
                <label className={styles.field-label}>Enter Email</label>
                <input className={styles.inputfield} type="text" placeholder="Enter Email" >
                </input>
                <label className={styles.field-label}>Enter Password</label>
                <input className={styles.inputfield} type={showPassword ? "text" : "password"} placeholder="Enter Password" >
                </input>
          {/* <span className="pass-icon">
          {showPassword ? 
            <VisibilityTwoToneIcon /> :
            <VisibilityOffTwoToneIcon />  
        }
            </span> */}
                        {/* <div className={styles.btn-div }>
                  <button className="btn btn-outline-success create-btn login-btn" type="submit">Submit</button>

                </div>
              </div>
         </div> */}

                        {/* <form method="post" className={styles.toastClass}>
                            <label htmlFor="first" className={styles.field - label}>Enter Email:</label>
                            <input type="text" id="first" name="first" placeholder="Enter Email" className={styles.inputfield} />
                            <label htmlFor="last" className={styles.field - label}>Enter Password:</label>
                            <input type="text" id="last" name="last" placeholder="Enter Password" className={styles.inputfield} />
                            <button type="submit" className={styles.btn - div}>Submit</button>
                        </form> */}

                    {/* </div> */}
                </div>
            </div>


            {/* *********************** Footer Section ********************** */}
            {/* <div className="divider"></div>
      <div className="footer-div">
        <div className="custom_container vsm">
          <div className="row">
            <div className="col-12 col-lg-5">
              <div className="footer-inner-div">
                <div className='footer-logo-textdiv'>
                  <img src={logoimage} alt="Coreimage" className="logo-image logo" />
                  <p className="pragraph">This is the latest info of Computer and Information Technology Occupations.</p>
                </div>
              </div>
              <div className='for-contact'>
                <p>
                  For Contact:
                </p>
                <p className="contact">Call: 9465542034
                  <br />
                  E mail: sonjeet@mail.com
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-7">
              <div className="row">
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first">Job Growth</h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">2020-2030</li>
                      <li className="footer-li-item">+13%</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first"> Median Salary </h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">2021</li>
                      <li className="footer-li-item">$97,430</li>
                    </ul>
                  </div>
                </div>
                <div className="col-6 col-sm-4">
                  <div className="footer-right">
                    <h5 className="footer-ryt-first"> New Jobs Yearly</h5>
                    <ul className="ul-footer-list">
                      <li className="footer-li-item">667,600</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        </>
    )
}
export default About;