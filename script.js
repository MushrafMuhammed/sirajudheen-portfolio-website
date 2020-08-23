$(document).ready(
  (onsubmit = () => {
    $("#conact-form").validate({
      rules: {
        Name: {
          required: true,
          
        },
        Place: {
          required: true,
        },
        Email: {
          required: true,
          email: true
        },
        
        mobile: {
          required: true,
          number: true,
          minlength: 10
        },
        Commend:{
          required:true
        }
      },

      messages: {
        name: {
          required: "enter your name",
        },
      },

      submitHandler: function (form) {
        $.ajax({
          url:
            "https://script.google.com/macros/s/AKfycbxWtuIGHnUMC-ciRKbAvJJbRSXCgkyoaM-RfQoycA/exec",
          data: $("#contact-form").serialize(),
          method: "post",
          success: function (response) {
            alert("Form submitted successfully");
            
            window.location.href = "#home-section";
          },
          error: function (err) {
            alert("Something Error");
          },
        });
      },
    });
  })
);
