import AuthGuardContainer from "@components/containers/AuthGuardContainer/AuthGuardContainer";
import ContentContainer from "@components/containers/ContentContainer/ContentContainer";

export default function Admin() {

  return (    
    <AuthGuardContainer>
      <ContentContainer>
        <h1 className="mb-4">Admin</h1>
        <div className="row">
          <div className="col-12 col-md-6">
            <p>Test</p>
          </div>
        </div>
      </ContentContainer> 
    </AuthGuardContainer>
  );
}