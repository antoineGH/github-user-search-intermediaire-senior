# GitHub User Search

# Table of contents

1. [Instructions](#instructions)
2. [References](#references)
3. [General Features](#features)
4. [Technologies Implementation](#tech)
5. [Software Interfaces](#soft-interfaces)
6. [Installation instructions](#installation)
7. [Project structure](#structure)
8. [Screenshots](#screenshots)
9. [Roadmap](#roadmap)

## 1. Instructions<a name="instructions"></a>

Create a search input text where users can type in and get results straight away, without ENTER keypress or submit button required. Results will list Github users like the mock below, and must be responsive.

## 2. References<a name="references"></a>

-   React - https://reactjs.org/
-   TypeScript - https://www.typescriptlang.org/docs/
-   Github API - https://docs.github.com/en/rest
-   fetch - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
-   Linter (ESLint) - https://eslint.org/docs/latest/
-   Code formatter (Prettier) - https://prettier.io/docs/en/index.html
-   tsconfig.json - https://www.npmjs.com/package/@tsconfig/recommended
-   gitignore - https://git-scm.com/docs/gitignore

## 3. General Features<a name="features"></a>

### Search

-   Allow to search GitHub users with their username
-   Browse matching username user list
-   Display user details (avatar, ID, login)
-   Allow to navigate to GitHub user profile

### Manipulate Results

-   Allow to select user cards
-   Display the the number of selected users
-   Allow to dupplicate GitHub user (only front-end / reset on search change)
-   Allow to delete GitHub user (only front-end / reset on search change)

### Edit Mode

-   Edit Mode On: Allow to select cards, Allow to select all, Display related actions (duplicate and delete)
-   Edit Mode Off: Disable select cards, Hide actions (select all, duplicate and delete)

## 4. Technologies<a name="tech"></a>

This system is provisioned to be built in TypeScript using React library which is highly flexible.

The browser will be in charge of rendering this application in its final form, HTML. Some of the logic involved in creating the web page, especially the one in charge of dealing with presentation logic is handled on the client-side.

List of frontend dependencies and version used:

    - react: V18.2.0,
    - react-dom: V18.2.0,
    - react-scripts: 5.0.1,
    - typescript: V4.8.4,

## 5. Software Interfaces<a name="soft-interfaces"></a>

Software is designed in small fragmented atomic components. Each component has specific functionality and assembled together creates our application.

This is easier to maintain, replace, and re-use.

Communication is assured to external interfaces. The system is connected to GitHub APIs using REST, The payload is defined in the request itself and is formatted in JSON.

## 6. Installation instructions<a name="installation"></a>

```shell
git clone https://github.com/antoineGH/github-user-search-intermediaire-senior.git
```

Navigate to project directory.

```shell
cd github-user-search-intermediaire-senior
```

Install node modules.

```shell
npm install
```

Run the app in development mode. Open http://localhost:3000 to view it in the browser.

```shell
npm start
```

## 7. Project structure<a name="structure"></a>

<!-- TODO: Update with final Project project structure -->

![Components Screenshot]()

## 8. Screenshots<a name="screenshots"></a>

<!-- TODO: Update ScreenShot with final result -->

User Github Result - Full-Screen Desktop ![Components Screenshot]()

User Github Result – Mobile ![Components Screenshot]()

## 9. Roadmap<a name="roadmap"></a>

Roadmap:

-   Configure tsconfig.json
-   Configure ESLint Prettier (airbnb standards)
-   Configure .gitignore
-   Draw components hierarchy (Pencil)
-   Initialize project with CRA with TS template
-   Link Project on GitHub repo
-   Create project file stucture and components
-   Build A Static Version in React
-   Check Responsivness (create customHook to adapt to various viewports)
    > https://blog.logrocket.com/developing-responsive-layouts-with-react-hooks/
-   Identify State and where it should live
-   Add Up functionnalities

        -   API call
        -   Search on keypress
        -   Pagination (intersection Observer to fetch more results)
        -   Implement debounce to delay API calls on keypress in our input field

-   Read Github API docs

    -   Collect EndPoint Search Users: https://docs.github.com/en/search-github/searching-on-github/searching-users
        > https://api.github.com/search/users?q={USER}
    -   Get Result Type

        > JSON | No Result | API rate limit

    -   Get JSON type

    ```Javascript
    export interface Users {
    total_count: number
    incomplete_results: boolean
    items: User[]
    }

    export interface User {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    score: number
    }
    ```

    -   Format response to keep login, id, avatar_url, html_url

    -   API rate limit (returned HTTP headers) : https://docs.github.com/en/rest/overview/resources-in-the-rest-api

        > X-RateLimit-Limit: Request limit per hour

        > X-RateLimit-Remaining : The number of requests left for the time window

    -   Add JSDoc markup to annotate code files
