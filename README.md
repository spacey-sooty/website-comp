# Web.Comp Website 2023
So I'm doing this comp called web.comp and this is the website that I'm building for it. I am in a group with [@Tank-361](https://github.com/Tank-361) and [](). We have very minimal web development skills or experience so don't expect anything great.

## Some instructions
This is for my team members and anyone who wants to use this to build off with no experience.  
Don't touch public or any of json or config files or anything outside of src really unless you know exactly why you are doing it and how to do it.  
You write your html in page.tsx. Mindblowing I know.  
This project uses an app router. It's basically a better way of switching from page to page.  

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## How it works
This application uses an invisible index.html file which is rewritten over an over and over again based on the code written in page.tsx. Instead of creating new html pages for every different url it rewrites the html based off the url you are on. It is very cool.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
