import z from 'zod';
export const zActBlueRequest = z.strictObject({
    donor: z.object({
        firstname: z.string(),
        lastname: z.string(),
        addr1: z.string().nullable(),
        city: z.string().nullable(),
        state: z.string().nullable(),
        zip: z.string().nullable(),
        country: z.string().nullable(),
        isEligibleForExpressLane: z.boolean(),
        employerData: z.object({
            employer: z.string().nullable(),
            occupation: z.string().nullable(),
            employerAddr1: z.string().nullable(),
            employerCity: z.string().nullable(),
            employerState: z.string().nullable(),
            employerZip: z.string().nullable(),
            employerCountry: z.string().nullable(),
        }),
        // Donors are not required to share email/phone depending
        // on whether we manage the donation form or not and choose
        // to let them. It is unclear from the documentation if this
        // means this should be optional or not.
        email: z.string().nullable(),
        phone: z.string().nullable(),
    }),
    contribution: z.object({
        createdAt: z.coerce.date(),
        orderNumber: z.string(),
        contributionForm: z.string().nullable(),
        refcodes: z.record(z.string(), z.string().nullish()).nullish(),
        abTestName: z.string().nullable(),
        abTestVariation: z.string().nullable(),
        isRecurring: z.boolean(),
        recurringPeriod: z.string(),
        // coerce to string because it ends up as either a raw number
        // or "infinite" and the service is programmed to parse from strings
        recurringDuration: z.coerce.string().nullable(),
        weeklyRecurringSunset: z.string().nullable(),
        isPaypal: z.boolean(),
        isMobile: z.boolean(),
        isExpress: z.boolean(),
        withExpressLane: z.boolean(),
        expressSignup: z.boolean(),
        uniqueIdentifier: z.string(),
        status: z.string(),
        thanksUrl: z.string().nullish(),
        retryUrl: z.string().nullish(),
        textMessageOption: z.string(),
        giftDeclined: z.boolean().nullish(),
        giftIdentifier: z.string().nullable(),
        shippingName: z.string().nullable(),
        shippingAddr1: z.string().nullable(),
        shippingCity: z.string().nullable(),
        shippingState: z.string().nullable(),
        shippingZip: z.string().nullable(),
        shippingCountry: z.string().nullable(),
        smartBoostAmount: z.string().nullable(),
        customFields: z.array(z.object({
            label: z.string(),
            answer: z.string(),
        })),
        merchandise: z.array(z.object({
            name: z.string(),
            itemId: z.string(),
            details: z.object({
                color: z.string(),
                size: z.string(),
            }),
        })),
        bumpYourRecurring: z
            .object({
            bumpRecurringLink: z.string(),
            recurringUpsellSeen: z.boolean(),
            recurringUpsellAccepted: z.boolean(),
        })
            .nullable(),
    }),
    lineitems: z.array(z.object({
        sequence: z.number(),
        entityId: z.number(),
        fecId: z.string().nullable(),
        committeeName: z.string(),
        amount: z.coerce.string(),
        recurringAmount: z.coerce.string().nullable(),
        paidAt: z.coerce.date(),
        lineitemId: z.number(), // unique identifier for each individual donation
        amountLessAbFees: z.coerce.string(),
    })),
    form: z.object({
        name: z.string(),
        kind: z.string(),
        ownerEmail: z.string().nullable(),
        managingEntityName: z.string().nullable(),
        managingEntityCommitteeName: z.string().nullable(),
    }),
});
//# sourceMappingURL=ActBlueRequest.js.map