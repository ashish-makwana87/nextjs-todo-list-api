# Next.js Todo List API


**Project URL:**
https://nextjs-todo-list-api.vercel.app/


### App Structure 

- Server owns the truth. Mutating data on server. Server actions to fetch data from server. 

- Minimal client state management. Using optimistic updates for instant UI updates and improved user experience. 

- Uncontrolled component: Simplified task create form that uses uncontrolled input with Server Actions. Avoiding controlled component to prevent unnecessary rerenders. 

- Throwing error for server actions to prevent TypeScript type mismatch. Creating an error boundary and let it handle all thrown errors instead of manually throwing errors in server actions using common error handler. 

