This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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


## Steps for building the project
1. npx create-next-app@latest ./ , npm i @clerk/nextjs @uploadthing/react mongoose svix(for web hooks) uploadthing tailwindcss-animate(Animation package)
2. Using Route Groups for skipping the folder names with ().
3. Creating separate layout.tsx file for auth pages
4. Clerk signin, storing the api keys in the .env.local file
5. Enabling Clerk organisations option

6. Reading the Clerk docs & implementing stuffs, Protecting Routes using clerk, create a middleware.ts file for this

7. Build your own sign in and sign up pages, Update your environment variables after signin/signup

8. Embed the <UserButton /> on the root folder, Got the in built profile components with clerk
9. Building the layout.tsx for the root routes
10. Creating the shared components one by one starting with the Topbar.tsx
11. Creating the favicon from img using converter
12. Creating the LeftSidebar.tsx
13. Creating a separate constants folder for storing the links
14. Creating the LeftSidebar.tsx
15. npm i @clerk/themes -> For implementing dark theme clerk components


16. Creating the onboarding page, creating the AccountProfile component
17. Starting to use shadcn/ui, npx shadcn-ui@latest add form, npx shadcn-ui@latest init
18. Using useForm hook in the AccountProfile.tsx, using zod validation with it
19. Fixing the react hook form typescript error by downgrading its version
20. The globals.css & the tailwind.config files got overwritten during installation of shadcn so update those files again
21. Updating the next.config.js file to give permissions to external domains and also for further mongoose usecases
22. Still working on AccountProfile page (Till 1:42:00)mins

23. Setting up the files for using uploadthing - In utils folder, in api routes
24. The fireUrl of uploadthing was showing deprecated so downgraded the uploadthing version
25. onSubmit func of AccountProfile component half done, the remaining half later
26. Starting with our backend -> Connection to db in mongoose.ts, creating mongoose models
27. Creating the backend server update func in user.action.ts and using it in the AccountProfile.tsx


