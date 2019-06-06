# USABLE
Repository to track news and resources from the USABLE initiative; learn more at https://usable.tools

## Publishing content
Content is published inside the `content` directory as markdown files. Each file should have a `.md` file extension. With hugo installed, you can add content through the command line: `hugo new content/blog/[FILENAME].md`.

**Paths** will be constructed using the section directory within the `content`, and the name given to the markdown file. So a markdown file in `content/events/my-awesome-event.md` will have this URL `https://usable.tools/events/my-awesome-event` (the last fragment of the path will match the filename but without the `.md` file extension).

**Drafts** are set to true by default. If content doesn't appear after adding the markdown file, check to make sure that this font matter field draft is set to false with `draft: false`.

**Blog** content is published within the `content/blog` directory. There is an example unpublished blog content at `content/blog/blog-example.md`.

**Events** are published within the `content/events` directory.
Note: the `eventdate` font matter field should be filled in so the sort on the events page will display most recent events on top. There is an unpublished example event content `content/events/event-example.md`.

**Personas** are publishedin within the `content/personas` directory. There is an example unpublished personal content `content/personas/persona-example.md`.

**Pages** can be published within the top level of the `content` directory. For example the about page `https://usable.tools/about` is published at `content/about.md`

**Home page carousel** content is published within the `content/front_carousel` directory. The full text of this content is displayed on the front page. HTML can be included in these, including the orange USABLE text within the the h2 header with: `<span class="orange">USABLE</span>`.

This content type doesn't require the `title` font matter field. If `title` field is defined it will not actually display anywhere.

The `link_path` font matter field is required. If the value for this is empty than the entire piece of content will not be visible on the front page.

The `link_text` font matter field is optional. The link text defaults to "Read more"

The `weight` property controls the order of front page items.

If you would like to unpublish any front page content, you can set the draft to false with `draft: false`.

**Home page intro** text on front page can be edited inside `data/intro.json`.


## Configuration

**Configuration** is stored in `config.toml`. This file contains various hugo settings as well as site wide values such as the name of the site. The contact information, social media links, twitter card data and OG data are also defined in this file.

**Main menu:** Menu items can be added in the configuration file `config.toml`. For example the configuration for the Personas menu item:
```
[[menu.main]]
  identifier = "personas"
	name = "Personas"
	url = "/personas/"
  weight = 5
```
The `weight` property controls the order of menu items.

**baseURL**
The base baseURL in `config.toml` will be a different value during development. This value will need to be changed to `baseURL = "http://usable.tools/"`. The trailing `/` is required for the this site to render correctly.

## Build static files
The following commands should be ran from the top level of the source files (within the same directory as `config.toml`).
To compile SASS files, run `npm run sass`.
To build the static files run `hugo`.

## Deploy to production
