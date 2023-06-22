import { AuthNav } from "components/AuthNav/authNav";
import Navigation from "components/Navigation/navigation";
import { Header } from "./app.Bar.styled";

const AppBar = () => {
    return (
      <Header>
        <Navigation />
            {/* {isLoggedIn ? <UserMenu /> : */}
            <AuthNav />
                {/* } */}
      </Header>
    );
}

export default AppBar;