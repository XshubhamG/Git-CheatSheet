# Git CheatSheet

```bash
$ git config --global user.name "your name"
$ git config --global user.email "your email"
$ git config --list

```

## : Make a repo and commit

```bash
$ git init
$ git status
$ git add .
$ git reset .     <--! To unstage all the changes -->
$ git commit -m "commit message"

```

## : Connect to remote repository

```bash
$ git remote add origin [url](https://github.com/xshubhamG/remote-repo)
$ git push origin main

```

- To add anymore changes we just have to do the following...

```bash
$ git add .
$ git commit -m "commit message"
# git push

```

## Some ways to make your Github repository better.

- DESCRIPTION :- Describe your project and its features.

- README :- Add a proper README.md file with github Guidelines.

- Contributing Guidelines :- Make a set of rules for new developers who wants to Contribute into the project.

- Code Of Conduct :- A good code of conduct.

- License :- Prehaps, Most important a License.

## Merge Some Code

- Forge the repository
- Clone it to your local machine
- Create a branch
- Focus the change into one area

```bash
$ git branch [branch-name]
$ git checkout [branch-name]
$ git add .
$ git commit -m "commit message"
$ git checkout main
$ git pull
$ git checkout [branch-name]
$ git merge
$ git push --set-upstream origin [branch-name]

```

## Keywords to look for while Contributing on Github

- Pull request
- Clean up
