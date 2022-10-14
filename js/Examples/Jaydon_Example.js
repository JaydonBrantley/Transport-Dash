// New Session
var arrUsers;
$(document).on('click','#btnLogin',function(){
    /*$('#navBarLogin').fadeToggle();
    setTimeout(function(){
        $('#navBarFull').fadeToggle();
     },375); */
     let strUsername = $('#txtLoginEmail').val();
     let strPassword = $('#txtLoginPassword').val();
     $.getJSON('https://www.swollenhippo.com/DS3870/newSession.php?strUsername=' + strUsername + '&strPassword=' + strPassword, function(data){
        if(data.Outcome == 'Error'){
            console.log('Found Error');
            alert("Error");
        } else {
            console.log('You are verified');
            sessionStorage.setItem("SessionID",data.Outcome);
            newFile = 'UsersContainer.html';
            $('#navBarLogin').fadeToggle();
            $('#divMain').fadeToggle();
            setTimeout(function(){
                $('#navBarFull').fadeToggle();
                $('#divMain').empty();
                $('#divMain').load(newFile);
                $('#divMain').fadeToggle();
            },375);
            if(verifySession(sessionStorage.getItem('SessionID')) == true){
                fillUserTable(sessionStorage.getItem('SessionID'));
            }
        }
    })
})



// Add New Task By Session ID
var arrTasks;
$(document).on('click','#btnAddTask',function(){
    /*$('#navBarLogin').fadeToggle();
    setTimeout(function(){
        $('#navBarFull').fadeToggle();
     },375); */
     let strTaskName = $('#txtTaskName').val();
     let strDescription = $('#txtTaskDescription').val();
     let strDirections = $('#txtTaskDirections').val();
     let intExpectedMinutes = $('#txtExpectedMinutes').val();
     let strCategoryID = $('#txtTaskCategoryID').val();
     addTaskBySession(sessionStorage.getItem('SessionID'), strTaskName, strDescription, strDirections, intExpectedMinutes, strCategoryID);
})







$(document).on('click','#btnLogout',function(){
    loginFile = 'LoginContainer.html';
    $('#navBarFull').fadeToggle();
    logoutSession(sessionStorage.getItem('SessionID'));
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(loginFile);
        $('#divMain').fadetoggle();
        $('#navBarLogin').fadeToggle();
    },375);
})




function verifySession(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/verifySession.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function logoutSession(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/logout.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'User Session Ended'){



            return true;
        } else {
            return false;
        }
    })
}


function fillUserTable(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamMembersBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.Email + '</td><td>' + field.FirstName + '</td><td>' + field.LastName + '</td><td>' + field.Phone + '</td></tr>';
            $('#tblUserHours tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}

$(document).on('click','.btnUserEdit',function() {
    let strUserName = $(this).attr('data-id');
    $('#btnSaveUserEdit').attr('data-id',strEmail);
    $.each(arrTeamMembers, function(i,field){
        if(field.Email == strEmail){
            $("#txtEditUserUsername").val(field.Email);
            $("#txtEditUserFirstName").val(field.FirstName);
            $("#txtEditUserLastName").val(field.LastName);
            $("#txtEditUserPhone").val(field.Phone);    
        }
    })
});

$(document).on('click','#btnSaveUserEdit',function() {
    let strSessionID = sessionStorage.getItem('SessionID');
    if(verifySessionID(strSessioID) == 'Valid'){
        let strUserName = $(this).attr('data-id');
        let strTeamCode = '';
        $.each(arrTeamMembers, function(i,field){
            if(field.Email == strEmail){
                strTeamCode = field.Team;  
            }
        })
        let strNewUsername = $("#txtEditUserUsername").val();
        let strFirstName = $("#txtEditUserFirstName").val();
        let strLastName = $("#txtEditUserLastName").val();
        let strPhone = $("#txtEditUserPhone").val();    
        console.log(strFirstName);
        $.getJSON('https://www.swollenhippo.com/DS3870/updateUserDetailsBySessionID.php?strSessionID='+ strSessionID + '&strUsername=' + strEmail + '&strFirstName=' + strFirstName + '&strLastName=' + strLastName + '&strPhone' + strPhone + '&strTeamCode=' + strTeamCode , function (data) {
            if(data.Outcome == 'Error'){
                alert('Error');
            } else {
                fillUserEditTable(strSessionID);
                alert('Success');
            }
        })
    } else {
        window.location.href="login.html";
    }
    
});

function addTaskBySession(strSession, strTaskName, strDescription, strDirections, intExpectedMinutes, strCategoryID){
            $.getJSON('https://www.swollenhippo.com/DS3870/addNewTaskBySessionID.php?strSessionID=' + strSessionID + '&strTaskName=' + strTaskName + '&strDescription=' + strDescription + '&strDirections=' + strDirections + '&intExpectedMinutes=' + intExpectedMinutes + '&strCategoryID=' + strCategoryID + '', function(data){
                $.each(data, function(result){
                    if(result.Outcome == 'Error'){
                        alert('Found Error');
                    }
                    else {
                        Swal.close();
                        Swal.fire({
                            title: 'Confirmation',
                            text: 'Congrats! You created a new task.',
                        })
                    }
                })
            })
}


        

// Login - Register - Add Team

$(document).on('click','#btnRegisterPage',function(){
    $('#divLoginContainer').fadeToggle();
    setTimeout(function(){
        $('#divRegisterContainer').fadeToggle();
    },375);
})

$(document).on('click','#btnLoginPage',function(){
    $('#divRegisterContainer').fadeToggle();
    setTimeout(function(){
        $('#divLoginContainer').fadeToggle();
        $('#divPandaLoginContainer').fadeToggle();
    },375);
})

$(document).on('click','#btnAddTeamPage',function(){
    $('#divRegisterContainer').fadeToggle();
    setTimeout(function(){
        $('#divAddTeamsContainer').fadeToggle();
    },375);
})


$(document).ready(function(){
    homeFile = 'LoginContainer.html';
    $('#divMain').load(homeFile);
    console.log('Document Ready!');
})



//Title
$(document).on('click','#navTitle',function(){
    titleFile = 'LoginContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(titleFile);
        $('#divMain').fadeToggle();
    },375);
 })



//Teams
 $(document).on('click','#navTeams',function(){
    teamFile = 'TeamsContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(teamFile);
        $('#divMain').fadeToggle();
    },375);
 })



//Users
$(document).on('click','#navUsers',function(){
    usersFile = 'UsersContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(usersFile);
        fillUserHours();
        $('#divMain').fadeToggle();
    },375);
    
 })



 //Locations
 $(document).on('click','#navLocations',function(){
    locationsFile = 'LocationsContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(locationsFile);
        fillLocations();
        $('#divMain').fadeToggle();
    },375);
 })



 //Materials
 $(document).on('click','#navMaterials',function(){
    materialsFile = 'MaterialsContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(materialsFile);
        fillMaterials();
        $('#divMain').fadeToggle();
    },375);
 })



//Schedules
 $(document).on('click','#navSchedules',function(){
    schedulesFile = 'SchedulesContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(schedulesFile);
        fillSchedules();
        $('#divMain').fadeToggle();
    },375);
 })


//Tasks
$(document).on('click','#navTasks',function(){
    tasksFile = 'TasksContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(tasksFile);
        fillTasks();
        $('#divMain').fadeToggle();
    },375);
 })


//Problems
/*
 $(document).on('click','#navProblems',function(){
    problemsFile = 'ProblemsContainer.html';
    $('#divMain').fadeToggle();
    setTimeout(function(){
        $('#divMain').empty();
        $('#divMain').load(problemsFile);
        fillProblems();
        $('#divMain').fadeToggle();
    },375);
 })
 */





/*
            TEAMS PAGE
*/
$(document).on('click','#btnTeamAdd',function(){
    Swal.fire({
        title: 'Add New Team',
        html:  `<div class="form-group">
                <input type="text" id="txtTeamName" class="mx-auto swal2-input" placeholder="Team Name">
                <input type="text" id="txtTeamContact" class="mx-auto swal2-input" placeholder="Team Phone">                
                <input type="text" id="txtTeamAddress" class="mx-auto swal2-input" placeholder="Team Street Address">
                <input type="text" id="txtTeamZIP" class="mx-auto swal2-input" placeholder="Team ZIP">
                <input type="text" id="txtTeamState" class="mx-auto swal2-input" placeholder="Team State">
                <hr />
                <input type="email" id="txtTeamOwner" class="mx-auto swal2-input" placeholder="Owner Email">
                <input type="text" id="txtTeamUserFirstName" class="mx-auto swal2-input" placeholder="First Name">
                <input type="text" id="txtTeamUserLastName" class="mx-auto swal2-input" placeholder="Last Name">
                
                <input type="text" id="txtTeamUserPhone" class="mx-auto swal2-input" placeholder="Owner Phone">
                <input type="password" id="txtTeamUserPassword" class="mx-auto swal2-input" placeholder="Password">
                
                <div class="button-box mx-auto mt-4">
                <button id="btnSwalAddTeamConfirm" class="btn btn-primary">Add Team</button>
                </div>
                </div>`,
        showConfirmButton: false,
        customClass: 'swal-wide'
        
    })

    $(document).on('click','#btnSwalAddTeamConfirm',function(){
        console.log('New Team Created');
        let strTeamName= $('#txtTeamName').val();
        let strTeamAddress= $('#txtTeamAddress').val();
        let strTeamZIP= $('#txtTeamZIP').val();
        let strTeamState= $('#txtTeamState').val();
        let strTeamContact= $('#txtTeamContact').val();
        let strTeamOwner= $('#txtTeamOwner').val();
        let strTeamAPIKey= 'e6568bde-ef31-4d9e-a54f-8715f6ff9727';
        let strTeamUserFirstName= $('#txtTeamUserFirstName').val();
        let strTeamUserLastName= $('#txtTeamUserLastName').val();
        let strTeamUserPhone= $('#txtTeamUserPhone').val();
        let strTeamUserPassword= $('#txtTeamUserPassword').val();

            $.getJSON('https://www.swollenhippo.com/DS3870/addTeam.php?strTeamName=' + strTeamName + '&strStreetAddress=' + strTeamAddress + '&strZIP=' + strTeamZIP + '&strState=' + strTeamState + '&strContactNumber=' + strTeamContact + '&strOwner=' + strTeamOwner + '&strAPIKey=' + strTeamAPIKey + '&strFirstName=' + strTeamUserFirstName + '&strLastName=' + strTeamUserLastName + '&strPhone=' + strTeamUserPhone + '&strPassword=' + strTeamUserPassword + '', function(data){
                    if(data.Outcome == 'Error'){
                        console.log('Found Error');
                        alert("Error");
                    } else {
                        console.log('You are verified');
                        alert('Look in email for verification email');
                        Swal.close();
                    }
            })
        })
    })

//update team
$('#btnUpdateTeam').click(function(){
    console.log('Update Team');
    let strSessionID= $('#txtSessionID').val();
    let strTeamName= $('#txtTeamName').val();
    let strStreetAddress= $('#txtStreetAddress').val();
    let strZip= $('#txtZip').val();
    let strState= $('#txtState').val();
    let strContactNumber= $('#txtContactNumber').val();
    let strOwner= $('#txtOwner').val();
    let strStatus= $('#txtStatus').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/updateTeamBySessionID.php?strSessionID=' + strSessionID + '&strTeamName=' + strTeamName + '&strStreetAddress=' + strStreetAddress + '&strZip=' + strZip + '&strState=' + strState + '&strContactNumber=' + strContactNumber +  '&strOwner=' + strOwner + '&strrStatus=' + strStatus + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                alert('Team Updated!');
            }
        })
    })
})

//get Team Info
$(document).on('click','#btnTeamDetails',function(){
    console.log('get User Team Info By SessionID');
    let strSessionID= $('#txtSessionID').val();

    $.getJSON('https://www.swollenhippo.com/DS3870/getUserTeamInfoBySessionID.php?strSessionID=' + strSessionID + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                console.log('You are verified')
                sessionStorage.setItem("SessionID",data.Outcome)
                if(verifySession(sessionStorage.getItem('SessionID'))==true){
                    fillTeamTable(sessionStorage.getItem('SessionID'));
                }
            }
        })
    })
})


function getTeamInfoBySessionID(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/verifySession.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function fillTeamTable(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamMembersBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.Email + '</td><td>' + field.FirstName + '</td><td>' + field.LastName + '</td><td>' + field.Phone + '</td></tr>';
            $('#tblUserHours tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}



 /*
            USERS PAGE
*/
//  Users Add User
$(document).on('click','#btnUserAdd',function(){
    Swal.fire({
        title: 'Add User',
        html: 
            '<div class="form-group mt-1">'+
            '<input type="text" class="mx-auto swal2-input" id="txtUserName" placeholder="Username">'+
            '<input type="text" class="mx-auto swal2-input" id="txtFirstName" placeholder="First Name">'+
            '<input type="text" class="mx-auto swal2-input" id="txtLastName" placeholder="Last Name">'+
            '<input type="text" class="mx-auto swal2-input" id="txtPhone" placeholder="Phone">'+
            '<input type="password" class="mx-auto swal2-input" id="txtPassword" placeholder="Password">'+
            '<input type="text" class="mx-auto swal2-input" id="txtTeamCode" placeholder="Team Code">'+
            '<div class="button-box mt-4">'+
            '<button class="btn btn-primary">Add User</button>'+
            '</div>'+
            '</div>',
        showConfirmButton: false,
        /*preConfirm: () => {
            return [
                document.getElementById('frmUserAddFirst').value,
                document.getElementById('frmUserAddLast').value
            ]
        }*/
    })
    $('#btnAddUser').click(function(){
        console.log('Add User');
        let strUserName= $('#txtUserName').val();
        let strFirstName= $('#txtFirstName').val();
        let strLastName= $('#txtLastName').val();
        let strPhone= $('#txtPhone').val();
        let strPassword= $('#txtPassword').val();
        let strTeamCode= $('#txtTeamCode').val();
    
        $.getJSON('https://www.swollenhippo.com/DS3870/addUser.php?strUserName=' + strUserName + '&strFirstName=' + strFirstName + '&strLastName=' + strLastName + '&strPhone=' + strPhone + '&strPassword=' + strPassword + '&strTeamCode=' + strTeamCode + '', function(data){
            $.each(data, function(result){
                if(result.Outcome == 'Error'){
                    alert('Found Error');
                }
                else {
                    alert('New User Created');
                }
            })
        })
    })
})

//verify account
$('#btnVerifyAccount').click(function(){
    console.log('Verify New User');
    let strUserName= $('#txtUserName').val();
    
    $.getJSON('https://www.swollenhippo.com/DS3870/verifyAccount.php?strUserName=' + strUserName + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                alert('You are verified');
            }
        })
    })
})

//  Users Add Image
 $(document).on('click','#btnUserImage',function(){
    Swal.fire({
        title: 'Add Image to User',
        input: 'file',
        inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload User Photo'
        }
    })
})

//  Users Set Hourly Rate
$(document).on('click','#btnUserRate',function(){
    Swal.fire({
        title: 'Set Hourly Rate to User',
        input: 'text',
        inputLabel: 'User\'s Hourly Rate',
        showCancelButton: true,
    })
})

//  Users Add Reminder
$(document).on('click','#btnUserReminder',function(){
    Swal.fire({
        title: 'Add Reminder to User',
        input: 'textarea',
        inputLabel: 'Reminder',
        showCancelButton: true,
    })
})


// Build Users Table
var arrUserHours
function fillUserHours(){
    $.getJSON('js/json/UsersHours.json', function(result){
        arrUserHours = result;
        $.each(result,function(i,user){
            console.log(user.First);
            console.log(document.getElementById("tblUserHours"));
            $('#tblUserHours tbody').append(buildUserTableRow(user));
        });
        $('#tblUserHours').DataTable();
    })
}


function buildUserTableRow(User){
    return '<tr><td>' + User.First + '</td><td>' + User.Last + '</td><td>' + User.Hours + '</td></tr>';
}










/*
            Locations Page
*/


//  Locations Create / Edit Campus Location
$(document).on('click','#btnLocCampus',function(){
    const { value:inputCampus } = Swal.fire({
        title: 'Create/Edit Location',
        input: 'select',
        inputOptions: {
            create: 'Create',
            'Existing': {
              placeholder1: 'Placeholder 1',
              placeholder2: 'Placeholder 2',
              placeholder3: 'Placeholder 3'
            },
          },
    })
})

//  Locations Create / Edit Building
$(document).on('click','#btnLocBuilding',function(){
    const { value:inputCampus } = Swal.fire({
        title: 'Create/Edit Building',
        input: 'select',
        inputOptions: {
            create: 'Create',
            'Existing': {
              placeholder1: 'Placeholder 1',
              placeholder2: 'Placeholder 2',
              placeholder3: 'Placeholder 3'
            },
          },
    })
})

//  Locations Create/Edit Room
$(document).on('click','#btnLocRoom',function(){
    const { value:inputCampus } = Swal.fire({
        title: 'Create/Edit Room',
        input: 'select',
        inputOptions: {
            create: 'Create',
            'Existing': {
              placeholder1: 'Placeholder 1',
              placeholder2: 'Placeholder 2',
              placeholder3: 'Placeholder 3'
            },
          },
    })
})

//  Locations Assign User to Location
$(document).on('click','#btnLocAssignUser',function(){
    Swal.fire({
        title: 'Assign User to Location',
        html: 
            '<div class="form-group">'+
            '<label for="frmUserAssign" class="mr-2">Assign User:</label>'+
            '<select class="form-control-md" id="frmUserAssign">'+
            '  <option>Steve</option>'+
            '  <option>John</option>'+
            '  <option>David</option>'+
            '  <option>Rick</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="frmUserAssignTo" class="mr-2">To:</label>'+
            '<select class="form-control-md" id="frmUserAssignTo">'+
            '  <option>Location 1</option>'+
            '  <option>Location 2</option>'+
            '  <option>Location 3</option>'+
            '  <option>Location 4</option>'+
            '</select>'+
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('frmUserAssign').value,
                document.getElementById('frmUserAssignTo').value
            ]
        }
    })
})

//update location
$('#btnUpdateLocationBySessionID').click(function(){
    console.log('Update Location By Session ID');
    let strSessionID= $('#txtSessionID').val();
    let strLocationID= $('#txtLocationID').val();
    let strCampus= $('#txtCampus').val();
    let strBuilding= $('#txtBuilding').val();
    let strRoom= $('#txtRoom').val();
    let strStatus= $('#txtStatus').val();

    
    $.getJSON('https://www.swollenhippo.com/DS3870/updateLocationBySessionID.php?strSessionID=' + strSessionID + '&strLocationID=' + strLocationID +'&strCampus=' + strCampus +'&strBuilding=' + strBuilding +'&strRoom=' + strRoom +'&strStatus=' + strStatus + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                Swal.fire(
                    'There was an error, please try again'
                )
            }
            else {
                Swal.close();
                Swal.fire({
                    title: 'Confirmation',
                    text: 'Your location was updated!',
                })
            }
        })
    })
})

//  Locations Assign Schedule to Location
$(document).on('click','#btnLocAssignSched',function(){
    Swal.fire({
        title: 'Assign Schedule to Location',
        html: 
            '<div class="form-group">'+
            '<label for="frmSchedAssign" class="mr-2">Assign User:</label>'+
            '<select class="form-control-md" id="frmSchedAssign">'+
            '  <option>Schedule 1</option>'+
            '  <option>Schedule 2</option>'+
            '  <option>Schedule 3</option>'+
            '  <option>Schedule 4</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="frmSchedAssignTo" class="mr-2">To:</label>'+
            '<select class="form-control-md" id="frmSchedAssignTo">'+
            '  <option>Location 1</option>'+
            '  <option>Location 2</option>'+
            '  <option>Location 3</option>'+
            '  <option>Location 4</option>'+
            '</select>'+
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('frmSchedAssign').value,
                document.getElementById('frmSchedAssignTo').value
            ]
        }
    })
})


// Build Locations Table
var arrLocations
function fillLocations(){
    $.getJSON('js/json/UsersHours.json', function(result){
        arrLocations = result;
        $.each(result,function(i,loc){
            //console.log(loc.UPC);
            console.log(document.getElementById("tblLocations"));
            $('#tblLocations tbody').append(buildLocationsTableRow(loc));
        });
        $('#tblLocations').DataTable();
    })
}


function buildLocationsTableRow(loc){
    return '<tr><td>' + loc.User + '</td><td>' + loc.Building + '</td><td>' + loc.Room + '</td><td>' + loc.Location + '</td><td>' + loc.Schedule + '</td></tr>';
}










/*
            Schedules Page
*/


//  Schedules Create
$(document).on('click','#btnSchedCreate',function(){
    Swal.fire({
        title: 'Create Schedule',
        input: 'text',
        inputLabel: 'Create Schedule',
        showCancelButton: true,
    })
})

//  Schedules Edit
$(document).on('click','#btnSchedEdit',function(){
    Swal.fire({
        title: 'Edit Schedule',
        html: 
            '<div class="form-group">'+
            '<label for="frmSchedChoose" class="mr-2">Choose Schedule:</label>'+
            '<select class="form-control-md" id="frmSchedChoose">'+
            '  <option>Schedule 1</option>'+
            '  <option>Schedule 2</option>'+
            '  <option>Schedule 3</option>'+
            '  <option>Schedule 4</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="frmSchedNew" class="mr-2">Edit:</label>'+
            '<input type="text" class="form-control" id="frmSchedNew">'+
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('frmSchedChoose').value,
                document.getElementById('frmSchedNew').value
            ]
        }
    })
})

//  Schedules Assign Task
$(document).on('click','#btnSchedAssign',function(){
    Swal.fire({
        title: 'Assign Task',
        html: 
            '<div class="form-group">'+
            '<label for="frmSchedChooseTask" class="mr-2">Assign Task:</label>'+
            '<select class="form-control-md" id="frmSchedChooseTask">'+
            '  <option>Task 1</option>'+
            '  <option>Task 2</option>'+
            '  <option>Task 3</option>'+
            '  <option>Task 4</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="frmSchedAssignTask" class="mr-2">To:</label>'+
            '<select class="form-control-md" id="frmSchedAssignTask">'+
            '  <option>Schedule 1</option>'+
            '  <option>Schedule 2</option>'+
            '  <option>Schedule 3</option>'+
            '  <option>Schedule 4</option>'+
            '</select>'+
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('frmSchedChooseTask').value,
                document.getElementById('frmSchedAssignTask').value
            ]
        }
    })
})

// Build Schedules Table
var arrSchedules
function fillSchedules(){
    $.getJSON('js/json/SchedulesFile.json', function(result){
        arrSchedules = result;
        $.each(result,function(i,sched){
            //console.log(loc.UPC);
            console.log(document.getElementById("tblSchedules"));
            $('#tblSchedules tbody').append(buildSchedulesTableRow(sched));
        });
        $('#tblSchedules').DataTable();
    })
}


function buildSchedulesTableRow(sched){
    return '<tr><td>' + sched.User + '</td><td>' + sched.TimeIn + '</td><td>' + sched.TimeOut + '</td><td>' + sched.Hours + '</td></tr>';
}



/* task page */
//create tasks
$(document).on('click','#btnTaskCreate',function(){
    Swal.fire({
        title: 'Create Tasks',
        input: '<div class="form-group mt-1">'+
        '<input type="text" class="mx-auto swal2-input" id="txtTaskName" placeholder="Task Name">'+
        '<input type="text" class="mx-auto swal2-input" id="txtTaskDescription" placeholder="Description">'+
        '<input type="text" class="mx-auto swal2-input" id="txtTaskDirections" placeholder="Directions">'+
        '<input type="text" class="mx-auto swal2-input" id="txtExpectedMinutes" placeholder="Expected Time (in Minutes)">'+
        '<input type="text" class="mx-auto swal2-input" id="txtTaskCategoryID" placeholder="Category ID">'+
        '<div class="button-box mt-4">'+
        '<button id="btnAddTask" class="btn btn-primary">Add Task</button>'+
        '</div>'+
        '</div>',
        showConfirmButton: false,
        showCancelButton: false,
    })
 /*
        $('#btnNewTasks').click(function(){
            console.log('New Task');
            let strSessionID= $('#txtSessionID').val();
            let strTaskName= $('#txtTaskName').val();
            let strDescription= $('#txtDescription').val();
            let strDirections= $('#txtDirections').val();
            let intExpectedMinutes= $('#txtExpectedMinutes').val();
            let strCategoryID= $('#txtCategoryID').val();
            
        })
*/
})


//get open tasks 
$('#btnOpenTasks').click(function(){
    console.log('Open Tasks');
    let strSessionID= $('#txtSessionID').val();
    
    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamOpenTasksBySessionID.php?strSessionID=' + strSessionID + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                console.log('You are verified')
                sessionStorage.setItem("SessionID",data.Outcome)
                if(verifySession(sessionStorage.getItem('SessionID'))==true){
                    fillTaskTable(sessionStorage.getItem('SessionID'));
                }
            }
        })
    })
})

function getOpenTasksBySessionID(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTaskBySessionID.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function fillTaskTable(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTasksBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.Task + '</td><td>' + field.Description + '</td><td>' + field.Hours + '</td></tr>';
            $('#tblTasks tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}

//get completed tasks
$('#btnCompleteTasks').click(function(){
    console.log('CompleteTasks');
    let strSessionID= $('#txtSessionID').val();
    
    $.getJSON('https://www.swollenhippo.com/DS3870/getTeamCompletedTasksBySessionID.php?strSessionID=' + strSessionID + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                console.log('You are verified');
                sessionStorage.setItem("SessionID",data.Outcome);
                if(verifySession(sessionStorage.getItem('SessionID')) == true){
                    fillTaskTable(sessionStorage.getItem('SessionID'));
                }
            }
        })
    })
})
function getCompletedTasksBySessionID(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTaskBySessionID.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function fillTaskTable(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTasksBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.Task + '</td><td>' + field.Description + '</td><td>' + field.Hours + '</td></tr>';
            $('#tblTasks tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}

//get tasks
$('#btnGetTasks').click(function(){
    console.log('Get Tasks');
    let strSessionID= $('#txtSessionID').val();
    
    $.getJSON('https://www.swollenhippo.com/DS3870/getTasksBySessionID.php?strSessionID=' + strSessionID + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                console.log('You are verified');
                sessionStorage.setItem("SessionID",data.Outcome);
                if(verifySession(sessionStorage.getItem('SessionID')) == true){
                    fillUserTable(sessionStorage.getItem('SessionID'));
                }
            }
        })
    })
})

function getTasksBySessionID(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTaskBySessionID.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function fillTaskTable(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getTasksBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.Task + '</td><td>' + field.Description + '</td><td>' + field.Hours + '</td></tr>';
            $('#tblTasks tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}

//edit tasks
$(document).on('click','#btnTaskEdit',function(){Swal.fire({
        title: 'Edit Tasks',
        html: 
            '<div class="form-group">'+
            '<label for="frmChooseTasks" class="mr-2">Tasks:</label>'+
            '<select class="form-control-md" id="frmChooseTasks">'+
            '  <option>Task 1</option>'+
            '  <option>Task 2</option>'+
            '  <option>Task 3</option>'+
            '  <option>Task 4</option>'+
            '</select>'+
            '</div>'+
            '<div class="form-group">'+
            '<label for="frmNewTasks" class="mr-2">Edit:</label>'+
            '<input type="text" class="form-control" id="frmNewTasks">'+
            '</div>',
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('frmChooseTasks').value,
                document.getElementById('frmNewTasks').value
            ]
        }
    })
})

//delete tasks
$(document).on('click','#btnTaskDelete',function(){
    const { value:inputTasks } = Swal.fire({
        title: 'Delete Task',
        input: 'select',
        inputOptions: {
            placeholder1: 'Task 1',
            placeholder2: 'Task 2',
            placeholder3: 'Task 3',
        },
    })
})


// Build Tasks Table
var arrTasks
function fillTasks(){
    $.getJSON('js/json/TasksFile.json', function(result){
        arrTasks = result;
        $.each(result,function(i,task){
            console.log(task.Task);
            console.log(document.getElementById("tblTasks"));
            $('#tblTasks tbody').append(buildTasksTableRow(task));
        });
        $('#tblTasks').DataTable();
    })
}


function buildTasksTableRow(task){
    return '<tr><td>' + task.Task + '</td><td>' + task.Description + '</td><td>' + task.Hours + '</td></tr>';
}





/*problems page*/

//report error
/*
$(document).on('click','#btnProblem',function(){
    Swal.fire({
        title: 'Problem',
        html: 
            '<div class="form-group mt-3">'+
            '<label for="frmProbDate" class="mr-2">Date:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmProbDate">'+
            '<label for="frmProbType" class="mr-2">Type:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmProbType">'+
            '<label for="frmProbDescription" class="mr-2">Description:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmProbDescription">'+
            '</div>',
        focusConfirm: false,
        showCancelButton: false,
        showConfirmButton: false,
        customClass: 'swal-wide',
        /*preConfirm: () => {
            return [
                document.getElementById('frmProbDate').value,
                document.getElementById('frmProbType').value,
                document.getElementById('frmProbDescription').value
            ]
        }
    }).then((result) => {
        Swal.fire(`
            ${result.value.AddProblemMessage}
            
    
        `.trim())

        $('#btnAddProblemBySessionID').click(function(){
            console.log('Add Problem by Session ID');
            let strSessionID= $('#txtSessionID').val();
            let strDescription= $('#txtDescription').val();
            let strLocationID= $('#txtLocationID').val();
            let strSubmitter= $('#txtSubmitter').val();
            
            $.getJSON('https://www.swollenhippo.com/DS3870/addProblemBySessionID.php?strSessionID=' + strSessionID + '&strDescription=' + strDescription + '&strLocationID=' + strLocationID + '&strSubmitter=' + strSubmitter + '', function(data){
                $.each(data, function(result){
                    if(result.Outcome == 'Error'){
                        alert('Found Error');
                    }
                    else {
                        alert('No worries, we will solve your problem!');
                    }
                })
            })
        })
        

     })

})
*/

//add problem (navProblems)
$('#navProblemsFull').click(function(){
    Swal.fire({
        title: 'Report a Problem',
        html:   '<div class="form-group">'+

                '<label for="txtDescription" class="form-label mx-auto ml-5 mt-2">What Happened?</label>'+
                '<textarea type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtDescription"></textarea>'+

                '<label for="txtLocationID" class="form-label mx-auto ml-5 mt-2">Location ID:</label>'+
                '<input type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtLocationID">'+

                '<label for="txtSubmitter" class="form-label mx-auto ml-5 mt-2">Submitter:</label>'+
                '<input type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtSubmitter">'+

                '<div class="button-box mx-auto mt-3">'+
                '<button id="btnReportProblem" class="btn btn-primary">Report Problem</button>'+
                '</div>'+
                '</div>',
        showConfirmButton: false,
    })

    //add problem
    $('#btnReportProblem').click(function(){
        console.log('Add Problem by Session ID');
        let strSessionID= $('#txtSessionID').val();
        let strDescription= $('#txtDescription').val();
        let strLocationID= $('#txtLocationID').val();
        let strSubmitter= $('#txtSubmitter').val();
    

    /*$('#btnReportProblem').click(function(){
        console.log('Add Problem by Session ID');
        let strSessionID= $('#txtSessionID').val();
        let strDescription= $('#txtDescription').val();
        let strLocationID= $('#txtLocationID').val();
        let strSubmitter= $('#txtSubmitter').val();
        */

        $.getJSON('https://www.swollenhippo.com/DS3870/addProblemBySessionID.php?strSessionID=' + strSessionID + '&strDescription=' + strDescription + '&strLocationID=' + strLocationID + '&strSubmitter=' + strSubmitter + '', function(data){
            $.each(data, function(result){
                if(result.Outcome == 'Error'){
                    alert('Found Error');
                }
                else {
                    alert('You are verified');
                }
            })
        })
    })
})

//add problem (navProblems)
$('#navProblems').click(function(){
    Swal.fire({
        title: 'Report a Problem',
        html:   '<div class="form-group">'+

                '<label for="txtDescription" class="form-label mx-auto ml-5 mt-2">What Happened?</label>'+
                '<textarea type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtDescription"></textarea>'+

                '<label for="txtLocationID" class="form-label mx-auto ml-5 mt-2">Location ID:</label>'+
                '<input type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtLocationID">'+

                '<label for="txtSubmitter" class="form-label mx-auto ml-5 mt-2">Submitter:</label>'+
                '<input type="text" class="form-control mx-auto mt-1 mb-4 col-11 swal2-input" id="txtSubmitter">'+

                '<div class="button-box mx-auto mt-3">'+
                '<button id="btnReportProblem" class="btn btn-primary">Report Problem</button>'+
                '</div>'+
                '</div>',
        showConfirmButton: false,
    })
    

    $('#btnReportProblem').click(function(){
        console.log('Add Problem by Session ID');
        let strDescription= $('#txtDescription').val();
        let strLocationID= $('#txtLocationID').val();
        let strSubmitter= $('#txtSubmitter').val();

        $.getJSON('https://www.swollenhippo.com/DS3870/addProblemBySessionID.php?strSessionID=' + sessionStorage.getItem('SessionID') + '&strDescription=' + strDescription + '&strLocationID=' + strLocationID + '&strSubmitter=' + strSubmitter + '', function(data){
            $.each(data, function(result){
                if(result.Outcome == 'Error'){
                    Swal.fire(
                        'There was an error, please try again'
                    )
                }
                else {
                    Swal.close(),
                    Swal.fire({
                        title: 'Confirmation',
                        text: 'Your problem was submitted.',
                    })
                }
            })
        })
    })
})



$('#btnUpdateProblem').click(function(){
    let strProblemID= $('#txtProblemID').val();
    let strDescription= $('#txtDescription').val();
    let strLocationID= $('#txtLocationID').val();
    let strSubmitter= $('#txtSubmitter').val();
    let strCompletedDate= $('#txtCompletedDate').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/updateProblemBySessionID.php?strSessionID=' + sessionStorage.getItem('SessionID') + '&strProblemID=' + strProblemID + '&strDescription=' + strDescription + '&strLocationID=' + strLocationID + '&strSubmitter=' + strSubmitter + '&strCompletedDate=' + strCompletedDate +  '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                Swal.fire(
                    'There was an error, please try again'
                )
            }
            else {
                Swal.close();
                Swal.fire({
                    title: 'Confirmation',
                    text: 'Your problem was updated!',
                })
            }
        })
    })
})



//update problem table
/*$('#btnUpdateProblemBySessionID').click(function(){
    console.log('Update Problem by Session ID');
    let strSessionID= $('#txtSessionID').val();
    let strProblemID= $('#txtProblemID').val();
    let strDescription= $('#txtDescription').val();
    let strLocationID= $('#txtLocationID').val();
    let strSubmitter= $('#txtSubmitter').val();
    let strCompletedDate= $('#txtCompletedDate').val();

    
    $.getJSON('https://www.swollenhippo.com/DS3870/updateProblemBySessionID.php?strSessionID=' + strSessionID + '&strProblemID=' + strProblemID +'&strDescription=' + strDescription + '&strLocationID=' + strLocationID + '&strSubmitter=' + strSubmitter +'&strCompletedDate=' + strCompletedDate + '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                alert('Found Error');
            }
            else {
                alert('You are verified');
            }
        })
    })
})*/


// Build Reports Table
var arrReports
function fillProblems(){
    $.getJSON('js/UsersHours.json', function(result){
        arrReports = result;
        $.each(result,function(i,report){
            console.log(report.UPC);
            console.log(document.getElementById("tblProblems"));
            $('#tblProblems tbody').append(buildProblemsTableRow(report));
        });
        $('#tblProblems').DataTable();
    })
}


function buildProblemsTableRow(report){
    return '<tr><td>' + report.Date + '</td><td>' + report.Type + '</td><td>' + report.Description + '</td></tr>';
}




/*materials page*/

//add new item
$(document).on('click','#btnAddItem',function(){
    Swal.fire({
        title: 'Add Item',
        html: 
            '<div class="form-group mt-3">'+
            '<label for="frmItemUPC" class="mr-2">UPC:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmItemUPC">'+
            '<label for="frmItemDescription" class="mr-2">Description:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmItemDescription">'+
            '<label for="frmItemAmount" class="mr-2">Number of Item:</label>'+
            '<input type="text" class="mx-auto swal2-input" id="frmItemAmount">'+
            '<label for="frmItemCost" class="mr-2">Cost:</label>'+
            '<input type="text" class="form-control mb-2" id="frmItemCost">'+
            '</div>',
        
        focusConfirm: false,
        ShowConfirmButton:false,
        customClass:'swal-wide',
        preConfirm: () => {
            return [
                document.getElementById('frmItemUPC').value,
                document.getElementById('frmItemDescription').value,
                document.getElementById('frmItemAmount').value,
                document.getElementById('frmItemCost').value
            ]
        }
    })
})

$(document).on('click','#btnGetInventory',function(){
    $('#btnGetInventory').click(function(){
        console.log('Inventory');
        let strSessionID= $('#txtSessionID').val();
        
        $.getJSON('https://www.swollenhippo.com/DS3870/getInventoryBySessionID.php?strSessionID=' + strSessionID + '', function(data){
            $.each(data, function(result){
                if(result.Outcome == 'Error'){
                    alert('Found Error');
                }
                else {
                    console.log('You are verified');
                    sessionStorage.setItem("SessionID",data.Outcome);
                    if(verifySession(sessionStorage.getItem('SessionID')) == true){
                        fillMaterials(sessionStorage.getItem('SessionID'));
                    }
                }
            })
        })
    })
})

function verifySession(strSessionID){
    $.getJSON('https://www.swollenhippo.com/DS3870/verifySession.php?strSessionID=' + strSessionID, function(data){
        if(data.Outcome == 'Valid'){
            return true;
        } else {
            return false;
        }
    })
}

function fillMaterials(strSession){
    $.getJSON('https://www.swollenhippo.com/DS3870/getInventoryBySessionID.php?strSessionID=' + strSessionID, function(data){
        arrUsers = data;
        $.each(data, function(i,field){
            let strRowHTML = '';
            strRowHTML += '<tr><td>' + field.UPC + '</td><td>' + field.Description + '</td><td>' + field.Inventory+ '</td><td>' + field.Cost + '</td></tr>';
            $('#tblMaterials tbody').append (strRowHTML);
            strRowHTML = '';
        })
    })
    
}


// Build Materials Table
var arrMaterials
function fillMaterials(){
    $.getJSON('js/json/MaterialsFile.json', function(result){
        arrMaterials = result;
        $.each(result,function(i,item){
            //console.log(item.UPC);
            console.log(document.getElementById("tblMaterials"));
            $('#tblMaterials tbody').append(buildMaterialsTableRow(item));
        });
        $('#tblMaterials').DataTable();
    })
}


function buildMaterialsTableRow(item){
    return '<tr><td>' + item.UPC + '</td><td>' + item.Description + '</td><td>' + item.Inventory + '</td><td>' + item.Cost + '</td></tr>';
}


$('#btnUpdateMaterials').click(function(){
    let strMaterialID= $('#txtMaterialID').val();
    let strDescription= $('#txtDescription').val();
    let intMinOnHand= $('#txtMinOnHand').val();
    let strUnit= $('#txtUnit').val();
    let decCost= $('#txtCost').val();
    let strProductNumber= $('#txtProductNumber').val();
    let strMaterialHandlingInstructions= $('#txtMaterialHandlingInstructions').val();
    let strStatus= $('#txtStatus').val();
    $.getJSON('https://www.swollenhippo.com/DS3870/updateMaterialsBySessionID.php?strSessionID=' + sessionStorage.getItem('SessionID') + '&strMaterialID=' + strMaterialID + '&strDescription=' + strDescription + '&intMinOnHand=' + intMinOnHand + '&strUnit=' + strUnit + '&strProductNumber=' + strProductNumber +  '&strMaterialHandlingInstructions=' + strMaterialHandlingInstructions +  '&strStatus=' + strStatus +  '', function(data){
        $.each(data, function(result){
            if(result.Outcome == 'Error'){
                Swal.fire(
                    'There was an error, please try again'
                )
            }
            else {
                Swal.close();
                Swal.fire({
                    title: 'Confirmation',
                    text: 'Your material was updated!',
                })
            }
        })
    })
})
