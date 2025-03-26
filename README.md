# tdurtschi-web

`tdurtschi-web` is a static site written in React.js. It's currently hosted at [tdurtschi.com](https://www.tdurtschi.com)

## Note about two routes

This site currently has two routes, which serve the same asset. To ensure consistency, I recommend creating a hard link between index.html and about.html:

```bash
rm about.html; ln index.html about.html
```
