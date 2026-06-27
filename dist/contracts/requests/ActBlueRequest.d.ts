import z from 'zod';
/**
 * The webhook request from ActBlue, sent whenever a user donates through them.
 *
 * "Specification": https://secure.actblue.com/docs/custom_integrations
 *
 * Since it comes from ActBlue, not all of our conventions can be followed.
 * Specifically, some fields are optional, either due to deprecation or certain
 * rules detailed in the spec.
 */
export declare const zActBlueRequest: z.ZodObject<{
    donor: z.ZodObject<{
        firstname: z.ZodString;
        lastname: z.ZodString;
        addr1: z.ZodNullable<z.ZodString>;
        city: z.ZodNullable<z.ZodString>;
        state: z.ZodNullable<z.ZodString>;
        zip: z.ZodNullable<z.ZodString>;
        country: z.ZodNullable<z.ZodString>;
        isEligibleForExpressLane: z.ZodBoolean;
        employerData: z.ZodObject<{
            employer: z.ZodNullable<z.ZodString>;
            occupation: z.ZodNullable<z.ZodString>;
            employerAddr1: z.ZodNullable<z.ZodString>;
            employerCity: z.ZodNullable<z.ZodString>;
            employerState: z.ZodNullable<z.ZodString>;
            employerZip: z.ZodNullable<z.ZodString>;
            employerCountry: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>;
        email: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
    contribution: z.ZodObject<{
        createdAt: z.ZodCoercedDate<unknown>;
        orderNumber: z.ZodString;
        contributionForm: z.ZodNullable<z.ZodString>;
        refcode: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        refcode2: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        refcodes: z.ZodOptional<z.ZodNullable<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>>;
        creditCardExpiration: z.ZodNullable<z.ZodString>;
        recurringPeriod: z.ZodString;
        recurringDuration: z.ZodNullable<z.ZodCoercedString<unknown>>;
        abTestName: z.ZodNullable<z.ZodString>;
        isRecurring: z.ZodOptional<z.ZodBoolean>;
        weeklyRecurringSunset: z.ZodNullable<z.ZodString>;
        isPaypal: z.ZodBoolean;
        isMobile: z.ZodBoolean;
        abTestVariation: z.ZodNullable<z.ZodString>;
        isExpress: z.ZodBoolean;
        withExpressLane: z.ZodBoolean;
        expressSignup: z.ZodBoolean;
        uniqueIdentifier: z.ZodOptional<z.ZodString>;
        status: z.ZodString;
        thanksUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        retryUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        textMessageOption: z.ZodString;
        giftDeclined: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        giftIdentifier: z.ZodNullable<z.ZodString>;
        shippingName: z.ZodNullable<z.ZodString>;
        shippingAddr1: z.ZodNullable<z.ZodString>;
        shippingCity: z.ZodNullable<z.ZodString>;
        shippingState: z.ZodNullable<z.ZodString>;
        shippingZip: z.ZodNullable<z.ZodString>;
        shippingCountry: z.ZodNullable<z.ZodString>;
        smartBoostAmount: z.ZodNullable<z.ZodString>;
        customFields: z.ZodArray<z.ZodObject<{
            label: z.ZodNullable<z.ZodString>;
            answer: z.ZodNullable<z.ZodString>;
        }, z.core.$strip>>;
        merchandise: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            details: z.ZodNullable<z.ZodObject<{}, z.core.$loose>>;
            itemId: z.ZodNumber;
        }, z.core.$strip>>;
        bumpYourRecurring: z.ZodNullable<z.ZodObject<{
            bumpRecurringLink: z.ZodString;
            recurringUpsellSeen: z.ZodBoolean;
            recurringUpsellAccepted: z.ZodBoolean;
        }, z.core.$strip>>;
    }, z.core.$strip>;
    lineitems: z.ZodArray<z.ZodObject<{
        sequence: z.ZodNumber;
        entityId: z.ZodNumber;
        fecId: z.ZodNullable<z.ZodString>;
        committeeName: z.ZodString;
        amount: z.ZodCoercedString<unknown>;
        recurringAmount: z.ZodNullable<z.ZodCoercedString<unknown>>;
        paidAt: z.ZodCoercedDate<unknown>;
        paymentId: z.ZodOptional<z.ZodString>;
        lineitemId: z.ZodNumber;
        amountLessAbFees: z.ZodCoercedString<unknown>;
    }, z.core.$strip>>;
    form: z.ZodObject<{
        name: z.ZodString;
        kind: z.ZodString;
        ownerEmail: z.ZodNullable<z.ZodString>;
        managingEntityName: z.ZodNullable<z.ZodString>;
        managingEntityCommitteeName: z.ZodNullable<z.ZodString>;
    }, z.core.$strip>;
}, z.core.$strict>;
export type ActBlueRequest = z.infer<typeof zActBlueRequest>;
//# sourceMappingURL=ActBlueRequest.d.ts.map