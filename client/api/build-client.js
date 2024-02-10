import axios from 'axios';

export default ({ req }) => {
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

    return axios.create({
      baseURL:
        'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
      headers: req.headers,
    });
  } else {
    // we are on the browser!
    // requests can be made with a base url of ''
    return axios.create({
      baseUrl: '/',
    });
  }
};
