# Documentación Git con Barra Lateral

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

---

## Configuración Inicial de Git

Una vez instalado Git, es importante configurarlo para trabajar correctamente. Sigue los siguientes pasos:

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

Esto creará un repositorio vacío en la carpeta `mi-proyecto`.

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
git push -u origin main
```

La opción `-u` establece la rama remota como la predeterminada para futuras actualizaciones.

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
git push
```

---

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
