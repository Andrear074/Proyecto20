    // ── FUNCIÓN REUTILIZABLE ──
    // En lugar de repetir código, creamos una función que recibe el id de la sección
    function irA(seccionId) {
        document.getElementById(seccionId).scrollIntoView({
          behavior: 'smooth'   // animado — prueba cambiarlo a 'instant' para ver la diferencia VS smooth
  
        });
      }
  
      // ── NAVEGACIÓN POR TECLADO ──
      document.addEventListener('keydown', function(event) {
  
        // event.key nos dice qué tecla se presionó
        switch (event.key.toLowerCase()) {
          case 'w':
            irA('sobre-nosotros');
            break;
          case 'a':
            irA('segunda');
            break;
          case 's':
            irA('contacto');
            break;
          case 'd':
            irA('inicio');
            break;
        }
      });

      