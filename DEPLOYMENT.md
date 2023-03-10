# Deployment

1. Update version
2. Update CHANGELOG.md
3. Run `npm run lint` and resolve any warnings
4. Run `npm run test:ci` and resolve any failed tests
5. Run `npm run build` and resolve any errors
6. Stage, commit, and push changes to `origin next`
7. Draft a new [release](https://github.com/CasperSocio/vue-masterclass-library/releases) on GitHub
8. Generate a [personal access token](https://github.com/settings/tokens) (classic)
   1. Set expiration date for today
   2. Check "write:packages"
   3. Generate token
9. Authenticate by logging in to npm
   1. Run `npm login --scope=@caspersocio --auth-type=legacy --registry=https://npm.pkg.github.com`
   2. Username: username (lowercase)
   3. Password: The generated access token
10. Run `npm publish --dry-run` and make sure everything looks ok
11. Run `npm publish`
12. Publish the new release on GitHub
