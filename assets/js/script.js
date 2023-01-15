$('#toggleMenuButton').click(function () { 
    // $('#menubarShow').css('transform', 'translateX(0px)');
    $('.menubarShow').addClass('show-menu');
    console.log('clicked toggleMenuButton');
});
$('.closeBtn').click(function () { 
    // $('#menubarShow').css('transform', 'translateX(0px)');
    $('.menubarShow').removeClass('show-menu');
});


// let humberMenu = document.querySelector('#toggleMenuButton');
// let showMenu = document.querySelector('#menubarShow');
// let closeBtn = document.querySelector('#closeBtn');

// humberMenu.addEventListener('click', function(){
//     // showMenu.style.transform = 'translateX(0px)';
//     showMenu.classList.add('show-menu')
// });

// closeBtn.addEventListener('click', function(){
//     // showMenu.style.transform = '';
//     showMenu.classList.remove('show-menu')
// });
