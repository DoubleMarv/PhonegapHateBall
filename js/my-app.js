// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Pull to refresh content
var ptrContent = $$('.pull-to-refresh-content');
 
// Add 'refresh' listener on it
ptrContent.on('pullend', function (e) {
        // Emulate 2s loading
        setTimeout(function () {
            $$('.printo').html("<span>balls</span>");
            myApp.pullToRefreshDone(); // After we refreshed page content, we need to reset pull to refresh component to let user pull it again:
        }, 2000);
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
// myApp.onPageInit('homepage', function (page) {
   
// })

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }

    if (page.name === 'homepage') {

var question = $$('#question');
var printo = $$('#print');
var string = 'ass';


var genitems = [
' fuck knows', 
' how should I know', 
' god you are fucking boring',
' so many questions...God you are so clingy and needy' 
];


var howitems = [
' that depends', 
' with great difficulty', 
' with regret',
' in a way that will be so painful, it never be funny later' 
];


var whenitems = [
' when you die, which will be soon', 
' when you eventually clean your toilet bowl', 
' when you stop drinking piss',
' when you leave' 
];


$$('.question').on('keyup', function (e) {
string = $$(this).val();
});


$$('.scriptwhammer').on('click', function (e) {
//
var randomWhen = whenitems[Math.floor(Math.random()*whenitems.length)];
var randomHow = howitems[Math.floor(Math.random()*howitems.length)];
var randomHGen = genitems[Math.floor(Math.random()*genitems.length)];
//
if (string.includes('when')||string.includes('When')||string.includes('WHEN')){
    $$('.printo').html("<span>"+randomWhen+"</span>");
} else if (string.includes('how')||string.includes('How')||string.includes('HOW')) {
    $$('.printo').html("<span>"+randomHow+"</span>");
} else {
    $$('.printo').html("<span>"+randomHGen+"</span>");
}
//
});

//end homepage
    }
})
