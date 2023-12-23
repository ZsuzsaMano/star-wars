<section align="center">
  <a href="https://starwars-squad.netlify.app/">
    <img src="./readme.png" alt="Logo" >
  </a>
  <br>
    <br>
 <p>Built with: NextJS, Typescript, Tailwind, GraphQL, Zustand
    <p>
 <p> Tested with: Jest
    <p>

</section>

---

# Star Wars Squad Builder Documentation

### Overview

Welcome to the Star Wars Squad Builder, a mobile-first application designed for assembling your ultimate Star Wars character squad. This documentation provides a comprehensive guide on the functionalities and features of the application.

### Features

- ##### Star Wars Characters Overview:
  View a comprehensive overview of various Star Wars characters.
- ##### Search for a Star Wars Character:
  Utilize the search functionality to find specific Star Wars characters easily.
- ##### Star Wars Character Detail View:
  Access a detailed view of a selected Star Wars character, showcasing relevant character information.
- ##### Create and Manage Your Squad:
  Create a squad with a maximum of 5 characters.
  Ensure diversity in your squad by restricting members of the same species.
  Edit your entire squad as needed.

### Squad Building Criteria

- ##### Species Restriction:
  No two squad members can belong to the same species, ensuring a diverse and dynamic squad.

### Interactive Squad Management

- ##### Adding and Removing Characters:

  Clicking on a character's image adds them to your squad.
  If a character is already in the squad, clicking on their image will remove them.

- ##### Species Filter:

  Characters of a species already in the squad won't appear in the search results, preventing duplicates.

- ##### More Info:
  Clicking on "More Info" opens a new window, allowing you to explore additional details about a character.

# Front-end development task (Star Wars Edition)

## Scope:

- Create a simple mobile first Star Wars Squad Builder.

  1. See a Star Wars characters overview.
  2. Search for a Star Wars character.
  3. Access a Star Wars character detail view showcasing related character information.
  4. Create a squad of 3/5 characters, based on the criteria below:

  - no 2 squad members can be of same species.
  - Your squad should persist during your session
  - See & edit your whole squad

## Tech stack

- Tailwind CSS
- NextJs
- Typescript
- GraphQL (Apollo)

## Extras (optional)

- tests
- documentation
- login (email, password)
- set character as favorite
- saving squad

## Approach

- read task
- read the task again
- consider tech stack (sure I will go with suggested)
- create next app with Tailwind and Typescrpt
- start writing documentation
- check squad builders and star wars fun sites for inspiration
- sketch wireframe
- take out Xmas cookies from oven :D
- check data with Postman
- create components
- add GraphQL
- create logic
- add Zustand
- finish styling

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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
