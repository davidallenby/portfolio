---
title: "Master Git Commits: Write code that tells a story"
date: 2025-06-29
categories:
  - "git"
tags:
  - "git"
coverImage: "https://firebasestorage.googleapis.com/v0/b/my-portfolio-site-6fafa.firebasestorage.app/o/blog-posts%2Fimage.png?alt=media&token=e3703985-707b-46e8-b789-2b4d33f82189"
---

Ever spent far too long trying to understand what a colleague did in a commit only to find their message simply reads "Fixed stuff"? If you've worked in a development team, chances are you've been on the receiving end of a cryptic commit message – or perhaps you've been guilty of writing one yourself.

As a frontend developer, I've seen my fair share of Git repositories, from meticulously curated ones where every commit tells a story to chaotic ones where deciphering the project history requires detective skills. Let's explore what makes for good Git commit practices and how we can elevate our version control game.

## Why Good Commit Practices Matter

Before diving into specifics, it's worth asking: why should we care about how we format our commits?

The answer becomes clear when you consider that Git is not merely a backup system but a communication tool. Commit messages serve as documentation that explain _why_ changes were made, not just _what_ changes occurred (the diff already shows that).

Good commit practices:

- Make it easier to identify when and where bugs were introduced

- Simplify code reviews

- Help new team members understand the project's evolution

- Save time during debugging sessions

- Create a useful project history for future reference

- Reduce the cognitive load when returning to code after time away

When you think about it, you're not just writing commits for others – you're writing them for your future self as well.

## Anatomy of a Good Commit

### 1\. Thoughtful Commit Size

One of the most overlooked aspects of good commit practices is the size and scope of each commit. A commit should represent a single logical change, following what I like to call the "single responsibility principle for commits."

**Good practice:**

- Each commit addresses one specific issue or feature

- Changes are grouped logically

- Commits are frequent and small rather than infrequent and massive

**Bad practice:**

```
commit a7e382d
Author: developer@example.com
Date:   Friday 27 June 2025 15:43:22

    Fixed login bug, updated header styles, added new product page and refactored database queries
```

This shotgun approach combines multiple unrelated changes, making it difficult to:

- Understand what specifically changed

- Revert individual changes if needed

- Review the code effectively

### 2\. Clear, Consistent Message Structure

A well-structured commit message typically follows this format:

```
Subject line (50 chars or less)

More detailed explanatory text, if necessary. Wrap it to about 72
characters. The blank line separating the summary from the body is
critical for tools like `git log --oneline`.

Further paragraphs come after blank lines.

- Bullet points are okay, too
- Typically a hyphen or asterisk is used, followed by a single space
```

**Good practice:**

```
commit 8d3e12a
Author: developer@example.com
Date:   Friday 27 June 2025 14:32:10

    Fix authentication timeout on login form

    The JWT token validation was failing due to timezone discrepancies
    between client and server. This commit:

    - Updates token validation to use UTC consistently
    - Adds a 5-minute buffer to prevent edge-case logouts
    - Includes tests for various timezone scenarios
```

**Bad practice:**

```
commit f27c91b
Author: developer@example.com
Date:   Friday 27 June 2025 18:05:47

    fixed bug
```

The difference is stark – one tells a story that helps the reader understand not just what changed but why it changed and what considerations went into the solution.

### 3\. Use of the Imperative Mood

Git's own built-in commits use the imperative mood: "Merge branch," not "Merged branch" or "Merging branch." This convention creates consistency and reads as a command to the codebase.

**Good practice:**

- "Add feature X"

- "Fix bug in Y component"

- "Refactor Z function for performance"

**Bad practice:**

- "Added feature X"

- "Fixing bug in Y component"

- "I refactored Z function"

### 4\. Reference Relevant Issues or Tickets

If you're using an issue tracker, referencing the relevant ticket numbers creates a valuable link between code changes and the discussions that led to them.

**Good practice:**

```
commit 6e7d421
Author: developer@example.com
Date:   Friday 27 June 2025 10:15:33

    Implement responsive navigation drawer [PROJ-235]

    This adds a sliding navigation drawer for mobile viewports
    that replaces the desktop navigation bar under 768px width.
```

## Beyond the Basics: Advanced Commit Strategies

### Atomic Commits

Atomic commits take the "single responsibility" idea further by ensuring that each commit leaves the codebase in a working state. This means that you should be able to check out any commit in your history and have a functioning application.

This practice is particularly valuable when:

- Bisecting to find bugs

- Creating feature branches from arbitrary points

- Deploying from specific commits

- Cherry-picking changes between branches

### Semantic Commit Messages

Some teams adopt semantic commit messages to add structure and enable automated versioning or changelog generation. A common format is:

```
type(scope): description
```

\[optional body\]

\[optional footer\]

Where type might be:

- feat: A new feature

- fix: A bug fix

- docs: Documentation changes

- style: Formatting, missing semicolons, etc.

- refactor: Code change that neither fixes a bug nor adds a feature

- test: Adding or correcting tests

- chore: Changes to the build process or auxiliary tools

For example:

```
commit 3d5f91c
Author: developer@example.com
Date:   Friday 27 June 2025 11:22:45

    feat(auth): implement social login with Google

    This adds the ability for users to authenticate using their
    Google accounts via OAuth2.

    Closes #42
```

This structured approach allows for automated tools to parse commits and generate changelogs or determine semantic versioning bumps.

## Common Commit Mistakes and How to Avoid Them

### 1\. The "WIP" Trap

We've all done it – pushed a "Work in Progress" commit to save our work before lunch. These commits pollute the repository history and provide no value.

**Instead:**

- Use Git's stash feature for temporary saves

- Create a branch for experimental work

- If you must commit unfinished work, use a descriptive message about what is incomplete

### 2\. The Cryptic One-Liners

Commit messages like "Fixed it" or "Updated code" tell us nothing about what changed or why.

**Instead:**

- Take the extra minute to write a proper description

- Think about what a colleague (or your future self) would need to know

- If you're fixing a bug, briefly describe what caused it

### 3\. The Massive Mega-Commit

Saving up dozens of changes for one giant commit makes code review practically impossible and creates a single point of failure in your history.

**Instead:**

- Commit early and often

- Use `git add -p` to stage specific parts of files for more granular commits

- Make separate commits for separate concerns, even if working on related features

### 4\. The "Oops" Fixup Commit

We've all seen commit histories that look like this:

```
commit 7f2d901
Author: developer@example.com
Date:   Friday 27 June 2025 09:10:22

    Fix typo in previous commit

commit e5a3d87
Author: developer@example.com
Date:   Friday 27 June 2025 09:08:15

    Fix linting errors in login component

commit 2c4b9a3
Author: developer@example.com
Date:   Friday 27 June 2025 09:05:01

    Add login component
```

**Instead:**

- Use `git commit --amend` for quick fixes to your most recent commit

- For older commits, consider interactive rebasing to clean up history before pushing

- Leverage Git's interactive staging to ensure you've captured all relevant changes

## Tools and Techniques to Improve Your Commit Game

### Git Hooks

Git hooks can enforce commit message standards automatically. For instance, a pre-commit hook can check that messages follow your team's format, or a commit-msg hook can validate that they reference a ticket number.

### Editor Integration

Many code editors offer Git integration that makes crafting good commits easier:

- VSCode's source control panel provides a dedicated space for commit messages

- JetBrains IDEs offer commit templates and spelling correction

- Sublime Text and Atom have plugins for enhanced Git functionality

### Commit Templates

You can configure Git to use a template for commit messages:

```
git config --global commit.template ~/.gitmessage
```

Then create a `~/.gitmessage` file with your preferred structure:

```
# [type](scope): Subject line (50 chars)
#
# Body of commit message explaining the change in detail.
# Wrap at 72 characters.
#
# - Bullet points are welcome
#
# Closes/Fixes/Resolves: #issue
# Breaking changes: [description]
```

## Real-World Examples: The Good, The Bad, and The Ugly

Let's examine some real-world examples to illustrate the difference good commit practices can make.

### The Bad

```
commit 1a2b3c4
Author: developer@example.com
Date:   Thursday 26 June 2025 17:30:45

    changes
```

This tells us absolutely nothing useful.

```
commit 5d6e7f8
Author: developer@example.com
Date:   Thursday 26 June 2025 12:15:33

    Fixed some bugs and added the new feature John asked for yesterday plus some CSS improvements that make everything look better on mobile
```

This mixes multiple changes and is too conversational.

### The Good

```
commit 9g8h7i6
Author: developer@example.com
Date:   Thursday 26 June 2025 14:45:20

    Fix incorrect price calculation for bulk orders

    The discount was being applied twice when quantity exceeded 100
    due to both the bulkDiscount and the loyaltyDiscount functions
    applying the same modifier.

    This fix ensures that the bulk discount is calculated only once
    and takes precedence over loyalty discounts as per business rules.

    Fixes: #137
```

This commit message clearly explains:

- What was fixed

- Why it was happening

- How it was resolved

- What business logic informed the decision

- Which issue tracker item it resolves

## Building a Commit Culture in Your Team

Improving commit practices isn't just an individual effort; it works best as a team culture. Here are some ways to foster better commit habits:

1. **Document standards**: Create a commit message guide in your project README or wiki

3. **Lead by example**: Consistently write good commits yourself

5. **Incorporate in code reviews**: Politely comment on commit quality during reviews

7. **Share the benefits**: Demonstrate how good commits make troubleshooting easier

9. **Use automation**: Set up tooling that helps enforce standards without human nagging

Crafting good Git commits is an often overlooked but crucial skill for professional developers. It's not just about code cleanliness or following arbitrary rules – it's about effective communication with your team and your future self.

Remember that your commit history tells the story of your project. Like any good story, it should be clear, logical, and provide the right amount of detail. By improving your commit practices, you contribute to a more maintainable codebase and a more efficient development process.

The next time you're about to type "Fixed stuff," take a moment to consider what information would be valuable to someone trying to understand your change six months from now. Your colleagues (and your future self) will thank you.
