// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'http://teams-api-service:4200', // Kubernetes service name
  keycloak: {
    // same as above, but with keycloak forward port
    url: "http://platform-auth",
    realm: "teams",
    clientId: "teams-ui",
  },

};
