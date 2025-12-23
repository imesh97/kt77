import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

const applicationTables = {
  counters: defineTable({
    name: v.string(),
    count: v.number(),
  }),
};

export default defineSchema({
  ...authTables,
  ...applicationTables,
});
