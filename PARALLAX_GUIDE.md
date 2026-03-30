# Parallax Effects Guide

## Overview

This website features a comprehensive parallax system with multiple layers of depth and interactivity. All effects are optimized for 60fps performance using hardware-accelerated CSS transforms.

## Components

### 1. MouseParallax Component

**Location:** `/src/app/components/MouseParallax.tsx`

**Usage:**
```tsx
import { MouseParallax } from './components/MouseParallax';

<MouseParallax intensity={20} smooth={10} inverted={false}>
  <div>Content that follows mouse movement</div>
</MouseParallax>
```

**Props:**
- `intensity` (number): How much the element moves (default: 20px)
- `smooth` (number): Smoothing factor, higher = slower (default: 10)
- `inverted` (boolean): Reverse the direction (default: false)

**Features:**
- Smooth mouse tracking with requestAnimationFrame
- Customizable intensity and smoothing
- Optional inverted movement
- Hardware-accelerated transforms

---

### 2. ParallaxContainer Component

**Location:** `/src/app/components/ParallaxContainer.tsx`

**Usage:**
```tsx
import { ParallaxContainer } from './components/ParallaxContainer';

<ParallaxContainer speed={0.5} direction="up">
  <div>Content that moves on scroll</div>
</ParallaxContainer>
```

**Props:**
- `speed` (number): Parallax speed multiplier (default: 0.5)
- `direction` ('up' | 'down'): Direction of movement (default: 'up')

**Features:**
- Scroll-based parallax using Framer Motion
- Customizable speed and direction
- Smooth transforms with GPU acceleration

---

### 3. ParallaxCard Component

**Location:** `/src/app/components/ParallaxCard.tsx`

**Usage:**
```tsx
import { ParallaxCard } from './components/ParallaxCard';

<ParallaxCard intensity={15}>
  <div>Interactive 3D tilt card</div>
</ParallaxCard>
```

**Props:**
- `intensity` (number): Tilt angle in degrees (default: 15)

**Features:**
- Interactive 3D tilt effect
- Dynamic glow following mouse position
- Smooth spring animations
- 3D perspective transforms

---

### 4. ParallaxBackground Component

**Location:** `/src/app/components/ParallaxBackground.tsx`

**Usage:**
```tsx
import { ParallaxBackground } from './components/ParallaxBackground';

<section className="relative">
  <ParallaxBackground />
  <div className="relative z-10">Your content</div>
</section>
```

**Features:**
- 6 independent parallax layers
- Gradient orbs with mouse tracking
- Floating geometric shapes
- Animated particles
- Orbiting rings
- Glowing dots
- All layers respond to mouse movement at different speeds

---

### 5. useMouseParallax Hook

**Location:** `/src/app/hooks/useMouseParallax.tsx`

**Usage:**
```tsx
import { useMouseParallax } from '../hooks/useMouseParallax';

function MyComponent() {
  const mousePosition = useMouseParallax({ 
    intensity: 20, 
    smooth: 10,
    inverted: false 
  });

  return (
    <div
      style={{
        transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
      }}
    >
      Content
    </div>
  );
}
```

**Returns:**
- `{ x: number, y: number }` - Current parallax position

---

## CSS Classes

### Parallax Utility Classes

Located in `/src/styles/parallax.css`

#### Depth Layers
```css
.depth-layer-1  /* Closest layer */
.depth-layer-2
.depth-layer-3
.depth-layer-4  /* Farthest layer */
```

#### Floating Animations
```css
.float-animation       /* 6s duration */
.float-animation-slow  /* 10s duration */
.float-animation-fast  /* 4s duration */
```

#### Interactive Effects
```css
.interactive-glow      /* Glow following mouse */
.tilt-card            /* 3D tilt base */
.hover-perspective    /* Subtle 3D on hover */
.rotating-border      /* Animated gradient border */
```

#### Depth Shadows
```css
.depth-shadow-1  /* Subtle */
.depth-shadow-2  /* Medium */
.depth-shadow-3  /* Strong */
```

#### Depth Blur
```css
.depth-blur-far   /* Blurred + faded */
.depth-blur-mid   /* Slightly blurred */
.depth-blur-near  /* Sharp */
```

#### Performance
```css
.gpu-accelerated  /* Force GPU acceleration */
.smooth-transform /* Smooth transitions */
.parallax-layer   /* Optimized for parallax */
```

---

## Implementation Examples

### Example 1: Multi-Layer Mouse Parallax

```tsx
<div className="relative h-screen overflow-hidden">
  <MouseParallax intensity={10} smooth={15}>
    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
  </MouseParallax>
  
  <MouseParallax intensity={20} smooth={12}>
    <div className="absolute bottom-20 right-20 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
  </MouseParallax>
  
  <div className="relative z-10">
    {/* Your content */}
  </div>
</div>
```

### Example 2: Scroll Parallax Sections

```tsx
<section>
  <ParallaxContainer speed={0.3} direction="up">
    <div className="p-12 bg-zinc-900">
      Moves up slowly
    </div>
  </ParallaxContainer>
  
  <ParallaxContainer speed={0.5} direction="down">
    <div className="p-12 bg-zinc-800">
      Moves down faster
    </div>
  </ParallaxContainer>
</section>
```

### Example 3: Interactive Card Grid

```tsx
<div className="grid grid-cols-3 gap-6">
  {cards.map((card) => (
    <ParallaxCard key={card.id} intensity={15}>
      <div className="p-8 bg-zinc-900 rounded-3xl">
        {card.content}
      </div>
    </ParallaxCard>
  ))}
</div>
```

### Example 4: Combined Effects

```tsx
<section className="relative min-h-screen">
  {/* Animated background */}
  <ParallaxBackground />
  
  {/* Scroll parallax wrapper */}
  <ParallaxContainer speed={0.4}>
    {/* Mouse parallax content */}
    <MouseParallax intensity={15}>
      <div className="max-w-4xl mx-auto">
        {/* Interactive 3D card */}
        <ParallaxCard intensity={12}>
          <div className="p-12 bg-zinc-900/90 backdrop-blur-xl rounded-3xl">
            <h2>Multi-layered Parallax</h2>
            <p>Combining scroll, mouse, and 3D effects</p>
          </div>
        </ParallaxCard>
      </div>
    </MouseParallax>
  </ParallaxContainer>
</section>
```

---

## Performance Optimization

### Best Practices

1. **Use `transform` instead of position properties**
   ```tsx
   // Good ✅
   style={{ transform: `translate3d(${x}px, ${y}px, 0)` }}
   
   // Bad ❌
   style={{ left: x, top: y }}
   ```

2. **Enable GPU acceleration**
   ```tsx
   <div className="gpu-accelerated">
     {/* Content */}
   </div>
   ```

3. **Limit the number of parallax elements**
   - Aim for 20-30 parallax elements per page
   - Use fewer layers for mobile devices

4. **Use `will-change` sparingly**
   ```css
   .parallax-layer {
     will-change: transform;
   }
   ```

5. **Throttle or debounce on low-end devices**
   ```tsx
   const isLowEndDevice = window.devicePixelRatio < 2;
   const smooth = isLowEndDevice ? 20 : 10;
   ```

### Performance Monitoring

All parallax effects are designed to maintain 60fps. Monitor performance using:

```javascript
// Chrome DevTools > Performance tab
// Look for "Frame Rate" staying at 60fps
```

---

## Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Fallbacks

For browsers without support:
- Parallax effects gracefully degrade to static positioning
- `transform: translate3d` falls back to `translate`
- Animations are disabled via `prefers-reduced-motion`

---

## Troubleshooting

### Issue: Janky animations

**Solution:**
- Reduce the number of parallax elements
- Increase the `smooth` value
- Add `gpu-accelerated` class

### Issue: Elements not moving

**Solution:**
- Check that parent has `position: relative`
- Ensure `overflow: hidden` on container
- Verify z-index layering

### Issue: Mouse parallax not working

**Solution:**
- Check that hook is called in a component
- Verify mouse events are not blocked
- Ensure no `pointer-events: none` on container

---

## Credits

Built with:
- **Framer Motion** - Smooth scroll-based parallax
- **React Hooks** - Custom mouse tracking
- **GSAP** - Additional mouse cursor effects
- **CSS Transforms** - Hardware-accelerated animations

---

## License

Part of the Z Designs website project.
