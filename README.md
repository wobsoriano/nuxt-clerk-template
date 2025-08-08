# Clerk and Nuxt template

This template shows how to use [Clerk](https://www.clerk.com) in a Nuxt application. It is a direct port of the [Next.js starter template](https://github.com/clerk/clerk-nextjs-demo-app-router).

Clerk is a developer-first authentication and user management solution. This starter uses [Clerk Nuxt SDK](https://clerk.com/docs/references/nuxt/overview), which provides pre-built Vue components and composables for login, signup, user profile, and organization management. Clerk is designed to be easy to use and customize, and can be dropped into any Vue or Nuxt application.

This template allows you to get started with Clerk and Nuxt in a matter of minutes and includes:

- Fully functional auth flow with login, signup, and a protected page
- Customized Clerk components with Tailwind CSS
- Composables for accessing user data and authentication state
- Organizations for multi-tenant applications

## Demo

A hosted demo of this example is available at:

- https://nuxt-clerk-template.vercel.app
- https://nuxt-clerk-template.pages.dev
- https://nuxt-clerk-template.netlify.app

## Running the template

```bash
git clone https://github.com/wobsoriano/nuxt-clerk-template
```

To run the example locally you need to:

1. Sign up for a Clerk account at [https://clerk.com](https://dashboard.clerk.com/sign-up).
2. Go to [Clerk's dashboard](https://dashboard.clerk.com) and create an application.
3. Set the required Clerk environment variables as shown in [the example env file](./.env.example).
4. `npm install` the required dependencies.
5. `npm run dev` to launch the development server.

## Learn more

To learn more about Clerk and Nuxt, check out the following resources:

- [Clerk Documentation](https://clerk.com/docs)
- [Vue Clerk](https://vue-clerk.com)
- [Nuxt Documentation](https://nuxt.com/docs)
