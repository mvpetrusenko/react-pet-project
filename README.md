# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## New React Javascript Project 


Download and install Node.js from Node.js official web site 
Verify the installation by running the following commands in the VS Code terminal (node -v     npm -v) 
Install Create React App (Optional) 
Navigate to the directory where you want to create your project: Use the cd command
IN YOUR DIRECTORY YOU WANT TO SAVE YOUR PROJECT (cd ) 
https://create-react-app.dev/docs/getting-started/
You can use npx (comes with npm) to create a React project without installing Create React App globally:
!!!!!!npx create-react-app my-app

If you want to install create-react-app globally: 
npm install -g create-react-app

Then, create a project: create-react-app my-app
After creating the project, navigate into it: cd my-app
Then open VS Code: code .
Run the following command to start the development server: npm start
This will open the default React app in your browser at http://localhost:3000/ 
Open the src/App.js file. 
Modify the JSX inside return() in the App component to see changes in real-time. 
You may want to install other libraries: npm install react-router-dom
Tailwind CSS: npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p 
ls - see all files in directory 
The best approach is to let npx handle the versioning. When you use npx create-react-app my-app-name, npx automatically downloads and uses the latest version of create-react-app for that project 
You are running create-react-app 5.0.1, which is behind the latest release (5.1.0).


We recommend always using the latest version of create-react-app if possible.
You are still seeing the message because even with npx, if you have an older global version of create-react-app installed, it sometimes tries to use that first. Let's fix this definitively.
Here's the most reliable approach:
Uninstall the Global create-react-app (Important): npm uninstall -g create-react-app 
Clear npm Cache (Good Practice): npm cache clean --force 
Use npx (Now It Will Work Correctly): npx create-react-app react-javascript-different-project 
cd react-javascript-different-project 
npm start
Verify the Version (Important):
After the project is created, check the react-scripts version in your project's package.json file (as I described in my previous response). It should now show a version that is 5.1.0 or higher. This confirms that the correct version was used.



## Commit to existing repository 

(git init) 
  
 git add .   (adding all files to commit) 

  git commit -m "commit message" 

git remote add origin https://github.com/your_username/your_repository_name.git  // Or the SSH URL

  git push --force origin master:main (OR git push -u origin master) 

  OR:

git branch -M main  // Rename your local branch to 'main' (common practice)
git push -u origin main // Push the 'main' branch to the 'origin' remote



Pull the remote changes first (if you want to keep the remote files): 
git branch -M main  // Rename your local branch to 'main' (common practice)
git push -u origin main // Push the 'main' branch to the 'origin' remote 

git push -u origin main --force 

OR:

git push origin main --force 





## Different 

npm install @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
