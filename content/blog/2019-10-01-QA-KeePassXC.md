---
title: "Q&A with the KeePassXC team"
date: 2019-10-01 11:00:00
author: "Jonathan White, KeePassXC"
main_image: "images/logos/KeePassXCLogo.png" # 342px × 178p ~2x1
main_image_caption: "KeePassXC logo"
tags: ["KeePassXC","QA","development","password managers", "UXFund"]
draft: false
---

This month, we are taking some time to catch up with our UXFund grantees, and learn a little more about their organization.

## Q&A with KeePassXC

### Q: What is your tool? And what is your role?


<div style="float:right; width: 50%"><a href="https://keepassxc.org/screenshots/"><img src="https://keepassxc.org/images/screenshots/linux/screen_002.png" style="border: 0; padding: 0px; margin: 0px" alt="Screenshot of KeePassXC showing account selection features" /><br /><span class="main-caption small">Screenshot from KeePassXC</span></a></div>

**A:** [KeePassXC](https://keepassxc.org/) is an open source, offline password management tool that is available for Windows, Linux, and macOS. Our key features include the most secure encryption available on the market, Auto-Type technology, randomized password and passphrase generation, browser integration, and full compatibility with other KeePass-based tools. We also support several operating system integrations and advanced features for our more technical users.

Since forking from KeePassX in October 2016, we have released four major and fifteen minor versions that have introduced significant capability, usability, and security enhancements. Full source code, issue and feature tracking, and integration reviews are handled [openly on GitHub](https://github.com/keepassxreboot/keepassxc). I co-lead the project development and direction along with Janek Bevendorff (phoerious).

### Q: Why should people use a password manager? How can users use KPXC to make their lives easier/be more secure?

**A:** A password manager is necessary to ensure you have randomized and unique passwords for every service you log into. This is important because you don’t want a breach of one service to also compromise your security elsewhere. It is impossible to remember unique logins that are complex enough to be resistant to hacks. KeePassXC not only stores this information for you, in a secure way, but it also fills in that information for each site you use automatically.

### Q: How did you become involved with this project? What are your motivations for this work?

**A:** I had originally just wanted to bring the browser integration feature to the latest version of KeePassX since I was using it daily. However, it became clear that the original maintainer did not have the time to focus on the application and it was aging quickly. I made the decision to branch from that project, incorporate my work, and bring over all the pending bug fixes and features that the community had contributed over the years, but were never incorporated.

This created an outpouring of support and recognition from the large number of users who were excited to see their favorite tool get even better. I was deeply motivated by the energy and enthusiasm of the community, which has grown every year since we first launched. I am inspired by the diverse groups that use KeePassXC daily to keep their lives secure.

### Q: How large is your team? Who else is working on the project (full-time, part-time, etc)? How often do you connect and via what channels?

**A:** Our core team consists of six individuals who live all over the world; we are all volunteers and work on this project in our free time. Janek and I lead the project by curating our release roadmap and rigorously reviewing code submissions prior to acceptance.

We have four feature maintainers who are largely responsible for their major contribution to the project. These include the browser extension, command line interface, and SSH agent. We also have a large community of beta testers and deployment specialists who help us roll out releases on a regular basis. It truly takes a small army to keep the project rolling due to our security-centric nature and wide distribution channels.

### Q: Why do you think it’s valuable to engage with users?

**A:** Our application was specifically setup to incorporate user feedback and best practices. The ‘C’ in KeePassXC stands for Community. Users provide us issue reports and feature requests daily. These directly inform development decisions and benefit everyone.

### Q:  What is the best way for users to share feedback with your team?

**A:** Users should register a GitHub account, it is free, and submit an issue through our project page. If they do not want to do that we will accept feedback through our email at [team@keepassxc.org](mailto:team@keepassxc.org).

### Q:  How has feedback previously been incorporated into development?

**A:** We have over 2,000 closed issues and 900 merged pull requests. These range from simple bug fixes to major new features. The vast majority have been submitted by our user base in both written and code formats.

### Q:  Has your team ever used personas to inform design or development?

**A:** We have not specifically used personas, but we do consider the end user when implementing features. This is something we will investigate doing in the future as part of our pull request process for major features.

### Q: What are the future plans for the project?

**A:** Our next major release is version 2.5.0 which incorporates several user interface and accessibility fixes. This release also includes significant improvements to the command line interface and browser integration plugin. The next major release will focus on user interface workflow and styling.
