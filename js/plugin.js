$(document).ready(function(){
  function readURL(input, imgControlName) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $(imgControlName).attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#imag").change(function() {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview";
    readURL(this, imgControlName);
    $('.preview1').addClass('it');
    $('.btn-rmv1').addClass('rmv');
  });
  $("#imag2").change(function() {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview2";
    readURL(this, imgControlName);
    $('.preview2').addClass('it');
    $('.btn-rmv2').addClass('rmv');
  });
  $("#imag3").change(function() {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview3";
    readURL(this, imgControlName);
    $('.preview3').addClass('it');
    $('.btn-rmv3').addClass('rmv');
  });
  $("#imag4").change(function() {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview4";
    readURL(this, imgControlName);
    $('.preview4').addClass('it');
    $('.btn-rmv4').addClass('rmv');
  });
  $("#imag5").change(function() {
    // add your logic to decide which image control you'll use
    var imgControlName = "#ImgPreview5";
    readURL(this, imgControlName);
    $('.preview5').addClass('it');
    $('.btn-rmv5').addClass('rmv');
  });
  
  $("#removeImage1").click(function(e) {
    e.preventDefault();
    $("#imag").val("");
    $("#ImgPreview").attr("src", "");
    $('.preview1').removeClass('it');
    $('.btn-rmv1').removeClass('rmv');
  });
  $("#removeImage2").click(function(e) {
    e.preventDefault();
    $("#imag2").val("");
    $("#ImgPreview2").attr("src", "");
    $('.preview2').removeClass('it');
    $('.btn-rmv2').removeClass('rmv');
  });
  $("#removeImage3").click(function(e) {
    e.preventDefault();
    $("#imag3").val("");
    $("#ImgPreview3").attr("src", "");
    $('.preview3').removeClass('it');
    $('.btn-rmv3').removeClass('rmv');
  });
  $("#removeImage4").click(function(e) {
    e.preventDefault();
    $("#imag4").val("");
    $("#ImgPreview4").attr("src", "");
    $('.preview4').removeClass('it');
    $('.btn-rmv4').removeClass('rmv');
  });
  $("#removeImage5").click(function(e) {
    e.preventDefault();
    $("#imag5").val("");
    $("#ImgPreview5").attr("src", "");
    $('.preview5').removeClass('it');
    $('.btn-rmv5').removeClass('rmv');
  });



  // Slide When Click 
  $(".fa-chevron-down").click(function () {
    $(".sub-categories").slideToggle();
  });


  // Take Clone 
  $(".add").on('click', function(e) {
    e.preventDefault();
    // console.log("add");
    var liItem = $('.add_section').last().clone(true); 

    liItem.appendTo(".modal-body");

  });

  // Remove
  $(".remove").on('click', function(e) {
    $(this).closest(".add_section").remove();
    e.preventDefault();
  });
  
  });


  $(function() {
    $( "#player-list" ).sortable();
  });

  $(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});



  $(function() {
    $( "#player-list-sub" ).sortable();
  });




  function myFunctionChangePassword() {
    var myBtn = document.getElementById("show"),
        myInput = document.getElementById("myInput");

        myBtn.onclick = function() {
          'use strict';
          if(this.textContent === "إظهار") {
            myInput.setAttribute("type" , "text");
            this.textContent = "إخفاء";
          }else {
            myInput.setAttribute("type" , "password");
            this.textContent = "إظهار";
          }
        }
  }


  function myFunction() {
    document.getElementById("demo").innerHTML = "تم إضافة القسم بنجاح ";
  }

