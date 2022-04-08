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
  $('.container-green').slideToggle('.container-green');
})
