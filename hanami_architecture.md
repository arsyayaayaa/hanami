# 🌸 Hanami Architecture

> Version : 1.0
> Last Updated : July 2026

---

# Philosophy

Hanami is designed as a modular, event-driven, single-page web application.

Every module has only one responsibility.

The architecture follows the principle:

> **Core controls Components. Components never control Core.**

---

# Project Structure

```text
hanami/

assets/
css/
js/

    core/
    components/
    data/
    services/
    utils/

index.html
README.md
HANAMI_ARCHITECTURE.md
```

---

# Layer Architecture

```text
                Browser
                   │
                   ▼
             index.html
                   │
                   ▼
               js/main.js
                   │
                   ▼
              core/app.js
                   │
                   ▼
         core/scene-manager.js
                   │
                   ▼
          Event Bus Communication
                   │
                   ▼
             UI Components
                   │
                   ▼
             Services / Firebase
```

---

# Folder Responsibilities

## core/

Application engine.

Responsible for:

- application lifecycle
- scene navigation
- communication
- transitions

Files

```text
app.js

scene-manager.js

event-bus.js

transition-manager.js
```

---

## components/

Contains every UI component.

Each component is independent.

Components never know each other.

Examples

```text
gift.js

keypad.js

envelope.js

letter.js

gallery.js

timeline.js

wishes.js

celebration.js

ending.js
```

Every component exposes:

```javascript
init()

show()

hide()
```

Components emit events instead of calling other components.

---

## data/

Contains static content.

Examples

```text
letter-data.js

gallery-data.js

timeline-data.js

ending-data.js
```

No application logic.

No DOM manipulation.

---

## services/

Responsible for external systems.

Examples

```text
firebase.js

wishes-service.js
```

Components never communicate with Firebase directly.

---

## utils/

Reusable helper functions.

Examples

```text
helpers.js

storage.js

validators.js
```

---

# Communication Rules

Allowed

```text
Core

↓

Components
```

Allowed

```text
Components

↓

EventBus

↓

Core
```

Not Allowed

```text
Component

↓

Another Component
```

Wrong

```javascript
gallery.show();
```

Correct

```javascript
eventBus.emit("gallery:completed");
```

SceneManager decides what happens next.

---

# Event Naming Convention

Events follow this format:

```text
component:event
```

Examples

```text
gift:opened

keypad:success

envelope:opened

letter:completed

gallery:completed

timeline:completed

wishes:submitted

celebration:completed

ending:replay
```

---

# Component Responsibilities

Every component follows the same lifecycle.

```text
constructor()

↓

init()

↓

render()

↓

bindEvents()

↓

show()

↓

hide()
```

Components only manage:

- UI
- animations
- local state

Nothing else.

---

# Core Responsibilities

Core manages:

- application flow
- scene switching
- transitions
- communication
- initialization

Core never contains UI.

---

# Data Rules

Data files contain only data.

Example

```javascript
export default {

    title: "...",

    message: "...",

    images: [...]

}
```

No functions.

No DOM.

---

# Services Rules

Services communicate with:

- Firebase
- APIs
- Browser Storage

Nothing else.

---

# CSS Architecture

```text
css/

base/

components/

main.css
```

Base

- variables
- reset
- layout
- typography
- animations
- utilities

Component CSS contains styles for one component only.

---

# JavaScript Principles

The project follows:

- Single Responsibility Principle
- Separation of Concerns
- Event Driven Architecture
- Modular Design

---

# Hanami Development Rules

Always:

✔ Keep components independent

✔ Keep files small

✔ Use one responsibility per module

✔ Prefer composition over duplication

✔ Reuse utilities

✔ Keep naming consistent

Never:

✘ Direct component communication

✘ Duplicate logic

✘ Hardcoded dependencies

✘ Mix UI with services

✘ Mix data with logic

---

# Hanami Backlog

Architectural improvements scheduled after v1.0

- BaseComponent
- VisibilityController
- EventBus migration
- SceneManager ↔ TransitionManager integration
- Scene configuration file
- Cleanup listeners
- Cleanup timers

---

# Final Goal

Hanami should remain:

- modular
- readable
- maintainable
- scalable

without sacrificing simplicity.
