/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//1
$(document).ready(function(){
    $("body").append("<div id = 'div1'>hej1</div>");
    $("body").append("<div id = 'div2'>hej2</div>");
    $("body").append("<div id = 'div3'>hej3</div>");
    
    $("#div2").click(function(){$("#div3").css("fontSize", "20px");});
    $("body div:first-child").click(function(){$("#div1").hide();});
    $("#div2").hover(function(){$("#div2").css('border', '4px solid green');});
    $("#div2").mouseout(function(){$("#div2").css('border', '4px');});
});

//2
$(document).ready(function(){
    for (var i = 0; i < 9; i++) {
        !function(i){
        $("body").append('<div id=' + i + '>'+(i+1)+'</div>');
        $("#"+i).click(function(){$("#"+i).html(Math.pow($("#"+i).html(),2));});
        }(i);
    }
});

//3
$(document).ready(function () {
    for (var i = 0; i < 9; i++) {
        !function (i) {
            $("body").append('<ul id=' + i + '>');
            $("#" + i).append('<li>something</li>');
            $("#"+i).css("fontSize", 20+i*3+"px")
        }(i);
    }
    $( "li" ).filter( ":even" ).css( "background-color", "red" );
    $( "li" ).filter( ":odd" ).css( "background-color", "green" );
});

//4
$(document).ready(function () {
    for (var i = 0; i < 10; i++) {
        !function (i) {
            $('body').prepend('<img id=car' + i + ' src="animation_car.png" />');
                var isClicked = false;
            $('#car' + i).click(function () {
                if (!isClicked) {
                    $('#car' + i).attr("src", "carSwap.png");
                    isClicked = true;
                } else {
                    isClicked = false;
                    $('#car' + i).attr("src", "animation_car.png");
                }
            });
        }(i);
    }
});

//5
$(document).ready(function () {
    $form = $("<form id=myForm action='javascript:;'></form>");
    var username = $form.append('<input type="text" value="username">');
    var email = $form.append('<input type="text" value="email">');
    var password = $form.append('<input type="text" value="password">');
    username.click(function(){$(":submit").removeAttr("disabled"); username.css('color','');});
    email.click(function(){$(":submit").removeAttr("disabled"); email.css('color','');});
    password.click(function(){$(":submit").removeAttr("disabled"); password.css('color','');});
    $form.append('<input type="submit" value="register">');
    $('body').append($form);
    $('#myForm').submit(function () {
        var elements = [];
        $(':input').each(function () {
            elements.push($(this));
        });
        elements;
        for (var i = 0; i < elements.length-1; i++) {
            if(elements[i].val()===""){
                elements[i].css( "color", "red");
                elements[i].val("enter info");
                $(":submit").attr("disabled", true);
            }
        }
    });
});

//6
$(document).ready(function () {
    function person(n, e, g) {
        this.name = n;
        this.email = e;
        this.gender = g;
    }

    var persons = [new person("John Hansen", "jh@mail.dk", "Male"), new person("Emma Louise", "el@hotmail.com", "Female"), new person("Fie Schiött", "fs@gmail.com", "Female")];

    $('body').append('<table border="1" id="myTable"><thead><tr><th>Name</th><th>Email</th><th>Gender</th></tr></thead><tbody></tbody></table>');

    for (var i = 0; i < persons.length; i++) {
        !function (i) {
            $('#myTable').append('<tr id=row'+i+'><td>' + persons[i].name + '</td><td>' + persons[i].email + '</td><td>' + persons[i].gender + '</td></tr>');
            $("#row"+i).click(function () {
                    $("#row"+i).css('font-style', 'italic');
                    $("#row"+i).css('font-weight', 'bold');
            });
        }(i);
    }
});
