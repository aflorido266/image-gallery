# Image Gallery App

Aplicación desarrollada con Angular para gestionar una galería de imágenes interactiva.

## 🚀 Características

* Visualización de imágenes en grid responsive
* Imagen destacada automática
* Eliminación individual de imágenes
* Drag and Drop con Angular CDK
* Selección múltiple de imágenes
* Eliminación batch de imágenes seleccionadas
* Estado reactivo usando Signals
* Arquitectura basada en componentes standalone
* Testing unitario con Angular Testing

---

# 🛠️ Tecnologías utilizadas

* Angular
* TypeScript
* Angular Signals
* Angular CDK Drag & Drop
* TailwindCSS
* Jasmine / Karma

---

# 📂 Estructura del proyecto

```bash
src/app
│
├── features/gallery
│   ├── gallery.ts
│   ├── gallery.html
│   ├── gallery.css
│   └── gallery.spec.ts
│
├── image-item
│   ├── image-item.ts
│   ├── image-item.html
│   ├── image-item.css
│   └── image-item.spec.ts
│
├── interfaces
│   └── image.interface.ts
│
├── app.ts
├── app.html
└── app.routes.ts
```

---

# ⚙️ Instalación

Clona el repositorio:

```bash
git clone https://github.com/aflorido266/image-gallery.git
```

Entra en el proyecto:

```bash
cd image-gallery
```

Instala dependencias:

```bash
npm install
```

Ejecuta el proyecto:

```bash
ng serve
```

Abrir en navegador:

```bash
http://localhost:4200
```

---

# 🧪 Testing

Ejecutar tests:

```bash
ng test
```

Ejecutar tests con coverage:

```bash
ng test --no-watch --code-coverage
```

---

# 🎯 Funcionalidades principales

## ✅ Drag and Drop

Las imágenes pueden reordenarse utilizando Angular CDK.

## ✅ Selección múltiple

Permite seleccionar varias imágenes usando estado reactivo con Signals y Set.

## ✅ Eliminación batch

Elimina múltiples imágenes seleccionadas en una sola operación.

## ✅ Testing

Se implementaron tests unitarios para componentes y eventos.

---

# 📚 Conceptos aprendidos

* Componentes standalone
* Inputs y Outputs con Signals
* Gestión de estado reactiva
* Inmutabilidad
* Drag and Drop
* Comunicación padre → hijo
* Testing unitario
* Pull Requests y workflow Git

---

# 👩‍💻 Autor

Ada Florido
