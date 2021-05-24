# Notion MicroBlog

A NextJS starter to deploy your own blog linked with your notion

The current version uses a simple [Deta](deta.sh) base for caching the notion doc metadata.

You would have to dublicate [this Notion doc](https://www.notion.so/Noggins-Changelog-6c34d08c16dd4c3f9535215c5fb5dfce) and add your document Id in the .env file as `NEXT_PUBLIC_BASE_NOTION_ID`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Sync the local database with notion
There is an API `/api/migrate` which fetch all the data from notion and saves it to deta base, which is then used whenever the site is built. 
This API if called from vercel deployement would require a password as a query param, if you have not set the password in your vercel deployment, it will throw an error.
