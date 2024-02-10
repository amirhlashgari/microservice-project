import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);

  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === 'undefined') {
    // we are on the server!

    /**
     * VERY IMPORTANT:
     * ----------------------
     * requests should be made to http://{{SERVICE NAME}}.{{NAMESPACE}}.svc.cluster.local
     * finding NAMESPACE ---> kubectl get namespace
     * finding SERVICE NAME ---> kubectl get services -n {{NAMESPACE}} (shows services inside specific namespace, without this it will showing default namespace)
     * add header "Host" to request, because in Ingress config we specified "host: microservice.dev", so it will be listening to this domain name only
     */

    const { data } = await axios.get(
      'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local/api/users/currentuser',
      {
        headers: req.headers // to have cookie inside it and it wiil manage Host header too by itself
      }
    );

    return data;
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
    const { data } = await axios.get('/api/users/currentuser');

    return data;
  }
  return {};
};

export default LandingPage;
