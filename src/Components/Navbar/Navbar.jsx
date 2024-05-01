import logo1 from '../../assets/logo1.png'
import search from '../../assets/search.png'
import LoginPage from '../LoginPage'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav'>
      <ul className='headerlist'>
        <li className='logo1'><i className="fa-brands fa-linkedin"></i></li>
        <li className='logo'><i className="fa-brands fa-square-twitter"></i></li>
        <li className='logo'><i className="fa-brands fa-google-plus"></i></li>
        <li className='logo'><i className="fa-brands fa-facebook"></i></li>
        <li className='logo'><i className="fa-brands fa-instagram"></i></li>
        <li className="right-align1 with-line"> Login</li>
        <li className="right-align">Employer Zone</li>
        <li className="right-align">Partners Login</li>
        <li className="right-align"><a href="mailto:business@ibasearch.com"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-envelope" style={{ color: 'white' }}></i>  BUSINESS@IBASEARCH.COM</a></li>
        <li className="right-align2"><a href="tel: +918802756666, 8802706666"  style={{ textDecoration: 'none' }}><i className="fa-solid fa-phone" style={{ color: 'white' }}></i> +918802756666 , 8802706666</a></li>
      </ul>
      <div className="nav-logo">
        <img src={logo1} className='nav-img' alt="Logo" />
      </div>
      <div className="filter-container">
        <span className="filter-text">Filter by:</span>
        <select className="filter-dropdown">
          <option value="job">Job</option>
          <option value="event">Event</option>
          <option value="Editorial">Editorial</option>
          <option value="Courses">Courses</option>
        </select>
      </div>

      <div className="search-container">
        <input type="text" id="search-input" placeholder="Search Item......" />
        <button className='searchbtn' id="search-button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      

      <ul className="nav-menu">
        <li>HOME</li>
        
        <li class="dropdown-parent">ABOUT US
          <ul className="dropdown">
            <li>CHAIRMAN</li>
            <li>BOARD OF DIRECTORS</li>
            <li>BOARD OF ADVISORS</li>
            <li>PANEL OF CONSULTANTS</li>
            <li>STRATEGIC BUSINESS PARTNERS</li>
            <li>FRANCHISE PARTNER</li>
          </ul>
        </li>
        <li class="dropdown-parent">OUR SERVICES
          <ul className="dropdown">
            <li>GLOBAL SEARCH COMPANY</li>
            <li>CORPORATE BUSINESS ADVISORY & CONSUTING</li>
            <li>VARUN RAI KOCHHAR ACADEMY</li>
            <li>VRK Foundations</li>
          </ul>
        </li>
        <li class="dropdown-parent">CONSULTING
          <ul className="dropdown">
            <li>GLOBAL RETAINED SEARCH</li>
            <li>CORPORATE ADVISORY & GOVERNANCE</li>
            <li>BUSINESS TRANSFORMATIONAL CONSULTING</li>
            <li>HR TRANSFORMATIONAL CONSULTING</li>
            <li>FINANCIAL TRANSFORMATIONAL CONSULTING</li>
            <li>LEGAL CONSULTING</li>
          </ul>
        </li>
        <li>JOB SEARCH</li>
        <li class="dropdown-parent">JOB OPPORTUNITIES
          <ul className="dropdown">
            <li>CXO JOBS</li>
            <li>VP JOBS</li>
            <li>GM JOBS</li>
            <li>FUNCTION HEADS JOBS</li>
            <li>CAREER WITH IBA</li>
            <li>INTERNSHIP PROGRAMS</li>
          </ul>
        </li>
        <li class="dropdown-parent">SERVICES
          <ul className="dropdown">
            <li>LUXURY HOSPITALITY, TRAVEL & HOLIDAYS</li>
            <li>LUXURY BUSINESS TRADING</li>
            <li>LUXURY REAL ESTATE TRADING</li>
            <li>HEALTHCARE & WELLNESS</li>
          </ul>
        </li>
        <li>TESTIMONIALS</li>
        <li>EDITORIAL</li>
        <li>EVENTS</li>
        <li>CAREER WITH IBA</li>
        <li>FAQS</li>
        <li>CONTACT</li>
      </ul>



    </div>
  )
}

export default Navbar