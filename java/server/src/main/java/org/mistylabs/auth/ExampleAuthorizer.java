package org.mistylabs.auth;

import io.dropwizard.auth.Authorizer;

public final  class ExampleAuthorizer implements Authorizer<User> {
    @Override
    public boolean authorize(User user, String role) {
        return user.getName().equals("good-guy") && role.equals("ADMIN");
    }
}
