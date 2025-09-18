#!/bin/bash
echo "Moving to frontend file"

# Move into frontend folder
cd /home/shadywarlock/Documents/github/portfolio/frontend || exit
npm run build

echo "Done building front end restarting server"

# Move into server folder
cd /home/shadywarlock/Documents/github/portfolio/server || exit
npm run dev

# This line has an issue:
echo "Complete"
