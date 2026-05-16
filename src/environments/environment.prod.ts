// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'http://teams-api-service:4200', // Kubernetes service name
  keycloak: {
    // same as above, but with keycloak forward port
    url: "http://keycloak-service:8080",
    realm: "teams",
    clientId: "teams-ui",
  },
};
