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
        
        Mobile: {
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

      
      
  


      
