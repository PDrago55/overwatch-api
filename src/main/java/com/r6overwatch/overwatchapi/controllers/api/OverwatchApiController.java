package com.r6overwatch.overwatchapi.controllers.api;

import com.r6overwatch.overwatchapi.controllers.AbstractOverwatchController;
import com.r6overwatch.overwatchapi.controllers.response.StandardJsonResponse;
import com.r6overwatch.overwatchapi.resources.entities.OverwatchResource;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.apache.commons.lang3.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * A high-level controller to provide information about the system
 *
 * @author Stephen Prizio <a href="http://www.saprizio.com">www.saprizio.com</a>
 * @version 1.0
 */
@RestController
@RequestMapping("/api")
@Api(description = "Parent-level api controller offering operations for generic API information")
public class OverwatchApiController extends AbstractOverwatchController<OverwatchResource> {


    //  METHODS

    //  *************** GET ***************

    /**
     * Returns the version of the Overwatch API. Typically used to gauge whether the API is running
     *
     * @return Overwatch API version
     */
    @GetMapping("/")
    @ApiOperation("Obtains the current instance of the Overwatch API")
    public StandardJsonResponse getApi() {
        return new StandardJsonResponse(true, "Overwatch Version 0.1", StringUtils.EMPTY);
    }

}
