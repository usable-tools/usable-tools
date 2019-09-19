---
title: "Q&A with the SecureDrop Team"
date: 2019-09-10 11:00:00
tags: ["development", "UXfund", "SecureDrop"]
author: Jennifer Helsby, SecureDrop
main_image: "/images/logos/SecureDropLogo.png" # 356px × 178p ~2x1
main_image_caption: "SecureDrop logo"
draft: false
---
This month, we are taking some time to catch up with our UXFund grantees, and learn a little more about their organization.

## Q&A with SecureDrop


### Q: What is your tool? What is it used for? And what is your role?

**A:** SecureDrop, which is used by more than 65 media organizations around the world to communicate with sources who wish to remain anonymous (e.g., whistleblowers). I am the project lead.

### Q: How did you become involved with this project? What are your motivations for this work?

**A:** I first became aware of SecureDrop initially as a user: at a Chicago based non-profit I co-founded - Lucy Parsons Labs - we installed SecureDrop in order to provide the most secure channel available for potential whistleblowers to send us information, primarily focused on the police accountability domain.

After that I got more involved with Freedom of the Press Foundation - the organization that currently stewards SecureDrop’s development. I became involved right around the time of the 2016 US presidential election, so it was a time when technologies protecting journalists and whistleblowers were getting significantly more interest.

Knowing how critical these tools can be to prevent journalistic sources from being identified is what keeps me motivated to work on SecureDrop.

### Q: How large is your team? Who else is working on the project (full-time, part-time, etc)? How often do you connect and via what channels?

**A:** Three teams at Freedom of the Press Foundation contribute to SecureDrop:

* The core development team (4 people, including myself)
* The support team (2 people), which provides installation help and ongoing support for the 65+ media organizations using SecureDrop;
* The digital security training team (4 people), which provides in-depth security training and consulting services to news organizations, including for SecureDrop.

In addition, the project is supported by other members of our staff, including our project manager, our CTO, our Security Engineer, and a part-time UX Designer.

### Q: Why do you think it’s valuable to engage with users?

**A:** We need to make sure that we’re addressing our users’ real needs. What challenges do news organizations encounter when communicating with whistleblowers? How can SecureDrop support them in this process? The only way to answer those questions is to ensure that insights from user feedback, training, support, and user research feed back into the development process.

For a security product, it’s especially important that there is no disconnect between theoretical security and operational security practices. For example, SecureDrop uses an air-gapped viewing station for securely reviewing documents. If a journalist then takes a photograph of a document with their phone, that photograph of a sensitive document may be uploaded to a cloud or backup service without their knowledge.

Engaging with users helps us identify these potential disconnects, and think about ways that we can address them through user experience improvements, training, documentation, etc.

### Q: What is the best way for users to share feedback with your team?

**A:** For news organizations and journalists using SecureDrop, we recommend that they get in touch with us via securedrop@freedom.press (*[GPG key here](https://securedrop.org/sites/default/files/fpf-email.asc)*) and request an account on our *[support portal](https://support.freedom.press/)*. Because communications about production use of SecureDrop are inherently sensitive, it’s important to use a secure channel by default.

For sensitive security issues, we offer *[bug bounties](https://bugcrowd.com/freedomofpress)* via Bugcrowd, or researchers can send us an email at securedrop@freedom.press (*[GPG key here](https://securedrop.org/sites/default/files/fpf-email.asc)*).

For less sensitive communications, you can find us *[on Gitter](https://gitter.im/freedomofpress/securedrop)*, and we encourage users to *[open issues on GitHub](https://github.com/freedomofpress/securedrop/issues/new/choose)*, including for feature requests.

### Q: How has feedback previously been incorporated into development?

**A:** An example feature that is directly responsive to user feedback is the ability to administer the instance via the local network instead of using Tor which is how administrators access SecureDrop by default. This reduces the amount of time administrators spend working on their SecureDrop when it’s physically co-located in the newsroom.

The feedback loop is often very fast when it comes to documentation changes: if a news organization stumbles over parts of our docs, it’s not uncommon for a fix to be incorporated a day or two later.

### Q: What role do trainers play in the feedback loop? How do you view trainers?

**A:** FPF’s training team is integral to the success of SecureDrop. Given the complexity of the software and the security risks involved, engaging with journalists and administrators directly is the best way to ensure the system is used securely and effectively. The training team routinely shares insights with other SecureDrop team members, including in a debrief after any on-site with a news organization. The team also directly participates in documentation edits and reviews, updates to the threat model, UX discussions, etc.

The FPF training team also creates *[digital security guides](https://freedom.press/training/)* which frequently have relevance to SecureDrop, and which are cross-referenced in the SecureDrop documentation.

### Q: Has your team ever used personas to inform design or development?

**A:** We currently don’t use personas, but are planning to do so in the near future.

### Q: What are the future plans for the project?

**A:** We are working on a new project, the *[SecureDrop Workstation](https://github.com/freedomofpress/securedrop-workstation)*, based on *[Qubes OS](https://www.qubes-os.org/)*. The SecureDrop Workstation provides an integrated environment for connecting to SecureDrop and reviewing documents, using Virtual Machines to ensure documents are viewed in a secure, networkless environment that is destroyed after use.
This includes the development of a *[graphical client application](https://github.com/freedomofpress/securedrop-client)*. *[Usable.tools](https://usable.tools/)* has directly funded the work of one of our contributors, Nina Alter, on the user experience design and research for this effort, which has been instrumental in advancing it.

We are planning to pilot the SecureDrop Workstation with select newsrooms later this year. If the pilot is successful, the SecureDrop Workstation has the potential to become a secure working environment for the most sensitive work journalists are engaged in—perhaps even including other communication tools that are commonly used for tip lines like Signal.
