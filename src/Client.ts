/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "./environments";
import * as core from "./core";
import { Client as CalendarClient } from "./api/resources/calendar/client/Client";

export declare namespace GuestyApiClient {
    interface Options {
        environment?: environments.GuestyApiEnvironment | string;
        token?: core.Supplier<core.BearerToken>;
    }
}

export class GuestyApiClient {
    constructor(private readonly options: GuestyApiClient.Options) {}

    #calendar: CalendarClient | undefined;

    public get calendar(): CalendarClient {
        return (this.#calendar ??= new CalendarClient(this.options));
    }
}
