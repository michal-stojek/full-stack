package org.mistylabs.auth;

import com.okta.jwt.Jwt;
import java.security.Principal;
import org.immutables.value.Value;
import org.mistylabs.immutables.Wrapped;
import org.mistylabs.immutables.Wrapper;

@Value.Immutable
@Wrapped
abstract class _AccessToken extends Wrapper<Jwt> implements Principal {

    @Override
    public final String getName() {
        return (String) this.value().getClaims().get("uid");
    }

}
