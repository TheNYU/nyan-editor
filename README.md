# Nyan Editor
## Test
You'll need NodeJS LTS to run the project. Please install it.

After, run `npm install` for Windows or `sudo npm install` for Linux/OS X when you are in the folder.

You can now test the project with `npm run test` from the repository.
## Build
You'll also need NodeJS LTS and electron as specified in #Test.

After, run `npm install electron-packager -g`.

You can now build the editor with `electron-packager . --all` or `sudo electron-packager . --all` if you are on Linux/OS X.

### Build on OS X
You can build the editor on OS X with that command: `sudo electron-packager . --platform=darwin --arch=x64 --out=release --overwrite --prune=true`
