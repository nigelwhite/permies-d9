## Drupal Core Recommended

Since this is a drupal/core-recommended project the correct update commands are
ddev composer update drupal/core 'drupal/core-\*' --with-all-dependencies
ddev drush updb
ddev drush cr

## Subtheme Bootstrap 4 Sub

Our subtheme is called Bootstrap 4 Sub

Subtheme of Bootstrap 4 https://www.drupal.org/project/bootstrap4

This runs continuous scss processing into css, including live reload (uses Laravel Mix)

Steps

- cd web/themes/custom/bootstrap4_sub
- npx mix watch. Opens a new browser tab at http://localhost:3000/
- Keep your original browser tab open
- write scss rules in web/themes/custom/bootstrap4_sub/scss/style.scss
- This will live reload at http://localhost:3000/
