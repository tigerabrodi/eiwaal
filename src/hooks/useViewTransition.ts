import { useCallback, useEffect, useRef } from 'react'
import { generateAnimationCSS } from '../animations'
import { cssInjector } from '../css-injector'
import type { StartTransitionFn, UseViewTransitionOptions } from '../types'

export function useViewTransition(
  options: UseViewTransitionOptions
): [React.RefObject<HTMLElement>, StartTransitionFn] {
  const { name, animation, config } = options

  const ref = useRef<HTMLElement>(null)

  // Inject CSS on mount
  useEffect(() => {
    const css = generateAnimationCSS({
      name,
      animation,
      config,
    })
    const cssId = `${name}-${animation}-${config.duration}-${config.easing}`
    cssInjector.inject(css, cssId)
  }, [name, animation, config])

  // Set view-transition-name on the element
  useEffect(() => {
    if (ref.current) {
      ref.current.style.viewTransitionName = name
    }
  }, [name])

  const startTransition = useCallback<StartTransitionFn>((callback) => {
    // Check if View Transitions API is supported
    if (!('startViewTransition' in document)) {
      // Fallback: just run the callback without transition
      callback()
      return
    }

    // Type assertion for the experimental API
    ;(document as any).startViewTransition(() => {
      callback()
    })
  }, [])

  return [ref, startTransition] as [
    React.RefObject<HTMLElement>,
    StartTransitionFn
  ]
}
