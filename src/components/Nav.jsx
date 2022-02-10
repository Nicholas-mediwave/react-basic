import { Link } from "react-router-dom";
import '../css/NavStyle.css'

const Nav = ()=>{

    return( 
      
        <div className="Nav">
         
          <div className="Nav-InnerContainer">
         
            <div className="Nav-InnerContainer-Logo">
          
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="133"
                  height="64"
                  viewBox="0 0 133 64"
                >
                  <text
                    id="Yummy"
                    transform="translate(0 45)"
                    fill="#00b158"
                    fontSize="40"
                    fontFamily="Apple-Chancery, Apple Chancery"
                  >
                    <tspan x="0" y="0">Yummy</tspan>
                  </text>
                </svg>
              </Link>
  ​
           
              <div className="hamber" id="hamber-id">
                <div className="hamber-icon" id="hamber-icon-id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="20"
                    viewBox="0 0 26 20"
                  >
                    <g
                      id="Group_22"
                      data-name="Group 22"
                      transform="translate(-345 -37)"
                    >
                      <rect
                        id="Rectangle_18"
                        data-name="Rectangle 18"
                        width="26"
                        height="4"
                        rx="2"
                        transform="translate(345 37)"
                        fill="#17285a"
                      />
                      <rect
                        id="Rectangle_19"
                        data-name="Rectangle 19"
                        width="26"
                        height="4"
                        rx="2"
                        transform="translate(345 45)"
                        fill="#17285a"
                      />
                      <rect
                        id="Rectangle_20"
                        data-name="Rectangle 20"
                        width="26"
                        height="4"
                        rx="2"
                        transform="translate(345 53)"
                        fill="#17285a"
                      />
                    </g>
                  </svg>
                </div>
                <div className="hamberClose-icon" id="hamberClose-icon-id">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="26px"
                    viewBox="0 0 24 24"
                    width="26px"
                    fill="#17285a"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                      d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                    />
                  </svg>
                </div>
              </div>
            </div>
        
            <div className="Nav-InnerContainer-Menu" id="Nav-InnerContainer-Menu-id">
              <Link className="active" to="/About">Home</Link>
              <Link to="/Contact">Contact</Link>
            </div>
          </div>
        </div>
       
  );
}

export default Nav;