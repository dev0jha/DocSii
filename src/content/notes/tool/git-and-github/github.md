---
title: "GitHub & Collaboration"
description: "Learn how to connect local repositories to GitHub remote servers, collaborate, and setup SSH keys."
category: "tool"
topic: "git-and-github"
order: 2
tags: ["github", "collaboration", "ssh"]
lastUpdated: 2026-05-29
---

**GitHub** is a proprietary, web-based platform where developers can store, manage, share, and collaborate on software code using Git, a distributed version control system created by Linus Torvalds .

- It is a Service-provider .
- It allows developers to track changes to source code, manage multiple versions, review and merge code from different contributors, and collaborate efficiently on projects of all sizes.
- GitHub hosts millions of software repositories, including many open-source projects, and provides tools for bug tracking, feature requests, task management, continuous integration, and wikis for projects.
- Founded in 2008 and headquartered in California, GitHub has been owned by Microsoft since 2018 and is the world's largest source code hosting service with over 100 million developers and hundreds of millions of repositories

### Collaboration Of GitHub to Users

![Github collabration.png](./github-collaboration.png)

### → Working Of Users Commits

![./github-commit-flow.png](./github-commit-flow.png)

### → Create a Repository in Github :

1. **Log in to GitHub:** Visit [github.com](https://github.com/) and log in to your account.
2. **Navigate to New Repository:**
    - In the upper-right corner of any GitHub page, click the **+** icon (or your profile picture), then select **New repository**.
3. **Set Repository Details:**
    - Enter a **repository name** (e.g., `my-first-repo`).
    - Optionally, add a **description**.
    - Choose the **visibility**: Public or Private.
    - (Optional) Initialize with files like a **README**, **.gitignore**, or a license file.
4. **Create Repository:** Click the green **Create repository** button.
5. **Add Files:** Follow the instructions to either upload files or push an existing local repository using Git commands.

## → Creating a Repository from an Existing Local Project

1. **Initialize Local Repository:**
    - Open a terminal and navigate to your project folder.
    - Run:
    
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```
    
- **Create an Empty Repo on GitHub:**
    - Use the web UI to create a repository without initializing it with a README.
- **Connect Local to Remote:**

```bash
git remote add origin https://github.com/your-username/your-repo.git
git branch -M main
git push -u origin main
```

- Authenticate if prompted. Your files will now show up on GitHub

### ** PUSH and PULL **

when we want to push and pull in anyone code we need a **SSH key** which to collab .

- **SSH keys in GitHub** are used to securely authenticate your computer to GitHub without typing your username/password each time you interact with remote repositories.
- After generating an SSH key on your computer (as described previously), you **add your public key to your GitHub account** under "Settings" > "SSH and GPG keys."
- This setup allows you to securely push, pull, and clone repositories via SSH protocols on GitHub.
- It's a best practice for secure, password less authentication, especially when working with private repositories or automating tasks.

To generate an SSH key for GitHub, follow these steps:

1. **Open a terminal** (Git Bash on Windows, Terminal on macOS/Linux).
2. **Generate a new SSH key** using the following command, replacing your email with the one linked to your GitHub account:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- If your system does not support Ed25519, use:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- When prompted to "Enter a file in which to save the key," press **Enter** to accept the default location (usually `~/.ssh/id_ed25519` or `~/.ssh/id_rsa`).
- Next, you can choose to enter a passphrase for additional security or leave it empty.
- After generating the key pair, **add your SSH private key to the ssh-agent** to manage your keys easily:

(Replace `id_ed25519` with your key file if different.)

```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

- **Copy the SSH public key** to your clipboard:
    - On macOS:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

- On Linux:

```bash
xclip -selection clipboard < ~/.ssh/id_ed25519.pub
```

- On Windows (Git Bash):

```bash
clip < ~/.ssh/id_ed25519.pub
```

- **Add the copied SSH public key to your GitHub account:**
    - Go to GitHub, click your profile photo > Settings > SSH and GPG keys > New SSH key.
    - Paste the key into the "Key" field and give it a title.
- **Test the connection** to verify it works:

```bash
ssh -T git@github.com
```

You should see a success message with your GitHub username.