// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { frontendteamschema } = initSchema(schema);

export {
  frontendteamschema
};