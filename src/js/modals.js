document.addEventListener('DOMContentLoaded', function() {


  var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');
      scrolllocks = document.querySelectorAll('.scrolllock');

//



  modalButtons.forEach(function(item){

     item.addEventListener('click', function(e) {


        var activeModals = document.querySelectorAll('.active')  

        activeModals.forEach((activeModal) => { //закрываем все открытые модалки
            activeModal.classList.remove('active');
            scrolllocks.forEach(function(scrolllock){scrolllock.classList.remove('scrolllock-active')});

            
        })

        

        e.preventDefault();


        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            



        modalElem.classList.add('active');
        overlay.classList.add('active');
        scrolllocks.forEach(function(scrolllock){scrolllock.classList.add('scrolllock-active')});
        document.querySelector('.autofocus').focus(); //открываем нажатую модалку

    }); // end click

  }); // end foreach


  closeButtons.forEach(function(item){

     item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');

        parentModal.classList.remove('active');
        overlay.classList.remove('active');
        scrolllocks.forEach(function(scrolllock){scrolllock.classList.remove('scrolllock-active')});
     });

  }); // end foreach


   document.body.addEventListener('keyup', function (e) {
       var key = e.keyCode;

       if (key == 27) {

           document.querySelector('.modal.active').classList.remove('active');
           document.querySelector('.overlay').classList.remove('active');
           scrolllocks.forEach(function(scrolllock){scrolllock.classList.remove('scrolllock-active')});
        };
   }, false);


   overlay.addEventListener('click', function() {
       document.querySelector('.modal.active').classList.remove('active');
       this.classList.remove('active');
       scrolllocks.forEach(function(scrolllock){scrolllock.classList.remove('scrolllock-active')});
    });




}); // end ready





