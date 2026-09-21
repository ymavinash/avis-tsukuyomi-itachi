# 月読 — TSUKUYOMI

> ## An Interactive Cinematic Experience Inspired by Uchiha Itachi

<p align="center">
  <strong>Enter the night. Witness the story. Discover the truth.</strong>
</p>

<p align="center">
  A cinematic digital experience exploring the life, choices, sacrifices, relationships and legacy of Itachi Uchiha.
</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss)

</p>

---

# 01 — THE EXPERIENCE

**Tsukuyomi** is a personal creative-development project inspired by **Uchiha Itachi**.

Instead of creating a conventional character biography website, the idea is to build an experience that feels like **walking through a memory**.

The website combines:

- cinematic UI
- storytelling
- animation
- WebGL
- procedural environments
- Japanese-inspired typography
- atmospheric lighting
- interactive navigation
- scroll-based experiences
- custom SVG animation
- Three.js
- GSAP
- responsive frontend engineering

> **Don't just read Itachi's story. Experience the atmosphere surrounding it.**

---

# 02 — WHY TSUKUYOMI?

Tsukuyomi represents the world of perception, memory and illusion.

Itachi's story is heavily built around the difference between:

```text
WHAT PEOPLE BELIEVED
        ↓
WHAT ITACHI SHOWED
        ↓
WHAT ACTUALLY HAPPENED
```

The website follows the same philosophy.

The interface initially shows one perspective. As the user explores deeper, the story gradually reveals another.

---

# 03 — WHY ITACHI?

This project is personal.

Itachi has always been one of the characters I found most interesting because his story is not simply about being powerful.

His character revolves around:

- sacrifice
- responsibility
- loyalty
- brotherhood
- peace
- isolation
- misunderstanding
- difficult decisions
- protecting someone without being understood
- carrying consequences alone

What fascinates me most is the contrast between **the person the world believed Itachi was** and **the person he actually chose to become**.

That contrast became the foundation of this project.

The darkness isn't just visual design.

The red moon isn't just a background.

The crows aren't just decoration.

The Sharingan isn't just an iconic symbol.

Every visual element is intended to represent something from the story.

---

# 04 — STORY STRUCTURE

```text
                         月読
                      TSUKUYOMI
                          │
                  BEFORE THE NIGHT
                          │
                          ▼
                     THE UCHIHA
                          │
                          ▼
                        SHISUI
                          │
                          ▼
                         ANBU
                          │
                          ▼
                    THE DECISION
                          │
                          ▼
                      AKATSUKI
                          │
                          ▼
                        SASUKE
                          │
                          ▼
                     THE TRUTH
                          │
                          ▼
                       LEGACY
```

---

# 05 — CHAPTERS

## 第一章 — BEFORE THE NIGHT

### The Prodigy

The story begins before the mask.

A child who understands conflict earlier than he should.

A young shinobi whose perception of the world develops faster than everyone around him.

## 第二章 — THE UCHIHA

### The Clan

The Uchiha.

Power.

Emotion.

Loyalty.

Conflict.

The growing tension between the village and the clan forms the background for everything that follows.

## 第三章 — SHISUI

### The Brother in Everything but Blood

Shisui represents one of the most important relationships in Itachi's life.

Their shared desire for peace becomes one of the defining elements of the story.

## 第四章 — ANBU

### The Shadow

Itachi enters the world of covert operations.

The visual language becomes darker.

The interface begins transitioning from a historical biography into an atmospheric experience.

## 第五章 — THE NIGHT

### The Decision

The night that changed everything.

The massacre.

The moment that permanently defines how the world sees Itachi.

## 第六章 — AKATSUKI

### The Mask

The world sees a criminal.

The truth remains hidden.

The visual experience reflects this through shadows, silhouettes, crows and fragmented information.

## 第七章 — SASUKE

### The Brother

Everything ultimately comes back to Sasuke.

The story changes from:

```text
WHO WAS ITACHI?
```

to:

```text
WHY DID ITACHI DO IT?
```

## 第八章 — THE TRUTH

### The Reveal

The final perspective changes the meaning of everything that came before.

The experience intentionally uses the reveal as a visual and emotional transition.

---

# 06 — VISUAL IDENTITY

The entire project is built around a restrained cinematic palette.

```text
BLACK
████████████████████

DEEP CRIMSON
████████████████████

BLOOD RED
████████████████████

MOON WHITE
████████████████████
```

The primary visual language is:

> **Black × Crimson × Moonlight**

The interface intentionally avoids excessive colors.

Instead, contrast comes from:

- darkness
- light
- red
- opacity
- scale
- depth
- movement

---

# 07 — LANDING EXPERIENCE

The landing page is designed as the entrance to the world.

```text
Japanese typography
        ↓
ITACHI
        ↓
UCHIHA
        ↓
SHARINGAN
        ↓
TRANSFORMATION
        ↓
ENTER THE NIGHT
```

The page uses a carefully sequenced GSAP timeline to reveal the interface.

Elements don't simply appear.

They enter the scene progressively.

---

# 08 — SHARINGAN ANIMATION

The Sharingan is one of the primary interactive elements.

It isn't implemented as a simple rotating image.

```text
NORMAL SHARINGAN
        ↓
ANTICIPATION
        ↓
TOMOE ROTATION
        ↓
MOTION TRAIL
        ↓
TOMOE COLLAPSE
        ↓
MANGEKYŌ APPEARS
        ↓
RED GLOW
        ↓
EYE SCALE
        ↓
ENTER EXPERIENCE
```

### Animation principles

The animation uses:

- GSAP timelines
- SVG transforms
- controlled easing
- opacity transitions
- scale transitions
- rotation
- layered tomoe
- glow
- timing offsets

The rotation is centered around the actual eye rather than rotating the SVG arbitrarily.

This makes the movement feel much more natural.

---

# 09 — MOTION TRAIL

Instead of using a generic fire effect, the Sharingan animation uses **actual tomoe motion trails**.

This keeps the animation connected to the visual identity of the eye.

The trail works by layering multiple tomoe states with:

- slight rotational offsets
- delayed movement
- decreasing opacity
- scale variation

The result is intended to feel like the eye itself is accelerating rather than having an unrelated particle effect attached to it.

---

# 10 — EXPERIENCE PAGE

The `/experience` route is the atmospheric centerpiece of the project.

It uses a large scrollable environment where the user descends through the story.

The page combines:

- Three.js
- WebGL
- procedural particles
- red moon
- camera movement
- atmospheric darkness
- Itachi silhouette
- crows
- cinematic typography
- scroll progression

Scrolling becomes part of the storytelling.

---

# 11 — RED MOON

The red moon acts as the visual anchor of the Experience page.

```text
                 RED MOON
                     ○
                     │
                ITACHI
               SILHOUETTE
                     │
                  DARKNESS
```

The moon represents the environment around Itachi rather than functioning simply as decoration.

---

# 12 — ITACHI SILHOUETTE

The Itachi-inspired silhouette is treated as an atmospheric element.

The visual system uses:

- transparent artwork
- dark silhouette
- red rim lighting
- subtle shadows
- eye cutouts
- Sharingan overlays
- moonlight
- depth
- atmospheric particles

The goal is to make Itachi feel like a **memory emerging from the darkness**.

---

# 13 — SHARINGAN EYES

The eyes are implemented as a separate visual layer.

```text
BACKGROUND
    ↓
RED MOON
    ↓
SHARINGAN EYE
    ↓
ITACHI SILHOUETTE
    ↓
CROWS / FOREGROUND
```

The eye cutouts allow the Sharingan to appear as though the red eye is coming from inside the shadow.

The eye system is designed around:

- narrow almond-shaped eyes
- white sclera
- red iris
- black pupil
- tomoe
- subtle red glow
- responsive positioning

This avoids the effect of simply placing two large red circles on top of the character.

---

# 14 — THREE.JS ATMOSPHERE

The Experience environment uses procedural Three.js rendering.

Instead of relying entirely on large pre-rendered backgrounds, the scene generates atmospheric elements programmatically.

The environment can contain:

- particles
- depth
- moonlight
- camera movement
- subtle motion
- environmental noise
- atmospheric objects

This provides greater control over animation and composition.

---

# 15 — TIMELINE

The `/timeline` route is designed as an interactive chronological museum.

Rather than displaying a simple list of events, the page transforms the timeline into a visual journey.

```text
THE PRODIGY
      │
      ●
      │
THE ACADEMY
      │
      ●
      │
ANBU
      │
      ●
      │
SHISUI
      │
      ●
      │
THE UCHIHA
      │
      ●
      │
AKATSUKI
      │
      ●
      │
SASUKE
```

Each event can become a visual chapter.

The timeline uses:

- scroll reveals
- vertical progression
- chapter markers
- cinematic typography
- interaction states
- event cards
- Japanese chapter labels

---

# 16 — LORE

The `/lore` route is intended to explore the deeper ideas behind the story.

Possible sections include:

```text
THE WILL OF FIRE
        ↓
THE UCHIHA
        ↓
SHISUI
        ↓
THE COUP
        ↓
THE MASSACRE
        ↓
AKATSUKI
        ↓
SASUKE
        ↓
THE TRUTH
```

The goal is to connect events rather than simply list them.

---

# 17 — GALLERY

The `/gallery` route will act as a visual archive.

The intended experience includes:

- cinematic image transitions
- fullscreen viewing
- image focus
- atmospheric overlays
- smooth navigation
- responsive layouts

The gallery should feel more like an art exhibition than a conventional image grid.

---

# 18 — NAVIGATION

The navigation is intentionally minimal.

```text
月読

BEGIN
EXPERIENCE
TIMELINE
LORE
GALLERY
```

The interface uses Japanese typography and subtle active-state transitions.

The navigation should never compete with the visual environment.

---

# 19 — PAGE TRANSITIONS

Route changes are designed to feel cinematic.

```text
PAGE A
   ↓
DARK TRANSITION
   ↓
PAGE B
```

A GSAP-controlled overlay creates a short transition between pages.

The transition uses:

- scale
- transform origin
- opacity
- easing
- controlled timing

This keeps the entire website feeling like one continuous experience.

---

# 20 — ANIMATION PHILOSOPHY

The core animation philosophy is:

> **Every animation should have a reason to exist.**

Not:

```text
"Can I add another effect?"
```

But:

```text
"Does this movement improve the experience?"
```

The project deliberately avoids excessive animation.

Instead, it focuses on:

- timing
- anticipation
- easing
- rhythm
- scale
- depth
- opacity
- transitions

---

# 21 — TECHNOLOGY STACK

## Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

## Animation

- GSAP
- CSS animations
- SVG transformations
- Scroll-driven animation

## 3D / Graphics

- Three.js
- React Three Fiber
- Drei
- WebGL
- GLSL / shader concepts

## Development

- Git
- GitHub
- npm
- ESLint
- Turbopack

---

# 22 — WHY THESE TECHNOLOGIES?

### Next.js

Provides the application architecture, routing and modern React foundation.

### React

Allows the experience to be broken into reusable interactive components.

### TypeScript

Provides stronger type safety and maintainability as the project grows.

### GSAP

Used for precise cinematic animation sequences.

### Three.js

Used to create the atmospheric environment and procedural visual effects.

### React Three Fiber

Provides a React-friendly architecture for the Three.js environment.

### Tailwind CSS

Used for responsive layout and utility-based styling.

### SVG

Used for the Sharingan because vector graphics allow precise manipulation of rotation, scale, opacity, shape and transforms.

---

# 23 — PROJECT ARCHITECTURE

```text
itachi-uchiha-experience/
│
├── public/
│   ├── audio/
│   ├── images/
│   ├── models/
│   └── textures/
│
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── experience/
│   │   │   └── page.tsx
│   │   ├── timeline/
│   │   │   └── page.tsx
│   │   ├── lore/
│   │   │   └── page.tsx
│   │   └── gallery/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── effects/
│   │   ├── hero/
│   │   ├── navigation/
│   │   ├── sections/
│   │   ├── three/
│   │   └── ui/
│   │
│   ├── data/
│   ├── hooks/
│   └── lib/
│
├── package.json
├── package-lock.json
└── README.md
```

The project is structured to keep UI, components, data, animation, graphics and routing separated.

This makes the project easier to extend as new experiences are added.

---

# 24 — ENGINEERING SKILLS DEMONSTRATED

## Frontend Engineering

- React component architecture
- Next.js App Router
- TypeScript
- responsive UI
- reusable components
- route-based architecture
- state-driven interaction

## Animation Engineering

- GSAP timelines
- easing functions
- SVG transforms
- animation sequencing
- layered animation
- page transitions
- scroll-based animation
- animation lifecycle management

## Graphics Programming

- Three.js
- WebGL
- procedural particles
- camera movement
- atmospheric rendering
- shader concepts

## UI / UX

- visual hierarchy
- interaction design
- responsive layouts
- cinematic transitions
- accessibility considerations
- reduced-motion considerations

## Performance

- controlled animation
- component cleanup
- procedural graphics
- minimizing unnecessary DOM work
- managing WebGL rendering

## Software Engineering

- Git
- GitHub
- feature branches
- modular architecture
- maintainable code structure
- iterative development

---

# 25 — GIT WORKFLOW

The project uses feature branches rather than developing directly on `main`.

```text
                     main
                      │
             ┌────────┴────────┐
             │                 │
      feature/timeline   feature/lore
             │
      feature/gallery
             │
      feature/atmosphere
```

Example:

```bash
git checkout -b feature/timeline
```

After completing the feature:

```bash
git add .
git commit -m "feat: build cinematic timeline experience"
git push -u origin feature/timeline
```

The stable `main` branch remains separate from experimental development.

---

# 26 — DEVELOPMENT PHILOSOPHY

This project is an experiment in combining:

```text
Software Engineering
        +
Creative Development
        +
Animation
        +
3D Graphics
        +
UI/UX
        +
Storytelling
```

The objective isn't just to make something that works.

It is to understand how software can become a medium for storytelling.

---

# 27 — PERFORMANCE & RESPONSIVENESS

The experience is being developed with performance in mind.

Important considerations include:

- responsive layouts
- controlled particle counts
- efficient animations
- cleanup of GSAP contexts
- WebGL rendering considerations
- mobile breakpoints
- reduced-motion support
- avoiding unnecessary continuous animation

The visual experience should remain immersive without sacrificing usability.

---

# 28 — ACCESSIBILITY

The project aims to progressively improve accessibility through:

- semantic HTML
- keyboard navigation
- meaningful labels
- appropriate contrast
- reduced-motion support
- non-hover interaction paths
- responsive layouts

The cinematic effects should enhance the interface rather than make the interface inaccessible.

---

# 29 — DEVELOPMENT ROADMAP

## Phase 01 — Foundation

- [x] Next.js setup
- [x] TypeScript
- [x] Tailwind
- [x] Navigation
- [x] Landing page
- [x] Sharingan interaction
- [x] Experience page
- [x] Three.js atmosphere
- [x] Red moon
- [x] Itachi silhouette
- [x] Responsive foundation
- [x] Git/GitHub workflow

## Phase 02 — Timeline

- [ ] Cinematic timeline
- [ ] Scroll-based event reveals
- [ ] Chapter animations
- [ ] Interactive timeline markers
- [ ] Event expansion
- [ ] Timeline progress indicator

## Phase 03 — Lore

- [ ] Lore architecture
- [ ] Story relationships
- [ ] Interactive narrative sections
- [ ] Chapter transitions
- [ ] Deeper storytelling

## Phase 04 — Atmosphere

- [ ] Advanced crow system
- [ ] Ink/smoke effects
- [ ] Advanced particles
- [ ] GLSL shaders
- [ ] Environmental transitions
- [ ] Sound design
- [ ] Ambient audio

## Phase 05 — Gallery

- [ ] Cinematic gallery
- [ ] Image transitions
- [ ] Fullscreen viewing
- [ ] Interactive image navigation
- [ ] Responsive gallery

## Phase 06 — Final Polish

- [ ] Performance profiling
- [ ] Mobile optimization
- [ ] Accessibility improvements
- [ ] Reduced-motion support
- [ ] Loading experience
- [ ] Final animation polish
- [ ] Cross-browser testing

---

# 30 — RUN LOCALLY

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/tsukuyomi-itachi-experience.git
```

Enter the project:

```bash
cd tsukuyomi-itachi-experience
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

# 31 — PROJECT STATUS

```text
STATUS: ACTIVE DEVELOPMENT

LANDING        ████████████████████ 100%
EXPERIENCE     ███████████████░░░░░  75%
TIMELINE       ███████░░░░░░░░░░░░░  35%
LORE           ██░░░░░░░░░░░░░░░░░░  10%
GALLERY        ██░░░░░░░░░░░░░░░░░░  10%
POLISH         █░░░░░░░░░░░░░░░░░░░   5%
```

> The project is actively evolving. These percentages represent development progress and are not intended as formal completion metrics.

---

# 32 — FAN PROJECT NOTICE

This is an **unofficial fan-made, non-commercial project inspired by Naruto and Uchiha Itachi**.

Naruto, its characters, artwork, names, logos, music and related intellectual property belong to their respective copyright and trademark holders.

This project is created for personal learning, experimentation and creative development.

Where possible, original, self-created, procedural or appropriately licensed assets should be used.

---

# 33 — PERSONAL NOTE

I didn't want this to be another portfolio project where the goal was simply:

```text
"Look, I know React."
```

I wanted to build something I genuinely care about.

Something where I could combine the engineering skills I'm developing with a character and story that have stayed with me for years.

Itachi is interesting to me because his story asks difficult questions about:

```text
What does sacrifice mean?

Can someone protect another person
without being understood?

How much can one person carry alone?

Does the truth always make things better?

What happens when the person
the world hates is actually trying to protect it?
```

Those ideas are what inspired the visual direction of Tsukuyomi.

---

# 34 — THE REAL GOAL

The real goal of this project isn't to recreate Naruto.

It is to explore what happens when:

> **Software becomes a storytelling medium.**

A website can be more than:

```text
Navbar
Hero
Cards
Footer
```

It can have:

```text
Atmosphere
        +
Emotion
        +
Movement
        +
Sound
        +
Interaction
        +
Story
```

That's what I'm trying to explore with Tsukuyomi.

---

# 35 — FINAL WORD

This project started from my love for Itachi.

It grew into an experiment with:

- frontend engineering
- animation
- WebGL
- Three.js
- GSAP
- UI/UX
- storytelling
- visual design

And it is still evolving.

The intention is to keep pushing it until the website doesn't feel like a collection of pages anymore.

It should feel like **one continuous journey through the night.**

```text
                  うちは イタチ

              The world saw a villain.

              Sasuke saw a brother.

              The truth saw something else.

                       ↓

                     月読

                  TSUKUYOMI

               ENTER THE NIGHT.
```

---

<p align="center">

### Built with code, curiosity, and an unreasonable amount of love for Itachi.

**月読 — TSUKUYOMI**

</p>
