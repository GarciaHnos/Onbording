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
## ¿Qué es Git?

Git es un sistema de control de versiones distribuido, utilizado para gestionar y realizar un seguimiento de los cambios en archivos de código fuente a lo largo del tiempo. Fue diseñado para ayudar a los desarrolladores a trabajar de manera más eficiente en proyectos de software, permitiendo colaborar sin perder el control sobre las distintas versiones de los archivos.

### ¿Para qué sirve Git?

1. **Control de versiones**: Git permite llevar un registro detallado de todas las modificaciones realizadas a lo largo del tiempo, lo que facilita regresar a una versión anterior del proyecto o comparar cambios entre versiones.

2. **Colaboración**: Facilita el trabajo en equipo, ya que múltiples desarrolladores pueden trabajar sobre el mismo proyecto sin interferir entre sí. Git gestiona las fusiones de cambios, lo que evita conflictos en los archivos.

3. **Trabajo distribuido**: Cada desarrollador tiene una copia completa del proyecto en su máquina local. Esto significa que se pueden realizar cambios y trabajar de forma independiente, sin necesidad de estar siempre conectado a un servidor central.

4. **Ramas y fusión (Branching and Merging)**: Git permite crear ramas (`branches`) para trabajar en diferentes características o funcionalidades de un proyecto sin afectar la versión principal del proyecto (normalmente llamada `master` o `main`). Posteriormente, se pueden fusionar (`merge`) esas ramas cuando estén listas, manteniendo el código organizado.

5. **Seguridad**: Git es altamente confiable y resistente a errores. Todos los cambios se registran de manera que no se pueden perder, ya que el sistema mantiene un historial completo y detallado de las modificaciones.

6. **Integración continua y despliegue (CI/CD)**: Git es fundamental para procesos de integración continua y despliegue continuo, ya que muchas herramientas de automatización (como Jenkins, Travis CI, GitHub Actions) se integran con repositorios Git para construir, probar y desplegar aplicaciones de manera eficiente.
#### Consejos Adicionales
- **Ignorar Archivos:** Usa un archivo `.gitignore` para excluir archivos o carpetas no deseadas:
  ```
  # Ejemplo de .gitignore
  node_modules/
  .env
  ```