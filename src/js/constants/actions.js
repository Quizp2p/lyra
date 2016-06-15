'use strict';

var vega = require('../actions/vegaActions'),
    scales = require('../actions/scaleActions'),
    marks = require('../actions/markActions');

module.exports = {
  // Vega Actions
  INVALIDATE_VEGA: vega.INVALIDATE_VEGA,
  PARSE_VEGA: vega.PARSE_VEGA,

  // Signal Actions
  INIT_SIGNAL: 'INIT_SIGNAL',
  SET_SIGNAL: 'SET_SIGNAL',
  SET_SIGNAL_STREAMS: 'SET_SIGNAL_STREAMS',
  UNSET_SIGNAL: 'UNSET_SIGNAL',

  // Pipeline Actions
  CREATE_PIPELINE: 'CREATE_PIPELINE',
  SELECT_PIPELINE: 'SELECT_PIPELINE',
  UPDATE_PIPELINE_DATASET: 'UPDATE_PIPELINE_DATASET',

  // Layer Actions
  CREATE_SCENE: 'CREATE_SCENE',
  EXPAND_LAYERS: 'EXPAND_LAYERS',
  REMOVE_LAYERS: 'REMOVE_LAYERS',
  TOGGLE_LAYERS: 'TOGGLE_LAYERS',

  // Mark Actions
  ADD_MARK: marks.ADD_MARK,
  DELETE_MARK: marks.DELETE_MARK,
  SELECT_MARK: 'SELECT_MARK',
  SET_PARENT_MARK: marks.SET_PARENT_MARK,
  UPDATE_MARK_PROPERTY: marks.UPDATE_MARK_PROPERTY,

  // Rule Actions
  RULES_ADD_SCALE_TO_GROUP: 'RULES_ADD_SCALE_TO_GROUP',
  RULES_ADD_LEGEND_TO_GROUP: 'RULES_ADD_LEGEND_TO_GROUP',
  RULES_ADD_AXIS_TO_GROUP: 'RULES_ADD_AXIS_TO_GROUP',
  RULES_SET_PROPERTY: 'RULES_SET_PROPERTY',
  RULES_DISABLE_PROPERTY: 'RULES_DISABLE_PROPERTY',
  RULES_RESET_PROPERTY: 'RULES_RESET_PROPERTY',

  // Hint Actions
  HINTS_ON: 'HINTS_ON',
  DISPLAY_HINTS: 'DISPLAY_HINTS',
  CLEAR_HINTS: 'CLEAR_HINTS',

  // Scales
  ADD_SCALE: scales.ADD_SCALE,
  UPDATE_SCALE_PROPERTY: scales.UPDATE_SCALE_PROPERTY,
  SHOW_SCALE_INSPECTOR: 'SHOW_SCALE_INSPECTOR',
  SELECT_SCALE: 'SELECT_SCALE',

  // Walkthrough Actions
  SET_ACTIVE_WALKTHROUGH: 'SET_ACTIVE_WALKTHROUGH',
  SET_ACTIVE_STEP: 'SET_ACTIVE_STEP',
  SET_WALKTHROUGH: 'SET_WALKTHROUGH',
  SET_WALKTHROUGH_ON: 'SET_WALKTHROUGH_ON'
};

Object.freeze(module.exports);
