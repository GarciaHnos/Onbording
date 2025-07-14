# Guía de **Event Storming**  


---

## Paso 1 — Recolección de **Eventos de Dominio** (Big Picture)

| 🎯 | Regla | Detalle |
|---|-------|---------|
| 🟧 **Post-its naranjas** | Un solo color por ronda | Evita distracciones |
| 📝 **Un evento por nota** | Redactado en **pasado** <br>«Lote recibido», «Muestra analizada» | Representa **hechos ya ocurridos** |
| 🌧 **Lluvia de ideas** | Escribe **todo** sin filtrar | Sin juzgar corrección ni redundancia |
| 🕒 **Orden cronológico** | Coloca cada post-it según el momento real | Construye el _mapa inicial_ del flujo |

> **Resultado**  
> Un tablero con la línea temporal completa listo para depurar, agrupar y detectar huecos.

---

## Paso 2 — Depurar y alinear los **Eventos de Dominio**

### 1. Lectura & Storytelling 📖
- Recorre la cinta de **izquierda a derecha**.  
- Quien pegó cada post-it **lo lee en voz alta** y explica su relevancia.  
- Fomenta **preguntas rápidas** para aclarar contexto.

### 2. Chequeo sintáctico ✔️
- ¿Verbo en **pasado**?  
- ¿Nombre de **negocio** claro (no términos técnicos como «registro DB»)?  
- Si el evento es solo técnico, márcalo como 🏷️ **tech** y déjalo aparte.

### 3. Consolidación de vocabulario 🗂
- Detecta **sinónimos** → elige 1 término oficial.  
- Si un término describe cosas distintas, renómbralos y añade descriptor  
  `LoteRechazado_QC` vs `LoteRechazado_Lab`.

### 4. Corrección de la línea temporal ⏱
- Mueve post-its hasta que **todos** concuerden.  
- Inserta eventos faltantes (naranja) si ves huecos.  
- Marca dudas con 🟥 **post-it rojo**.

### 5. Deduplicar y fusionar 🔄
- Elimina eventos **idénticos** repetidos.  
- Combina eventos adyacentes con distinto nivel de detalle.

> **Resultado**  
> - **Línea** de eventos limpia y consensuada.  
> - **Glosario** común en el borde del tablero.  
> - **Preguntas abiertas** señaladas en rojo.

---

## Paso 3 — Identificar **qué dispara** cada evento

| Causa | 📌 Post-it | Preguntas guía | Ejemplo |
|-------|-----------|---------------|---------|
| **Acción de usuario** | 🟨 Comando | ¿Qué hizo la persona? ¿En qué pantalla/API? | `RegistrarDescargaDeLeche` |
| **Sistema externo** | 🟦 Actor externo | ¿Qué servicio/proveedor notificó? | IoT ➜ `SensorTempReportado` |
| **Tiempo / Job** | 🟪 Proceso de negocio | ¿Regla temporal (“cada 24 h”)? | `CitaDeProductorVencida` |
| **Otro evento** | 🟪 Política / Reacción | ¿Qué evento anterior lo causó? | `MuestraAnalizada ➜ LoteRechazado` |

### Dinámica 👣
1. Recorre la línea de eventos **depurada**.  
2. Para cada uno, pregunta: **“¿Qué lo disparó?”**  
3. Coloca el post-it de causa justo **antes** del evento.  
4. Conecta causa ➜ evento con **flecha fina**.  
5. Sin causa clara → 🟥 “¿Quién dispara esto?” y continúa.

> 💡 **Tip**  
> Cadena “Evento A ➜ Política ➜ Evento B” ⇒ anota la **política** en morado; más adelante decidirás su BC.

---

## Paso 4 — Detectar **Agregados** y límites transaccionales

### Agrupación visual 🖼
- Dibuja un **rectángulo tenue** alrededor de post-its que comparten el mismo objeto (lote, tanque…).  
- Usa 🟩 **verde** para nombrar el agregado: _Tank_, _MilkReception_, _Sample_.

### Preguntas clave ❓
- ¿Qué datos deben permanecer **consistentes** en la misma transacción?  
- Si ocurren dos comandos simultáneos, ¿cuál **bloquea** a cuál?  
- ¿Qué entidad **identifica** de forma única al grupo?

### Chequear invariantes 🛡
- Lista reglas duras debajo:  
  - “El volumen nunca puede ser negativo”.  
  - “Un lote rechazado no vuelve a ‘Aceptado’”.  
- Si una regla involucra **dos agregados**, marca 🟥 → podría requerir **saga**.

### Refinar fronteras 🪄
- **Divide** rectángulos si no comparten invariantes.  
- **Fusiona** si todos los comandos necesitan la misma consistencia.

> **Resultado**  
> - Mapa con **3–7** agregados bien nombrados.  
> - Invariantes visibles que guían entidades y repositorios.

---

## Paso 5 — Profundizar en **Políticas** y reglas de negocio

### 1. Clasificar post-its morados 🎭
- **Política sincrónica** (command handler) → dentro de la transacción.  
- **Política asíncrona** (event handler / saga) → tras el commit, tolera _eventual consistency_.

### 2. Anotar disparadores y efectos 🖇
Evento ──▶ Política ──▶ Comando / Evento nuevo
    
_Ejemplo_  
`MuestraAnalizada` ⟶ _(política asíncrona)_ **DeterminarEstadoDeLote** _(comando)_

### 3. Revisar side-effects 🌐
- ¿Invoca **API externas**? Marca 🟦 “External Call”.  
- ¿Modifica más de un agregado? → considera **saga/orquestador**.

### 4. Enumerar reglas clave 📜
- Usa post-it gris para reglas complejas:  
  “Si la acidez > X **y** temperatura > Y → rechazar lote”.

### 5. Definir prioridades ⭐
- Marca con ⭐ las políticas **críticas** para el MVP.  
- Posponer o externalizar las menos críticas.

> **Resultado**  
> - Cadena clara **evento ➜ política ➜ comando** en cada flujo.  
> - Lista priorizada de **reglas** a codificar e **integraciones** externas.

---