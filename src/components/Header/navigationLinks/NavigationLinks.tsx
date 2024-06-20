import { Link } from "react-router-dom";
import navigation from "../../../config/navigation";
import NavigationLinksStyled from "./NavigationLinksStyled";

function NavigationLinks() {
    return(
        <NavigationLinksStyled>
            {navigation.map((item) => (
            <div style={{ padding: "10px" }}>
              <Link to={item.url}>{item.label}</Link>
            </div>
          ))}
        </NavigationLinksStyled>
    )
};

export default NavigationLinks;