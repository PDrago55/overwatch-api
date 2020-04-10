package com.r6overwatch.overwatchapi.services.nonentities.stats;

import java.util.Collection;
import java.util.DoubleSummaryStatistics;
import java.util.stream.Collector;
import java.util.stream.Collectors;

/**
 * Abstract service-layer to provide utility statistical calculation methods
 *
 * @author Stephen Prizio <a href="http://www.saprizio.com">www.saprizio.com</a>
 * @version 1.0
 */
public class AbstractStatsService<E> {

    /**
     * Obtains numerical statistics for a list of objects given a custom collector
     *
     * @param key       attribute on which we wish to aggregate information
     * @param collector custom collector to aggregate information
     * @param entities  list of entities on which to compute information
     * @return summary statistics for an entity's attributes
     */
    public DoubleSummaryStatistics calculateStatistics(String key, Collector<E, ?, DoubleSummaryStatistics> collector, Collection<E> entities) {
        return
                entities
                        .parallelStream()
                        .collect(Collectors.groupingBy(entity -> key, collector))
                        .get(key);
    }
}
