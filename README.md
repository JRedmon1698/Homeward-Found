# Homeward-Found

## Getting Started

To install package dependancies:
  `npm install`

Install mongodb server community edition if not already installed. https://www.mongodb.com/download-center/community

Install nodemon:
  `npm install nodemon`

The module mounts to:
  `<div id='app'></div>

## Scripts

`build`
Builds development bundle of client module.

`start`
Starts local server on port 3000.

## API Spec

### Get list of recipes for given ingredients. 
`GET /api/recipes/:ingredients`

**Params**      **Type**                     **Example**
:ingredients    comma-separated string      'butter, salt, eggs'