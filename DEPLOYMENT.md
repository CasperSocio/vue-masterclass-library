# Deployment

1. Update version
1. Update CHANGELOG.md
1. Run `npm run lint` and resolve any warnings
1. Run `npm run test:ci` and resolve any failed tests
1. Run `npm run build` and resolve any errors
1. Stage, commit, and push changes to `origin next`
1. Authenticate by logging in to npm
   1. Run `npm login`
   2. Complete the browser login
1. Run `npm publish --dry-run` and make sure everything looks ok
1. Run `npm publish --access public`
1. Publish the new release on GitHub
