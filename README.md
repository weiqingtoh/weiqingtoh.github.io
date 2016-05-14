# My Blog

Credits to theme from [Sérgio Kopplin](https://github.com/sergiokopplin/indigo).

## Setup
1. Edit `_config.yml` with your data.
1. `bundle install`
1. `npm install && npm install -g gulp`
1. `gulp`
1. open in your browser: `http://localhost:3000`

## Settings

You must fill some informations on `_config.yml` to customize your site.

```
name: John Doe
bio: 'A Man who travels the world eating noodles'
picture: 'assets/images/profile.jpg'
...

and lot of other options, like width, projects, pages, read-time, tags, relateds, animations, etc.
```

## How to:

- [Emojis in the projects list?](https://github.com/sergiokopplin/indigo/issues/72)
- [Nokogiri dependencie problems?](https://github.com/sergiokopplin/indigo/issues/81)
- [Syncing a Fork](https://help.github.com/articles/syncing-a-fork/)
- [Tests with Travis CI - Tutorial](http://www.raywenderlich.com/109418/travis-ci-tutorial)

## Tests

You can test your app with:

```bash
bundle exec htmlproof ./_site
````

## Problems?

Tell me on github or open a [issue](https://github.com/sergiokopplin/indigo/issues/new).

#### Inspirations:
- [Addy Osmani](https://addyosmani.com/)

---

[MIT](http://kopplin.mit-license.org/) License © Sérgio Kopplin
