-------------------
This repository has now been deprecated
For the current version, check out https://github.com/OpenInternet/usable-tools
-------------------

# USABLE
Repository to track news and resources from the USABLE initiative; learn more at https://usable.tools

## Editing content
Content contained in the `content` directory as markdown files. Each file should have a `.md` extension. With [Hugo](https://gohugo.io/) installed, you can add content through the command line: `hugo new content/[SECTION]/[FILENAME].md`.

**Paths** will be constructed using the section's directory within `content` and the name given to the markdown file. So a markdown file in `content/events/my-awesome-event.md` will have this URL `https://usable.tools/events/my-awesome-event`, so he last fragment of the path will match the filename but without the `.md` extension.

**Drafts** are set to true by default. If content doesn't appear after adding the markdown file inside the `content` directory, check to make sure that draft is set to false with `draft: false`.

**Blog** content is published within the `content/blog` directory. There is an example unpublished blog content at `content/blog/blog-example.md`.

**Events** are published within the `content/events` directory.
Note: the `eventdate` font matter field should be filled in so the sort on the events page will display most recent events on top. There is an unpublished example event content `content/events/event-example.md`.

**Personas** are published within the `content/personas` directory. There is an example unpublished personal content `content/personas/persona-example.md`.

**Pages** can be published within the top level of the `content` directory. For example the about page `https://usable.tools/about` is published at `content/about.md`.

**Images and Files**
To add an image to content, first place it in the `static/images` directory. Hugo will copy any files in `static` to the published site. For example an image path would be `images/[FILENAME].png`.

To add a PDF to content, place it in the `static/pdfs` directory. For example a path to a PDF should be `pdfs/[FILENAME].pdf`.

Anything added to the `static` directory will be available to the published site.

## Publishing content / Deploying changes

To publish or edit content first install [Hugo](https://gohugo.io/). Then run the command `hugo server` in a terminal from the root of the `source` branch. This will provide a link to view the site.  

Any changes pushed to the `source` branch will automatically build the site and deploy changes to the live site.

## Updating Home Page
**Home page carousel** content is published within the `content/front_carousel` directory. The full text of this content is displayed on the front page. HTML can be included in these, such as the orange USABLE text within the the h2 tag with: `<span class="orange">USABLE</span>`.

The `link_path` field is required for the slide to be displayed. If the value for this is empty than the entire slide will not be visible on the front page.

The `link_text` field is optional. If not defined, it defaults to "Read more."

The `weight` property controls the order of front page items.

If you would like to unpublish any front carousel content, the draft property can be set to false with `draft: false`.

This content type doesn't require the `title` value. If `title` is defined in `front_carousel` content, it will not be visible anywhere.

**Intro** on front page can be edited in `data/intro.json`. It has a title and description.

**Personas** block on front page can be edited in `data/personas.json`.

## Configuration

**Configuration** is stored in `config.toml`. This file contains various Hugo settings as well as site wide values such as the name of the site. The contact information, social media links, twitter card data and OG data are also defined in this file.

**Main menu:** Menu items can be added in the configuration file `config.toml`.

**baseURL**
The base baseURL in `config.toml` will need to be changed to `baseURL = "http://usable.tools/"` before switching to this domain. The trailing `/` is required for the site to render correctly.

## Using Hugo
The following commands should be ran from the top level of the source files (within the same directory as `config.toml`).

To build the static files run `hugo`.

To preview the website locally run `hugo server`.

## Compiling SASS
To update SASS files, run `npm run sass` in a terminal and commit the updated CSS files.
