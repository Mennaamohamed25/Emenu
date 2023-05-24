// $(document).ready(function(){
//   function readURL(input, imgControlName) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function(e) {
//         $(imgControlName).attr('src', e.target.result);
//       }
//       reader.readAsDataURL(input.files[0]);
//     }








//   }
  
//   $("#imag").change(function() {
//     // add your logic to decide which image control you'll use
//     var imgControlName = "#ImgPreview";
//     readURL(this, imgControlName);
//     $('.preview1').addClass('it');
//     $('.btn-rmv1').addClass('rmv');
//   });
//   $("#imag2").change(function() {
//     // add your logic to decide which image control you'll use
//     var imgControlName = "#ImgPreview2";
//     readURL(this, imgControlName);
//     $('.preview2').addClass('it');
//     $('.btn-rmv2').addClass('rmv');
//   });
//   $("#imag3").change(function() {
//     // add your logic to decide which image control you'll use
//     var imgControlName = "#ImgPreview3";
//     readURL(this, imgControlName);
//     $('.preview3').addClass('it');
//     $('.btn-rmv3').addClass('rmv');
//   });
//   $("#imag4").change(function() {
//     // add your logic to decide which image control you'll use
//     var imgControlName = "#ImgPreview4";
//     readURL(this, imgControlName);
//     $('.preview4').addClass('it');
//     $('.btn-rmv4').addClass('rmv');
//   });
//   $("#imag5").change(function() {
//     // add your logic to decide which image control you'll use
//     var imgControlName = "#ImgPreview5";
//     readURL(this, imgControlName);
//     $('.preview5').addClass('it');
//     $('.btn-rmv5').addClass('rmv');
//   });
  
//   $("#removeImage1").click(function(e) {
//     e.preventDefault();
//     $("#imag").val("");
//     $("#ImgPreview").attr("src", "");
//     $('.preview1').removeClass('it');
//     $('.btn-rmv1').removeClass('rmv');
//   });
//   $("#removeImage2").click(function(e) {
//     e.preventDefault();
//     $("#imag2").val("");
//     $("#ImgPreview2").attr("src", "");
//     $('.preview2').removeClass('it');
//     $('.btn-rmv2').removeClass('rmv');
//   });
//   $("#removeImage3").click(function(e) {
//     e.preventDefault();
//     $("#imag3").val("");
//     $("#ImgPreview3").attr("src", "");
//     $('.preview3').removeClass('it');
//     $('.btn-rmv3').removeClass('rmv');
//   });
//   $("#removeImage4").click(function(e) {
//     e.preventDefault();
//     $("#imag4").val("");
//     $("#ImgPreview4").attr("src", "");
//     $('.preview4').removeClass('it');
//     $('.btn-rmv4').removeClass('rmv');
//   });
//   $("#removeImage5").click(function(e) {
//     e.preventDefault();
//     $("#imag5").val("");
//     $("#ImgPreview5").attr("src", "");
//     $('.preview5').removeClass('it');
//     $('.btn-rmv5').removeClass('rmv');
//   });



//   // Slide When Click 
//   $(".fa-chevron-down").click(function () {
//     $(".sub-categories").slideToggle();
//   });


//   // Take Clone 
//   $(".add").on('click', function(e) {
//     e.preventDefault();
//     // console.log("add");
//     var liItem = $('.add_section').last().clone(true); 

//     liItem.appendTo(".modal-body");

//   });

//   // Remove
//   $(".remove").on('click', function(e) {
//     $(this).closest(".add_section").remove();
//     e.preventDefault();
//   });
  
//   });


//   $(function() {
//     $( "#player-list" ).sortable();
//   });
 

 
// //PASSWORD
//   $(document).ready(function() {
//     $("#show_hide_password a").on('click', function(event) {
//         event.preventDefault();
//         if($('#show_hide_password input').attr("type") == "text"){
//             $('#show_hide_password input').attr('type', 'password');
//             $('#show_hide_password i').addClass( "fa-eye-slash" );
//             $('#show_hide_password i').removeClass( "fa-eye" );
//         }else if($('#show_hide_password input').attr("type") == "password"){
//             $('#show_hide_password input').attr('type', 'text');
//             $('#show_hide_password i').removeClass( "fa-eye-slash" );
//             $('#show_hide_password i').addClass( "fa-eye" );
//         }
//     });
// });



// //PASSWORD
// $(document).ready(function() {
//   $("#show_hide_password2 a").on('click', function(event) {
//       event.preventDefault();
//       if($('#show_hide_password2 input').attr("type") == "text"){
//           $('#show_hide_password2 input').attr('type', 'password');
//           $('#show_hide_password2 i').addClass( "fa-eye-slash" );
//           $('#show_hide_password2 i').removeClass( "fa-eye" );
//       }else if($('#show_hide_password2 input').attr("type") == "password"){
//           $('#show_hide_password2 input').attr('type', 'text');
//           $('#show_hide_password2 i').removeClass( "fa-eye-slash" );
//           $('#show_hide_password2 i').addClass( "fa-eye" );
//       }
//   });
// });



// //PASSWORD

// $(document).ready(function() {
//   $("#show_hide_password3 a").on('click', function(event) {
//       event.preventDefault();
//       if($('#show_hide_password3 input').attr("type") == "text"){
//           $('#show_hide_password3 input').attr('type', 'password');
//           $('#show_hide_password3 i').addClass( "fa-eye-slash" );
//           $('#show_hide_password3 i').removeClass( "fa-eye" );
//       }else if($('#show_hide_password3 input').attr("type") == "password"){
//           $('#show_hide_password3 input').attr('type', 'text');
//           $('#show_hide_password3 i').removeClass( "fa-eye-slash" );
//           $('#show_hide_password3 i').addClass( "fa-eye" );
//       }
//   });
// });

// //ADD PRODUCTS PAGES
// function readURL(input) {
//   if (input.files && input.files[0]) {
//       var reader = new FileReader();
//       reader.onload = function(e) {
//           $('#imagePreview').css('background-image', 'url('+e.target.result +')');
//           $('#imagePreview').hide();
//           $('#imagePreview').fadeIn(650);
//       }
//       reader.readAsDataURL(input.files[0]);
//   }
// }
// $("#imageUpload").change(function() {
//   readURL(this);
// });

// // function readURL(input) {
// //   if (input.files && input.files[0]) {
// //       var reader = new FileReader();
// //       reader.onload = function(e) {
// //           $('#imagePreview').css('background-image', 'url('+e.target.result +')');
// //           $('#imagePreview').hide();
// //           $('#imagePreview').fadeIn(650);
// //       }
// //       reader.readAsDataURL(input.files[0]);
// //   }
// // }
// // $("#imageUpload").change(function() {
// //   readURL(this);
// // });
// // function readURL(input) {
// //   if (input.files && input.files[0]) {
// //       var reader = new FileReader();
// //       reader.onload = function(e) {
// //           $('#imagePreview2').css('background-image', 'url('+e.target.result +')');
// //           $('#imagePreview2').hide();
// //           $('#imagePreview2').fadeIn(650);
// //       }
// //       reader.readAsDataURL(input.files[0]);
// //   }
// // }
// // $("#imageUpload").change(function() {
// //   readURL(this);
// // });



//   $(function() {
//     $( "#player-list-sub" ).sortable();
//   });




//   // $(function myFunctionChangePassword() {
//   //   var myBtn = document.getElementById("show"),
//   //       myInput = document.getElementById("myInput");

//   //       myBtn.onclick = function() {
//   //         'use strict';
//   //         if(this.textContent === "إظهار") {
//   //           myInput.setAttribute("type" , "text");
//   //           this.textContent = "إخفاء";
//   //         }else {
//   //           myInput.setAttribute("type" , "password");
//   //           this.textContent = "إظهار";
//   //         }
//   //       }
//   // }


// //   function readURL(input) {
// //     if (input.files && input.files[0]) {
// //         var reader = new FileReader();
// //         reader.onload = function(e) {
// //             $('#imagePreview3').css('background-image', 'url('+e.target.result +')');
// //             $('#imagePreview3').hide();
// //             $('#imagePreview3').fadeIn(650);
// //         }
// //         reader.readAsDataURL(input.files[0]);
// //     }
// // }
// // $("#imageUpload").change(function() {
// //     readURL(this);
// // });



// $('#file-upload').change(function() {
//   var filepath = this.value;
//   var m = filepath.match(/([^\/\\]+)$/);
//   var filename = m[1];
//   var filename0 = m[2];
  
// var uploadText = document.querySelector('.uploadText');
// var createDiv = document.createElement("div");
// uploadText.appendChild(createDiv)
//   var att = document.createAttribute("class");     
//   att.value = "test";                           
//   createDiv.setAttributeNode(att);
//   createDiv.innerHTML =   filename;
// var closeButton = document.createElement('i');
//   var att1 = document.createAttribute("class");     
//   att1.value = "fa fa-close close-btn";                           
//   closeButton.setAttributeNode(att1);
// $(closeButton).appendTo($('.test'))
// $(closeButton).click(function () {
//     $(this).parent().remove();
// });
// });
// //category page 
// //editing functionality
// // function editImg(input) {
// //   if (input.files && input.files[0]) {
// //     var reader = new FileReader();
// //     reader.onload = function(e) {
// //         $('.edit-img-section').css('background-image', 'url('+e.target.result +')');
// //         $('.edit-img-section').hide();
// //         $('.edit-img-section').fadeIn(650);
// //     }
// //     reader.readAsDataURL(input.files[0]);
// // }
// // }
// // $(".change-photo").change((e)=>{
// //   console.log(e)
// //   editImg(this)
// // })

// //
// // function editImg(input) {
// //   if (input.files && input.files[0]) {
// //       var reader = new FileReader();
// //       reader.onload = function(e) {
// //           $('.edit-img-section').css('background-image', 'url('+e.target.result +')');
// //           $('.edit-img-section').hide();
// //           $('.edit-img-section').fadeIn(650);
// //       }
// //       reader.readAsDataURL(input.files[0]);
// //   }
// // }
// // $(".change-photo").change(function() {
// //   editImg(this);
// // });


$(document).ready(function () {
  function readURL(input, imgControlName) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $(imgControlName).attr("src", e.target.result);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  $("#imag").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview";
    readURL(this, imgControlName);
    $(".preview1").addClass("it");
    $(".btn-rmv1").addClass("rmv");
  });

  $("#imag2").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview2";
    readURL(this, imgControlName);
    $(".preview2").addClass("it");
    $(".btn-rmv2").addClass("rmv");
  });

  $("#imag3").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview3";
    readURL(this, imgControlName);
    $(".preview3").addClass("it");
    $(".btn-rmv3").addClass("rmv");
  });

  $("#imag4").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview4";
    readURL(this, imgControlName);
    $(".preview4").addClass("it");
    $(".btn-rmv4").addClass("rmv");
  });
  $("#imag5").change(function () {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview5";
    readURL(this, imgControlName);
    $(".preview5").addClass("it");
    $(".btn-rmv5").addClass("rmv");
  });

  $("#removeImage1").click(function (e) {
    e.preventDefault();
    $("#imag").val("");
    $("#ImgPreview").attr("src", "");
    $(".preview1").removeClass("it");
    $(".btn-rmv1").removeClass("rmv");
  });

  $("#removeImage2").click(function (e) {
    e.preventDefault();
    $("#imag2").val("");
    $("#ImgPreview2").attr("src", "");
    $(".preview2").removeClass("it");
    $(".btn-rmv2").removeClass("rmv");
  });

  $("#removeImage3").click(function (e) {
    e.preventDefault();
    $("#imag3").val("");
    $("#ImgPreview3").attr("src", "");
    $(".preview3").removeClass("it");
    $(".btn-rmv3").removeClass("rmv");
  });

  $("#removeImage4").click(function (e) {
    e.preventDefault();
    $("#imag4").val("");
    $("#ImgPreview4").attr("src", "");
    $(".preview4").removeClass("it");
    $(".btn-rmv4").removeClass("rmv");
  });

  $("#removeImage5").click(function (e) {
    e.preventDefault();
    $("#imag5").val("");
    $("#ImgPreview5").attr("src", "");
    $(".preview5").removeClass("it");
    $(".btn-rmv5").removeClass("rmv");
  });

  // Slide When Click
  $(".fa-chevron-down").click(function () {
    $(".sub-categories").slideToggle();
  });

  // Take Clone
  $(".add").on("click", function (e) {
    e.preventDefault();
    // console.log("add btn");
    var liItem = $(".add_section").last().clone(true);
    liItem.appendTo(".modal-body");
  });

  // Remove
  $(".remove").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".add_section").remove();
  });

  $(function () {
    $("#player-list").sortable();
  });

  //PASSWORD

  $("#show_hide_password a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password input").attr("type") == "text") {
      $("#show_hide_password input").attr("type", "password");
      $("#show_hide_password i").addClass("fa-eye-slash");
      $("#show_hide_password i").removeClass("fa-eye");
    } else if ($("#show_hide_password input").attr("type") == "password") {
      $("#show_hide_password input").attr("type", "text");
      $("#show_hide_password i").removeClass("fa-eye-slash");
      $("#show_hide_password i").addClass("fa-eye");
    }
  });

  //PASSWORD
  $("#show_hide_password2 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password2 input").attr("type") == "text") {
      $("#show_hide_password2 input").attr("type", "password");
      $("#show_hide_password2 i").addClass("fa-eye-slash");
      $("#show_hide_password2 i").removeClass("fa-eye");
    } else if ($("#show_hide_password2 input").attr("type") == "password") {
      $("#show_hide_password2 input").attr("type", "text");
      $("#show_hide_password2 i").removeClass("fa-eye-slash");
      $("#show_hide_password2 i").addClass("fa-eye");
    }
  });

  //PASSWORD
  $("#show_hide_password3 a").on("click", function (event) {
    event.preventDefault();
    if ($("#show_hide_password3 input").attr("type") == "text") {
      $("#show_hide_password3 input").attr("type", "password");
      $("#show_hide_password3 i").addClass("fa-eye-slash");
      $("#show_hide_password3 i").removeClass("fa-eye");
    } else if ($("#show_hide_password3 input").attr("type") == "password") {
      $("#show_hide_password3 input").attr("type", "text");
      $("#show_hide_password3 i").removeClass("fa-eye-slash");
      $("#show_hide_password3 i").addClass("fa-eye");
    }
  });

  //ADD PRODUCTS PAGES
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#imagePreview").css(
          "background-image",
          "url(" + e.target.result + ")"
        );
        $("#imagePreview").hide();
        $("#imagePreview").fadeIn(650);
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function () {
    readURL(this);
  });

  $(function () {
    $("#player-list-sub").sortable();
  });

  //   function readURL(input) {
  //     if (input.files && input.files[0]) {
  //         var reader = new FileReader();
  //         reader.onload = function(e) {
  //             $('#imagePreview3').css('background-image', 'url('+e.target.result +')');
  //             $('#imagePreview3').hide();
  //             $('#imagePreview3').fadeIn(650);
  //         }
  //         reader.readAsDataURL(input.files[0]);
  //     }
  // }
  // $("#imageUpload").change(function() {
  //     readURL(this);
  // });

  $("#file-upload").change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    var filename0 = m[2];

    var uploadText = document.querySelector(".uploadText");
    var createDiv = document.createElement("div");
    uploadText.appendChild(createDiv);
    var att = document.createAttribute("class");
    att.value = "test";
    createDiv.setAttributeNode(att);
    createDiv.innerHTML = filename;
    var closeButton = document.createElement("i");
    var att1 = document.createAttribute("class");
    att1.value = "fa fa-close close-btn";
    closeButton.setAttributeNode(att1);
    $(closeButton).appendTo($(".test"));
    $(closeButton).click(function () {
      $(this).parent().remove();
    });
  });
});






