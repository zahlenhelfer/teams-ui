import { KeycloakConfig } from 'keycloak-js';
import { environment } from '../../environments/environment';

declare global {
  interface Window {
    __env?: {
      keycloakUrl?: string;
      keycloakRealm?: string;
      keycloakClientId?: string;
      apiUrl?: string;
    };
  }
}

const keycloakConfig: KeycloakConfig = {
  url: window.__env?.keycloakUrl ?? environment.keycloak.url,
  realm: window.__env?.keycloakRealm ?? environment.keycloak.realm,
  clientId: window.__env?.keycloakClientId ?? environment.keycloak.clientId,
};

export default keycloakConfig;
