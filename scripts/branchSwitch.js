


/**
 * Location Objects
 */

const delhiObject = {
        'contact': '011-45660219/41522123/45572208',
        'email': 'enquiry@teghindia.com',
        'address': '1826, GROUND FLOOR, OLD AMARANATH BUILDING, BHAGIRATH PALACE, DELHI - 110 006'
}

const mumbaiObject = {
    'contact': '022-40627000 (100 LINE)',
    'email': 'enquiry@teghindia.com',
    'address': '301/302, HARE KRISHAN BHAVAN, CHARAT SINGH COLONY, OPP. DRAGON FLY HOTEL, NEAR SOLITAIRE PARK, ANDHERI (EAST), MUMBAI - 400093'
}


var mumbaiBranchItem = document.getElementById('mumbai-branch-container');
var delhiBranchItem = document.getElementById('delhi-branch-container');


/** 
 * Elements to change
 * 1. Phone
 * 2. Email
 * 3. Address
*/

var contactItems = document.getElementsByClassName('branch-contact');
var emailItems = document.getElementsByClassName('branch-email');
var addressItems = document.getElementsByClassName('branch-address');



mumbaiBranchItem.addEventListener('click', function(){

    mumbaiBranchItem.style.backgroundColor = "blue";
    delhiBranchItem.style.backgroundColor = 'transparent';

    for(var i=0; i<contactItems.length; i++){
        contactItems[i].innerHTML = mumbaiObject.contact;
    }

    for(var i=0; i<emailItems.length;i++){
        emailItems[i].innerHTML = mumbaiObject.email;
    }

    for(var i=0; i<addressItems.length;i++){
        addressItems[i].innerHTML = mumbaiObject.address;
    }
    
})

delhiBranchItem.addEventListener('click', function(){

    delhiBranchItem.style.backgroundColor = "blue";
    mumbaiBranchItem.style.backgroundColor = 'transparent';


    for(var i=0; i<contactItems.length; i++){
        contactItems[i].innerHTML = delhiObject.contact;
    }

    for(var i=0; i<emailItems.length;i++){
        emailItems[i].innerHTML = delhiObject.email;
    }

    for(var i=0; i<addressItems.length;i++){
        addressItems[i].innerHTML = delhiObject.address;
    }
})