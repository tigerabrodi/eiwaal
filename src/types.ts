export type AnimationType =
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'fadeIn'
  | 'scaleIn'
  | 'fadeScale'
  | 'flipX'
  | 'flipY'

export interface UseViewTransitionOptions {
  name: string
  animation: AnimationType
  config: AnimationConfig
}

export type StartTransitionFn = (callback: () => void) => void

export type AnimationConfig = {
  duration: number
  easing: string
}
