$(document).on('click','#btnUserProfile',function(){
    Swal.fire({
        title: 'Profile',
        html: `<div class="container">
                <p><b>User:</b> FirstName LastName</p>
                <p><b>Phone:</b> 931-123-4567</p>
                <p><b>Email:</b> firstnamelastname@example.com</p>
                </div>`,
        showConfirmButton: false
    })
})