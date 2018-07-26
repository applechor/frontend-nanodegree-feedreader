# Feed Reader Testing Project

The testing project is a web-based application that reads RSS feeds. It already provided some source codes and write first test suite. You have to continuously write the tests and/or the expected functions until ensures your application shows with no errors.

## Table of Contents

* Framework
* Getting started with this project
* Unit testing
* Check again before complete the testing
* Reference Resources

## Framework

A javascript testing framework for this project is **jasmine** which will provide a test library.

For more information about [getting started with jasmine](https://jasmine.github.io/pages/getting_started.html)

## Getting started with this project

* download/clone [the project](https://github.com/udacity/frontend-nanodegree-feedreader) from GitHub.

* open `index.html` with browser to examine the application and expected results.

* open `js/app.js` with text editor to explore the main function for loading feeds.

* open `css/style.css` with text editor to explore how to use CSS stylings into the web page.

* open `jasmine/spec/feedreader.js` with text editor to write the sutie tests, spec tests and expectation function.

## Unit testing
Here is a list of testing which run against your application

* In a suite named `RSS Feeds`.

  * Write a test spec that loops through each feed in the allFeeds object to get _URL_ property. This test has two expectations: it has a URL defined and the URL is not empty 

  * Write a test spec that loops through each feed in the allFeeds object to get _name_ property. This test has two expectations: it has a name defined and the name is not empty.

* Create a new test suite named `The menu`.

  * Write a test spec that ensures the menu element is hidden by default. The expectation is the menu element is hidden.

  * Write a test spec that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: the menu display when clicked and it hide when clicked again.

* Create a test suite named `Initial Entries`.

  * Write a test spec that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container. The expectation is the feed has at least one entry element.

* Create a test suite named `New Feed Selection`.

  * Write a test spec that ensures when a new feed is loaded by the loadFeed function that the content actually changes. The expectation is each entry elements of prior feed does not the same as each entry elements of new feed.
    
## Check again before complete the testing

* There is no test should be dependent on the results of another.

* Callbacks should be used for asynchronous test to ensure that feeds are loaded before they are tested.

* Defined variables and arrays.

* When complete - all of the tests should pass.

## Reference Resource
  
   * [Udacity Feed Reader Testing Project](https://www.diigo.com/outliner/fjsk23/Udacity-Feed-Reader-Testing-(project-%234)?key=i5xqspbzvg)
   
   * [Get local href value from anchor (a) tag](https://stackoverflow.com/questions/15439853/get-local-href-value-from-anchor-a-tag)

