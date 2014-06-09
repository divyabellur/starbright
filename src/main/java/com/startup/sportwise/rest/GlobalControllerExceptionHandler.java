package com.startup.sportwise.rest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;


@ControllerAdvice
public class GlobalControllerExceptionHandler {
	
	private static final Logger LOG = LoggerFactory.getLogger(GlobalControllerExceptionHandler.class);
	/**
     * Handles all exceptions for the controller.
     *
     * @param t Throwable.
     * @return WebResponse object with a status 500
     */
    @ExceptionHandler(Throwable.class)
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public @ResponseBody
    WebResponse<Object> handleException(final Throwable t) {
        LOG.error(this.getClass().getSimpleName(), t);
        WebResponse<Object> webResponse = new WebResponse<Object>();
        webResponse.setError(new WebResponse.Error(SportwiseExceptionCode.HTTP_INTERNAL_SERVER_ERROR.getCode(), SportwiseExceptionCode.HTTP_INTERNAL_SERVER_ERROR.getMessage()));       
        return webResponse;
        
    }

}
