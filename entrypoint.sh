#!/bin/sh
set -e

cat > /usr/share/nginx/html/assets/env.js << EOF
(function (window) {
  window.__env = {
    keycloakUrl: '${KEYCLOAK_URL:-http://keycloak-service:8080}',
    keycloakRealm: '${KEYCLOAK_REALM:-teams}',
    keycloakClientId: '${KEYCLOAK_CLIENT_ID:-teams-ui}',
    apiUrl: '${API_URL:-http://teams-api-service:4200}',
  };
}(this));
EOF

exec nginx -g 'daemon off;'
