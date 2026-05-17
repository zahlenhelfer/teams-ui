export const environment = {
  production: false,
  // Use proxy path instead of direct URL or in coder use "http://<workspace-name>.coder:<port>" with the port of forward of the api service
  apiUrl: "http://teams-api-service:4200",
  keycloak: {
    url: 'http://keycloak-service:8080',
    realm: 'teams',
    clientId: 'teams-ui',
  },
};
