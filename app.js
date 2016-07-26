/**
 * Created by joecrick on 7/25/16.
 */
var can = require("can");
var $ = require("jquery");

// Add bit-c3 tag
require("bit-c3");
// Use stache
require("can/view/stache/stache");

var bitC3template = can.stache('<bit-c3>' +
	'<bit-c3-data>' +
	'<bit-c3-data-column key="dataSource" value="{dataSource}" />' +
	'</bit-c3-data>' +
	'</bit-c3>' +
	'<p>Test</p>');

$(function() {

	$("body").append(bitC3template({
		dataSource: new can.List([1, 2, 3])
	}));

	// d3.selectAll("p").style("color", "white");
});

