/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import { GuestyApi } from "@fern-api/guesty";
import * as core from "../../../../../core";

export const UpdateCalendarMultipleListings: core.serialization.Schema<
    serializers.UpdateCalendarMultipleListings.Raw,
    GuestyApi.UpdateCalendarMultipleListings
> = core.serialization.object({
    listingId: core.serialization.string(),
    startDate: core.serialization.string(),
    endDate: core.serialization.string(),
    status: core.serialization.lazy(async () => (await import("../../../..")).CalendarStatus).optional(),
    price: core.serialization.number().optional(),
    isBasePrice: core.serialization.boolean().optional(),
    minNights: core.serialization.number().optional(),
    isBaseMinNights: core.serialization.boolean().optional(),
    note: core.serialization.string().optional(),
    cta: core.serialization.boolean().optional(),
    ctd: core.serialization.boolean().optional(),
    useChildValues: core.serialization.boolean().optional(),
});

export declare namespace UpdateCalendarMultipleListings {
    interface Raw {
        listingId: string;
        startDate: string;
        endDate: string;
        status?: serializers.CalendarStatus.Raw | null;
        price?: number | null;
        isBasePrice?: boolean | null;
        minNights?: number | null;
        isBaseMinNights?: boolean | null;
        note?: string | null;
        cta?: boolean | null;
        ctd?: boolean | null;
        useChildValues?: boolean | null;
    }
}