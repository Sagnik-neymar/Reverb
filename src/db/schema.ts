import { pgTable, text, timestamp, boolean, pgEnum, json, jsonb, uuid, real, integer } from "drizzle-orm/pg-core";


export const voiceVariant = pgEnum("voice_variant", [
    "SYSTEM",
    "CUSTOM",
])

export const voiceCATEGORY = pgEnum("voice_CATEGORY", [
    "AUDIOBOOK",
    "CONVERSATIONAL",
    "CUSGTOMER_SERVICE",
    "GENERAL",
    "NARRATIVE",
    "CHARACTERS",
    "MEDITATIONAL",
    "PODCAST",
    "ADVERTISING",
    "VOICEOVER",
    "CORPORATE",
])


export const voice = pgTable("voice", {
    id: uuid("id").primaryKey().defaultRandom(),

    orgId: uuid("orgid"),   // (optional) if null it means built in system voice

    name: text("name").notNull(),
    description: text("description"),     // optional
    category: voiceCATEGORY("category").notNull().default("GENERAL"),
    language: text("language").notNull().default("en-US"),
    variant: voiceVariant("variant").notNull(),
    r2ObjectKey: text("r2_object_key"),    // this will be the reference to s3 bucket where we will store the audio example of the voice

    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})


export const generation = pgTable("generation", {
    id: uuid("id").primaryKey().defaultRandom(),

    orgId: uuid("orgid").notNull(),     // required (only orgs can create generations)

    // each genration will have a relation with voice
    voiceId: uuid("voice").references(() => voice.id, { onDelete: "set null" }),   // optional

    text: text("text"),
    voiceName: text("voice_name").notNull(),
    r2ObjectKey: text("r2_object_key"),   // optional
    
    temperature: real("temperature").notNull(),
    topP: real("top_p").notNull(),
    topK: integer("top_k").notNull(),
    repeatitionPenalty: real("repeatition_penalty"),

    createdAt: timestamp("created_at").notNull().defaultNow(),
    updatedAt: timestamp("updated_at").notNull().defaultNow(),
})

