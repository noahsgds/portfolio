#!/bin/bash

# Build the project
npm run build

# Create .nojekyll file
touch out/.nojekyll

echo "Build complete. You can now commit and push the 'out' directory to the 'gh-pages' branch."
