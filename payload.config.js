import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload/config'
import { Users } from './src/collections/Users'
import { Media } from './src/collections/Media'
import { Posts } from './src/collections/Posts'

// Default MongoDB connection if environment variables are not set
const defaultMongoURI = 'mongodb://localhost:27017/beta-to-alpha';

export default buildConfig({
  admin: {
    user: 'users', // Collection slug for users
  },
  collections: [
    Users,
    Media,
    Posts,
  ],
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(__dirname, 'src/payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || process.env.MONGODB_URI || defaultMongoURI,
    connectOptions: {
      serverSelectionTimeoutMS: 5000, // Increased timeout
    }
  }),
  secret: process.env.PAYLOAD_SECRET || 'a-fallback-secret-for-dev-only-not-for-production',
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloudPlugin(),
  ],
});