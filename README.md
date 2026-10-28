# FarmaYa API

API REST para el catálogo de medicamentos y pedidos de FarmaYa. Está organizada en las capas `domain`, `application`, `infrastructure` e `interface`.

## Configuración

1. Copia `.env.example` a `.env` y completa los valores, en especial `DATABASE_URL`, `JWT_SECRET` y `FRONTEND_URL` (sin `/` al final). La API también permite `http://localhost:3000` durante desarrollo.
2. Instala las dependencias con `npm install`.
3. Carga los roles, categorías y catálogo con `npm run seed`.
4. Inicia en desarrollo con `npm run dev`.

La base de datos existente nombra sus tablas en español (`usuarios`, `medicamentos`, `pedidos`); la API nunca expone `password_hash`.

## Roles

- `cliente`: se asigna en el registro público y puede crear/ver sus pedidos.
- `supervisor`: se incluye en el JWT y está disponible para rutas que usen `supervisorOAdmin`.
- `admin`: administra el catálogo y consulta todos los pedidos.

## Endpoints

| Método | Ruta | Acceso |
| --- | --- | --- |
| POST | `/api/auth/register` | Público |
| POST | `/api/auth/login` | Público |
| POST | `/api/contacto` | Público |
| GET | `/api/medicamentos?page=1&limit=10` | Público |
| GET | `/api/medicamentos/:id` | Público |
| POST | `/api/medicamentos` | Admin |
| PUT | `/api/medicamentos/:id` | Admin |
| DELETE | `/api/medicamentos/:id` | Admin |
| POST | `/api/pedidos` | Autenticado |
| GET | `/api/pedidos/mias` | Autenticado |
| GET | `/api/pedidos` | Admin |
| POST | `/api/recetas` | Autenticado |
| GET | `/api/recetas/:id/archivo` | Propietario autenticado |

Las rutas protegidas requieren el encabezado `Authorization: Bearer <token>`.

## Crear un pedido

```json
{
  "direccionEntrega": "Calle 10 # 20-30, Bogotá",
  "items": [
    { "medicamentoId": "uuid-del-medicamento", "cantidad": 2 }
  ]
}
```

El usuario del pedido siempre se identifica con el token, no con datos enviados en el body.

## Contacto y recetas

`POST /api/contacto` recibe `{ "nombre", "correo", "mensaje" }`.

`POST /api/recetas` requiere autenticación y recibe el archivo como cuerpo binario, con
`Content-Type` `application/pdf`, `image/jpeg` o `image/png` (máximo 5 MB). Los archivos
se guardan localmente en `uploads/`; para despliegues efímeros conviene sustituirlo por
almacenamiento de objetos persistente. `GET /api/recetas/:id/archivo` exige el token del
propietario, por lo que los archivos no se sirven públicamente.
