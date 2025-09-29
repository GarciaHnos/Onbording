# Guía de Contribución 🚀

Todo proyecto mantiene su documentación en la carpeta **`docs/`**, organizada por áreas temáticas para facilitar la colaboración y la escalabilidad del conocimiento.  
La carpeta **`site/`** se genera automáticamente al momento de desplegar la documentación, por lo que **no debe editarse manualmente**.

---

#### | **Principios de trabajo**

!!! note "Estandarización"
    <p style="font-size: 0.75rem; line-height:1.5;">
    Cada sección está estructurada en subcarpetas, y cada una incluye al menos un archivo **`.md`** con la información relevante.
    </p>

!!! tip "Escalabilidad"
    <p style="font-size: 0.75rem; line-height:1.5;">
    Podés crear nuevas carpetas o archivos siempre que respetes la convención de nombres (`introduccion.md`).
    </p>

!!! Danger "Colaboración"
    <p style="font-size:0.75rem; line-height:1.5;">
    **Colaboración:** cada cambio debe realizarse en una **rama separada**, acompañado de un **`commit`** claro y un **`Pull Request`**.
    </p>

---

#### | **Flujo recomendado**

Seguir las prácticas de versionado documentadas en **`gitFlow`**.

!!! note
    <p style="font-size: 0.75rem; line-height:1.5;">
    Mantener consistencia con las convenciones de **`git/configInicial/configInicial.md`**.
    </p>
Documentar cambios en la carpeta correspondiente, agregando o actualizando archivos **`.md`**.

---

#### | **Importante**

!!! warning "Atención"
    <p style="font-size: 0.75rem; line-height:1.5;">
    La carpeta **`docs/`** es el único lugar editable.  
    La carpeta **`site/`** se genera al hacer el build y refleja lo que se verá en producción.
    </p>

---

```mermaid
flowchart LR
    A[onbording/] --> B[docs/]
    A --> Z[site/]
    
    %% ---- docs ----
    B --> C[draft/]
    B --> D[estrategia/]
    B --> E[git/]
    B --> H[MkDocs/]
    
    %% ---- draft ----
    C --> C1[relevamientoProgramas/]
    
    C1 --> Ca[relevamientoProgramas.md]
    
    %% ---- estrategia ----
    D --> D1[estrategia.md]
    
    %% ---- git ----
    E --> E1[introduccionGit/]
    E --> E2[configInicial/]
    E --> E3[directorios/]
    E --> E4[manejoDeRepositorios/]
    E --> E5[gitFlow/]

    E1 --> E1a[introduccionGit.md]
    E1 --> E1b[img/]
    E2 --> E2a[configInicial.md]
    E2 --> E2b[img/]
    E3 --> E3a[directorios.md]
    E3 --> E3b[img/]
    E4 --> E4a[manejoDeRepositorios.md]
    E4 --> E4b[img/]
    E5 --> E5a[gitFlow.md]
    E5 --> E5b[img/]
    
    %% ---- MkDocs ----
    H --> H1[Contribucion/]
    H --> H2[Despliegue/]
    H --> H3[Introduccion/]
    H --> H4[Navegacion/]
    H --> H5[Previsualizacion/]
    
    H1 --> H1a[contribucion.md]
    H2 --> H2a[despliegue.md]
    H3 --> H3a[introduccion-MkDocs.md]
    H3 --> H3b[img/]
    H4 --> H4a[navegacion.md]
    H5 --> H5a[previsualizacion.md]
    H5 --> H5b[img/]
    
    %% ---- site ----
    Z --> Z1[Carpeta autogenerada al desplegar]
    
    %% ---- styles ----
    classDef proyecto fill:#ffcc80,stroke:#e65100,stroke-width:3px,color:#333
    classDef carpeta fill:#bbdefb,stroke:#0d47a1,stroke-width:2px,color:#333
    classDef subcarpeta fill:#e1f5fe,stroke:#0277bd,stroke-width:2px,color:#333
    classDef archivo fill:#c8e6c9,stroke:#00c853,stroke-width:1px,color:#333
    classDef autogenerada fill:#e1bee7,stroke:#4a148c,stroke-width:2px,color:#333
    
    %% Proyecto raíz
    class A proyecto
    
    %% Carpetas principales
    class B,Z carpeta
    
    %% Subcarpetas nivel 1
    class C,D,E,H subcarpeta
    
    %% Subcarpetas nivel 2
    class C1,E1,E2,E3,E4,E5,H1,H2,H3,H4,H5,E1b,E2b,E3b,E4b,E5b,H3b,H5b subcarpeta
    
    %% Archivos
    class Ca,D1,E1a,E2a,E3a,E4a,E5a,H1a,H2a,H3a,H4a,H5a archivo
    
    %% Autogenerada
    class Z1 autogenerada
```

---

```yaml
project/
│
├── docs/                        # Documentación (carpeta principal)
│   ├── draft/
│   │   ├── CICD/
│   │   │   └── CICD.md
│   │   ├── relevamientoProgramas/
│   │   │   └── relevamientoProgramas.md
│   │   └── draft.md
│   │
│   ├── git/
│   │   ├── configInicial/
│   │   │   ├── Gif/
│   │   │   │   └── ejemplo.gif
│   │   │   ├── img/
│   │   │   │   └── config.png
│   │   │   └── configInicial.md
│   │   │
│   │   ├── directorios/
│   │   │   ├── img/
│   │   │   │   └── ejemplo.png
│   │   │   └── directorios.md
│   │   │
│   │   ├── gitFlow/
│   │   │   ├── img/
│   │   │   │   └── gitFlow.png
│   │   │   └── gitFlow.md
│   │
│   └── README.md                # Introducción de contribución
│
└── site/                        # Carpeta autogenerada al desplegar
```