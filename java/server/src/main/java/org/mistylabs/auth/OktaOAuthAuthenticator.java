package org.mistylabs.auth;

import com.okta.jwt.JoseException;
import com.okta.jwt.JwtVerifier;
import io.dropwizard.auth.AuthenticationException;
import io.dropwizard.auth.Authenticator;
import java.util.Optional;
import javax.inject.Inject;

public class OktaOAuthAuthenticator implements Authenticator<String, AccessToken> {

    private final JwtVerifier jwtVerifier;

    @Inject
    public OktaOAuthAuthenticator(JwtVerifier jwtVerifier) {
        this.jwtVerifier = jwtVerifier;
    }

    @Override
    public Optional<AccessToken> authenticate(String accessToken) throws AuthenticationException {
        try {
            return Optional.of(AccessToken.of(jwtVerifier.decodeAccessToken(accessToken)));
        } catch (JoseException e) {
            throw new AuthenticationException(e);
        }
    }
}