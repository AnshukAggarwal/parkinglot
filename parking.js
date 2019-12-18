//alert("Hey");

window.onload=pageReady;

function pageReady(){
var parking = {
  name : "Humber Parking",
  slots : 10,
  booked : 0,
  checkAvailability : function() {
    return this.slots - this.booked; 
  }
};

// Update the HTML
// Get element

var parkName = document.getElementById('parkingName'); 
parkName.innerHTML = parking.name;                   

// Get element
var parkSlots = document.getElementById('slots');    
parkSlots.textContent = parking.checkAvailability(); 
var buttonYes=document.getElementById('enterbtn');
var buttonNo=document.getElementById('exitbtn');
buttonYes.onclick=carEnter;
buttonNo.onclick=carExit;

// carEnter should only be invoked if the slots is > 0
	
function carEnter(){
	if(parking.checkAvailability()>0){
	parking.booked += 1;
	parkSlots.textContent = parking.checkAvailability();
		if (parking.checkAvailability()<=0){
			parkSlots.textContent="No Space Avialable";
		}
	}

}

//carExit should stop if the slots available has reached the max.

function carExit(){	
	if(parking.checkAvailability()<10){
	parking.slots += 1;
	parkSlots.textContent = parking.checkAvailability();
	}
}

}//end of onload.