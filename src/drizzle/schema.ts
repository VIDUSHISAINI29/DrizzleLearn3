import { pgTable } from  "drizzle-orm/pg-core"

export const UserTable = pgTable("Student Data", {
id: uuid("id").primarykey().defaultRandom(),
})