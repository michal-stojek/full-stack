package org.mistylabs;

import com.okta.jwt.JwtHelper;
import io.dropwizard.Application;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.oauth.OAuthCredentialAuthFilter;
import io.dropwizard.bundles.assets.ConfiguredAssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import javax.servlet.FilterRegistration;
import org.glassfish.hk2.utilities.binding.AbstractBinder;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.mistylabs.auth.AccessToken;
import org.mistylabs.auth.OktaOAuthAuthenticator;
import org.mistylabs.dto.OktaConfiguration;
import org.tuckey.web.filters.urlrewrite.UrlRewriteFilter;

public final class HelloWorldApplication extends Application<HelloWorldConfiguration> {
    public static void main(String[] args) throws Exception {
        new HelloWorldApplication().run(args);
    }

    @Override
    public String getName() {
        return "hello-world";
    }

    @Override
    public void initialize(Bootstrap<HelloWorldConfiguration> bootstrap) {
        bootstrap.addBundle(new ConfiguredAssetsBundle("/assets", "/", "index.htm"));
    }

    @Override
    public void run(HelloWorldConfiguration configuration, Environment environment) throws Exception {
        setupUrlRewrite(environment);
        setupDependencyInjection(environment, configuration);
        setupAuth(environment, configuration.getOktaConfiguration());
        registerEndpoints(environment);
        registerHealthchecks(environment);
    }

    private void setupDependencyInjection(Environment environment, HelloWorldConfiguration configuration) {
        environment.jersey().register(new AbstractBinder() {
            @Override
            protected void configure() {
                bind(configuration.getOktaConfiguration()).to(OktaConfiguration.class);
            }
        });
    }

    private void setupUrlRewrite(Environment environment) {
        FilterRegistration.Dynamic registration = environment.servlets()
                .addFilter("UrlRewriteFilter", new UrlRewriteFilter());
        registration.addMappingForUrlPatterns(null, true, "/*");
        registration.setInitParameter("confPath", "urlrewrite.xml");
    }

    private void registerEndpoints(Environment environment) {
        environment.jersey().setUrlPattern("/api/*");
        environment.jersey().register(WebappConfigurationResourceImpl.class);
    }

    private void setupAuth(Environment environment, OktaConfiguration oktaConfiguration) throws Exception {
        environment.jersey().register(new AuthDynamicFeature(
                new OAuthCredentialAuthFilter.Builder<AccessToken>()
                        .setAuthenticator(new OktaOAuthAuthenticator(
                                new JwtHelper()
                                        .setIssuerUrl(oktaConfiguration.getIssuer())
                                        .setClientId(oktaConfiguration.getClientId())
                                        .build()))
                        .setPrefix("Bearer")
                        .buildAuthFilter()));

        environment.jersey().register(RolesAllowedDynamicFeature.class);
        environment.jersey().register(new AuthValueFactoryProvider.Binder<>(AccessToken.class));
    }

    private void registerHealthchecks(Environment environment) {
        environment.healthChecks().register("template", new TemplateHealthCheck());
    }

}
