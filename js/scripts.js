// SAVE FOR LISTS
// var Contact = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// };

// var Address = {
//   fullAddress: function() {
//     return this.streetName + ", " + this.cityName + ", " + this.stateName + ", " + this.zipCode;
//   },

//   valid: function() {
//     var valid = true;

//     if (this.streetName === "") {
//       alert("Invalid street");
//       valid = false;
//     }

//     var code;
//     if (this.cityName === "") {
//       alert("Invalid city");
//       valid = false;
//     } else if (this.cityName !== undefined) {
//       for (var i = 0; i < this.cityName.length; i++) {
//         code = this.cityName.charCodeAt(i);
//         if ((code !== 32) && (code !== 39) && (code !== 45) && (code !== 46)) {
//           if ((code < 65) || ((code > 90) && (code < 97)) || (code >= 122)) {
//             alert("Invalid city")
//             valid = false;
//           }
//         }
//       }; 
//     }
//     if (this.zipCode.length !== 5) {
//       alert("Invalid zip code");
//       valid = false;
//     } else if (this.zipCode % 1 !== 0 && this.zipCode !== undefined) {
//       alert("Invalid zip code");
//       valid = false;
//     }
//     return valid;  
//   }
// };

// var Phone = {
//   areaCode: function() {
//     return "(" + this.firstThreeNum + ")";
//   },

//   mainNumber: function() {
//     return this.nextThreeNum + "-" + this.lastFourNum;
//   },

//   valid: function() {
//     if ((this.firstThreeNum.length !== 3) || (this.nextThreeNum.length !== 3) || (this.lastFourNum.length !== 4)) {
//       alert("Invalid phone");
//       return false;
//     } else if (((this.firstThreeNum % 1 !== 0) || (this.nextThreeNum % 1 !== 0) || (this.lastFourNum % 1 !== 0)) && ((this.firstThreeNum !== undefined) || (this.nextThreeNum !== undefined) || (this.lastFourNum !== undefined))) {
//       alert("Invalid phone");
//       return false;
//     }
//   } 
// };


$(document).ready(function() {
  $("#add-task").click(function() {
    $("#additional-tasks").append('<div class="additional-task">' +
                            '<div class="form-group">' + 
                              '<label for="new-to-do"></label>' +
                              '<input type="text" class="form-control" id="new-task">' +
                            '</div>' +
                            '</div>')
  });
  
  // CHANGE TO LISTS
  // $("#add-phone").click(function() {
  //   $("#new-phones").append('<div class="new-phone">' +
  //                               '<div class="form-group">' + 
  //                                 '<label for="new-first-three">Phone</label>' + '<br />' +
  //                                 '( <input type="text" class="form-control new-first-three" maxlength="3"> ) ' +
  //                                 '<label for="new-next-three"> </label>' +
  //                                 '<input type="text" class="form-control new-next-three" maxlength="3">  - ' +
  //                                 '<label for="new-last-four"> </label>' +
  //                                 '<input type="text" class="form-control new-last-four" maxlength="4">' +
  //                               '</div>' +
  //                             '</div>')
  // });

  $('form#new-to-do').submit(function(event) {
    event.preventDefault();

    var inputtedTask = $('#new-task').val();

    //SAVE FOR LISTS
    // var newContact = Object.create(Contact);
    // newContact.firstName = inputtedFirstName;
    // newContact.lastName = inputtedLastName;

    // newContact.addresses = [];
    // newContact.phones = [];

    // $('.new-address').each(function() {
    //   var inputtedStreet = $(this).find('input.new-street').val();
    //   var inputtedCity = $(this).find('input.new-city').val();
    //   var inputtedState = $(this).find('select.new-state').val();
    //   var inputtedZip = $(this).find('input.new-zip').val();

    //   var newAddress = Object.create(Address);
    //   newAddress.streetName = inputtedStreet;
    //   newAddress.cityName = inputtedCity;
    //   newAddress.stateName = inputtedState;
    //   newAddress.zipCode = inputtedZip;

    //   if (newAddress.valid() !== false) {
    //     newContact.addresses.push(newAddress);
    //   };
    // });
    
    $("ul#tasks").append("<li><span class='task'>" + inputtedTask + "</span></li>");

    // SAVE FOR LISTS
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();

    //   $("#show-contact h2").text(newContact.fullName());
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);

    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //   });

    //   $("ul#phones").text("");
    //   newContact.phones.forEach(function(phone) {
    //     $("ul#phones").append("<li>" + phone.areaCode() + " " + phone.mainNumber() + "</li>");
    //   });
    // });

    this.reset();
  });
});
