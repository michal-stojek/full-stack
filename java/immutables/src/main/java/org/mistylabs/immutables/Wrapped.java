package org.mistylabs.immutables;

import org.immutables.value.Value;

@Value.Style(
        typeAbstract = "Wrapped*",
        typeImmutable = "*",
        visibility = Value.Style.ImplementationVisibility.PUBLIC,
        defaults = @Value.Immutable(builder = false, copy = false))
public @interface Wrapped {}