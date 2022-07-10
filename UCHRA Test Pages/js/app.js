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


//CHANGE BUTTON COLOR
function setColor(btn, color){
  $(btn).css('background-color',color);
    $(btn).css('border',color);
}


//SWITCH VIEWS BTN-COOKEVILLE
$(document).on('click','#switchviews',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let green = "rgb(50,162,71)";

  if($('.container-blue').css('display')=='none') {
    setColor('#switchviews',green);
    $('.container-green').slideToggle('.container-green');
  setTimeout(function(){
    $('.container-blue').slideToggle('.container-blue');
  }, 500);
  }
  
  else if($('.container-green').css('display')=='none') {
    setColor('#switchviews',blue);
    $('.container-blue').slideToggle('.container-blue');
  setTimeout(function(){
    $('.container-green').slideToggle('.container-green');
  }, 500);
  };
})

//SWITCH VIEWS BTN-CROSSVILLE
$(document).on('click','#switchviews-crossville',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let gold = "rgb(167,169,54)";

  if($('.containerblue-crossville').css('display')=='none') {
    setColor('#switchviews-crossville',gold);
    $('.containergold-crossville').slideToggle('.containergold-crossville');
  setTimeout(function(){
    $('.containerblue-crossville').slideToggle('.containerblue-crossville');
  }, 500);
  }
  
  else if($('.containergold-crossville').css('display')=='none') {
    setColor('#switchviews-crossville',blue);
    $('.containerblue-crossville').slideToggle('.containerblue-crossville');
  setTimeout(function(){
    $('.containergold-crossville').slideToggle('.containergold-crossville');
  }, 500);
  };
})

//SWITCH VIEWS BTN-MCMINNVILLE
$(document).on('click','#switchviews-mcminnville',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  let blue = "rgb(71,117,185)";
  let red = "rgb(238,29,35)";

  if($('.containerred-mcminnville').css('display')=='none') {
    setColor('#switchviews-mcminnville',blue);
    $('.containerblue-mcminnville').slideToggle('.containerblue-mcminnville');
  setTimeout(function(){
    $('.containerred-mcminnville').slideToggle('.containerred-mcminnville');
  }, 500);
  }
  
  else if($('.containerblue-mcminnville').css('display')=='none') {
    setColor('#switchviews-mcminnville',red);
    $('.containerred-mcminnville').slideToggle('.containerred-mcminnville');
  setTimeout(function(){
    $('.containerblue-mcminnville').slideToggle('.containerblue-mcminnville');
  }, 500);
  };
})


//DRAGULA FUNCTION
function init(){
  dragula([document.querySelector('.container-green'),
           document.querySelector('.container-blue'),
           document.querySelector('.container-algood'),
           document.querySelector('.containerblue-crossville'),
           document.querySelector('.containergold-crossville'),
           document.querySelector('.containerred-mcminnville'),
           document.querySelector('.containerblue-mcminnville'),
  ]);
}