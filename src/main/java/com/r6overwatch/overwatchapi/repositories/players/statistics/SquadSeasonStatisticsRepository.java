package com.r6overwatch.overwatchapi.repositories.players.statistics;

import com.r6overwatch.overwatchapi.models.entities.players.statistics.SquadSeasonStatistics;
import com.r6overwatch.overwatchapi.models.entities.season.Season;
import com.r6overwatch.overwatchapi.repositories.OverwatchRepository;
import org.springframework.data.repository.CrudRepository;

/**
 * DAO access-layer for {@link SquadSeasonStatistics}
 * @author Stephen Prizio <a href="http://www.saprizio.com">www.saprizio.com</a>
 * @version 1.0
 */
public interface SquadSeasonStatisticsRepository extends OverwatchRepository, CrudRepository<SquadSeasonStatistics, Long> {

    /**
     * Finds a list of {@link SquadSeasonStatistics} by {@link Season}
     *
     * @param season {@link Season} to consider
     * @return list of {@link SquadSeasonStatistics} for the given {@link Season}
     */
    SquadSeasonStatistics findBySeason(Season season);
}
