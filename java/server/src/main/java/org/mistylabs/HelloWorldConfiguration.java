package org.mistylabs;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import io.dropwizard.Configuration;
import io.dropwizard.bundles.assets.AssetsBundleConfiguration;
import io.dropwizard.bundles.assets.AssetsConfiguration;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.mistylabs.dto.OktaConfiguration;

@JsonDeserialize
public final class HelloWorldConfiguration extends Configuration implements AssetsBundleConfiguration {

    @Valid
    @NotNull
    private final AssetsConfiguration assets;

    @Valid
    @NotNull
    private final OktaConfiguration okta;

    @JsonCreator
    public HelloWorldConfiguration(
            @JsonProperty("assets") AssetsConfiguration assets,
            @JsonProperty("okta") OktaConfiguration okta
    ) {
        this.assets = assets == null
            ? AssetsConfiguration.builder().build()
            : assets;
        this.okta = okta;
    }

    @Override
    public AssetsConfiguration getAssetsConfiguration() {
        return assets;
    }

    public OktaConfiguration getOktaConfiguration() {
        return okta;
    }

}
