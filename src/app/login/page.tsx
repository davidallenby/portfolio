import ContentContainer from "@components/containers/ContentContainer/ContentContainer";
import LoginForm from "./LoginForm";

export default function Login() {

  return (    
    <ContentContainer>
      <h1 className="mb-4">Login</h1>
      <div className="row">
        <div className="col-12 col-md-6">
        <LoginForm />
        </div>
      </div>
    </ContentContainer> 
  );
}