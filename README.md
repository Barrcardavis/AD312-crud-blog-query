CRUD Blog App with TanStack Query (React Native + Expo)
This project is a simple CRUD blog application built with React Native, Expo, and TanStack Query.
It demonstrates how to fetch, create, update, and delete blog posts using the JSONPlaceholder API.
The app was built for the Managing Test Blog Posts with TanStack Query assignment.

Features
1. Fetch All Posts
Retrieves a list of posts from JSONPlaceholder

Uses useQuery with a unique queryKey

Displays loading and error states

2. Fetch a Single Post
Fetches a post by ID

Uses a separate useQuery instance

Includes a section header for clarity

3. Create a New Post
Form with Title and Body

Uses useMutation to send a POST request

Displays the returned fake post (IDs 101+)

4. Update a Post
Inputs for ID, Title, and Body

Uses PUT to update a post

Shows the updated post returned by the API

5. Delete a Post
Input for Post ID

Sends a DELETE request

JSONPlaceholder returns 200 OK (fake delete)

Tech Stack
React Native

Expo

TanStack Query (@tanstack/react-query)

JSONPlaceholder API

JavaScript (ES6+)

How to Run the Project
Install dependencies

Code
npm install
Start the Expo development server

Code
npm start
Run on device or emulator using Expo Go.

Test Cases
✅ Normal Test Cases
1. Fetch All Posts

Action: Launch the app and allow TanStack Query to load posts.

Expected Result: A list of posts appears, fetched from JSONPlaceholder.

2. Create a New Post

Action: Tap “Add Post,” enter a title and body, and submit.

Expected Result: A new post appears at the top of the list (fake ID 101+).

3. Update an Existing Post

Action: Select a post, edit its title/body, and save.

Expected Result: The post updates immediately in the UI and the mutation succeeds.

⚠️ Edge Test Cases
1. Delete a Post

Action: Tap “Delete” on a post.

Expected Result: The post disappears from the list; cache invalidates correctly.

2. Offline Fetch Attempt

Action: Disable network and reload the app.

Expected Result: TanStack Query shows an error state or cached data if available.

3. Rapid Mutations

Action: Quickly create, update, or delete multiple posts in a row.

Expected Result: No crashes; TanStack Query queues and resolves mutations correctly.

Assignment Context
This project fulfills the requirements for the Managing Test Blog Posts with TanStack Query assignment, including:

CRUD operations

Query + Mutation usage

UI integration

Test cases

GitHub submission

Video demonstration
