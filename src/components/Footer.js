import facebookIcon from '../images/icon-facebook.svg';
import twitterIcon from '../images/icon-twitter.svg';
import pinterest from "../images/icon-pinterest.svg";
import instagram from "../images/icon-instagram.svg";
export const Footer = ()=>{
    return(


<footer>
        <h3 className="footer-heading">Sunnyside</h3>

        <div className="footer-links">
          <p className="footer-link">
            <a href="index.html" className="footer-link-text">ABOUT</a>
          </p>
          <p className="footer-link">
            <a href="index.html" className="footer-link-text">SERVICES</a>
          </p>
          <p className="footer-link">
            <a href="index.html" className="footer-link-text">PROJECTS</a>
          </p>
        </div>
        <div className="footer-links">
          <span className="footer-icon">
            <img src={facebookIcon} alt="" className="footer-icon-image" />
          </span>
          <span className="footer-icon">
            <img src={instagram} alt="instagram" />
          </span>
          <span className="footer-icon">
            <img src={twitterIcon} alt="twitter" className="footer-icon-image" />
          </span>

          <span className="footer-icon">
            <img src={pinterest} alt="twitter" className="footer-icon-image" />
          </span>
        </div>
      </footer>
    
    
    
    
    


    )
}