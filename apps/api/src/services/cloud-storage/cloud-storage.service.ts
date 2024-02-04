import { createClient } from '@supabase/supabase-js';

import type { File } from '@koa/multer';

import config from 'config';

import * as helpers from './cloud-storage.helper';


const client = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);
const Bucket = config.SUPABASE_BUCKET;

const  uploadPublic = async (name: string, file: File) => {
  const { data, error } = await client.storage.from(Bucket).upload(name, file);
  if (error) {
    throw new Error(error.message);
  } else {
    return { url: data.path };
  }
};

const deleteObject = async (path: string) => {
  const { data, error } = await client.storage.from(Bucket).remove([path]);
  if (error) {
    throw new Error(error.message);
  } else {
    return { data };
  }
};

export default {
  helpers,
  uploadPublic,
  deleteObject,
};
