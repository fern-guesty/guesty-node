/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { GuestyApi } from "@fern-api/guesty";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Client {
    interface Options {
        environment?: environments.GuestyApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class Client {
    constructor(private readonly options: Client.Options) {}

    /**
     * Use this endpoint to retrieve daily calendar availability and pricing for a given listing ID and date range. IMPORTANT: Multi-unit calendar availability is determined by unit allotment, not its `status` field. To calculate if a multi-unit has availability, use the following formula: ``` const isAvailable = _.idNumber(currentDay.allotment)? currentDay.allotment > 0 : currentDay.status === 'available'; ```
     */
    public async retrieveCalendarSingleListing(
        id: string,
        request: GuestyApi.CalendarSingleListingRequest
    ): Promise<GuestyApi.CalendarSingleListing> {
        const { startDate, endDate, includeAllotment } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("startDate", startDate);
        _queryParams.append("endDate", endDate);
        if (includeAllotment != null) {
            _queryParams.append("includeAllotment", includeAllotment.toString());
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.GuestyApiEnvironment.Production,
                `/availability-pricing/api/calendar/listings/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.CalendarSingleListing.parse(
                _response.body as serializers.CalendarSingleListing.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.GuestyApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GuestyApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GuestyApiTimeoutError();
            case "unknown":
                throw new errors.GuestyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Set the nightly rate, minimum stay and availability of any calendar date per listing or Use this endpoint to set availability and pricing for multiple dates or date ranges.
     */
    public async updateCalendarSingleListing(
        id: string,
        request: GuestyApi.UpdateCalendarSingleListingRequest
    ): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.GuestyApiEnvironment.Production,
                `/availability-pricing/api/calendar/listings/${id}`
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.UpdateCalendarSingleListingRequest.json(request),
        });
        if (_response.ok) {
            return await serializers.calendar.updateCalendarSingleListing.Response.parse(
                _response.body as serializers.calendar.updateCalendarSingleListing.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.GuestyApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GuestyApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GuestyApiTimeoutError();
            case "unknown":
                throw new errors.GuestyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Use this endpoint to retrieve calendar availability and pricing for multiple listings according to a date range.
     */
    public async retireveMultipleCalendars(
        request: GuestyApi.RetrieveMultipleCalendarsRequest
    ): Promise<GuestyApi.CalendarMultipleListings> {
        const { listingIds, startDate, endDate } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("listingIds", listingIds);
        _queryParams.append("startDate", startDate);
        _queryParams.append("endDate", endDate);
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.GuestyApiEnvironment.Production,
                "/availability-pricing/api/calendar/listings"
            ),
            method: "GET",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.CalendarMultipleListings.parse(
                _response.body as serializers.CalendarMultipleListings.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.GuestyApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GuestyApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GuestyApiTimeoutError();
            case "unknown":
                throw new errors.GuestyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Use this endpoint to set availability and pricing for multiple listings across a range of dates.
     */
    public async retrieveCalendarMultipleListings(request: GuestyApi.UpdateCalendarMultipleListings): Promise<string> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.GuestyApiEnvironment.Production,
                "/availability-pricing/api/calendar/listings"
            ),
            method: "PUT",
            headers: {
                Authorization: core.BearerToken.toAuthorizationHeader(await core.Supplier.get(this.options.token)),
            },
            body: await serializers.UpdateCalendarMultipleListings.json(request),
        });
        if (_response.ok) {
            return await serializers.calendar.retrieveCalendarMultipleListings.Response.parse(
                _response.body as serializers.calendar.retrieveCalendarMultipleListings.Response.Raw
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.GuestyApiError({
                statusCode: _response.error.statusCode,
                responseBody: _response.error.rawBody,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.GuestyApiError({
                    statusCode: _response.error.statusCode,
                    responseBody: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.GuestyApiTimeoutError();
            case "unknown":
                throw new errors.GuestyApiError({
                    message: _response.error.errorMessage,
                });
        }
    }
}