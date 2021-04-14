import { Deta } from 'deta'

const deta = Deta(process.env.NEXT_PUBLIC_DETA_PROJECT_KEY); // configure your Deta project
export const db = deta.Base(`notionlogs-${process.env.NEXT_PUBLIC_BASE_NOTION_ID}`);  // access your DB
