$(document).ready(function(){

    //фильтры для проверки полей на недопустимые символы
    //
    var filterUsername  = /^([a-zA-Z0-9_\-])+$/;
    var filterPassword = /^[a-zA-Z0-9!%&@#$\^*?_~+]+$/;
     var filterEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    $('#pass').on('keyup', function(e){
        //---------------------------- если пользователь нажал enter
        if (e.keyCode == 13){
            $('.b-login').click();
        }
 }
    );

    // Кнопка войти //

    $('.b-login').on("click", function(){

        // параметры для авторизации
        var data = {};
        data.username = $('#username').val();
        data.password = $('#pass').val();
           data.password = $('#labelLogin').val();

        if (data.username == ''){
           
            showError('Please enter your name!', 50);
        } else if (data.password == ''){
            showError('Please enter your password!', 50);
        } else if (!filterUsername.test(data.username)){
            showError('Invalid characters in the name', 50);
        } else if (data.username != 'zhansayaanel80'){
            showError('Please enter your password!', 50);
        } else if(!filterPassword.test(data.password)) {
            showError('Invalid characters in the password', 50);
        } else {

            //запрос на авторизацию
            (data.username == 'zhansayaanel80');

            showSuccess('Autorization', 50 );
          $('.b-login').click(function(){
   window.location.href='../html-admin/categories.html';
})
        }
    })


});

