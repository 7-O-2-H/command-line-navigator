// imports
import SideBar from "./SideBar";
import Options from "./Options";
import TopBar from "./TopBar";

export default function OptionsContainer() {
  return (
        <div className="options-container">
          <div className="lefts">
            <SideBar />
          </div>
          <div className="rights">
            <TopBar />
            <Options />
          </div>
        </div>   
  );
}
