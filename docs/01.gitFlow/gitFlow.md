# Git
![](img/icono-git1.png)
![](img/icono-github1.png)
<!--
## Índice
- [Configuración Inicial de Git](#configuración-inicial-de-git)
- [Git Flow para Manejo de Repositorios](#git-flow-para-manejo-de-repositorios)
  - [Crear un Repositorio Local](#1-crear-un-repositorio-local)
  - [Agregar Archivos al Repositorio](#2-agregar-archivos-al-repositorio)
  - [Realizar el Primer Commit](#3-realizar-el-primer-commit)
  - [Conectar el Repositorio Local a un Repositorio Remoto](#4-conectar-el-repositorio-local-a-un-repositorio-remoto)
  - [Subir Cambios al Repositorio Remoto](#5-subir-cambios-al-repositorio-remoto)
  - [Flujo de Trabajo Diario](#6-flujo-de-trabajo-diario)
    - [Realizar Cambios](#a-realizar-cambios)
    - [Guardar Cambios](#b-guardar-cambios)
    - [Sincronizar con el Repositorio Remoto](#c-sincronizar-con-el-repositorio-remoto)
- [Consejos Adicionales](#consejos-adicionales)
 -->

---

## Configuración Inicial de Git

Recomendamos utilizar Git Bash para manejar Git desde la consola. Para acceder a Git Bash:

1. Instala Git desde su [página oficial](https://git-scm.com/).
2. Una vez instalado, busca "Git Bash" en tu sistema operativo y ejecútalo.
3. Usa los comandos que se mencionaran a continuación directamente en la consola de Git Bash.

---
Una vez instalado Git, es importante configurarlo para trabajar correctamente.

### 1. Configurar el Nombre y el Correo Electrónico
Estos datos se asocian con los commits que realices:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tuemail@example.com"
```

### 2. Establecer el Editor por Defecto
Configura tu editor de texto preferido (por ejemplo, VS Code o Vim):

- Para VS Code:
  ```bash
  git config --global core.editor "code --wait"
  ```
- Para Vim:
  ```bash
  git config --global core.editor "vim"
  ```

### 3. Configurar el Comportamiento de Final de Línea
Dependiendo del sistema operativo, es recomendable manejar correctamente los finales de línea:

- Para Windows:
  ```bash
  git config --global core.autocrlf true
  ```
- Para macOS/Linux:
  ```bash
  git config --global core.autocrlf input
  ```

### 4. Verificar la Configuración
Revisa tu configuración actual con:

```bash
git config --list
```

---

## Git Flow para Manejo de Repositorios
Este flujo cubre desde la creación de un repositorio local hasta subirlo a un remoto.

### 1. Crear un Repositorio Local
Primero, crea una carpeta para tu proyecto y luego inicialízala como un repositorio de Git:

```bash
mkdir mi-proyecto
git init
```

Esto creará un repositorio vacío en la carpeta `mi-proyecto`. Al crearlo, Git automáticamente genera una rama principal llamada `main`.

Si necesitas crear otra rama, puedes hacerlo con el siguiente comando:

```bash
git checkout -b nombre-de-la-rama
```

### 2. Agregar Archivos al Repositorio
Añade archivos o carpetas y verifica su estado:

```bash
# Crear un archivo de ejemplo
echo "# Mi Proyecto" > README.md

# Verificar el estado del repositorio
git status

# Agregar archivos al área de staging
git add README.md
```

### 3. Realizar el Primer Commit
Guarda los cambios en el historial de Git:

```bash
git commit -m "Primer commit: Añadido README.md"
```

### 4. Conectar el Repositorio Local a un Repositorio Remoto
Crea un repositorio en un servicio como GitHub, GitLab o Bitbucket. Copia la URL del repositorio remoto.

Conéctalo al repositorio local:

```bash
git remote add origin https://github.com/usuario/mi-proyecto.git
```

### 5. Subir Cambios al Repositorio Remoto
Envía los cambios locales al repositorio remoto:

```bash
git push origin main
```

Asegúrate de indicar siempre explícitamente la rama al realizar `git push` para evitar errores al trabajar con múltiples ramas.

### 6. Flujo de Trabajo Diario
#### a. Realizar Cambios
Edita archivos en tu proyecto y verifica los cambios:

```bash
# Verificar cambios
git status

# Ver diferencias en los archivos
git diff
```

#### b. Guardar Cambios

```bash
# Añadir cambios al área de staging
git add .

# O seleccionar archivos específicos interactivamente
git add -i

# Crear un commit
git commit -m "Descripción del cambio"
```

#### c. Sincronizar con el Repositorio Remoto
Antes de enviar tus cambios, asegúrate de obtener los últimos cambios del remoto:

```bash
git pull origin main
```

Luego, sube tus cambios:

```bash
git push origin main
```

---

## Ambientes de Trabajo

### Directorios en Git
Git organiza los archivos en tres áreas principales:

1. **Directorio de Trabajo (Working Directory):** Donde realizas cambios en los archivos.
2. **Área de Staging (Staging Area):** Una zona intermedia donde preparas los cambios antes de confirmarlos.
3. **Repositorio Local (Local Repository):** Donde se almacenan los commits confirmados.

### Convenciones de Ramas

1. **`main`:** Representa el ambiente productivo. Los cambios aquí deben estar completamente probados y listos para desplegar.
2. **`hotfix`:** Usada para resolver errores críticos detectados en producción.
3. **`release`:** Rama utilizada para preparar una versión para su despliegue. Permite realizar pruebas finales antes de integrarla en `main`.
4. **`develop`:** Contiene el código en desarrollo que aún no está listo para producción. Aquí se integran las ramas `feature`.
5. **`feature/<id-jira>`:** Usada para desarrollar nuevas funcionalidades. El nombre de la rama debe incluir el ID del ticket de Jira para facilitar el seguimiento.

Para crear una nueva rama de feature:

```bash
git checkout -b feature/<id-jira>
```

### Ambientes Preproductivo y Productivo
- **Productivo:** Corresponde a la rama `main`. Aquí reside el código listo para ser desplegado.
- **Preproductivo:** Utilizado para pruebas antes de la integración final en `main`. Incluye las ramas:
  - **`release`:** Preparación para una versión específica.
  - **`hotfix`:** Correcciones críticas en producción.

## Consejos Adicionales
- **Ignorar Archivos:** Usa un archivo `.gitignore` para excluir archivos o carpetas no deseadas:
  ```
  # Ejemplo de .gitignore
  node_modules/
  .env
  ```
- **Resolver Conflictos:** Si hay conflictos al hacer un `git pull`, edita los archivos afectados, luego realiza un commit:
  ```bash
  git add archivo_conflictivo
  git commit -m "Resuelto conflicto en archivo_conflictivo"
  ```

¡Con estos pasos tienes lo básico para empezar a trabajar con Git! 🎉
