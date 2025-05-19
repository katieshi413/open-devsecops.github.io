---
title: Chapter 5 - Advanced Git Techniques
layout: custom
parent: Topic 2 - Git
has_toc: false
nav_order: 5
---

# Chapter 5 - Advanced Git Techniques

If you’ve completed our Git Basics Chapter, you’ve probably seen commands like `git commit`, `git push`, `git pull`, and `git branch`. But Git is an incredibly powerful tool that offers many advanced features to help you collaborate efficiently, fix mistakes safely, and manage complex codebases with confidence.

In this section, we’ll explore some of the most valuable advanced Git concepts used in real-world software development, DevSecOps pipelines, and open-source collaboration.

## 🌲 1. Interactive Rebase (`git rebase -i`)

This command gives you complete control over your commits—allowing you to edit, squash, reorder, or drop them.

```bash
git rebase -i HEAD~4
```

**Common actions during interactive rebase:**
- `pick`: Use commit as is  
- `reword`: Edit commit message  
- `squash`: Combine with previous commit  
- `drop`: Remove the commit entirely  

🛠️ *Use case: Cleaning up your commit history before opening a pull request.*

---

## 🧳 2. Stashing Changes (`git stash`)

Need to switch branches, but you have uncommitted work? Use `git stash` to temporarily set changes aside.

```bash
git stash
git switch another-branch
git stash pop
```

**Useful for:**
- Quickly changing contexts  
- Keeping your working directory clean  
- Experimenting without losing progress  

📦 *Pro tip:* You can stash multiple times and even give your stash a name:

```bash
git stash save "WIP: fixing login bug"
```

---

## 🪞 3. Git Cherry-Pick

Want to copy a specific commit from one branch to another, without merging the whole branch?

```bash
git cherry-pick <commit-hash>
```

**Use cases:**
- Hotfix a bug from `dev` to `main`
- Re-use a feature commit without bringing in unrelated changes

🔍 *Tip:* Use `git log` or `gitk` to find commit hashes.

---

## 🕰️ 4. Git Reflog

Lost a branch? Accidentally deleted commits? `git reflog` is your time machine.

```bash
git reflog
```

It shows a history of your Git HEAD movements—every checkout, commit, rebase, etc.

To recover lost commits:

```bash
git checkout <reflog-id>
```

🚨 *Life-saver tip:* If you've ever thought “Oh no, I lost my work!”, check the reflog before panicking.

---

## 🕵️ 5. Git Bisect

Tracking down a bug introduced in one of many commits? Use `git bisect` to automate binary search through your history.

```bash
git bisect start
git bisect bad
git bisect good <commit>
```

Git will now walk you through testing commits one-by-one until it finds the culprit.

🐛 *DevSecOps use case:* Find out exactly which commit introduced a security vulnerability.

---

## 🌐 6. Submodules

Sometimes you want to include one Git repository inside another (e.g., pulling in a shared library). That’s where Git submodules come in.

```bash
git submodule add https://github.com/other/repo.git path/to/repo
git submodule init
git submodule update
```

**Use submodules with caution**—they can be tricky to manage. Prefer them only when:
- You need strict control over an external dependency
- You want to keep separate version control histories

---

## 🔑 7. Git Hooks

Git hooks are scripts that run automatically at certain points in your Git workflow, such as before a commit or after a push.

**Examples:**
- `pre-commit`: Run linters or security checks before committing
- `pre-push`: Enforce test passing before pushing to remote
- `commit-msg`: Validate commit message formatting

Git stores hooks in the `.git/hooks/` directory. You can write them in shell, Python, etc.

🛡️ *Security use case:* Add a `pre-commit` hook to scan for secrets using `git-secrets` or `truffleHog`.

---

## 👥 8. Forks vs Clones (In Open Source)

When contributing to open-source projects or working on team repos:

- **Clone**: Copying a repo you have access to directly.
- **Fork**: Copying someone else’s repo into your own account to contribute.

**Typical workflow for external contributions:**
1. Fork the repo  
2. Clone your fork  
3. Create a feature branch  
4. Push and open a Pull Request (PR)  

🤝 *Collaboration tip:* Always work on a separate branch, even in your fork, to keep your main branch clean.

---

## 📦 9. Git Tags

Tags are used to mark specific commits as important, usually for releases.

```bash
git tag v1.0.0
git push origin v1.0.0
```

- **Lightweight tags**: Simple labels  
- **Annotated tags**: Include metadata (author, date, message)  

🏷️ *Tags are essential in CI/CD pipelines for deploying stable versions.*

---

## 🧩 Summary: Why These Topics Matter in the Industry

Advanced Git knowledge is highly valued in DevSecOps, open-source, and enterprise environments. Whether you're a junior developer or aspiring DevSecOps engineer, understanding these concepts will save you time, prevent mistakes, and help you collaborate like a pro.

---

### References
<details>
  <summary>Expand</summary>
  <b>1.</b> “Advanced Git Tutorials.” <i>Atlassian Git Tutorials</i>, <a href="https://www.atlassian.com/git/tutorials/advanced-overview" target="_blank">atlassian.com/git/tutorials/advanced-overview</a>. Accessed 14 May 2025.
</details>