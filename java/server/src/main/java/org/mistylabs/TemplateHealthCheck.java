package org.mistylabs;

import com.codahale.metrics.health.HealthCheck;

public final class TemplateHealthCheck extends HealthCheck {
    @Override
    protected Result check() throws Exception {
        return Result.healthy();
    }
}
