# Remote | Front-End Code Challenge - Monica Wheeler

## Project Specifications
The design files can be found at [Figma](https://www.figma.com/file/zm70bHzCxggL3GwliCV3GW/Front-end-challenge)

## Local Development
To view this codebase locally, install [Node.js](https://nodejs.org/en/)

1. Clone the [repo locally](https://github.com/monicawheeler/remote-react-app)
2. `cd` into the root of the application
3. Run  `npm i`
4. Run `npm run start`
5. Navigate to https://locahost:8080


## Code Challenge Notes
### Handling Styles
It's my personal preference to manage CSS in files separate from the JS. However, I can easily adjust to any method of managing CSS that the team finds most effective.

I lean on SMACSS and BEM methodologies for styling and you will see that echoed through the code challenge.

### Assets
Please note that the profile icon is different than the design. This is because I used a Material UI icon as a placeholder. In a real project, I would either grab the icon from the designs file or some central repo of icons for the project. If I could not locate it or grab it from the designs, I would chat with design to get the SVG.

### Accessibility
With the data table, I am using generic `div` and `span` elements in order to achieve design specifications, then adding aria roles to reintroduce native table accessbility. This will look like a data table to assistive technology while achieving the desired design visuals.

### Alerts
Alerts are implemented to notify the user of actions but without designs, are hidden with CSS. This is something I like to have in place and can be styled at a later time. 
