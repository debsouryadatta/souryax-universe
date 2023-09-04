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
• Copying the clerk keys in the .env.local file

8. Embed the <UserButton /> on the root folder, Got the built in profile components with clerk
9. Building the layout.tsx for the root routes
10. Creating the shared components one by one starting with the Topbar.tsx
11. Creating the favicon from img using converter
12. Creating the LeftSidebar.tsx
13. Creating a separate constants folder for storing the links
14. Creating the RightSidebar.tsx & Bottombar.tsx
15. npm i @clerk/themes -> For implementing dark theme clerk components

<!-- Onboarding Page -->
16. Creating the onboarding page, creating the AccountProfile component
17. Starting to use shadcn/ui, npx shadcn-ui@latest add form, npx shadcn-ui@latest init
18. Using useForm hook in the AccountProfile.tsx, using zod validation with it
19. Fixing the react hook form typescript error by downgrading its version
20. The globals.css & the tailwind.config files got overwritten during installation of shadcn so update those files again
21. Updating the next.config.js file to give permissions to external domains and also for further mongoose usecases
22. Still working on AccountProfile page (Till 1:42:00)mins

<!-- Uploadthing Config -->
23. Setting up the files for using uploadthing - In utils folder, in api routes
24. The fireUrl of uploadthing was showing deprecated so downgraded the uploadthing version
25. onSubmit func of AccountProfile component half done, the remaining half later

<!-- Backend Started -->
26. Starting with our backend -> Connection to db in mongoose.ts, creating mongoose models
27. Creating the backend server update func in user.action.ts and using it in the AccountProfile.tsx


<!-- Create Thread Page -->
28. Creating the create-thread page
29. Creating fetchUser server action to use it in create-thread page
30. Creating the PostThread form component inside create-thread page, implementing the same react-hook-form and zod validator inside this component
31. Creating the thread.actions.ts, thread.model.ts(Enabling multi-lvl commenting)
32. Error! - We can't directly create database actions directly from the browser side, so we need to mention "use server" nextjs directive in the thread.actions.ts to fix the error
33. Calling createThread function from the PostThread component 
for creating the threads


<!-- Home Page -->
34. Creating the homepage, writing the fetchPosts function
35. Creating the ThreadCard component
36. Creating the thread detail page, and fetching the thread details
40. Creating the fetchThreadById function in the thread.actions.ts

<!-- Comment Feature -->
41. Creating the comment form component inside the Thread detail page
42. Creating addCommentToThread function in the thread.actions.ts
43. Using addCommentToThread function in the Comment component

<!-- Profile Page -->
44. Creating the Profile page component, ProfileHeader component
45. npx shadcn-ui@latest add tabs -> For adding the tabs components inside the Profile page
46. Creating the ThreadsTab component, creating the fetchUserPosts func in the user.actions & using it in the Profile page
47. Learned how populate works in mongoose, need to know some more

<!-- Search Page -->
48. Creating the search page, creating the fetchUser function in the user.actions for getting the users from the database
49. Using the fetchUser func in the search Page.tsx, creating a UserCard component inside the search page for displaying the users

 <!--Activity Page  -->
 50. Creating the activity page, creating the getActivity function for getting the replies on the threads
 51. And using the getActivity function in the activity page
 51. Centering the auth pages, like - signin/signup pages etc...

 <!-- Community Page -->
 52. Before developing the community page, we first need to create Organizations with the help of Clerk, but after creating the organization we need to have web hooks listening to the clerk events so that we can update our database accordingly
 53. Lets gets started with creating those web hook listeners
 54. Copying the code of webhook/clerk -> route.ts then creating the community.actions.ts(also copying its code)
 55. Creating our community schema/model
 56. Deploying API routes for the webhooks to work, creating webhook endpoints in clerk -> getting the NEXT_CLERK_WEBHOOK_SECRET, reploying adding the NEXT_CLERK_WEBHOOK_SECRET on Vercel
 57. Any event will trigger the functions in the webhook/route.ts which will add the stuffs on our database(i.e. by community.actions)
 58. Creating an organisation "Dev Community".

 <!-- Community Implementations -->
 59. Modifying the PostThread, adding organisation in communityId, writing the extra code for community which would be visible just under the ThreadCards
 60. Also changing the createThread function adding the community options
 61. Creating the community profile page copying some code of profile page
 62. Modifying the ThreadsTab component, using the fetchCommunityPosts function if accountType === "Community"

 <!-- Communities -->
 63. Creating the Community search page, creating the Community Card

 64. Modifying the onboarding page with the database userinfo

 Todos: 
 1. Add the search functionality with the searchbar
 2. Show no. of replies below the ThreadCards
 3. Suggested Commnunities & suggested Users
 4. Profile edit functionality
 5. Delete the threads


