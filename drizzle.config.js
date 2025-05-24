// /** @type { import("drizzle-kit").config } */
// export default {
//     scheduler: "./utils/schema.tsx",
//     dialect: 'postgresql',
//     dbCredentials : {
//         url: 'postgresql://neondb_owner:H3T1BOWtIwKk@ep-aged-shape-a530ieo1.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
//     }
// };

import { defineConfig } from "drizzle-kit";

// module.exports({
//     scheduler: "./utils/schema.tsx",
//     dialect: 'postgresql',
//     dbCredentials : {
//         url: 'postgresql://neondb_owner:H3T1BOWtIwKk@ep-aged-shape-a530ieo1.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
//     }
// });

module.exports = {
    dialect: 'postgresql',
    schema: './utils/schema.tsx', // replace 'your_schema_name' with your actual schema name
    dbCredentials : {
        url: 'postgresql://neondb_owner:H3T1BOWtIwKk@ep-aged-shape-a530ieo1.us-east-2.aws.neon.tech/AI-Content-Genrator?sslmode=require'
    }
};