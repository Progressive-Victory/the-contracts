import { BackgroundColor, ElectionStatus, EndorsementType, InitiativeType } from '../data/index.js';
import z from 'zod';
export declare const zCreateEndorsementRequest: z.ZodObject<{
    name: z.ZodString;
    state: z.ZodString;
    candidateLink: z.ZodString;
    linkLabel: z.ZodString;
    description: z.ZodString;
    isStateInitiative: z.ZodBoolean;
    isNationalInitiative: z.ZodBoolean;
    isPvMember: z.ZodBoolean;
    tookPvPledge: z.ZodBoolean;
    imgUrl: z.ZodObject<{
        file: z.ZodCustom<import("node:stream").Readable, import("node:stream").Readable>;
        filename: z.ZodString;
        mimetype: z.ZodEnum<{
            "image/jpeg": "image/jpeg";
            "image/png": "image/png";
        }>;
    }, z.core.$strip>;
    primaryElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    generalElection: z.ZodNullable<z.ZodCoercedDate<unknown>>;
    initiativeLevel: z.ZodEnum<typeof InitiativeType>;
    endorsementLevel: z.ZodEnum<typeof EndorsementType>;
    avatarBgColor: z.ZodEnum<typeof BackgroundColor>;
    electionStatus: z.ZodEnum<typeof ElectionStatus>;
}, z.core.$strip>;
export type CreateEndorsementRequest = z.infer<typeof zCreateEndorsementRequest>;
//# sourceMappingURL=CreateEndorsementRequest.d.ts.map