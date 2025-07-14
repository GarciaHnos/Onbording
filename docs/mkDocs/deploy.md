```markdown
# 🚀 Despliegue de Documentación con MkDocs + GitHub Pages

Este proyecto utiliza **MkDocs** para generar un sitio estático a partir de archivos Markdown, y **GitHub Pages** para publicar el contenido en la rama `gh-pages`.

---

## 📁 Estructura del proyecto

```plaintext
.
├── docs/           # Archivos fuente en Markdown
├── site/           # Carpeta generada automáticamente con los archivos estáticos
├── mkdocs.yml      # Configuración de MkDocs
```

---

## ⚙️ Requisitos

- Python 3.12 (u otra versión con MkDocs instalado)
- Git
- Tener acceso de push al repositorio remoto

Instalar MkDocs:

```bash
pip install mkdocs
```

> Si tenés múltiples versiones de Python, usá:
>
> ```bash
> py -3.12 -m pip install mkdocs
> ```

---

## 🛠️ Build del sitio estático

Desde la raíz del proyecto, ejecutar:

```bash
py -3.12 -m mkdocs build
```

Esto genera el contenido estático dentro de la carpeta `site/`.

---

## 🚀 Despliegue a GitHub Pages

Si es la primera vez o querés sobrescribir la rama `gh-pages`, usá:

```bash
git push origin `git subtree split --prefix site main`:gh-pages --force
```

Este comando:

- Extrae la carpeta `site/` de la rama `main`
- La empuja como contenido de la rama `gh-pages`
- Fuerza la actualización de la rama remota

---

## 🧪 Verificar

1. En GitHub, ir a `Settings > Pages`
2. Asegurarse que:
   - **Branch**: `gh-pages`
   - **Carpeta**: `/ (root)`
3. Acceder al sitio en:  
   `https://<nombre-usuario>.github.io/<nombre-repo>`

---

## 💡 Tip: Automatizar con script

Podés crear un archivo `deploy.ps1` con:

```powershell
py -3.12 -m mkdocs build
git push origin `git subtree split --prefix site main`:gh-pages --force
```

Y luego correr:

```powershell
.\deploy.ps1
```

---

## 🧹 Notas

- La rama `gh-pages` no debe modificarse manualmente.
- Si el deploy falla por conflicto (`non-fast-forward`), usá la opción `--force` como se muestra arriba.

---
```
