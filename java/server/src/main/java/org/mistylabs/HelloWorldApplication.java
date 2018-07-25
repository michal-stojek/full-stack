package org.mistylabs;

import com.codahale.metrics.MetricRegistry;
import com.google.common.cache.CacheBuilder;
import io.dropwizard.Application;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.AuthValueFactoryProvider;
import io.dropwizard.auth.CachingAuthenticator;
import io.dropwizard.auth.basic.BasicCredentialAuthFilter;
import io.dropwizard.auth.basic.BasicCredentials;
import io.dropwizard.bundles.assets.ConfiguredAssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.glassfish.jersey.server.filter.RolesAllowedDynamicFeature;
import org.mistylabs.auth.ExampleAuthenticator;
import org.mistylabs.auth.ExampleAuthorizer;
import org.mistylabs.auth.User;

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
        bootstrap.addBundle(new ConfiguredAssetsBundle("/assets", "/"));
    }

    @Override
    public void run(HelloWorldConfiguration configuration,
                    Environment environment) {
        environment.jersey().setUrlPattern("/api/*");
        environment.jersey().register(HelloWorldResourceImpl.class);

        MetricRegistry metricRegistry = new MetricRegistry();
        CachingAuthenticator<BasicCredentials, User> cachingAuthenticator = new CachingAuthenticator<>(
                metricRegistry,
                new ExampleAuthenticator(),
                CacheBuilder.newBuilder());

        environment.jersey().register(new AuthDynamicFeature(
                new BasicCredentialAuthFilter.Builder<User>()
                        .setAuthenticator(cachingAuthenticator)
                        .setAuthorizer(new ExampleAuthorizer())
                        .setRealm("realm")
                        .buildAuthFilter()));
        environment.jersey().register(RolesAllowedDynamicFeature.class);
        //If you want to use @Auth to inject a custom Principal type into your resource
        environment.jersey().register(new AuthValueFactoryProvider.Binder<>(User.class));

        environment.healthChecks().register("template", new TemplateHealthCheck());
    }

}
