/*
jQuery is NOT a programming language
It's just a JavaScript Library

What does it do?
It just helps you to manipulate the DOM easily
*/

// document.getElementById('myHeading').innerText = "Hello World";
$('#myHeading').text('Hello World');

$('#myDiv').addClass('myDiv');

// $('#btn').click(function () {
//     alert("Hello I was clicked");
// });

$('#btn').click(() => alert("Hello World"));

// document.getElementById('myHeading').style.display = 'none';
$('#myHeading').hide();

// document.getElementById('myHeading').style.display = 'block';
$('#myHeading').show();

// document.getElementById('register').addEventListener('submit', (e) => {
//     e.preventDefault();
//     let name = document.getElementById('name').value
//     let email = document.getElementById('email').value
//     console.log(name, email);
// });

$('form#register').submit((e) => {
    e.preventDefault();
    let name = $('input#name').val();
    let email = $('input#email').val();
    console.log(name, email);
});

$('#right').click(function () {
    $('#box').animate({
        left: 500,
        height: '300px',
        width: '300px',
        opacity: '0.5',
        backgroundColor: "rgb(0, 255, 0)"
    }, 3500)
});

$('#left').click(function () {
    $('#box').animate({
        left: 0,
        height: '100px',
        width: '100px',
        opacity: 1
    })
});

$('#around').click(function () {
    $('#box').animate({
        left: 300
    })
    $('#box').animate({
        top: 300
    })
    $('#box').animate({
        left: 0
    })
    $('#box').animate({
        top: 0
    })
});

$('#box2').css({
    backgroundColor: "#DC3545",
    color: 'white',
    padding: '50px',
    textAlign: 'center'
});

$('#fade-out').click(() => $('#box2').fadeOut(2000));

$('#fade-in').click(() => $('#box2').fadeIn(2000));

$('#fade-toggle').click(() => $('#box2').fadeToggle(2000));

$('#slide-down').click(() => $('#box2').slideDown(1000));

$('#slide-up').click(() => $('#box2').slideUp(1000));

$('#slide-toggle').click(() => $('#box2').slideToggle(1000));