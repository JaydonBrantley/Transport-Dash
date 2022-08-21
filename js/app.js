//SWEET ALERTS
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
    setColor('#swap-ckv',green);
    $('.ckv-green').slideToggle('.ckv-green');
  setTimeout(function(){
    $('.ckv-blue').slideToggle('.ckv-blue');
  }, 500);
  }
  
  else if($('.ckv-green').css('display')=='none') {
    setColor('#swap-ckv',blue);
    $('.ckv-blue').slideToggle('.ckv-blue');
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
    setColor('#switchviews-crossville',gold);
    $('.cross-blue').slideToggle('.cross-blue');
  setTimeout(function(){
    $('.cross-gold').slideToggle('.cross-gold');
  }, 500);
  }
  
  else if($('.cross-blue').css('display')=='none') {
    setColor('#switchviews-crossville',blue);
    $('.cross-gold').slideToggle('.cross-gold');
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
    setColor('#switchviews-mcminnville',blue);
    $('.minn-red').slideToggle('.minn-red');
  setTimeout(function(){
    $('.minn-blue').slideToggle('.minn-blue');
  }, 500);
  }
  
  else if($('.minn-red').css('display')=='none') {
    setColor('#switchviews-mcminnville',red);
    $('.minn-blue').slideToggle('.minn-blue');
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