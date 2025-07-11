import type { UseViewTransitionOptions } from './types'

interface AnimationConfig {
  duration: number
  easing: string
}

type AnimationNames =
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'fadeIn'
  | 'scaleIn'
  | 'fadeScale'
  | 'flipX'
  | 'flipY'

export function generateAnimationCSS({
  name,
  animation,
  config,
}: UseViewTransitionOptions): string {
  const { duration, easing } = config
  const durationStr = `${duration}ms`

  const animations: Record<AnimationNames, string> = {
    slideUp: `
      ::view-transition-old(${name}) {
        animation: slide-up-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: slide-up-in ${durationStr} ${easing};
      }
      @keyframes slide-up-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(-100%); opacity: 0; }
      }
      @keyframes slide-up-in {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `,

    slideDown: `
      ::view-transition-old(${name}) {
        animation: slide-down-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: slide-down-in ${durationStr} ${easing};
      }
      @keyframes slide-down-out {
        from { transform: translateY(0); opacity: 1; }
        to { transform: translateY(100%); opacity: 0; }
      }
      @keyframes slide-down-in {
        from { transform: translateY(-100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
    `,

    slideLeft: `
      ::view-transition-old(${name}) {
        animation: slide-left-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: slide-left-in ${durationStr} ${easing};
      }
      @keyframes slide-left-out {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(-100%); opacity: 0; }
      }
      @keyframes slide-left-in {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,

    slideRight: `
      ::view-transition-old(${name}) {
        animation: slide-right-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: slide-right-in ${durationStr} ${easing};
      }
      @keyframes slide-right-out {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
      @keyframes slide-right-in {
        from { transform: translateX(-100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `,

    fadeIn: `
      ::view-transition-old(${name}) {
        animation: fade-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: fade-in ${durationStr} ${easing};
      }
      @keyframes fade-out {
        from { opacity: 1; }
        to { opacity: 0; }
      }
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,

    scaleIn: `
      ::view-transition-old(${name}) {
        animation: scale-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: scale-in ${durationStr} ${easing};
      }
      @keyframes scale-out {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(0.8); opacity: 0; }
      }
      @keyframes scale-in {
        from { transform: scale(0.8); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `,

    fadeScale: `
      ::view-transition-old(${name}) {
        animation: fade-scale-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: fade-scale-in ${durationStr} ${easing};
      }
      @keyframes fade-scale-out {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(0.95); opacity: 0; }
      }
      @keyframes fade-scale-in {
        from { transform: scale(1.05); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
    `,

    flipX: `
      ::view-transition-old(${name}) {
        animation: flip-x-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: flip-x-in ${durationStr} ${easing};
      }
      @keyframes flip-x-out {
        from { transform: rotateX(0deg); opacity: 1; }
        to { transform: rotateX(-90deg); opacity: 0; }
      }
      @keyframes flip-x-in {
        from { transform: rotateX(90deg); opacity: 0; }
        to { transform: rotateX(0deg); opacity: 1; }
      }
    `,

    flipY: `
      ::view-transition-old(${name}) {
        animation: flip-y-out ${durationStr} ${easing};
      }
      ::view-transition-new(${name}) {
        animation: flip-y-in ${durationStr} ${easing};
      }
      @keyframes flip-y-out {
        from { transform: rotateY(0deg); opacity: 1; }
        to { transform: rotateY(-90deg); opacity: 0; }
      }
      @keyframes flip-y-in {
        from { transform: rotateY(90deg); opacity: 0; }
        to { transform: rotateY(0deg); opacity: 1; }
      }
    `,
  }

  return animations[animation]
}
