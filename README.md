# React Shop

# Table of contents

1. [Instructions](#instructions)
2. [References](#references)
3. [General Features](#features)
4. [Technologies Implementation](#tech)
5. [System Features](#sys-features)
6. [Software Interfaces](#soft-interfaces)
7. [Installation instructions](#installation)
8. [Project structure](#structure)
9. [Screenshots](#screenshots)

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

## 4. Technologies<a name="tech"></a>

This system is provisioned to be built in TypeScript using React library which is highly flexible.

The browser will be in charge of rendering this application in its final form, HTML. Some of the logic involved in creating the web page, especially the one in charge of dealing with presentation logic is handled on the client-side.

List of frontend dependencies and version used:

    - react: V18.2.0,
    - react-dom: V18.2.0,
    - react-scripts: 5.0.1,
    - typescript: V4.8.4,

## 5. System Features<a name="sys-features"></a>

## 6. Software Interfaces<a name="soft-interfaces"></a>

Software is designed in small fragmented atomic components. Each component has specific functionality and assembled together creates our application.

This is easier to maintain, replace, and re-use.

Communication is assured to external interfaces. The system is connected to GitHub APIs using REST, The payload is defined in the request itself and is formatted in JSON.

## 7. Installation instructions<a name="installation"></a>

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

## 8. Project structure<a name="structure"></a>

<!-- TODO: Update with final Project project structure -->

![Components Screenshot]()

## 9. Screenshots<a name="screenshots"></a>

<!-- TODO: Update ScreenShot with final result -->

User Github Result - Full-Screen Desktop ![Components Screenshot]()

User Github Result – Mobile ![Components Screenshot]()
