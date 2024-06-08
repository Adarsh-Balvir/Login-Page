import React from "react";
import './login_page.css';
import Googleauthentication from "../Google_Authentication/google_authentication";


const Loginpage = () => {



    return (
        <div classname='container-fluid main-cont'>
            <div className="row h-100 d-flex justify-content-center">
                <div class="col-lg-5 col-xl-4 col-xxl-4 col-md-7 col-sm-12 col-12 d-flex flex-column justify-content-center">
                    <div className="d-flex justify-content-center">
                        <img className="" src="Images/logo.png" alt="" />
                    </div>


                    <div className="login-container py-3 mt-2 px-4 rounded-4">
                        <div className="text-center">
                            <h2 className="heading">Sign In Access</h2>
                            <p className="para">You must become a member to login and access the entire site</p>
                        </div>
                        <form className="d-flex flex-column mt-4 position-relative">
                            <label className="label-text">Email Address</label>
                            <input className="mt-2 py-2 px-lg-5 px-xl-5 px-xxl-lg px-md-5 px-sm-2 px-2 input-box rounded-2" type="email" placeholder="Enter email address" required />
                            <span className="place-icons d-none d-sm-none d-lg-block d-md-block d-xl-block d-xxl-none"><i class="fa-regular fa-envelope"></i></span>
                            <label className="mt-3 label-text">Password</label>
                            <input className="mt-2 py-2 px-lg-5 px-xl-5 px-xxl-lg px-md-5 px-sm-2 px-2 input-box rounded-2" type="password" placeholder="Enter Password" required />
                            <span className="place-icons-2 d-none d-sm-none d-lg-block d-md-block d-xl-block d-xxl-none"><i class="fa-solid fa-lock"></i></span>
                            <span className="align-self-end mt-2 blue-links">Forgot Password</span>
                            <button className="mt-4 submit-button py-2 rounded-3" type="submit">Sign In</button>
                            <span className="mt-2 align-self-center fw-bold">Or</span>

                            <div className="mt-2 pb-4"><Googleauthentication /></div>
                            <div className="para">Not a member yet ? <span className="blue-links">Sign Up</span></div>
                        </form>

                    </div>

                </div>
            </div>

        </div>




    );
};

export default Loginpage;

