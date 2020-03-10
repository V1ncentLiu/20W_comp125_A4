/*
    Subject: COMP-125
    Project Name: Assignment 4 
    Author: Peitong Liu 
    ID: 300913117
*/

"use strict";

//Regex for fields.
var regexForPhone = /^[0-9]{10}$/;
var regexCdnZip = /^([A-Z]\d[A-Z]\s?\d[A-Z]\d)$/;
var regexUsaZip = /^[0-9]{5}(?:-[0-9]{4})?$/;
var regexEmail = /^[_a-zA-Z0-9]+(\.[_a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*(\.[a-z]{2,6})$/;
var regexPwd = /^[a-zA-Z0-9]{8,12}$/;
var regexName = /^[A-Z]*[a-z]{3,15}$/;

function checkFName(){
    var fnInput = document.getElementById("inputFN");    
    var fnLabel = document.getElementById("lblFN");
	var fnCell = document.getElementById("cellFN");
    try{
        if (regexName.test(fnInput) === false){
            throw "Invalid first name!";
        }
        fnCell.style.background = "";                
        fnLabel.innerHTML = "First Name";        
    }
    catch(msg){
        fnLabel.innerHTML = msg;
        fnCell.style.background = "rgb(255,233,233)";
    }
}

function checkLName(){
    var lnInput = document.getElementById("inputLN");    
    var lnLabel = document.getElementById("lblLN");
	var lnCell = document.getElementById("cellLN");
    try{
        if (regexName.test(lnInput) === false){
            throw "Invalid last name!";
        }
        lnCell.style.background = "";                
        lnLabel.innerHTML = "Last Name";        
    }
    catch(msg){
        lnLabel.innerHTML = msg;
        lnCell.style.background = "rgb(255,233,233)";
    }
}

function checkPassword(){
    
}

function checkEmail(){
    
}

function checkPhone(){
    
}

function createEventListeners(){
    var firstname = document.getElementById("inputFN");
    var lastname = document.getElementById("inputLN");
    var email = document.getElementById("inputEM");
    if (firstname.addEventListener){
        firstname.addEventListener("change", checkFName, false);
        lastname.addEventListener("change", checkNames, false);
        email.addEventListener("change", checkEmail, false);
    }else if(firstname.attachEvent){
        firstname.attachEvent("onchange", checkFName);
        lastname.attachEvent("onchange", checkNames);
        email.attachEvenet("onchange", checkEmail);
    }
}

if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}




















