// ==UserScript==
// @name         SatAM Fivey
// @namespace    .
// @version      0.1
// @description  Gives FiveThirtyEight's Fivey a slight makeover...
// @author       Blizihguh
// @match        https://projects.fivethirtyeight.com/2020-election-forecast/
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

const GesticulatingTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Gesticulating.png';
const ThinkingTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Thinking-2.png';
const PointingTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Pointing-3.png';
const JumpingTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Jumping-2.png';
const FlowersTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Flowers-2.png';
const ScratchingTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Scratch-2.png';
const AxeTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Axe-2.png';
const BuffTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Buff-2.png';
const CigTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Cig-2.png';
const MainTails = 'https://raw.githubusercontent.com/Blizihguh/SatAM-FiveThirtyEight/master/res/Tails-Main.png';

(function() {
    'use strict';
    // Change images
    // Main page
    addGlobalStyle('.fivey-wrap .fivey.waving { background-image: url("' + MainTails + '") !important; }'); // Main
    addGlobalStyle('.fivey-wrap .fivey.podcast { background-image: url("' + AxeTails + '") !important; }'); // Axe
    addGlobalStyle('.fivey-wrap .fivey.jar { background-image: url("' + GesticulatingTails + '") !important; }'); // Gesticulating
    addGlobalStyle('.fivey-wrap .fivey.calculator { background-image: url("' + ScratchingTails + '") !important; }'); // Scratching head
    addGlobalStyle('.fivey-wrap .fivey.professor { background-image: url("' + ThinkingTails + '") !important; }'); // Thinking
    addGlobalStyle('.fivey-wrap .fivey.shrugging { background-image: url("' + FlowersTails + '") !important; }'); // Holding Flowers
    addGlobalStyle('.fivey-wrap .fivey.foam-finger { background-image: url("' + PointingTails + '") !important; }'); // Pointing
    addGlobalStyle('.fivey-wrap .fivey.star-struck { background-image: url("' + CigTails + '") !important; }'); // Axe
    // Main page hidden
    addGlobalStyle('.fivey-wrap .fivey.jumping { background-image: url("' + JumpingTails + '") !important; }'); // Jumping
    // State page
    addGlobalStyle('.fivey-wrap .fivey.flag { background-image: url("' + BuffTails + '") !important; }'); // Buff

    // Change Text
    var top = document.getElementsByClassName('fivey-text waving left peek lede')[0];
    top.innerHTML = 'Hey there! I’m Miles "Tails" Prower, and I’m here to show you around. Each of these maps is an example of how things might shake out on Election Day.';
})();