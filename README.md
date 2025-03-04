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



## SAAS 
https://create-react-app.dev/docs/adding-a-sass-stylesheet/ 

Software as a service (SaaS) allows users to connect to and use cloud-based apps over the Internet. Common examples are email, calendaring, and office tools 
You rent the use of an app for your organization, and your users connect to it over the Internet, usually with a web browser (https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-saas)

npm install sass 

see version of saas after installing in package.json (dependencies) 

rename index.css to index.scss 

and rename it to index.scss in import in index.js 

styled components react 




## Array Map() Method 

function ObjectsList() {
    const products = [
        { id: '1', name: 'book', price: 300, description: 'a very good book', isAvailable: true },
        { id: '2', name: 'pencil', price: 300, description: 'a very good pencil', isAvailable: true },
        { id: '3', name: 'pen', price: 300, description: 'a very good pen', isAvailable: false }
    ];

    return (
        <div>
            {products.map((product) => (
                product.isAvailable ? ( // Conditional (ternary) operator
                    <div key={product.id}>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                        <div>{product.description}</div>
                    </div>
                ) : null // Return null if not available
            ))}
        </div>
    );
}

export default ObjectsList; 



## Child to Parent Props 

<!-- // Greeting.js
function Greeting(props) { // or function Greeting({ name }) { destructuring
    return (
        <h1>Hello, {props.name}!</h1> // Access the prop using props.name
    );
}

export default Greeting;

// MainComponent.js
import Greeting from './Greeting'; // Import the Greeting component

function MainComponent() {
    return (
        <Greeting name="Alice" /> // Pass the name prop
    );
}

export default MainComponent;  --> 


<!-- // Inside the Greeting component, render a personalized greeting using the name prop (e.g., <h1>Hello, {props.name}!</h1>).
// In the parent component, render the Greeting component and pass a name as a prop (e.g., <Greeting name="Alice" />). -->
 




<!-- Alternative (and often preferred) way to access props:

You can use destructuring in the function parameters to directly access the prop: 

// Greeting.js (using destructuring)
function Greeting({ name }) {  // Destructure the name prop directly
    return (
        <h1>Hello, {name}!</h1> // Use the name variable directly
    );
}

export default Greeting;

// MainComponent.js (remains the same)
import Greeting from './Greeting';

function MainComponent() {
    return (
        <Greeting name="Alice" />
    );
}

export default MainComponent; -->





<!-- // Create a functional component called Product.
// The Product component should accept title, price, and image props.
// Inside the Product component, display the product information (title in an <h2>, price in a <p>, image in an <img> tag).
// In the parent component, create an array of product objects (each object should have title, price, and image properties).
// Use the .map() method to render a Product component for each product in the array, passing the appropriate props.



// Product.js
function Product({ title, price, image }) { // Destructure props
    return (
        <div> {/* Wrap in a single element */}
            <h2>{title}</h2>
            <p>{price}</p>
            <img src={image} alt={title} /> {/* Add src and alt attributes */}
        </div>
    );
}

export default Product;

// MainComponent.js
import Product from './Product';

function MainComponent() {
    const products = [
        { title: 'title 1', price: 2, image: './image1.jpg' },
        { title: 'title 2', price: 3, image: './image2.jpg' },
        { title: 'title 3', price: 4, image: './image3.jpg' }
    ];

    return (
        <div> {/* Wrap in a single element */}
            {products.map((product) => ( // Use .map() here
                <Product 
                    key={product.title} // Use a unique key (or index if order never changes)
                    title={product.title} 
                    price={product.price} 
                    image={product.image} 
                />
            ))}
        </div>
    );
}

export default MainComponent; --> 




## Lifting State Up Practice:

// Task 1: Shared Counter State:
// Create two components: Counter and Display.
// The Counter component has a button that increments a counter.
// The Display component shows the current value of the counter.
// Lift the count state up to a parent component.
// Pass the count state as a prop to the Display component.
// Pass the setCount function (or a function that calls setCount) as a prop to the Counter component.

You need to lift the count state up to the common ancestor of Counter and Display (which would be MainComponent in this case), and then pass the count and the setCount function as props to both components. 

// Counter.js
function Counter({ count, setCount }) { // Receive count and setCount as props
    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <button onClick={handleClick}>Increment</button>
    );
}

export default Counter;

// Display.js
function Display({ count }) { // Receive count as a prop
    return (
        <p>Count: {count}</p>
    );
}

export default Display;

// MainComponent.js
import React, { useState } from 'react'; // Import useState in the parent
import Counter from './Counter';
import Display from './Display';

function MainComponent() {
    const [count, setCount] = useState(0); // State is in the parent

    return (
        <div>
            <Counter count={count} setCount={setCount} /> {/* Pass count and setCount */}
            <Display count={count} /> {/* Pass count */}
        </div>
    );
}

export default MainComponent; 








## Add to Cart 

// Task 2: Add to Cart Functionality:
// Create a ProductList component and a Cart component.
// The ProductList component displays a list of products (you can use a hardcoded array for now). Each product should have an "Add to Cart" button.
// The Cart component should initially be empty.
// Lift the cart items state (an array of products) up to a parent component.
// Pass the cart items state as a prop to the Cart component.
// Pass a function (e.g., addToCart) as a prop to the ProductList component.
// When the "Add to Cart" button is clicked, call the addToCart function, passing the product that was added.
// In the parent component, the addToCart function should update the cart items state. 


// ProductList.js
function ProductList({ addToCart }) {
    const products = [
        { id: 1, name: 'ball', price: 100 },
        { id: 2, name: 'pen', price: 200 },
        { id: 3, name: 'book', price: 300 }
    ];

    return (
        <div>
            {products.map((product) => ( // Add parentheses for implicit return
                <div key={product.id}> {/* Add a unique key */}
                    <p>{product.id}</p>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button> {/* Pass product to addToCart */}
                </div>
            ))}
        </div>
    );
}

export default ProductList;

// Cart.js
function Cart({ cart }) { // Receive cart as a prop
    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>{item.name} - ${item.price}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Cart;

// MainComponent.js
import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';

function MainComponent() {
    const [cart, setCart] = useState([]); // Initialize cart as an empty array

    const addToCart = (product) => { // Receive the product
        setCart([...cart, product]); // Add the product to the cart array
    };

    return (
        <div>
            <ProductList addToCart={addToCart} /> {/* Pass addToCart to ProductList */}
            <Cart cart={cart} /> {/* Pass cart to Cart */}
        </div>
    );
}

export default MainComponent; 



cart State as Array: In MainComponent, the cart state is initialized as an empty array: useState([]).  This is crucial because you'll be adding multiple products to the cart.

addToCart Function: The addToCart function in MainComponent now receives the product object as an argument.  It uses the spread syntax (...cart) to create a new array containing the existing items in the cart and the newly added product: setCart([...cart, product]);. This is the correct way to update state based on previous state.

Passing addToCart:  MainComponent passes the addToCart function as a prop to the ProductList component: <ProductList addToCart={addToCart} />.

Calling addToCart: In ProductList, the onClick handler of the "Add to Cart" button now calls the addToCart function (which was passed as a prop), passing the current product as an argument:  <button onClick={() => addToCart(product)}>Add to Cart</button>. The arrow function is necessary to pass the product to the addToCart function.

Cart Component: The Cart component now receives the cart array as a prop. It maps over the cart array to display the items in the cart. It also includes a check for an empty cart.

Unique Keys: The key prop is essential when rendering lists.  I've added key={product.id} in ProductList and key={item.id} in Cart.  Make sure you use a truly unique identifier for each product.

How it Works Step-by-Step:

MainComponent initializes the cart state to an empty array.
MainComponent renders ProductList and Cart, passing the addToCart function and the cart state as props.
ProductList renders a list of products.
When the "Add to Cart" button for a product is clicked:
The addToCart function (from MainComponent) is called, passing the product object.
MainComponent updates the cart state by creating a new array with the added product.
MainComponent re-renders.
Cart re-renders, displaying the updated cart contents. 




## My Case 

JavaScript

import React, { useState } from 'react';
import apple from '../../assets/images/apple.jpg';
import grapes from '../../assets/images/grapes.jpg';
import kiwi from '../../assets/images/kiwi.jpg';
import '../Card/Card.css';

const CardData = [
    {
        id: "1",
        image: apple,
        title: "Apple Gala",
        price: "$10.00 per kg",
    },
    {
        image: grapes,
        id: "2",
        title: "Niagara Grapes",
        price: "$20.00 per kg",
    },
    {
        image: kiwi,
        id: "3",
        title: "Hayward Kiwi",
        price: "$30.00 per kg",

    }

];

<!-- function Card({ details, addToCart }) { // Receive addToCart as a prop
    return (
        <div className="cards">
            {details.map((value) => (
                <div className="cardContainer" key={value.id}>
                    <div className="cardImageBlock">
                        <img className="cardImage" src={value.image} alt={value.title || "Product Image"} />
                    </div>
                    <div className='cardTextBlock'>
                        <span className="cardTitle">{value.title}</span>
                        <p className="cardPrice">{value.price}</p>
                        <button onClick={() => addToCart(value)}>Add to Cart</button> {/* Call addToCart */}
                    </div>

                </div>
            ))}
        </div>
    );
} -->

function CartPage() {
    const [cartItems, setCartItems] = useState([]); // State for cart items

    const handleAddToCart = (product) => { // Product added to cart
        setCartItems([...cartItems, product]);
        console.log("Item added to cart:", product);
    };

    return (
        <div>
            <div className="content">
                <Card details={CardData} addToCart={handleAddToCart} /> {/* Pass addToCart */}
                <h2>Cart</h2> {/* Cart title */}
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                {item.title} - {item.price}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

        </div>
    );
}

export default CartPage;
Key Changes and Explanations:

addToCart Prop: The Card component now receives a prop called addToCart, which is a function that will be called when the "Add to Cart" button is clicked.

Button onClick: The "Add to Cart" button's onClick handler now calls the addToCart function, passing the entire value object (which represents the product) as an argument: onClick={() => addToCart(value)}.

CartPage State and Handler: The CartPage component now has the cartItems state (an array to store the items in the cart) and the handleAddToCart function.  The handleAddToCart function is what updates the cartItems state when a product is added.

Passing addToCart: The CartPage component passes the handleAddToCart function as the addToCart prop to the Card component.

Cart Display: The CartPage component now displays the items in the cartItems array.  It shows a "Your cart is empty" message if the cart is empty.

Import Statements: Make sure you have the correct import statements for your images and CSS file.

How it Works:

The CartPage component manages the cartItems state.
The Card component receives the addToCart function as a prop.
When the "Add to Cart" button is clicked, the Card component calls the addToCart function, passing the product object.
The CartPage component's handleAddToCart function updates the cartItems state.
The CartPage component re-renders, displaying the updated cart items.
With these changes, you should now be able to add products to the cart and see them displayed on the cart page.  If you're still having issues, double-check the following:

Image Paths: Make sure the paths to your images are correct.
Unique Keys: Ensure that the id values in your CardData are unique.
Console Errors: Check your browser's developer console for any errors.
CSS: Make sure your CSS is correctly styling the elements. 



## Code Plan 

Increment button 

User flow - Program Code - What to use 

1 - Click Add to Cart button                 - handleAddToCart function on Main Page returns updatedCart array (check by adding console.log(updatedCart))
2 - Product Added to Cart                    - product is shown - item in cartItems renders in <> on Cart Page
3 - Click + button of SELECTED PRODUCT       - ???? find product which + button is clicked (??? JS function, if, array mehtod ?? what returns? ) - if item.id of added product
4 - Quantity increases + 1                   - increase quantity by 1 (count + 1)
5 - Refresh page                             - save changes        - set state in local storage
6 - Quantity stays the same                  - 





## Design Pattern - Figma Community 



## BEM - methodology 


## React Hook Form 

npm install react-hook-form 



## Backend 

body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body 

This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request 

npm install --save express mongodb body-parser 

In package.json in dependencies there will be installed programs 

MERN stack - MongoDb (not-related database), Express, React, Nodejs 

npm -v 

node -v 

npm init (with Enter: entry point: app.js; keywords: mern, react; author: Mariia R <test5@gmail.com>) 

package.json will be generated 

create file app.js  

npm install express mongoose 

Mongoose - js library, to connect Node.js with MongoDB 

(-D to move it all to dev dependencies): 

npm install -D nodemon concurrently

nodemon is a tool that helps develop Node.js based applications 
by automatically restarting the node application when file changes 
in the directory are detected (to auto restart server)


concurrently npm package (at the same time) to run multiple scripts with one command - to 
run at the same time frontend and backend !!! 

edit in package.json: 

"scripts": {
    "start": "node app.js", 
    "server": "nodemon app.js"
  }

    start - to start your backend project 

    server - to run backend 


to run these scripts, for example: npm run server 

CTRL C - exit from terminal 

to work with config and not hardcore port in app server: 

https://www.npmjs.com/package/config 

npm i config 

create folder config in the root of the project and in it file default.json (to save 
constants for the project)

to connect to MongoDB add mongoose 

method connect returns promise, to use syntax of async await wrap it with function 

https://www.mongodb.com/ - cloud database 

MongoDB - sign in - create a project - create a cluster (free) - 
azure - poland (choose server from the nearest country - the nearer the faster connection will be)  

Configure mongo connect: 
npm run server 
When cluster has been created - click the Connect button - 
Add a connection IP address (or use your current IP address automatically - Your current IP address (176.105.44.12) has been added to enable local connectivity)

set user and password to access database: mariia - test 
Click the Create Database User button 
Click Choose a connection method button - Drivers - it will show Node.js driver version 
and mongodb+srv line (connection string) - Copy - Close - add to config-default json line to mongoURI 
edit mongodb+srv://mariia:<db_password> with mongodb+srv://mariia:test





## Search 

react ... 

JSX ... 








## Use Custom Hook in the Other Project 

1. Publish as an npm Package (Recommended for Reusability):

Steps:

Create a Package:

In the project containing useHttp, create a package.json file if you don't already have one (e.g., npm init -y).
Ensure the name and version fields are set correctly.
Add a main field pointing to the entry point of your hook (e.g., main: "dist/index.js").
If you are using typescript, configure your tsconfig.json file to output to the dist folder.
Build the Hook:

Use a build tool like Webpack, Rollup, or esbuild to bundle your hook and its dependencies into a distributable format.
If you are using typescript, use tsc to compile your code.
Publish to npm (or a private registry):

Run npm publish (or yarn publish).
Install in the Other Project:

In your other project, run npm install <package-name> or yarn add <package-name>.
Import and Use:

Import the hook in your component:
JavaScript

import { useHttp } from '<package-name>';

function MyComponent() {
    const { loading, request, error, clearError } = useHttp();
    // ... your code 



To build your http.hook.js file using Webpack, you'll need to configure Webpack to bundle it into a distributable format. Since this hook doesn't have complex dependencies or assets, the configuration will be relatively simple.

Here's a step-by-step guide:

1. Set Up Your Project:

Create a Project Directory: If you haven't already, create a directory for your hook.
Initialize npm: Run npm init -y in the project directory to create a package.json file.
Install Webpack and Babel (if needed):
npm install webpack webpack-cli --save-dev
If you're using modern JavaScript features (like async/await), you'll likely need Babel:
npm install @babel/core babel-loader @babel/preset-env --save-dev
2. Create webpack.config.js:

Create a webpack.config.js file in your project's root directory with the following configuration:

JavaScript

const path = require('path');

module.exports = {
    entry: './http.hook.js', // Entry point of your hook
    output: {
        filename: 'http.hook.bundle.js', // Output filename
        path: path.resolve(__dirname, 'dist'), // Output directory
        library: 'httpHook', // Name of the library (optional)
        libraryTarget: 'umd', // Universal Module Definition
        globalObject: 'this', // Important for UMD compatibility
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    mode: 'production', // Use 'development' for development builds
};
Explanation:

entry: Specifies the entry point of your hook (http.hook.js).
output:
filename: Sets the name of the output bundle.
path: Specifies the output directory (dist).
library: Sets the name of the library (optional, but useful for UMD).
libraryTarget: 'umd' : makes the output compatible with a variety of module systems.
globalObject: 'this' : makes the output compatible with both browser and node.
module.rules:
Uses babel-loader to transpile your JavaScript.
Uses @babel/preset-env to transpile modern JavaScript features to a compatible version.
mode: Sets the build mode to production (for optimized builds) or development (for development builds).
3. Add a Build Script to package.json:

Add a build script to your package.json file:

JSON

{
    // ... other package.json properties
    "scripts": {
        "build": "webpack --config webpack.config.js"
    },
    // ... other package.json properties
}
4. Run the Build:

Run the build script in your terminal:

Bash

npm run build
This will create a dist folder containing the bundled http.hook.bundle.js file.

5. Using the Bundled Hook:

In another project:

Copy the dist folder into your other project.
Import the hook using a relative path:
JavaScript

import { useHttp } from './dist/http.hook.bundle.js';

function MyComponent() {
    const { loading, request, error, clearError } = useHttp();
    // ... your code
}
Publishing to npm:

Make sure your package.json file is correctly configured, and that it includes the dist folder in the files property.
Run npm publish. 

./: Indicates the current directory.
../: Indicates the parent directory (one level up) 

to get data from frontend to backend use proxy: client-package.json: "proxy": "http://localhost:5000" 
(all request from frontend (localhost:3000)) will be proxied to backend (localhost: 5000) 
// in production proxy won`t work 

// to test frontend + backend: npm run dev 




## TO DO 
1 - Images - Slideshow
2 - responsive design  (media quaries, adaptive to mobile, tablet, different screens) 
3 - Images - Image Overlay Title 
4 - Forms - Toggle Password Visibility 
5 - Forms - Autocomplete (search)
6 - Filters - Filter Elements 
7 - Filters - Sort List 
8 - More - Toggle Dark Mode 
9 - optimizing images 
10 - mobile optimization 
11 - calculator 
12 - upload images 
13 - AXIOS for API calls 
14 - Tailwind CSS 
15 - change language 
16 - Role-based access for different membership levels, restricting content based on user subscriptions (admin, customer)
17 - edit your profile 
18 - admin panel (add new pages, add/delete clubs, edit schedule) 
19 - pagination 
20 - breadcrumbs 
21 - login via google 
22 - cookies 
23 - session storage 
24 - lazy loading 
25 - calendar to book a training  
26 - drag-and-drop 
27 - pixel-perfect precision 
28 - mobile-first design 
29 - add comments 
30 - optimizing performance 
