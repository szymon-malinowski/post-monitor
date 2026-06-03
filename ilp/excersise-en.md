# Individual Learning Phase: Mini-Post-Monitor with `useEffect`

## Your Goal

You will progressively build a small React 19 application in which you practically use `useEffect`. You will work with simple side effects, load data from an API, control re-execution via dependencies, and implement cleanup functions for timers and event listeners.

## What You Need

- A functional React 19 project, e.g., with Vite
- A code editor
- A browser with DevTools
- Internet access for the test API
  `https://jsonplaceholder.typicode.com`
- Basic knowledge of `useState`, components, and JSX

## Schedule

- **0–10 min:** Start project, create basic structure, briefly test API in browser
- **10–20 min:** Task 1
- **20–40 min:** Task 2
- **40–60 min:** Task 3
- **60–75 min:** Task 4
- **75–90 min:** Task 5
- **90–110 min:** Extension tasks
- **110–120 min:** Final check and reflection

## Basic Tasks

### Task 1:

**Start View and First Effect**
**Goal:** You implement a simple, visible effect and recognize that an effect is intended for side effects outside of the actual rendering.

**Instructions:**
Create a `PostMonitor` component with the following structure:

- A heading
- A text input field for a search term
- A status area with the current search term
- A button to show and hide an additional view

Use a `useEffect` that updates the browser's page title (`document.title`). The title should contain your search term. If the search field is empty, a meaningful default title should appear.

**Expected Result / Target State:**
- Your component is displayed cleanly.
- When you type in the search field, the page title changes accordingly.
- You have a first comprehensible effect in your React 19 application.

### Task 2:

**Load Posts Once from an API**
**Goal:** You use `useEffect` for a simple API call when the component is first displayed.

**Instructions:**
Extend `PostMonitor` so that a list of posts is loaded on the first render.

- Use the API:
  `https://jsonplaceholder.typicode.com/posts?_limit=8`
- Store the loaded data in a state.
- Display the posts as a list.
- Show a brief message like "Loading data..." during loading.
- Display a simple error message in case of an error.

Ensure that the API call is not re-executed with every input in the search field.

**Expected Result / Target State:**
- Posts are loaded exactly once when the page loads.
- You see a list with multiple entries.
- A loading state and an error state are visibly usable.
- Changes in the search field do not trigger a new API call.

### Task 3:

**Understanding Dependencies: Reload Posts Based on Filter**
**Goal:** You control when an effect is re-executed using the dependency array.

**Instructions:**
Add a filter for the user ID.

- Build a selection field or multiple buttons for `All`, `User 1`, `User 2`, `User 3`.
- Adjust the API call so that different data is loaded depending on the selected filter:
  - All: `https://jsonplaceholder.typicode.com/posts?_limit=8`
  - Single User, e.g., User 2:
    `https://jsonplaceholder.typicode.com/posts?userId=2&_limit=8`
- Ensure that the effect runs again when you change the filter.
- Combine the API filter with the search field by applying the search term client-side to the loaded posts.

**Expected Result / Target State:**
- When the filter is changed, the list is reloaded.
- When typing in the search field, the list is filtered without re-calling the API.
- You can clearly observe which change triggers an effect and which does not.

### Task 4:

**Timer with Cleanup: Display Seconds Since Last Load**
**Goal:** You implement a cleanup function for a simple timer.

**Instructions:**
Extend your application with a "Last loaded X seconds ago" display.

- Store the time of the last successful data load.
- Use `useEffect` to start an interval that regularly updates the second count.
- Use a cleanup function to ensure that the interval is properly stopped when it is no longer needed.
- Add a "Show Timer" toggle to show and hide the timer.

**Expected Result / Target State:**
- The second counter restarts after each successful load.
- The display updates automatically.
- When you hide the timer display, no unnecessary interval remains active.

### Task 5:

**Event Listener with Cleanup: Display Live Window Width**
**Goal:** You implement an event listener with clean cleanup logic.

**Instructions:**
Integrate an optional info box that displays the current window width.

- Display the width using `window.innerWidth`.
- Register a `resize` event listener in a `useEffect`.
- Update the displayed value with every resize of the browser window.
- Use a cleanup function to remove the event listener.
- Use your button from Task 1 or a new toggle to show and hide this info box.

**Expected Result / Target State:**
- When resizing the browser window, the displayed value changes.
- When you hide the info box, the event listener is cleanly removed.
- Your application remains clear and reacts stably.

## Extension Tasks

### Extension Task 1: Cleanly Abort API Call on Component Change

**Goal:** You prevent an outdated request from writing data into your view after a quick switch.

**Instructions:**
Extend your data loading effect with an abort mechanism.

- Use `AbortController`.
- Abort the ongoing request if you quickly change the user filter or if the component is no longer displayed.
- Ensure that aborted requests do not generate an error message that looks like a real error.

**Expected Result / Target State:**
- Quick filter changes do not lead to erroneous states.
- Outdated requests are cleanly terminated.
- Your console remains as free as possible from unnecessary warnings.

### Extension Task 2: Implement Automatic Reloading

**Goal:** You combine API calls and cleanup with a recurring effect.

**Instructions:**
Add an "Auto-refresh every 30 seconds" option.

- If the option is active, posts should be reloaded at the set interval.
- If you deactivate the option, the interval must be stopped.
- The "Last loaded X seconds ago" display should continue to work correctly.

**Expected Result / Target State:**
- Your data is automatically reloaded when the option is active.
- When deactivated, no interval continues to run in the background.
- Timer and data loading are logically consistent.

### Extension Task 3: Extract Window Width Logic into a Custom Hook

**Goal:** You structure reusable effect logic cleanly in a Custom Hook.

**Instructions:**
Extract the logic for the window width into its own hook, e.g., `useWindowWidth`.

- Move state, `useEffect`, and cleanup into the hook.
- Then use the hook in your info box.
- Ensure that the visible behavior does not deteriorate.

**Expected Result / Target State:**
- Your `PostMonitor` component becomes clearer.
- The resize logic is encapsulated and reusable.
- The event listener continues to function correctly.

## Important Notes

- Work through each task sequentially.
- Test directly in the browser after each change.
- Use DevTools and the console to observe the behavior of your effects.
- Pay particular attention to **when** an effect runs and **what** triggers its re-execution.
- For timers and event listeners, always check if your cleanup function actually works.
- Keep your components small and name state and functions clearly.

## Reflection Questions

- How do you recognize in your application that an effect performs a side effect?
- In which task should the effect run only once, and how did you achieve that?
- In which task should the effect run again, and which dependency was responsible for that?
- Why is a cleanup function important for timers?
- Why is a cleanup function important for the `resize` event listener?
- What is the difference in your application between an effect with an empty dependency array and an effect with specific dependencies?
- Where was the use of `useEffect` appropriate, and where would normal rendering have been sufficient?

---