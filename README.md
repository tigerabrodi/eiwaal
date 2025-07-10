# Eiwaal

A lightweight animation library for React. Built on top of the View Transitions API.

## ✨ Features

- 🎯 **9 Pre-built Animations** -> Slides, fades, scales, and flips
- 🚀 **View Transitions API** -> Leverages the modern browser API for smooth transitions
- 🎨 **Customizable** -> Configure duration, easing, and animation names
- 📦 **Lightweight** -> Minimal bundle size with zero dependencies
- 🔧 **TypeScript Support** -> Fully typed API
- 🔄 **Graceful Fallback** -> Works in browsers without View Transitions API support
- ⚡ **Automatic CSS Injection** -> No manual CSS imports needed

## 📦 Installation

```bash
npm install eiwaal
# or
yarn add eiwaal
# or
pnpm add eiwaal
```

## 🚀 Quick Start

### Using the Hook

```tsx
import { useViewTransition } from "eiwaal";

function MyComponent() {
  const [ref, startTransition] = useViewTransition({
    name: "my-element",
    animation: "fadeIn",
    config: {
      duration: 300,
      easing: "ease-in-out",
    },
  });

  const handleClick = () => {
    startTransition(() => {
      // Your state updates here
      setContent("New content");
    });
  };

  return (
    <div ref={ref} onClick={handleClick}>
      Click me to animate!
    </div>
  );
}
```

### Using the Component

```tsx
import { TransitionContainer } from "eiwaal";

function MyComponent() {
  return (
    <TransitionContainer
      name="my-container"
      animation="slideUp"
      config={{
        duration: 400,
        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div>Content that will animate</div>
    </TransitionContainer>
  );
}
```

## 🎭 Available Animations

| Animation    | Description                     |
| ------------ | ------------------------------- |
| `slideUp`    | Slides content up from bottom   |
| `slideDown`  | Slides content down from top    |
| `slideLeft`  | Slides content left from right  |
| `slideRight` | Slides content right from left  |
| `fadeIn`     | Simple fade in/out transition   |
| `scaleIn`    | Scales content in/out           |
| `fadeScale`  | Combines fade with subtle scale |
| `flipX`      | Flips content horizontally      |
| `flipY`      | Flips content vertically        |

## 📖 API Reference

### `useViewTransition(options)`

The main hook for creating view transitions.

#### Parameters

- `options`: `UseViewTransitionOptions`
  - `name`: `string` - Unique identifier for the transition
  - `animation`: `AnimationType` - Type of animation to use
  - `config`: `AnimationConfig` - Animation configuration
    - `duration`: `number` - Animation duration in milliseconds
    - `easing`: `string` - CSS easing function

#### Returns

`[React.RefObject<HTMLElement>, StartTransitionFn]`

- `ref` - React ref to attach to the element you want to animate
- `startTransition` - Function to trigger the transition

### `TransitionContainer`

A wrapper component that uses `useViewTransition` internally.

#### Props

- `name`: `string` - Unique identifier for the transition
- `animation`: `AnimationType` - Type of animation to use
- `config`: `AnimationConfig` - Animation configuration
- `children`: `React.ReactNode` - Child elements to render
- `className?`: `string` - Optional CSS class name
- `style?`: `React.CSSProperties` - Optional inline styles

## 🎨 Advanced Usage

### Custom Animation Timing

```tsx
const [ref, startTransition] = useViewTransition({
  name: "custom-timing",
  animation: "fadeScale",
  config: {
    duration: 600,
    easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // Custom bounce easing
  },
});
```

### Multiple Animations

```tsx
function MultipleAnimations() {
  const [headerRef, startHeaderTransition] = useViewTransition({
    name: "header",
    animation: "slideDown",
    config: { duration: 300, easing: "ease-out" },
  });

  const [contentRef, startContentTransition] = useViewTransition({
    name: "content",
    animation: "fadeIn",
    config: { duration: 400, easing: "ease-in-out" },
  });

  const handleUpdate = () => {
    startHeaderTransition(() => {
      setHeaderText("New Header");
    });

    startContentTransition(() => {
      setContentText("New Content");
    });
  };

  return (
    <div>
      <h1 ref={headerRef}>{headerText}</h1>
      <div ref={contentRef}>{contentText}</div>
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}
```

### Router Integration

```tsx
import { useViewTransition } from "eiwaal";
import { useNavigate } from "react-router-dom";

function NavigationLink({ to, children }) {
  const [ref, startTransition] = useViewTransition({
    name: "page-transition",
    animation: "slideLeft",
    config: { duration: 300, easing: "ease-in-out" },
  });

  const navigate = useNavigate();

  const handleClick = () => {
    startTransition(() => {
      navigate(to);
    });
  };

  return (
    <div ref={ref} onClick={handleClick}>
      {children}
    </div>
  );
}
```

## 🌐 Browser Support

Eiwaal is built on the View Transitions API, which is supported in:

- Chrome 111+
- Edge 111+
- Safari 18+

For browsers without support, transitions will be skipped gracefully and your state updates will still work normally.

## 🔧 TypeScript

Eiwaal is written in TypeScript and provides full type safety:

```tsx
import type { AnimationType, UseViewTransitionOptions } from "eiwaal";

const options: UseViewTransitionOptions = {
  name: "my-element",
  animation: "fadeIn" as AnimationType,
  config: {
    duration: 300,
    easing: "ease-in-out",
  },
};
```

## 🎯 Common Patterns

### Page Transitions

```tsx
function PageTransition({ children }) {
  const [ref, startTransition] = useViewTransition({
    name: "page",
    animation: "fadeScale",
    config: { duration: 250, easing: "ease-out" },
  });

  return (
    <div ref={ref} className="page-container">
      {children}
    </div>
  );
}
```

### Modal Animations

```tsx
function AnimatedModal({ isOpen, onClose, children }) {
  const [ref, startTransition] = useViewTransition({
    name: "modal",
    animation: "scaleIn",
    config: { duration: 200, easing: "ease-out" },
  });

  const handleClose = () => {
    startTransition(() => {
      onClose();
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div ref={ref} className="modal-content">
        {children}
      </div>
    </div>
  );
}
```

### List Item Animations

```tsx
function AnimatedList({ items }) {
  const [ref, startTransition] = useViewTransition({
    name: "list",
    animation: "slideUp",
    config: { duration: 300, easing: "ease-out" },
  });

  const removeItem = (id) => {
    startTransition(() => {
      setItems(items.filter((item) => item.id !== id));
    });
  };

  return (
    <div ref={ref}>
      {items.map((item) => (
        <div key={item.id} onClick={() => removeItem(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License.
