const host = process.env.REACT_APP_HOST || "localhost";

let graphsServiceHost;
let contactServiceHost;

if (host === "localhost") {
  graphsServiceHost = `http://${host}:8081`;
  contactServiceHost = `http://${host}:8080`;
} else {
  graphsServiceHost = `http://${host}`;
  contactServiceHost = `http://${host}`;
}

export { graphsServiceHost, contactServiceHost };