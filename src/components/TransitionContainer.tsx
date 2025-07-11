import React from 'react'
import { useViewTransition } from '../hooks/useViewTransition'
import type { UseViewTransitionOptions } from '../types'

interface TransitionContainerProps extends UseViewTransitionOptions {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export const TransitionContainer: React.FC<TransitionContainerProps> = ({
  children,
  className,
  style,
  ...transitionOptions
}) => {
  const [ref] = useViewTransition(transitionOptions)

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      style={style}
    >
      {children}
    </div>
  )
}
