---
title: "UXFund: Mailvelope"
date: 2019-10-01 14:00:00
author: "Adriana"
main_image: "images/logos/MailvelopeLogo-blog.png" # 342px × 178p ~2x1
main_image_caption: Mailvelope logo
tags: ["Mailvelope","UXFund","smallgrants","design"]
draft: false
---

[Mailvelope](https://www.mailvelope.com/en) is a free software for end-to-end encryption of email traffic which is integrated within browsers as an extension. Through this round of the UXFund, Mailvelope was able to release the latest version of the tool with user-experience (UX) and user-interface (UI) changes that were recommended by a team of UX designers as well as accessibility updates that were recommended by [Accessibility Lab](https://a11ylab.com/).

Some of the maintenance updates they made through this grant include the ability for the user to:

* Upload and delete keys to the Mailvelope key server within the keyring UI,
* Change the key password,
* Create revocation certificates and upload to key server,
* Change user ID, name, and email, and
* Set a new expiration date for the key.

[f209](https://www.f209.de/), a team of UX designers, provided Mailvelope with design proposals for the application and website, ultimately leading them to not just optimize certain parts of Mailvelope, but instead rebrand completely to provide one consistent and improved user experience. Taking these recommendations, along with those from Accessibility Lab’s audit reports, Mailvelope redesigned some of their major interfaces, including: the Mailvelope editor integration in Gmail with improved attachment handling, the file encryption UI, the Mailvelope website, and the extended key maintenance features.

Additionally, Mailvelope was able to reimplement the layer that is used to integrate with the mail provider website. For the users of mail providers such as Gmail, this has the following benefits:

* **Better performance**: Mailvelope requires less resources to scan the mail provider page for PGP messages. The detection is also much faster. Instead of an up to 2 seconds delay required to detect a message in the previous version, there is now an instant detection.
* **Better compatibility**: More mail providers are supported, and several message detection corner cases have been fixed.
* **Instant decryption**: Mailvelope will now instantly decrypt messages without additional user action, since the user’s private key is in the password cache.
* **Improved usability**: The editor button now has an animation and the words “Write secure email”, helping the user understand the functions of the button.

The file encryption user interface in the Mailvelope app has also been redesigned, providing a separate section for encryption and decryption in the top-level navigation. Text and file encryption have now been integrated into one UI, with the signing of data supported across all encryption processes.

Using last quarters accessibility recommendations from Accessibility Lab, the Mailvelope team has also applied recommendations, improving accessibility and design of the Mailvelope website:

<div style="text-align: center"><a href="https://www.mailvelope.com/en"><img src="/images/blog/Mailvelope_screenshot.png" alt="Mailvelope website" style="border: 0; width: 100%; padding: 1em;" /></a></div>
