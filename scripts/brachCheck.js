




const delhiObject = {
    'contact': '011 – 45660219/ 011 – 41522123',
    'email': 'delhi@teghcables.com',
    'address': '1826, GROUND FLOOR, OLD AMARANATH BUILDING, BHAGIRATH PALACE, DELHI - 110 006'
}

const mumbaiObject = {
'contact': '022-40627000 (100 LINE)',
'email': 'enquiry@teghindia.com',
'address': '301/302, HAR KRISHAN BHAVAN, CHARAT SINGH COLONY, OPP. DRAGON FLY HOTEL, NEAR SOLITAIRE PARK, ANDHERI (EAST), MUMBAI - 400093'
}

console.log('Value of C at starting is' + valueOfC);


var contactItems = document.getElementsByClassName('branch-contact');
var emailItems = document.getElementsByClassName('branch-email');
var addressItems = document.getElementsByClassName('branch-address');

var delhiAddress = document.getElementById('delhi-address-home');
var mumbaiAddress = document.getElementById('mumbai-address-home');


var valueOfC;

var checkCookie = function() {

    var lastCookie = document.cookie; // 'static' memory between function calls

    return function() {

        var currentCookie = document.cookie;

        if (currentCookie != lastCookie) {

            // something useful like parse cookie, run a callback fn, etc.

            lastCookie = currentCookie; // store latest cookie
            valueOfC = currentCookie;

        }
    };
}();

window.setInterval(checkCookie, 100);

if(valueOfC){


    for(var i=0; i<contactItems.length; i++){
        contactItems[i].innerHTML = delhiObject.contact;
    }

    for(var i=0; i<emailItems.length;i++){
        emailItems[i].innerHTML = delhiObject.email;
    }

    for(var i=0; i<addressItems.length;i++){
        addressItems[i].innerHTML = delhiObject.address;
    }
}

else{

    for(var i=0; i<contactItems.length; i++){
        contactItems[i].innerHTML = mumbaiObject.contact;
    }

    for(var i=0; i<emailItems.length;i++){
        emailItems[i].innerHTML = mumbaiObject.email;
    }

    for(var i=0; i<addressItems.length;i++){
        addressItems[i].innerHTML = mumbaiObject.address;
    }
}