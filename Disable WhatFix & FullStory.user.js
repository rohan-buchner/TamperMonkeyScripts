// ==UserScript==
// @name         Disable WhatFix & FullStory
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://localhost/*
// @grant        none
// ==/UserScript==

TenantSettings.ShowFullStory = false;
TenantSettings.ShowWhatfix = false;

(function() {
    'use strict';

    TenantSettings.ShowFullStory = false;
    TenantSettings.ShowWhatfix = false;

    // Your code here...
})();