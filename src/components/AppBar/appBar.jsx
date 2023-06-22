import { AuthNav } from "components/AuthNav/authNav";
import Navigation from "components/Navigation/navigation";
import { UserMenu } from "components/UserMenu/userMenu";
import { useAuth } from "hooks";
import { Header } from "./app.Bar.styled";

const AppBar = () => {
  const { isLoggedIn } = useAuth();

    return (
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Header>
    );
}

export default AppBar;