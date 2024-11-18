









console.log(test.display());

// hotel reservation
var guestgroup = new Array();
$('#submit').click(reservation);
function reservation(){
    var guest={
        name: $('#name').val()
        checkin: $('#checkin').val()
// complete this
    }
    alert(guest.name + "Reserve A roomo");
    guestgroup.push(guest);
    console.log(guestgroup);
}