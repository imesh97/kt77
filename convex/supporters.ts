import { query, mutation } from "./_generated/server";

export const getSupporterCount = query({
  args: {},
  handler: async (ctx) => {
    const counter = await ctx.db
      .query("counter")
      .filter((q) => q.eq(q.field("name"), "supporters"))
      .first();
    
    return counter?.count || 0;
  },
});

export const addSupporter = mutation({
  args: {},
  handler: async (ctx) => {
    // Update counter
    const counter = await ctx.db
      .query("counter")
      .filter((q) => q.eq(q.field("name"), "supporters"))
      .first();
    
    if (counter) {
      await ctx.db.patch(counter._id, {
        count: counter.count + 1,
      });
    } else {
      await ctx.db.insert("counter", {
        name: "supporters",
        count: 1,
      });
    }
    
    return { success: true };
  },
});
