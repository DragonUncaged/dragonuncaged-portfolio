## Portfolio

<h3> Tech Stack Used <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="32px"> </h3>
<p align="left">
  <a href="https://www.typescriptlang.org/" target="_blank">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
  </a>
  <a href="https://nextjs.org/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="nextjs" width="60" height="40"/>
  </a>
  <a href="https://www.prisma.io/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubcodespaces/githubcodespaces-original.svg" alt="prisma" width="40" height="40"/>
  </a>
</p>

## Getting Started
```bash
npm i
npm run start
```

# Deployment using Guthub Pages
```bash
npm install gh-pages --save-dev
```
### Update package.json

```bash
{
  "homepage": "https://<username>.github.io/<repository-name>",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

```bash
npm run deploy
```