/* eslint no-unused-expressions: 0 */
'use strict';

require('../scss/app.scss');

var throttle = require('lodash.throttle');

// Additional requires to polyfill + browserify package.
require('array.prototype.find');
require('string.prototype.startswith');
require('./transforms');

// Initialize the Redux store
var store = require('./store');
var reparse = require('./actions/vegaInvalidate');

// Initialize the Model.
var model = require('./model');

// Set up the listeners that connect the model to the store
var listeners = require('./store/listeners');

// Bind the listener that will flow changes from the redux store into Vega.
// Throttle the listener to avoid the rendering overhead of re-computing
// certain properties from the store dispatch cycle more frequently than
// 60fps (16 is derived from 1000ms / 60fps). This listener calls model.update
// when it completes if the view is viable.
store.subscribe(throttle(listeners.createStoreListener(store, model), 16));

// Initializes the Lyra model with a new Scene primitive.
var createScene = require('./actions/createScene');
store.dispatch(createScene());

// Initialize components
var ui = require('./components');

var p = model.pipeline('cars'),
    p2 = model.pipeline('jobs'),
    p3 = model.pipeline('gapminder');

Promise.all([
  p._source.init({url: '/data/cars.json'}),
  p2._source.init({url: '/data/jobs.json'}),
  p3._source.init({url: '/data/gapminder.json'})
]).then(function() {
  ui.forceUpdate(function() {
    // Parse the model to initialize and render the Vega view
    // store.dispatch(reparse(true));
  });
});

// Expose model, store and Sidebars globally (via `window`) for debugging
global.model = model;
global.store = store;
