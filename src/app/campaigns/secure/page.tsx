import { authedOnly } from "../actions/auth";
import { LogOutButton } from "../components/logout-button";
import { cookies } from "next/headers";

const AuthenticatedPage = async () => {
  const parsedJWT = await authedOnly();
  
  
  return (
    <div style={{marginTop:50}}>
      <h1>Authenticated Page</h1>
      <p>You are authenticated, {parsedJWT.sub}!</p>
      <hr />
      <LogOutButton />
    </div>
  );
};

export default AuthenticatedPage;
