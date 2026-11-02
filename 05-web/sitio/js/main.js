/* Negocios con Diana — interacciones de la landing */
(function () {
  'use strict';

  var menu = document.getElementById('menu');
  var boton = document.getElementById('hamburguesa');
  var escritorio = window.matchMedia('(min-width: 1024px)');

  /* ---------- Menú hamburguesa ---------- */
  function cerrarMenu(devolverFoco) {
    menu.classList.remove('is-abierto');
    boton.setAttribute('aria-expanded', 'false');
    boton.setAttribute('aria-label', 'Abrir menú');
    if (devolverFoco) boton.focus();
  }

  function abrirMenu() {
    menu.classList.add('is-abierto');
    boton.setAttribute('aria-expanded', 'true');
    boton.setAttribute('aria-label', 'Cerrar menú');
  }

  if (menu && boton) {
    boton.addEventListener('click', function () {
      if (menu.classList.contains('is-abierto')) cerrarMenu(false);
      else abrirMenu();
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) cerrarMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-abierto')) cerrarMenu(true);
    });

    document.addEventListener('click', function (e) {
      if (menu.classList.contains('is-abierto') && !e.target.closest('.cabecera')) cerrarMenu(false);
    });

    escritorio.addEventListener('change', function (e) {
      if (e.matches) cerrarMenu(false);
    });
  }

  /* ---------- Enlace activo según la sección visible ---------- */
  var enlaces = Array.prototype.slice.call(document.querySelectorAll('.nav__link'));
  var mapaSecciones = {
    'inicio': '#inicio',
    'video-seccion': '#masterclass',
    'beneficios': '#masterclass',
    'incluye': '#incluye',
    'sobre-diana': '#sobre-diana',
    'contacto': '#contacto'
  };

  function marcarActivo(href) {
    enlaces.forEach(function (a) {
      var activo = a.getAttribute('href') === href;
      a.classList.toggle('is-activo', activo);
      if (activo) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  if ('IntersectionObserver' in window) {
    var observadorNav = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) marcarActivo(mapaSecciones[entrada.target.id]);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    Object.keys(mapaSecciones).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) observadorNav.observe(el);
    });
  }

  /* ---------- Aparición suave de secciones ---------- */
  var elementos = document.querySelectorAll('.aparecer');
  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!('IntersectionObserver' in window) || sinMovimiento) {
    elementos.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var observador = new IntersectionObserver(function (entradas, obs) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('is-visible');
          obs.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    elementos.forEach(function (el) { observador.observe(el); });
  }

  /* ---------- Reproductor (bloque visual, video pendiente) ---------- */
  var pantalla = document.getElementById('videoTrigger');
  if (pantalla) {
    var play = pantalla.querySelector('.video__play');
    pantalla.addEventListener('click', function () {
      play.classList.add('is-presionado');
      setTimeout(function () { play.classList.remove('is-presionado'); }, 180);
    });
  }
})();
