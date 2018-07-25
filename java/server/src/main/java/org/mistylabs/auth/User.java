package org.mistylabs.auth;

import java.security.Principal;
import org.immutables.value.Value;

@Value.Immutable
public interface User extends Principal {

    class Builder extends UserBuilder {}

    static Builder builder() {
        return new Builder();
    }

}
