# Prueba Frontend

Este proyecto fue creado con [Vite](https://vitejs.dev/) para resolver la prueba técnica de [Allintravels](https://www.allintravels.com/).

## Tecnologías

- React 19
- Vite 6
- Tailwind CSS 4
- React Slick

## Instalación

Para instalar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio:

```bash
  git clone https://github.com/MayDonoban22/frontend_challenge
```

2. Accede a la carpeta del proyecto:

```bash
  cd frontend_challenge
```

3. Instala las dependencias:

```bash
  npm install
```

## Uso

Para iniciar el servidor de desarrollo, ejecuta:

```bash
  npm run dev
```

Esto ejecutará el proyecto en un servidor local y podrás visualizarlo en tu navegador en la URL proporcionada en la terminal.

## Avance del Proyecto

Se han implementado las siguientes secciones basadas en el diseño proporcionado:

1. **Encabezado y navegación**: Se ha estructurado el header con su respectiva navegación.
2. **Sección de banners**: Se integraron los banners dinámicos consumiendo la API correspondiente.
3. **Sección de categorías**: Se muestran las categorías de viaje disponibles.
4. **Experiencias personalizadas**: Implementada hasta la cuarta sección.

### Pendiente por realizar

- Completar la sección de experiencias personalizadas.
- Integración de los blogs.
- Implementación de la sección de tags y socios.
- Formulario de cotización y sus respectivas validaciones.
- Implementación del formulario de suscripción a newsletter.

## API

El proyecto consume datos de la API proporcionada. Para evitar problemas con CORS, se recomienda ejecutar las solicitudes desde `http://localhost:3000/`.

Endpoints utilizados hasta ahora:

- `GET /api/get-companies/`
- `GET /api/get-banners/`
- `GET /api/get-categories/`
- `GET /api/get-travels/`
- `GET /api/get-customer_experiences/`

Endpoints pendientes de integrar:

- `GET /api/get-blogs/`
- `GET /api/get-tags/`
- `GET /api/get-partners/`
- `POST /api/set-quotations/`
- `POST /api/set-newsletter/`

## Repositorio

El código fuente de este proyecto se encuentra en el siguiente repositorio público:

[GitHub - frontend_challenge](https://github.com/MayDonoban22/frontend_challenge)

## Notas Finales

Se seguirá avanzando en la implementación de las secciones restantes conforme a los requerimientos del proyecto, garantizando que la maquetación sea responsive y acorde con el diseño proporcionado.


