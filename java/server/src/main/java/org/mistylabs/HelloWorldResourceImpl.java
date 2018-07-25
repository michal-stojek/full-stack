package org.mistylabs;

import com.codahale.metrics.annotation.Timed;

public final class HelloWorldResourceImpl implements HelloWorldResource {

    @Timed
    @Override
    public String word() {
        return "ola!";
    }

}
