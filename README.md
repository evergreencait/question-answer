# question-answer

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* `cd question-answer`
* `npm install`
* `bower install`

## Planning

1. Configuration/dependencies
  * Handlebars, Ember.js
  * Package.json, Bower.json

2. Specs
  * Spec 1: Site will allow users to input a question and display question.
    * Input: "Is it going to rain?"
    * Output: "Is it going to rain?"
  * Spec 2: Site will allow users to add a new response to the questions.
    * Input: "Yes"
    * Output: "Yes"

3. Integration
  * Initial routes or index pages with all dependencies in Controller/index.html head
  * Template/html page for question page
  * Display user questions and user answers on the same page. Allow users to update         questions and add answers.

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish
  * Make README awesome

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
