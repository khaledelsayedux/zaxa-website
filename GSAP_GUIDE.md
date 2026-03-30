# GSAP Mouse Animations Guide

## Overview

This website features an advanced GSAP animation system with sophisticated mouse interactions, scroll triggers, magnetic effects, and text animations. All effects are optimized for 60fps performance using hardware-accelerated transforms.

---

## Components

### 1. AdvancedGSAPCursor

**Location:** `/src/app/components/AdvancedGSAPCursor.tsx`

**Features:**
- ✨ Custom cursor with dot and ring followers
- 🎯 Automatic detection of interactive elements
- 🧲 Different cursor modes (link, button, drag, expand)
- 📝 Dynamic cursor text labels
- 💫 Trail effect with particle decay
- 🎨 Mix-blend-mode for unique visual effects

**Cursor Modes:**

1. **Default Mode**
   - Blue dot (3px)
   - Violet ring (10px)
   - Smooth following motion

2. **Link Mode** (Activated on `<a>` tags)
   - Shrinks dot (scale: 0.5)
   - Expands ring (scale: 2.5)
   - Shows "Click" text label
   - Blue border color

3. **Button Mode** (Activated on `<button>` tags)
   - Large dot (scale: 3)
   - Large ring (scale: 3)
   - Magnetic attraction effect
   - Cyan border color
   - Pulls button towards cursor

4. **Expand Mode** (Activated on images/cards)
   - Hides dot (scale: 0)
   - Very large ring (scale: 4)
   - Purple border with background
   - Shows custom text label
   - Use `data-cursor="expand"` attribute

5. **Drag Mode** (Activated on draggable elements)
   - Small dot (scale: 0.3)
   - Dashed border ring
   - 45° rotation
   - Shows "Drag" text label

**Usage:**
```tsx
// Already integrated in App.tsx
import { AdvancedGSAPCursor } from './components/AdvancedGSAPCursor';

<AdvancedGSAPCursor />
```

**Custom Text Labels:**
```html
<!-- Add custom cursor text -->
<a data-cursor-text="Read More">Link</a>
<div data-cursor="expand" data-cursor-text="View Details">Card</div>
```

---

### 2. MagneticButton

**Location:** `/src/app/components/MagneticButton.tsx`

**Features:**
- 🧲 Magnetic attraction to cursor
- 🎯 Independent text and button movement
- ⚡ Elastic snap-back animation
- 🎨 Customizable strength

**Props:**
- `strength` (number): Magnetic force (default: 0.4)
- `className` (string): Custom CSS classes
- `onClick` (function): Click handler

**Usage:**
```tsx
import { MagneticButton } from './components/MagneticButton';

<MagneticButton strength={0.5} className="px-8 py-4 bg-blue-500 rounded-full">
  Hover Me
</MagneticButton>
```

**Strength Guidelines:**
- `0.2-0.3`: Subtle magnetic effect
- `0.4-0.5`: Medium attraction (recommended)
- `0.6-0.8`: Strong pull
- `0.9-1.0`: Very strong (can be disorienting)

---

### 3. GSAPTextReveal

**Location:** `/src/app/components/GSAPTextReveal.tsx`

**Features:**
- 🎭 Character-by-character animation
- 🎨 Multiple animation types
- 🖱️ Interactive hover on each character
- ⏱️ Stagger and delay controls

**Animation Types:**

1. **Fade** - Simple opacity reveal
2. **Slide** - Slide up with bounce
3. **Split** - Vertical split reveal
4. **Wave** - Wave motion with rotation

**Props:**
- `type` ('fade' | 'slide' | 'split' | 'wave'): Animation style
- `delay` (number): Initial delay in seconds
- `stagger` (number): Delay between characters (default: 0.03s)

**Usage:**
```tsx
import { GSAPTextReveal } from './components/GSAPTextReveal';

<GSAPTextReveal type="wave" delay={0.5} stagger={0.05}>
  Animated Text
</GSAPTextReveal>
```

**Interactive Features:**
- Hover over individual characters
- Characters jump and change color on hover
- Smooth elastic animations

---

### 4. GSAPScrollAnimation

**Location:** `/src/app/components/GSAPScrollAnimations.tsx`

**Features:**
- 📜 Scroll-triggered animations
- 🎯 ScrollTrigger integration
- 🎨 Multiple animation presets
- 🔄 Reversible on scroll up

**Animation Types:**

1. **fade** - Opacity fade in
2. **slideUp** - Slide from bottom
3. **slideLeft** - Slide from right
4. **slideRight** - Slide from left
5. **scale** - Scale from 50%
6. **rotate** - Rotate and scale
7. **reveal** - Clip-path reveal

**Props:**
- `animation` (string): Animation type
- `start` (string): Start trigger point (default: 'top 80%')
- `end` (string): End trigger point (default: 'bottom 20%')
- `scrub` (boolean | number): Scrub animation to scroll
- `pin` (boolean): Pin element during animation
- `markers` (boolean): Show debug markers

**Usage:**
```tsx
import { GSAPScrollAnimation } from './components/GSAPScrollAnimations';

<GSAPScrollAnimation 
  animation="slideUp" 
  start="top 80%" 
  scrub={false}
>
  <div>Scroll-triggered content</div>
</GSAPScrollAnimation>
```

---

### 5. GSAPParallaxScroll

**Location:** `/src/app/components/GSAPScrollAnimations.tsx`

**Features:**
- 📜 Smooth parallax scrolling
- ⚡ GSAP-powered performance
- 🎨 Customizable speed

**Props:**
- `speed` (number): Parallax speed multiplier (default: 0.5)

**Usage:**
```tsx
import { GSAPParallaxScroll } from './components/GSAPScrollAnimations';

<GSAPParallaxScroll speed={0.3}>
  <div>Parallax element</div>
</GSAPParallaxScroll>
```

**Speed Guidelines:**
- `0.1-0.3`: Slow, subtle movement
- `0.4-0.6`: Medium parallax (recommended)
- `0.7-1.0`: Fast, dramatic effect

---

### 6. Hover Effects Components

**Location:** `/src/app/components/GSAPHoverEffects.tsx`

#### HoverEffect3D
```tsx
<HoverEffect3D intensity={20}>
  <div>3D tilt card</div>
</HoverEffect3D>
```
- 3D perspective tilt
- Dynamic shine effect
- Follows mouse position

#### RippleEffect
```tsx
<RippleEffect color="rgba(59, 130, 246, 0.5)">
  <button>Click Me</button>
</RippleEffect>
```
- Expanding ripple on click
- Customizable color
- Smooth fade out

#### GlowPulse
```tsx
<GlowPulse color="#3b82f6">
  <div>Glowing element</div>
</GlowPulse>
```
- Pulsing glow on hover
- Continuous animation
- Customizable color

#### MorphShape
```tsx
<MorphShape>
  <div>Morphing card</div>
</MorphShape>
```
- Random shape morphing
- Elastic transitions
- Organic blob shapes

#### ElasticScale
```tsx
<ElasticScale scale={1.2}>
  <div>Elastic element</div>
</ElasticScale>
```
- Elastic scale on hover
- Spring physics
- Smooth bounce back

---

### 7. LiquidCursor

**Location:** `/src/app/components/LiquidCursor.tsx`

**Features:**
- 🌊 Organic liquid blob cursor
- 🎨 Canvas-based rendering
- ⚡ Spring physics simulation
- 💫 Glow effects

**Usage:**
```tsx
import { LiquidCursor } from './components/LiquidCursor';

// Alternative cursor style
<LiquidCursor />
```

**Note:** This is an alternative to AdvancedGSAPCursor. Use one or the other, not both.

---

## CSS Classes

### GSAP Effect Classes

Located in `/src/styles/gsap-effects.css`

#### Cursor Classes
```css
.cursor-link      /* Link hover state */
.cursor-button    /* Button hover state */
.cursor-drag      /* Draggable state */
.cursor-expand    /* Expand/view state */
```

#### Hover Effects
```css
.gsap-hover-lift         /* Lift on hover with shadow */
.interactive-card-glow   /* Interactive glow effect */
.morph-shape            /* Morphing shapes */
.elastic-scale          /* Elastic scale */
```

#### Animation Helpers
```css
.gsap-transform         /* Optimized transforms */
.gpu-hint              /* Force GPU acceleration */
.smooth-text           /* Anti-aliased text */
.perspective-container /* 3D perspective */
```

#### Easing Classes
```css
.ease-elastic  /* Elastic easing */
.ease-bounce   /* Bounce easing */
.ease-smooth   /* Smooth cubic-bezier */
```

---

## Implementation Examples

### Example 1: Full-Featured Button

```tsx
import { MagneticButton } from './components/MagneticButton';
import { GlowPulse } from './components/GSAPHoverEffects';

<GlowPulse color="#3b82f6">
  <MagneticButton 
    strength={0.5}
    className="px-8 py-4 bg-blue-500 rounded-full"
  >
    Amazing Button
  </MagneticButton>
</GlowPulse>
```

### Example 2: Animated Hero Text

```tsx
import { GSAPTextReveal } from './components/GSAPTextReveal';

<div className="hero">
  <GSAPTextReveal type="wave" delay={0.2}>
    Welcome to
  </GSAPTextReveal>
  <GSAPTextReveal type="slide" delay={0.5} stagger={0.05}>
    Z Designs
  </GSAPTextReveal>
</div>
```

### Example 3: Scroll-Triggered Cards

```tsx
import { GSAPScrollAnimation } from './components/GSAPScrollAnimations';
import { HoverEffect3D } from './components/GSAPHoverEffects';

<div className="grid grid-cols-3 gap-6">
  {cards.map((card, i) => (
    <GSAPScrollAnimation 
      key={i} 
      animation="slideUp" 
      start="top 85%"
    >
      <HoverEffect3D intensity={15}>
        <div className="card">
          {card.content}
        </div>
      </HoverEffect3D>
    </GSAPScrollAnimation>
  ))}
</div>
```

### Example 4: Parallax Section

```tsx
import { GSAPParallaxScroll } from './components/GSAPScrollAnimations';

<section className="relative h-screen">
  <GSAPParallaxScroll speed={0.3}>
    <div className="background-layer" />
  </GSAPParallaxScroll>
  
  <GSAPParallaxScroll speed={0.6}>
    <div className="middle-layer" />
  </GSAPParallaxScroll>
  
  <div className="foreground-content">
    {/* Static content */}
  </div>
</section>
```

### Example 5: Interactive Card Grid

```tsx
import { MorphShape } from './components/GSAPHoverEffects';
import { RippleEffect } from './components/GSAPHoverEffects';

<div 
  className="grid"
  data-cursor="expand"
  data-cursor-text="View Details"
>
  {items.map((item) => (
    <MorphShape key={item.id}>
      <RippleEffect>
        <div className="p-8 bg-zinc-900 rounded-3xl">
          {item.content}
        </div>
      </RippleEffect>
    </MorphShape>
  ))}
</div>
```

---

## Performance Optimization

### Best Practices

1. **Use hardware acceleration**
   ```tsx
   className="gsap-transform gpu-hint"
   ```

2. **Limit animated elements**
   - Max 30-40 GSAP animations per page
   - Use CSS for simple transitions
   - Lazy load off-screen animations

3. **Optimize cursor effects**
   ```tsx
   // Reduce trail frequency on mobile
   const trailDelay = isMobile ? 60 : 30;
   ```

4. **Use will-change sparingly**
   ```css
   .animating-element {
     will-change: transform;
   }
   ```

5. **Kill unused timelines**
   ```tsx
   useEffect(() => {
     const tl = gsap.timeline();
     // ... animations
     
     return () => tl.kill();
   }, []);
   ```

### Performance Monitoring

```javascript
// Check FPS
let lastTime = performance.now();
const checkFPS = () => {
  const currentTime = performance.now();
  const fps = 1000 / (currentTime - lastTime);
  console.log(`FPS: ${fps.toFixed(1)}`);
  lastTime = currentTime;
  requestAnimationFrame(checkFPS);
};
```

---

## Browser Support

- ✅ Chrome/Edge 90+ (Full support)
- ✅ Firefox 88+ (Full support)
- ✅ Safari 14+ (Full support)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Fallbacks

```tsx
// Disable custom cursor on touch devices
const isTouchDevice = 'ontouchstart' in window;

{!isTouchDevice && <AdvancedGSAPCursor />}
```

---

## Troubleshooting

### Issue: Cursor not visible

**Solution:**
- Check z-index (should be 10000+)
- Verify hidden lg:block classes
- Ensure mix-blend-mode support

### Issue: Janky animations

**Solution:**
- Add `gpu-hint` class
- Reduce number of simultaneous animations
- Increase animation duration

### Issue: Text reveal not working

**Solution:**
- Ensure text is inside component
- Check for conflicting CSS
- Verify GSAP is loaded

### Issue: Magnetic buttons too strong

**Solution:**
```tsx
<MagneticButton strength={0.3}> {/* Reduce strength */}
```

---

## Advanced Techniques

### Custom Cursor Text

```tsx
// In your component
<div 
  data-cursor="expand"
  data-cursor-text="🎨 View Gallery"
>
  Gallery
</div>
```

### Chained Animations

```tsx
useEffect(() => {
  const tl = gsap.timeline();
  
  tl.to('.element1', { x: 100, duration: 1 })
    .to('.element2', { y: 50, duration: 0.5 })
    .to('.element3', { rotation: 360, duration: 1 });
    
  return () => tl.kill();
}, []);
```

### Scroll-Linked Progress

```tsx
const { scrollYProgress } = useScroll();

useEffect(() => {
  return scrollYProgress.on('change', (progress) => {
    gsap.to('.element', {
      scaleX: progress,
      duration: 0.3
    });
  });
}, []);
```

---

## Credits

Built with:
- **GSAP 3.14** - Professional animation platform
- **ScrollTrigger** - Scroll-based animations
- **React 18** - Component architecture
- **TypeScript** - Type safety

---

## License

Part of the Z Designs website project.
