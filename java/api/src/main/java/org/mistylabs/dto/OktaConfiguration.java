package org.mistylabs.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import java.util.Set;
import org.immutables.value.Value;

@Value.Immutable
@JsonDeserialize(builder = OktaConfiguration.Builder.class)
public interface OktaConfiguration {

    String getBaseUrl();
    String getClientId();
    String getIssuer();
    Set<OktaIdp> getIdps();

    class Builder extends OktaConfigurationBuilder {}

    static Builder builder() {
        return new Builder();
    }

}
