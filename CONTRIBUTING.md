# Contributing to BPON

Thank you for investing your time in contributing to our project!

## Development Setup
1. Clone the repository
2. Run `npm install` to install dependencies
3. Copy `.env.example` to `.env` and fill in the database URL
4. Run `npx prisma migrate dev` to setup the database
5. Run `npx prisma generate` to generate the Prisma client
6. Run `npm run dev` to start the development server

## Style Guide
- **TypeScript**: We use strict TypeScript. Ensure all variables and functions are properly typed.
- **Components**: We use functional components and hooks. Put reusable components in `src/components/ui`.
- **Styling**: We use Tailwind CSS. Please adhere to the custom design tokens defined in our `design-system`.
- **Linting**: Before committing, ensure `npm run lint` passes without warnings.
- **Testing**: Run `npm run test` to verify your changes don't break existing tests.

## Pull Request Process
1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

Please ensure your PR description clearly describes the problem and solution.
