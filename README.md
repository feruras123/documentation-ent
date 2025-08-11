# Enterprise Dashboard

## Getting Started

Installing the application (as a developer) is simple in the following steps:

- Access and Clone this repository

```git
git clone https://kbroIntern@bitbucket.org/kbroteam/enterprise-dashboard.git && cd enterprise-dashboard
```

- Navigate into the cloned directory and install dependencies with NPM or Yarn &mdash; your pick. But
  we go with NPM here.

```npm
npm install
```

- Make a duplicate of the **env** file and update its content accordingly. Most times, this is just fine with no update.

```sh
cp .env.example .env
```

- Run the app in the development mode.
  Open [http://localhost:3000](http://localhost:3000) to view it in the browser and start developing.

```npm
npm start
```

## Quick Developer Guide

> It is important to note that we are using best practicees in this project and all rules set down must be followed

- Linting and prettifying rules are already set in the project and they can be accessed in `.prettierrc` and `.eslintrc.json` files respectively

- Make sure there are no linting errors before making your push and PRs

  > Theses linting errors will be displayed in your files and the console accordingly

- All react files must be suffixed with `.jsx` extension for effective import/export flow

> Bonus: setup format:on save so as to effectively apply the prettier rules

- Build the app for production to the `build` folder.

```npm
npm run build
```

## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflict
- You can create a branch this way;

```git
        git checkout -b [branch-name]
```

- Make your changes, add them and make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages as this is important to know the essence of your commit

- When you're done with your fixes push to that current branch

```git
        git push origin [name-of-branch]
```

- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request to the `master` branch

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

An example of a good commit message

```
    feat: Made login check for email and password
```

> Happy Hacking !!!
