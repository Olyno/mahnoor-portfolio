document.addEventListener('DOMContentLoaded', ev => {
  document.querySelector('#all').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'block';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }
    });
    document.querySelectorAll('.print').forEach((item, i) => {
      item.style.display = 'none';
    });
    document.querySelectorAll('.MesProjets .logo').forEach((item, i) => {
      item.style.display = 'none';
    });
    document.querySelectorAll('.photo').forEach((item, i) => {
      item.style.display = 'none';
    });
  });

  document.querySelector('#xp').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'none';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }
    });
    document.querySelectorAll('.xp').forEach((item, i) => {
      item.style.display = 'block';
    });
    document.querySelector('.titre').style.display = 'block';
    document.querySelector('#titre').innerHTML = "Expérience Professionnelle";
  });

  document.querySelector('#ui').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    var a = 0
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'none';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }
    });
    document.querySelectorAll('.ui').forEach((item, i) => {
      item.style.display = 'block';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = a;
      } else {
        item.style.order = a;
      }
      a = a+1
    });
    document.querySelector('.titre').style.display = 'block';
    document.querySelector('.titre').style.order = '4';
    document.querySelector('#titre').innerHTML = "Ui/Ux";
  });

  document.querySelector('#print').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'none';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }

    });
    document.querySelectorAll('.print').forEach((item, i) => {
      item.style.display = 'block';
    });

    document.querySelector('.titre').style.display = 'block';
    document.querySelector('#titre').innerHTML = "print";
  });

  document.querySelector('#logo').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'none';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }
    });
    document.querySelectorAll('.MesProjets .logo').forEach((item, i) => {
      item.style.display = 'block';
    });

    document.querySelector('.titre').style.display = 'block';
    document.querySelector('#titre').innerHTML = "Logo";
  });

  document.querySelector('#photo').addEventListener('click', (e) => {
    document.querySelectorAll('.menu ul li').forEach((item, i) => {
      item.classList.remove("selected");
    });
    e.target.classList.add("selected");
    document.querySelectorAll('.box').forEach((item, i) => {
      item.style.display = 'none';
      item.style.order = 'unset';
      if (item.parentElement.localName == "a") {
        item.parentElement.style.order = 'unset';
      }
    });
    document.querySelectorAll('.photo').forEach((item, i) => {
      item.style.display = 'block';
    });

    document.querySelector('.titre').style.display = 'block';
    document.querySelector('#titre').innerHTML = "Retouche photo";
  });

  document.querySelector('.alightp').addEventListener('click', (e) => {
    document.querySelector('.lightp').style.display = "flex";
  })
  document.querySelector('.aexellencep').addEventListener('click', (e) => {
    document.querySelector('.exellencep').style.display = "flex";
  })
  document.querySelector('.alevisp').addEventListener('click', (e) => {
    document.querySelector('.levisp').style.display = "flex";
  })
  document.querySelector('.asabahennap').addEventListener('click', (e) => {
    document.querySelector('.sabahennap').style.display = "flex";
  })
  document.querySelector('.aretouchep').addEventListener('click', (e) => {
    document.querySelector('.retouchep').style.display = "flex";
  })
  document.querySelector('.aaretouchep').addEventListener('click', (e) => {
    document.querySelector('.retouchep').style.display = "flex";
  })
  document.querySelector('.atatouagep').addEventListener('click', (e) => {
    document.querySelector('.tatouagep').style.display = "flex";
  })
  document.querySelector('.aretoucheelemp').addEventListener('click', (e) => {
    document.querySelector('.retoucheelemp').style.display = "flex";
  })
  document.querySelectorAll('.popup svg').forEach((item, i) => {
    item.addEventListener('click', (e) => {
      document.querySelectorAll('.popup').forEach((item, i) => {
        item.style.display = "none"
      });
    });
  });


});
