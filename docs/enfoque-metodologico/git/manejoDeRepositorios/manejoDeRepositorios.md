# Manejo de Repositorios

---

## Este flujo cubre desde la creación de un repositorio local hasta subirlo a un remoto.

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

---

## Flujo de trabajo para Clonar un Repositorio Remoto a Local

### 1. **Clonar un Repositorio Remoto a Local**
   - Navega a la página del repositorio en GitHub que deseas clonar.
   - Copia la URL del repositorio (puede ser HTTPS o SSH).

Luego, abre la terminal en tu máquina local y ejecuta el siguiente comando:

```bash
git clone https://github.com/usuario/repositorio.git
```
O si estás usando SSH:

```bash
git clone git@github.com:usuario/repositorio.git
```
Este comando descargará una copia local del repositorio.

### 2. Entrar al Directorio del Repositorio
Una vez clonado el repositorio, navega al directorio del proyecto:

```bash
cd repositorio
```

### 3. Verificar el Estado del Repositorio Local
Si deseas ver el estado de tu repositorio después de clonarlo, puedes usar:

```bash
git status
```

Esto te dirá si tienes cambios pendientes, archivos nuevos, etc.

### 4. Mantener tu Repositorio Local Actualizado
Para asegurarte de tener la versión más reciente del repositorio remoto, puedes usar:

```bash
git pull origin main
```