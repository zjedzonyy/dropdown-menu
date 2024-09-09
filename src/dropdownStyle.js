// handles dropdown menu style
import "./styles.css";
import icon from './images/dropdown.svg';
const dropdownIcon = icon;


export default function dropdownStyle() {
    const styles = `
    :root {
      --primary-color: #f4f4f4; /* Light Gray */
      --secondary-color: #1c1c1c; /* Dark Gray */
      --accent-color: #ff6f61; /* Coral */
      --highlight-color: #ffd700; /* Gold */
      --text-primary: #ffffff; /* White */
      --text-secondary: #454545; /* Dark Gray */
      --background-light: #e8e8e8; /* Very Light Gray */
    }
  
    .dropdown {
      position: relative;
      display: inline-block;
      font-size: 1.25rem;
    }
  
    .dropdown-content {
      display: none;
      position: absolute;
      background-color: var(--secondary-color);
      min-width: 11rem;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }
    .dropbtn {
      background-color: var(--text-secondary);
      color: var(--text-primary);
      border: none;
      padding: 0.5rem;
      display: flex;
      align-items: center;
      background-image: url('${dropdownIcon}');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: left center;
      padding-left: 2rem;
    }
    .dropdown-content a {
      color: var(--text-primary);
      padding: 1rem;
      padding-left: 2rem;
      padding-right: 2rem;
      text-decoration: none;
      display: block;
      background-color: var(--text-secondary);
    }
      
    .dropdown:hover .dropdown-content {display: block;}
    .dropdown-content a:hover {background-color: var(--primary-color); color: var(--text-secondary);}
  `;
  
  const styleSheet = document.createElement("style");
  styleSheet.id = "dynamicStyles";
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

}
