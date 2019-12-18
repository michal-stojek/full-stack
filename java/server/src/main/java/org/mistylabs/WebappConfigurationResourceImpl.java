package org.mistylabs;

import com.codahale.metrics.annotation.Timed;
import org.mistylabs.dto.WebappConfiguration;
import org.mistylabs.service.WebappConfigurationResource;

public final class WebappConfigurationResourceImpl implements WebappConfigurationResource {

  @Timed
  @Override
  public WebappConfiguration getWebappConfiguration() {
    return WebappConfiguration.builder().message("mesaż").build();
  }
}
