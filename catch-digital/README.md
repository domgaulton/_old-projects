# Catch Digital FED Test

## Instructions for devs

* Run `npm install` to install your (dev) dependencies onto your system. There is a package-lock so this should configure okay. The project runs with the `create-react-app` package with loads of documentation here - https://github.com/facebook/create-react-app
* Once the installation is complete;
1. Dev mode  `npm start` - this will load up a localserver.
2. Build `npm run build` see here - https://github.com/facebook/create-react-app#npm-run-build-or-yarn-build
3. Run build on static server `serve -s build` - This is once you have run a build and want to see files.
* In components you will find `header`, `body` and `footer` which are then broken into futher semantic components. Each of these main parts are also a react components and pull in the child components in each. Each component should include the js file and scss.
* The resources folder has fonts and Porfolio Data

#### Coding Standards
* I made sure to look over notes from below and tried to set up the project with these but was losing valuable time;
* Read CatchDigital Base Files - https://github.com/catchdigital/catchify
* Read CatchDigital Coding Standards - https://github.com/catchdigital/coding-standards
* reset.css included as I'm more familiar than normalise which is used at Catch https://github.com/catchdigital/coding-standards/tree/master/front-end#normalizecss

### Dom Gaulton Notes

#### Using `create-react-app`
* I decided to push myself and see how far I could get with a practical build using react; in reality I know that for a 6 card homepage it is probably overkill but as/if this expands it would benefit. What I like about this is that it is very component based and other developers should be able to get ontop.
* `PortfolioData.js` exports the data for the Portfolio items which could be used for a headless CMS in the future. 
* The project hasn't really got out of prototype phase yet, and does not have any linting which I wanted to do but ran out of time. I really wanted to manage the filter by using state too, but again ran out of time.
* Had to include `node-sass` which I didn't think I would need to do on react2.0 package (I'm certain that It's worked before on a test build and documented as installed on 'react-scripts@2.0 and higher' https://facebook.github.io/create-react-app/docs/adding-a-sass-stylesheet) but my sass didn't compile when I first ran so added it on as a fail safe. This did lead to issues with the ordering of loading so I had to include variables into style sheets with 

### Updates

#### Small updates
* I was running out of time so there are some old school non ES6 formulas in here!
* Improve UX rather than just show hide
* Get a designers eye over it!
* Quickly reduced files to 600px but think largest mobile is 768px so should update these
* CSS fill decloration wasn't working on these svgs.

#### Phase Two
* Using react `setState` for filter feature
* Creating an array for the `PorfolioData.categories` items and creating the filter and logic from this single source (scalable too)
* Set up absolute paths for includes `../../variables.scss` - lots of documentation saying you need to eject the react builder which I didn't want to do at this stage

