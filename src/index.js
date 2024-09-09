// entry point
import { dropdownControll } from "./dropdownControll";
import dropdownStyle from "./dropdownStyle";

function dropdown() {
  dropdownStyle();
  dropdownControll();
}

dropdown();

// You need in HTML:
{/* <div class="dropdown">
  <button class="dropbtn">Dropdown</button>
  <div class="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    <a href="#">Link 4</a>
  </div>
</div> */}