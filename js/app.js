//SWEET ALERTS
/*
$(document).on('click','#btnUserProfile',function(){
    Swal.fire({
        title: 'Profile',
        html: `<div class="container align-left">
                <p><b>User:</b> FirstName LastName</p>
                <p><b>Phone:</b> 931-123-4567</p>
                <p><b>Email:</b> firstnamelastname@example.com</p>
                </div>`,
    })
})
*/

$(document).on('click','#btnAdminLogin',function(){
/*    var formData = {
      Email: $("#txtLoginEmail").val(),
      Password: $("#txtLoginPassword").val(),
    };

    $.ajax({
      type: "POST",
      url: "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
      data: formData,
      dataType: "json",
      encode: false,
      success: function(response){
        console.log(response);
        console.log(formData);
      }
    }).done(function (data) {
    });
*/
    var form = new FormData();
    form.append("Email", $("#txtLoginEmail").val());
    form.append("Password", $("#txtLoginPassword").val());

    var settings = {
      "url": "https://aiw.ojr.mybluehost.me/api/verifyAdminLogin.php",
      "method": "POST",
      "timeout": 0,
      "processData": false,
      "mimeType": "multipart/form-data",
      "contentType": false,
      "data": form
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
    });
})

$(document).on('click','#btnAdminSignup',function(){
      var form = new FormData();
      form.append("Email", $("#txtSignupEmail").val());
      form.append("EmpID", $("#txtSignupEmpID").val());
      form.append("FName", $("#txtSignupFName").val());
      form.append("LName", $("#txtSignupLName").val());
      form.append("Phone", $("#txtSignupPhone").val());
      form.append("Title", $("#txtSignupTitle").val());
      form.append("Status", $("#txtSignupStatus").val());
      form.append("Password", $("#txtSignupPassword").val());
  
      var settings = {
        "url": "https://aiw.ojr.mybluehost.me/api/newAdmin.php",
        "method": "POST",
        "timeout": 0,
        "processData": false,
        "mimeType": "multipart/form-data",
        "contentType": false,
        "data": form
      };
  
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
  })

$(document).on('click','#btnLogout',function(){
    Swal.fire({
        title: 'Logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#bfbfbf',
        confirmButtonText: 'Logout!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logged Out!',
          )
        }
      })
      
})


//SAVE TO PDF
$(document).on('click','#saveToPDF',function(){
  var ckvPage = document.getElementById('#ckv-page');
  html2pdf(ckvPage);
})


//CHANGE BUTTON COLOR
function setColor(btn, color){
  $(btn).css('background-color',color);
    $(btn).css('border',color);
}


//SWITCH VIEWS BTN-COOKEVILLE
$(document).on('click','#swap-ckv',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let green = "rgb(50,162,71)";

  if($('.ckv-blue').css('display')=='none') {
    setColor('#swap-ckv',/*green*/);
    $('.ckv-green').slideToggle('.ckv-green');
  setTimeout(function(){
    $('.ckv-blue').slideToggle('.ckv-blue');
  }, 500);
  }
  
  else if($('.ckv-green').css('display')=='none') {
    setColor('#swap-ckv',/*blue*/);
    $('.ckv-blue').slideToggle('.ckv-blue');
  setTimeout(function(){
    $('.ckv-green').slideToggle('.ckv-green');
  }, 500);
  };
})

//COMPARE VIEWS BTN-COOKEVILLE
$(document).on('click','#compare-ckv',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let green = "rgb(50,162,71)";

  if($('.compare-ckv').css('display')=='none') {
    $('.ckv-green').slideToggle('.ckv-green');
  setTimeout(function(){
    $('.compare-ckv').slideToggle('.compare-ckv');
  }, 500);
  }
  
  else if($('.ckv-green').css('display')=='none') {
    setColor('#swap-ckv',/*blue*/);
    $('.compare-ckv').slideToggle('.compare-ckv');
  setTimeout(function(){
    $('.ckv-green').slideToggle('.ckv-green');
  }, 500);
  };
})

//SWITCH VIEWS BTN-CROSSVILLE
$(document).on('click','#swap-cross',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let gold = "rgb(167,169,54)";

  if($('.cross-gold').css('display')=='none') {
    setColor('#swap-cross',/*blue*/);
    $('.cross-blue').slideToggle('.cross-blue');
  setTimeout(function(){
    $('.cross-gold').slideToggle('.cross-gold');
  }, 500);
  }
  
  else if($('.cross-blue').css('display')=='none') {
    setColor('#swap-cross',/*gold*/);
    $('.cross-gold').slideToggle('.cross-gold');
  setTimeout(function(){
    $('.cross-blue').slideToggle('.cross-blue');
  }, 500);
  };
})

//COMPARE VIEWS BTN-CROSSVILLE
$(document).on('click','#compare-cross',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let gold = "rgb(167,169,54)";

  if($('.compare-cross').css('display')=='none') {
    setColor('#swap-cross',/*blue*/);
    $('.cross-blue').slideToggle('.cross-blue');
  setTimeout(function(){
    $('.compare-cross').slideToggle('.compare-cross');
  }, 500);
  }
  
  else if($('.cross-blue').css('display')=='none') {
    setColor('#swap-cross',/*gold*/);
    $('.compare-cross').slideToggle('.compare-cross');
  setTimeout(function(){
    $('.cross-blue').slideToggle('.cross-blue');
  }, 500);
  };
})

//SWITCH VIEWS BTN-MCMINNVILLE
$(document).on('click','#swap-minn',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let red = "rgb(238,29,35)";

  if($('.minn-blue').css('display')=='none') {
    setColor('#swap-minn',/*red*/);
    $('.minn-red').slideToggle('.minn-red');
  setTimeout(function(){
    $('.minn-blue').slideToggle('.minn-blue');
  }, 500);
  }
  
  else if($('.minn-red').css('display')=='none') {
    setColor('#swap-minn',/*blue*/);
    $('.minn-blue').slideToggle('.minn-blue');
  setTimeout(function(){
    $('.minn-red').slideToggle('.minn-red');
  }, 500);
  };
})

//COMPARE VIEWS BTN-MCMINNVILLE
$(document).on('click','#compare-minn',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let red = "rgb(238,29,35)";

  if($('.compare-minn').css('display')=='none') {
    setColor('#swap-minn',/*red*/);
    $('.minn-red').slideToggle('.minn-red');
  setTimeout(function(){
    $('.compare-minn').slideToggle('.compare-minn');
  }, 500);
  }
  
  else if($('.minn-red').css('display')=='none') {
    setColor('#swap-minn',/*blue*/);
    $('.compare-minn').slideToggle('.compare-minn');
  setTimeout(function(){
    $('.minn-red').slideToggle('.minn-red');
  }, 500);
  };
})


//DRAGULA FUNCTION
function init(){
  dragula([document.querySelector('.container-green'),
           document.querySelector('.container-blue'),
           document.querySelector('.container-algood'),
           document.querySelector('.cross-gold'),
           document.querySelector('.cross-blue'),
           document.querySelector('.minn-blue'),
           document.querySelector('.minn-red'),
  ]);
}