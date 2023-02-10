I set this up for Nicola and I to play with Drupal

terminal 1: in root of project

- ddev start
- open the project in browser. OK to be logged in here and make config changes
- use terminal 1 for git, ddev composer and ddev drush
  terminal 2: in root of project
- ddev browsersync
- open the external link. You won't be logged in - handy for dev tools and responsive states
- this is the site that changes on file save
  terminal 3
- cd to theme folder
- npx mix watch
- if this opens another browser just close it again!
