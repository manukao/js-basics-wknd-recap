## Advanced Git

---

- git fetch
- git pull
- git conflicts
- git merge
  -git rebase / git pull --rebase

---

#### git fetch:

- check whether your local branches are up to date with the remote repository
  -> if there are differences: git fetch updates the remote-tracking, so it knows about differences but does not contain the changes yet, still need to git pull or git merge
- use git fetch -v to see exactly which branches are up to date with origin/main

---

#### git merge:

- join two branches together
- run git fetch before, switch to the branch where you want to incorporate the changes, then run git merge "branchname"
- git merge is a fast-forward merge by default, so it will not create a merge commit if the history is clean
- if not possible it will create a merge commit with the changes, to keep a clean history, use git rebase instead

---

#### git pull

- use to fetch changes from a remote repo and merge them into the current branch
  -> git pull runs git fetch and then git merge

---

#### git rebase

- alternative to using git merge, but it doesnt create a merge commit, resulting in a cleaner history
  -> first it applies all changes of the branch we are rebasing to. Then it applies the changes of the branch we are rebasing from on top of it commit by commit
- to rebase: switch to the branch where you want to incorporate the changes, then use git rebase main to incorporate the changes from the main branch into the other branch
- if a conflict occurs see next steps

---

#### Solving git conflicts

- use VSCodes Source Control Tab and choose which changes to accept
- theres also a new editor feature to get more details about the conflicts, can also use this
- can also use GitHubs web editor
- some scenarios:

1. feature branch differs from main branch, use methods from above
2. fatal error on git pull, if you have done at least one commit locally, somebody else has committed to the branch you want to pull in the meantime -> git does now know which commits came first, use the following steps:

- git pull --no-ff
- resolve merge conflicts
- then commit and push
