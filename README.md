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
npm install @tigerabrodioss/eiwaal
```

## 🚀 Usage

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

## 🎭 Available Animations

`slideUp` | `slideDown` | `slideLeft` | `slideRight` | `fadeIn` | `scaleIn` | `fadeScale` | `flipX` | `flipY`

## 📖 API

### `useViewTransition(options)`

Returns `[ref, startTransition]`

**Options:**

- `name`: string -> Unique identifier
- `animation`: AnimationType -> Animation to use
- `config`: { duration: number, easing: string } -> Animation configuration (optional)

### `TransitionContainer`

Component wrapper with the same options as props.

## 🌐 Browser Support

See the browsers that support the View Transitions API [here](https://caniuse.com/view-transitions).

## 📄 License

MIT License.
