import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';

const dbURL =
  process.env.DB_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

const sessionConfig = {
  maxAge: 60 * 60 * 24, // How long they stay signed in
  secret: process.env.COOKIE_SECRET,
};

export default config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: dbURL,
    // todo: Add data seeding here
  },
  lists: createSchema({
    // Schema items go in here
  }),
  ui: {
    // toto: change this for roles
    isAccessAllowed: () => true,
  },
  // todo: Add session values here
});
