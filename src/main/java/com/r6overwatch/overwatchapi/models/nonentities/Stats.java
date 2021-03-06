package com.r6overwatch.overwatchapi.models.nonentities;

import lombok.*;

import java.util.DoubleSummaryStatistics;
import java.util.Map;

/**
 * A class that contains a compartmentalized statistic for a particular entity. Since statistic aren't unique, we capture their values as a generic map
 *
 * @author Stephen Prizio <a href="http://www.saprizio.com">www.saprizio.com</a>
 * @version 1.0
 */
@NoArgsConstructor
@RequiredArgsConstructor
public class Stats {

    @Getter
    @Setter
    @NonNull
    private Map<String, DoubleSummaryStatistics> statsMap;


    //  METHODS

    /**
     * Determines whether this stat container is empty. We consider empty stats to be fully null or to have an empty map of stats
     *
     * @return true if the attrs are null or if the stat map is empty
     */
    public boolean isEmpty() {
        return (this.statsMap == null) || this.statsMap.isEmpty();
    }
}
