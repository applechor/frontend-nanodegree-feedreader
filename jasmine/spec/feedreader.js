'use strict'

/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /**
         * @description: A test that loops through each feed
         * in the allFeeds object and it has a URL defined
         * and that the URL is not empty.
         */
         it('has a URL defined', function() {
            // Fetch each data of allFeeds object
            for (let allFeed of allFeeds) {
                // get the URL
                const hasUrl = allFeed.url;
                // check it has a URL defined
                expect(hasUrl).toBeDefined();
                // check the length of URL is not empty
                expect(hasUrl.length).not.toBe(0);
            }
         });

        /**
         * @description: A test that loops through each feed
         * in the allFeeds object and it has a name defined
         * and that the name is not empty.
         */
         it('has a name defined', function() {
            // Fetch each data of allFeeds object
            for (let allFeed of allFeeds) {
                // get the name
                const hasName = allFeed.name;
                // check it has a name defined
                expect(hasName).toBeDefined();
                // check the length of name is not empty
                expect(hasName.length).not.toBe(0);
            }
         });
    });

    /**
     * @description: A new test suite named "The menu" 
     */
    describe('The menu', function() {
        var menuHidden,
            menuIcon;
        beforeEach(function() {
            // Fetch data from class menu-hidden
            menuHidden = document.querySelector('.menu-hidden');
            // Fetch data from class menu-icon-link
            menuIcon = document.querySelector('.menu-icon-link');
        });
        
        /**
         * @description: A test that the menu element is hidden by default. 
         */
         it('is hidden by default', function() {
            // check the menu id hidden
            expect(menuHidden.classList.value).toBe('menu-hidden');            
         });

        /**
         * @description: A test that the menu changes visibility 
         * when the menu icon is clicked.
         */
          it('changes visibility when the menu icon is clicked', function() {
            // click first time 
            menuIcon.click();
            // the menu display when clicked 
            expect(menuHidden.classList.value).not.toBe('menu-hidden');
            // click second time
            menuIcon.click();
            // the menu hide when clicked again
            expect(menuHidden.classList.value).toBe('menu-hidden');
          });
    });

    /**
     * @description: A new test suite named "Initial Entries" 
     */
    describe('Initial Entries', function() {

        /**
         * @description: A test that when the loadFeed function 
         * is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous.
         */
        // Asynchronous done() function
        beforeEach(function(done) {
            // load feed index 0
            loadFeed(0, done);
         });

        it('has at least one entry element ', function() {
            var FeedContainer = document.querySelector('.feed');
            // Fetch entry class's data inside feed class
            var entryElement = FeedContainer.querySelector('.entry');
            // Check entry element shuold ot empty
            expect(entryElement).toBeGreaterThan('');
         });
    });

    /**
     * @description: A new test suite named "New Feed Selection" 
     */
    describe('New Feed Selection', function() {

    /**
     * @description:  Write a test that when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
     // create empty array
    var firstFeed = [],
        secondFeed = [];
        // Asynchronous done() function
        beforeEach(function(done) {
            // load feed index 0
            loadFeed(0, function() {
                // Fetch children node's data
                const oldFeed = document.querySelector('.feed').children;
                // collect href data into array
                for (let i = 0; i < oldFeed.length; i++) {
                    firstFeed.push(oldFeed[i].getAttribute('href'));
                }
                // callback function inside load feed index 0
                loadFeed(1, function() {
                    // Fetch children node's data
                    const newFeed = document.querySelector('.feed').children;
                    // collect href data into array
                    for (let i = 0; i < newFeed.length; i++) {
                        secondFeed.push(newFeed[i].getAttribute('href'));
                    }
                    // finish to get data from loadFeed index 0 and index 1
                    done();
                });
            });
        });

        it('a new feed is loaded when the content changes', function() {
            //compare each data in loadFeed index 0 to each data in loadFeed index 1
            for (let i = 0; i < firstFeed.length; i++) {
                for (let j = 0; j < secondFeed.length; j++) {
                }
            }
            // check each data in loadFeed index 0 is not equal each data in loadFeed index 1
            expect(firstFeed).not.toBe(secondFeed);
         });
    });

}());
