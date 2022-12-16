//nav logos
$(document).ready(function() {
    $('.menu__icon').click(function(){
      $('body').toggleClass('menu_shown');
    });
  });

//show multidropdown
$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
});

//show success submission (student)
function myFunction() {
    alert("🎉 The form was submitted. 🎉");
}

//show success submission (student other)
function myFunction2() {
    alert("🎉 The form was submitted. 🎉");
}

//show success submission (admin assign)
function myFunction3() {
    alert("🎉 Saved and updated. 🎉");
}


//"other" form
const btn = document.getElementById('formbtn');

btn.addEventListener('click', () => {
    const form = document.getElementById('form');

    if (form.style.display === 'none') {
        // 👇️ this SHOWS the form
        form.style.display = 'block';
        console.log(form)
    } else {
        // 👇️ this HIDES the form
        form.style.display = 'none';
        console.log(form)
    }
});

//////

const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions

function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
  this.className = 'fill';
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}

function dragLeave() {
  this.className = 'empty';
}

function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}
