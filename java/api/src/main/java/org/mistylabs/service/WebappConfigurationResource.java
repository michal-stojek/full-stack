package org.mistylabs.service;

import io.dropwizard.auth.Auth;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.mistylabs.auth.AccessToken;
import org.mistylabs.dto.WebappConfiguration;

@Path("/webapp_configuration")
@Produces(MediaType.APPLICATION_JSON)
public interface WebappConfigurationResource {

    @GET
    WebappConfiguration getWebappConfiguration();

    @GET
    @Path("/email")
    String getEmail(@Auth AccessToken token);

}
