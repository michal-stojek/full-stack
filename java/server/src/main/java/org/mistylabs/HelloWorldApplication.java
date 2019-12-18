package org.mistylabs;

import io.dropwizard.Application;
import io.dropwizard.bundles.assets.ConfiguredAssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import javax.servlet.FilterRegistration;
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
    registerEndpoints(environment);
    registerHealthchecks(environment);
  }

  private void setupUrlRewrite(Environment environment) {
    FilterRegistration.Dynamic registration =
        environment.servlets().addFilter("UrlRewriteFilter", new UrlRewriteFilter());
    registration.addMappingForUrlPatterns(null, true, "/*");
    registration.setInitParameter("confPath", "urlrewrite.xml");
  }

  private void registerEndpoints(Environment environment) {
    environment.jersey().setUrlPattern("/api/*");
    environment.jersey().register(WebappConfigurationResourceImpl.class);
  }

  private void registerHealthchecks(Environment environment) {
    environment.healthChecks().register("template", new TemplateHealthCheck());
  }
}
