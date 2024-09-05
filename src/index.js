import "./styles.css";
import icon from './images/dropdown.svg';
import { dropdownControll } from "./greeting";
const dropdownIcon = icon;


// Dynamiczny styl w JS
const styles = `
  .dropbtn {
    background-color: #444;
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
`;

// Dodaj style do dokumentu
const styleSheet = document.createElement("style");
styleSheet.id = "dynamicStyles";
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

dropdownControll();
