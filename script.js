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
var regexName = /^[A-Z][a-z]{3,15}$/;
var profile = {};

function checkNames(){
    var fnInput = document.getElementById("inputFN");
    var lnInput = document.getElementById("inputLN");
    var fnerror = document.getElementById("fnError");
    var lnerror = document.getElementById("lnError");
    try{
        if (fnInput.value.length < 3){
            throw "Invalid User Name!";
        }
        fnInput.style.background = "";
        lnInput.style.background = "";
        fnerror.style.display = "none";
        lnerror.style.display = "none";
        fnerror.innerHTML = "";
        lnerror.innerHTML = "";
    }
    catch(msg){
        fnerror.style.display = "block";
        fnerror.innerHTML = msg;
        fnInput.style.background = "rgb(255,233,233)";
        lnerror.style.display = "block";
        lnerror.innerHTML = msg;
        lnInput.style.background = "rgb(255,233,233)";
    }
}

function checkPassword(){
    
}

function checkEmail(){
    
}

function checkPhone(){
    
}

function createEventListeners(){
    var firstname = document.getElementById("inputFn");
    var lastname = document.getElementById("inputLN");
    var email = document.getElementById("inputEM");
    if (firstname.addEventListener){
        firstname.addEventListener("change", checkNames, false);
        lastname.addEventListener("change", checkNames, false);
        email.addEventListener("change", checkEmail, false);
    }else if(firstname.attachEvent){
        firstname.attachEvent("onchange", checkNames);
        lastname.attachEvent("onchange", checkNames);
        email.attachEvenet("onchange", checkEmail);
    }
}






if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}




















