

var offices = [
    {
        name: "Mumbai",
        location: "301/302, HARE KRISHAN BHAVAN, CHARAT SINGH COLONY, OPP. DRAGON FLY HOTEL, NEAR SOLITAIRE PARK, ANDHERI (EAST), MUMBAI - 400093",
        phone: "022-40627000 (100 LINE)",
    },

    {
        name: "Delhi",
        location: "1826, GROUND FLOOR, OLD AMARANATH BUILDING, BHAGIRATH PALACE, DELHI - 110 006",
        phone: "011-45660219/41522123/45572208",
    },

    {
        name: "Telangana",
        location: "221, BOLTON ROAD, LAMBA COMPOUND, SECUNDERABAD, TELANGANA - 500 003",
        phone: "9920033396",
    },

    {
        name: "Gujarat",
        location: "ROOM NO. 4, 1ST FLOOR, 147, 148, 149, 150, 151, 156, 144, 146, VILLAGE KHANDIWADA, TALUKA, WAGHODIA, VADODARA - 391510, GUJARAT",
        phone: "9825885277",
    },


    {
        name: "Pune",
        location: "",
        phone: "9372889581",
    },



]

var officeLocationItem = document.getElementById('office-location-item-mobile');
var officeName = document.getElementById('office-location-mobile');
var officeAddress = document.getElementById('office-address-mobile');
var officePhone = document.getElementById('office-phone-mobile');


var count = 0;


var officeCounter = setInterval(imageCounts, 5000);

function imageCounts(){
    
    if(count<offices.length){
        console.log("Current content is /t" + count + '/n' + offices[count].name);
        var officeElement = offices[count++];

        officeLocationItem.style.visibility = 'hidden';

        officeName.textContent = officeElement.name;
        officeAddress.textContent = officeElement.location;
        officePhone.textContent = officeElement.phone;
        
        officeLocationItem.style.visibility = 'visible';
    }

    else{
        count = 0;

        var officeElement = offices[count++];
        officeName.textContent = officeElement.name;
        officeAddress.textContent = officeElement.location;
        officePhone.textContent = officeElement.phone;
        console.log("Current content is /t" + count);
    }

};

