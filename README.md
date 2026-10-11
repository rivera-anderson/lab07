# 🏛️ MUSEO INFINITO — Express & MongoDB Authentication API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.18-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB%20Atlas-Cloud-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![JWT](https://img.shields.io/badge/JWT-Secure_Auth-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render&logoColor=white)](https://render.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=for-the-badge&logo=githubactions&logoColor=white)](https://github.com/features/actions)

Aplicación web y API REST de autenticación y autorización basada en roles (RBAC) con **JSON Web Tokens (JWT)** y persistencia en la nube con **MongoDB Atlas**, integrada con una interfaz visual premium inspirada en el **Museo Infinito de Paleontología y Fósiles Prehistóricos**.

---

## 🚀 Demo en Producción

- **API & Web en la Nube:** [https://express-auth-rivera.onrender.com](https://express-auth-rivera.onrender.com)
- **Repositorio Oficial:** [https://github.com/rivera-anderson/lab07](https://github.com/rivera-anderson/lab07)
- **Health Check:** `GET /health` → `{"ok": true}`

---

## ⚡ Características Principales

- 🔐 **Autenticación con JWT:** Tokens firmados criptográficamente para sesiones stateless seguras.
- 🛡️ **Control de Acceso Basado en Roles (RBAC):** Middlewares dedicados para roles `admin` y `user`.
- 🔑 **Seguridad Avanzada:** Hasheo de contraseñas con `bcrypt` (10 rondas de salting).
- ☁️ **Base de Datos Cloud:** Conexión nativa con cluster distribuido en **MongoDB Atlas**.
- 🦕 **UI/UX Prehistórica Dark Mode:** Interfaz editorial con tipografía romana *Cinzel*, vitrinas flotantes 3D y especímenes en alta resolución.
- 🔄 **Despliegue Continuo (CI/CD):** Pipeline automatizado con **GitHub Actions** hacia **Render**.
- 🌱 **Database Seeding Automático:** Inicialización automática de roles (`admin`, `user`) y usuario maestro al primer arranque.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnologías |
| :--- | :--- |
| **Backend** | Node.js, Express.js (ES Modules) |
| **Base de Datos** | MongoDB Atlas, Mongoose ODM |
| **Seguridad** | JSON Web Tokens (`jsonwebtoken`), `bcrypt`, `cors`, `dotenv` |
| **Frontend / Vistas** | EJS (Embedded JavaScript), CSS3 Custom Variables, CSS Grid nativo |
| **DevOps & Cloud** | GitHub Actions (CI/CD), Render Web Services |

---

## 📡 Endpoints del API REST

### 🔓 Autenticación (`/api/auth`)
| Método | Endpoint | Descripción | Acceso |
| :---: | :--- | :--- | :---: |
| `POST` | `/api/auth/signUp` | Registro de nuevos usuarios con validación de contraseña | Público |
| `POST` | `/api/auth/signIn` | Inicio de sesión y generación de token JWT | Público |

### 🔒 Usuarios (`/api/users`)
| Método | Endpoint | Descripción | Acceso |
| :---: | :--- | :--- | :---: |
| `GET` | `/api/users/profile` | Retorna los datos del perfil del usuario autenticado | `user`, `admin` |
| `GET` | `/api/users` | Listado completo de usuarios registrados | Solo `admin` |

### 🌐 Vistas Web (`/`)
- `/` & `/dashboard` — Galería principal del Museo Infinito con vitrinas y especímenes.
- `/exhibit/:id` — Ficha técnica e interactiva de cada espécimen fósil.
- `/signIn` & `/signUp` — Formularios de autenticación con validación en tiempo real.
- `/profile` — Panel personal del usuario.
- `/admin/dashboard` — Panel administrativo.

---

## 💻 Instalación Local

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/rivera-anderson/lab07.git
   cd lab07
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno (`.env`):**
   Crea un archivo `.env` en la raíz guiándote de `.env.example`:
   ```env
   PORT=3000
   MONGODB_URI=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb.net/lab07?retryWrites=true&w=majority
   JWT_SECRET=super_secret_jwt_key_2026
   JWT_EXPIRES_IN=24h
   BCRYPT_SALT_ROUNDS=10
   NODE_ENV=development
   ```

4. **Ejecutar el servidor:**
   ```bash
   # Modo desarrollo con nodemon
   npm run dev

   # Modo producción
   npm start
   ```

---

## 👤 Autor

- **Desarrollador:** Anderson Rivera
- **Laboratorio:** Lab 07 — Despliegue de API con JWT en la Nube
- **Repositorio:** [rivera-anderson/lab07](https://github.com/rivera-anderson/lab07)
