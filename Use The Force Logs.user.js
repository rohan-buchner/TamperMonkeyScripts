// ==UserScript==
// @name         Use The Force Logs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/*
// @grant        none
// ==/UserScript==

// define a new console
var filteredConsole = (function(currentConsole) {
    function test(args) {
         switch (typeof args) {
             case 'object': {
                 var props = Object.assign({}, { force: false }, args);
                 return props.force;
             }
             case 'string':{
                 return args.indexOf('>>') >= 0;
             }
             default:
                 return false;
        }
        return false;
    }

    var overrides = {
        debug: function(args){
            if (test(args)) {
                delete args.force;
                currentConsole.debug(args);
            }
        },
        log: function(args){
            if (test(args)) {
                delete args.force;
                currentConsole.log(args);
            }
        },
        info: function (args) {
            if (test(args)) {
                delete args.force;
                currentConsole.info(args);
            }
        },
        warn: function (args) {
            if (test(args)) {
                delete args.force;
                currentConsole.warn(args);
            }
        },
        error: function (args) {
            if (test(args)) {
                delete args.force;
                currentConsole.error(args);
            }
        }
    };
    return Object.assign({}, currentConsole, overrides);
}(window.console));

//Then redefine the old console
window.console = filteredConsole