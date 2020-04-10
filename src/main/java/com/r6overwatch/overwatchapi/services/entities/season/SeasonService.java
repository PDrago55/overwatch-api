package com.r6overwatch.overwatchapi.services.entities.season;

import com.google.common.collect.Lists;
import com.r6overwatch.overwatchapi.models.entities.season.Season;
import com.r6overwatch.overwatchapi.repositories.season.SeasonRepository;
import com.r6overwatch.overwatchapi.services.entities.OverwatchEntityService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.time.LocalDate;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;

/**
 * Implementation of the {@link OverwatchEntityService} architecture for {@link Season}
 *
 * @author Stephen Prizio <a href="http://www.saprizio.com">www.saprizio.com</a>
 * @version 1.0
 */
@Service
public class SeasonService implements OverwatchEntityService<Season> {

    private static final Logger LOGGER = LoggerFactory.getLogger(SeasonService.class);

    @Resource(name = "seasonRepository")
    private SeasonRepository seasonRepository;


    //  METHODS

    /**
     * Obtains a {@link Season} who's season year and season number match the given input
     * Examples of inputs would be 5, 1 for Y5 S1
     *
     * @param seasonYear season year since inception of r6 siege
     * @param seasonNumber season number meaning which numerical delineation of the year we're in
     * @return {@link Season} if found, null otherwise
     */
    public Optional<Season> getSeasonForSeasonYearAndSeasonNumber(Integer seasonYear, Integer seasonNumber) {
        if (seasonYear == null || seasonNumber == null) {
            LOGGER.error("One or more of the required parameters was null or missing. seasonYear {}, seasonNumber {}", seasonYear, seasonNumber);
            return Optional.empty();
        }

        try {
            return Optional.ofNullable(this.seasonRepository.findBySeasonYearAndSeasonNumber(seasonYear, seasonNumber));
        } catch (Exception e) {
            LOGGER.error("An error occurred while searching for seas. Message: {}", e.getMessage());
            return Optional.empty();
        }
    }

    /**
     * Obtains the current season, i.e. the season of siege that is currently going on for today's date
     *
     * @return {@link Season} object who's release date is closest to today's date
     */
    public Optional<Season> getCurrentSeason() {
        return findAll()
                .stream()
                .filter(season -> season.getReleaseDate().isBefore(LocalDate.now()))
                .max(Comparator.comparing(Season::getReleaseDate));
    }

    @Override
    public void refresh(Season entity) {
        this.seasonRepository.refresh(entity);
    }

    @Override
    public Optional<Season> find(Long id) {
        return this.seasonRepository.findById(id);
    }

    @Override
    public List<Season> findAll() {
        return Lists.newArrayList(this.seasonRepository.findAll());
    }

    @Override
    public Season save(Season entity) {
        return this.seasonRepository.save(entity);
    }

    @Override
    public void delete(Long id) {
        find(id).ifPresent(season -> this.seasonRepository.deleteById(id));
    }

    @Override
    public Season create(Map<String, Object> params) {
        //  TODO: implement this method once we're ready to include POST
        return null;
    }
}
