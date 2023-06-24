import { useAuth } from "hooks";

const HomePage = () => {
  const {user} = useAuth()
    return (
      <div>
        <h1>
        {user ? `Welcome ${user.name}` : 'Welcome'} 
          {/* <span role="img" aria-label="Greeting icon">
            
          </span> */}
        </h1>
      </div>
    );
}

export default HomePage;