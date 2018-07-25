package org.mistylabs;

import com.codahale.metrics.annotation.Timed;
import javax.inject.Inject;
import org.mistylabs.auth.AccessToken;
import org.mistylabs.dto.OktaConfiguration;
import org.mistylabs.dto.WebappConfiguration;
import org.mistylabs.service.WebappConfigurationResource;

public final class WebappConfigurationResourceImpl implements WebappConfigurationResource {

    private final OktaConfiguration oktaConfiguration;

    @Inject
    public WebappConfigurationResourceImpl(OktaConfiguration oktaConfiguration) {
        this.oktaConfiguration = oktaConfiguration;
    }

    @Timed
    @Override
    public WebappConfiguration getWebappConfiguration() {
        return WebappConfiguration.builder()
                .oktaConfiguration(oktaConfiguration)
                .build();
    }

    @Timed
    @Override
    public String getEmail(AccessToken token) {
        return token.getName();
    }

}
