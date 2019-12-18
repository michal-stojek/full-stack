package org.mistylabs.dto;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import org.immutables.value.Value;

@Value.Immutable
@JsonDeserialize(builder = WebappConfiguration.Builder.class)
public interface WebappConfiguration {

  String getMessage();

  class Builder extends WebappConfigurationBuilder {
  }

  static Builder builder() {
    return new Builder();
  }
}
