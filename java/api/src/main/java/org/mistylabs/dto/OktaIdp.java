package org.mistylabs.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.immutables.value.Value;

@Value.Immutable
@JsonDeserialize(builder = OktaIdp.Builder.class)
public interface OktaIdp {

    String getType();
    String getId();

    class Builder extends OktaIdpBuilder {}

    static Builder builder() {
        return new Builder();
    }

}
