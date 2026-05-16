export const environment = {
  production: false,
  // Use proxy path instead of direct URL or in coder use "http://<workspace-name>.coder:<port>" with the port of forward of the api service
  apiUrl: "http://172.18.255.254:4200",
  keycloak: {
    url: 'http://platform-auth.127.0.0.1.sslip.io',
    realm: 'teams',
    clientId: 'teams-ui',
  },
};
