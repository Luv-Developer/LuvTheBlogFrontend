import React from "react"
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from "jwt-decode"
import axios from "axios"

const App = () => {
  const signin = async(name,email,picture) => {
    try{
      let trops = {name,email,picture}
      let response = await axios.post("https://luvtheblog.onrender.com/signin",trops,{
        withCredentials:true,
        headers:{
          "Content-Type":"application/json"
        }
      }
      )
      let data = response.data
      console.log(data)
      if(response.status === 200 || response.status === 201){
        window.location.href = "https://luvtheblog.onrender.com/profile"
      }
    }
    catch(err){
      console.log(err)
    }
  }
  return(
    <>
    <div className="bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
    </div>

    <a href="https://luvtheblog.onrender.com/" className="back-home">
        <i class="fas fa-arrow-left"></i> Back to Home
    </a>

    <div className="container">
        <section className="info-section">
            <div className="info-content">
                <div className="logo">
                    <i class="fas fa-pen-fancy"></i>LuvTheBlog
                </div>
                
                <h1>Join Our Community of Passionate Writers</h1>
                <p>LuvTheBlog is more than just a blogging platform. It's a vibrant community where writers connect, share ideas, and grow together. Sign in to access your personalized dashboard and continue your writing journey.</p>
                
                <div className="features">
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i class="fas fa-edit"></i>
                        </div>
                        <div className="feature-text">
                            <h3>Write & Publish</h3>
                            <p>Create beautiful blog posts with our intuitive editor and publish with one click.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i class="fas fa-comments"></i>
                        </div>
                        <div className="feature-text">
                            <h3>Engage with Community</h3>
                            <p>Connect with readers, receive comments, and join meaningful discussions.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i class="fas fa-share-alt"></i>
                        </div>
                        <div className="feature-text">
                            <h3>Share & Discover</h3>
                            <p>Share your favorite blogs and discover amazing content from writers worldwide.</p>
                        </div>
                    </div>
                    
                    <div className="feature-item">
                        <div className="feature-icon">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <div className="feature-text">
                            <h3>Track Your Growth</h3>
                            <p>Monitor your readership, engagement, and improve your writing with analytics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="form-section">
            <div className="form-container">
                <div className="form-header">
                    <h2>Welcome Buddy!</h2>
                    <p>Sign in to your account to continue your journey</p>
                </div>
                
                <form id="signinForm">
                    <button type="button" className="btn btn-google" id="googleSignIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <GoogleLogin
  onSuccess={credentialResponse => {
    let credentialResponsedecoded = jwtDecode(credentialResponse.credential)
    signin(credentialResponsedecoded.name,credentialResponsedecoded.email,credentialResponsedecoded.picture)
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>
                    </button>
                </form>
            </div>
        </section>
    </div>
    </>
  )
}
export default App 