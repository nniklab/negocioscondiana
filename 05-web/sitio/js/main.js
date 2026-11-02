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

  /* ---------- Reproductor: carga el video de YouTube al hacer clic ---------- */
  var pantalla = document.getElementById('videoTrigger');
  if (pantalla) {
    var idVideo = pantalla.getAttribute('data-youtube');
    var cargado = false;

    var cargarVideo = function () {
      if (cargado || !idVideo) return;
      cargado = true;
      var iframe = document.createElement('iframe');
      iframe.className = 'video__iframe';
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + idVideo + '?autoplay=1&rel=0&modestbranding=1';
      iframe.title = 'Los 7 frenos mentales que te están limitando de emprender';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
      pantalla.innerHTML = '';
      pantalla.classList.add('is-reproduciendo');
      pantalla.appendChild(iframe);
      iframe.focus();
    };

    pantalla.addEventListener('click', cargarVideo);
  }

  /* ---------- Carruseles (solo celular) ---------- */
  var celular = window.matchMedia('(max-width: 767px)');
  var suave = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';

  Array.prototype.forEach.call(document.querySelectorAll('[data-carrusel]'), function (carrusel) {
    var pista = carrusel.querySelector('.carrusel__pista');
    var prev = carrusel.querySelector('[data-carrusel-prev]');
    var next = carrusel.querySelector('[data-carrusel-next]');
    var cajaPuntos = carrusel.querySelector('.carrusel__puntos');
    var estado = carrusel.querySelector('[data-carrusel-estado]');
    var puntos = [];
    var actual = -1;

    function diapositivas() {
      var lista = [];
      Array.prototype.forEach.call(pista.children, function (hijo) {
        if (getComputedStyle(hijo).display === 'contents') {
          Array.prototype.forEach.call(hijo.children, function (n) { lista.push(n); });
        } else if (hijo.offsetParent !== null) {
          lista.push(hijo);
        }
      });
      return lista;
    }

    function inicio() {
      return parseFloat(getComputedStyle(pista).paddingLeft) || 0;
    }

    function indiceActual(lista) {
      var x = pista.scrollLeft + inicio();
      var mejor = 0, dist = Infinity;
      lista.forEach(function (d, i) {
        var dd = Math.abs(d.offsetLeft - x);
        if (dd < dist) { dist = dd; mejor = i; }
      });
      if (pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 4) mejor = lista.length - 1;
      return mejor;
    }

    function actualizar() {
      if (!celular.matches) return;
      var lista = diapositivas();
      if (puntos.length !== lista.length) {
        cajaPuntos.innerHTML = '';
        puntos = lista.map(function () {
          var s = document.createElement('span');
          s.className = 'carrusel__punto';
          cajaPuntos.appendChild(s);
          return s;
        });
        actual = -1;
      }
      var i = indiceActual(lista);
      if (i === actual) return;
      actual = i;
      puntos.forEach(function (p, k) { p.classList.toggle('is-activo', k === i); });
      prev.disabled = i === 0;
      next.disabled = i === lista.length - 1;
      estado.textContent = (i + 1) + ' de ' + lista.length;
    }

    function ir(paso) {
      var lista = diapositivas();
      var destino = Math.max(0, Math.min(lista.length - 1, indiceActual(lista) + paso));
      pista.scrollTo({ left: lista[destino].offsetLeft - inicio(), behavior: suave });
    }

    prev.addEventListener('click', function () { ir(-1); });
    next.addEventListener('click', function () { ir(1); });
    pista.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); ir(1); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); ir(-1); }
    });

    var pendiente = false;
    pista.addEventListener('scroll', function () {
      if (pendiente) return;
      pendiente = true;
      requestAnimationFrame(function () { pendiente = false; actualizar(); });
    }, { passive: true });

    celular.addEventListener('change', actualizar);
    window.addEventListener('resize', actualizar);
    actualizar();
  });

  /* En celular, el enlace "Contacto" lleva a la segunda tarjeta del carrusel */
  Array.prototype.forEach.call(document.querySelectorAll('a[href="#contacto"]'), function (a) {
    a.addEventListener('click', function (e) {
      if (!celular.matches) return;
      var contacto = document.getElementById('contacto');
      var pista = contacto && contacto.parentElement;
      if (!pista || !pista.classList.contains('carrusel__pista')) return;
      e.preventDefault();
      pista.scrollTo({ left: contacto.offsetLeft - (parseFloat(getComputedStyle(pista).paddingLeft) || 0), behavior: 'auto' });
      pista.closest('.carrusel').scrollIntoView({ behavior: suave, block: 'start' });
    });
  });
})();
