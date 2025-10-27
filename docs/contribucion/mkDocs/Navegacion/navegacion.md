# Navegación en MkDocs 📚

---

En **MkDocs**, la navegación se define en el archivo de configuración **`mkdocs.yml`** mediante la clave **`nav`**.  
Esta sección permite organizar los menús y submenús de la documentación, mostrando los archivos **`.md`** en una estructura jerárquica.

---

!!! note "Tip de navegación"
    Cada elemento de `nav` puede ser un archivo Markdown o un submenú con otros archivos.  
    Esto permite tener un menú ordenado y fácil de explorar para los usuarios.

---

```yaml
nav:
  - Inicio: index.md
  - Estrategia: estrategia/estrategia.md
  - Event Storming: estrategia/eventStorming.md
  - Git, GitHub & GitFlow: 
    - Introduccion: git/introduccionGit/introduccionGit.md
    - Configuracion Inicial: git/configInicial/configInicial.md
    - Directorios: git/directorios/directorios.md
    - Manejo de Repositorios: git/manejoDeRepositorios/manejoDeRepositorios.md
    - Git Flow: git/gitFlow/gitFlow.md
  - Draft: 
    - Relevamiento de Programas: draft/relevamientoProgramas/relevamientoProgramas.md
  - MkDocs:
      - Introducción: mkDocs/MkDocs/Introduccion/introduccion-MkDocs.md
      - Contribución: mkDocs/MkDocs/Contribucion/contribucion.md
      - Navegación: mkDocs/MkDocs/Navegacion/navegacion.md
      - Previsualización: mkDocs/MkDocs/Previsualización/previsualizacion.md
      - Despliegue: mkDocs/MkDocs/Despliegue/despliegue.md
```

---
<div>
```mermaid
flowchart LR
    A[nav/]
    A --> B[Inicio]
    A --> C[Estrategia]
    A --> D[Event Storming]
    A --> E[Git GitHub & GitFlow]
    A --> F[Draft]
    A --> G[MkDocs]
    
    B --> B1[index.md]
    
    
    C --> C1[estrategia.md]
    
    D --> D1[eventStorming.md]
    
    E --> E1[introduccionGit.md]
    E --> E2[configInicial.md]
    E --> E3[directorios.md]
    E --> E4[manejoDeRepositorios.md]
    E --> E5[gitFlow.md]
    
   
   
    F --> F1[relevamientoProgramas.md]
    
    
    G --> G1[introduccion-MkDocs.md]
    G --> G2[contribucion.md]
    G --> G3[navegacion.md]
    G --> G4[previsualizacion.md]
    G --> G5[despliegue.md]

    style A fill:#e3f2fd,stroke:#1976d2,stroke-width:3px
    style E1 fill:#f1f8e9,stroke:#388e3c,stroke-width:2px
    style C1 fill:#f1f8e9,stroke:#388e3c,stroke-width:2px
    style D1 fill:#f1f8e9,stroke:#388e3c,stroke-width:2px
    style F1 fill:#f1f8e9,stroke:#388e3c,stroke-width:2px
    style G1 fill:#f1f8e9,stroke:#388e3c,stroke-width:2px
    
    classDef default font-size:13px
    classDef navItem fill:#e1f5fe,stroke:#01 579b,stroke-width:2px
    classDef file fill:#fff3e0,stroke:#f57c00,stroke-width:1px
    
    class B,C,D,E,F,G,E2,E3,E4,E5,E6,F2 navItem
    class B1,C2,D2,E2A,E3A,E4A,E5A,E6A,F3,G2 file
```
</div>
---

!!! tip
    Con esta configuración, <b>MkDocs</b> genera automáticamente un menú lateral o superior (dependiendo del tema) con la estructura definida en `nav`.

<br>
