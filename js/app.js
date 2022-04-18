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

//SWITCH VIEWS BTN-COOKEVILLE
$(document).on('click','#switchviews',function(){
  let delayFirst = 200;
  let delaySecond = 200;

  if($('.container-blue').css('display')=='none') {
    $('.container-green').slideToggle('.container-green');
  setTimeout(function(){
    $('.container-blue').slideToggle('.container-blue');
  }, 500);
  }
  
  else if($('.container-green').css('display')=='none') {
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

  if($('.containerblue-crossville').css('display')=='none') {
    $('.containergold-crossville').slideToggle('.containergold-crossville');
  setTimeout(function(){
    $('.containerblue-crossville').slideToggle('.containerblue-crossville');
  }, 500);
  }
  
  else if($('.containergold-crossville').css('display')=='none') {
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

  if($('.containerred-mcminnville').css('display')=='none') {
    $('.containerblue-mcminnville').slideToggle('.containerblue-mcminnville');
  setTimeout(function(){
    $('.containerred-mcminnville').slideToggle('.containerred-mcminnville');
  }, 500);
  }
  
  else if($('.containerblue-mcminnville').css('display')=='none') {
    $('.containerred-mcminnville').slideToggle('.containerred-mcminnville');
  setTimeout(function(){
    $('.containerblue-mcminnville').slideToggle('.containerblue-mcminnville');
  }, 500);
  };
})


//DRAGULA FUNCTION
function init(){
  dragula([document.querySelector('.container-green')]);
}