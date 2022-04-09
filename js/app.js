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

//SWITCH VIEWS BTN
$(document).on('click','#switchviews',function(){
  let delayFirst = 500;
  let delaySecond = 1000;

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
