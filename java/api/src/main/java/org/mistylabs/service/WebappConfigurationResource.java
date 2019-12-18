package org.mistylabs.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import org.mistylabs.dto.WebappConfiguration;

@Path("/config")
@Produces(MediaType.APPLICATION_JSON)
public interface WebappConfigurationResource {

  @GET
  WebappConfiguration getWebappConfiguration();
}
