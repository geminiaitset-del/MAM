'use client'

import React, { Component, ErrorInfo, ReactNode, Suspense } from 'react'
import Spline from '@splinetool/react-spline'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  public state: ErrorBoundaryState = {
    hasError: false
  }

  public static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Spline Scene Error Boundary caught error:", error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

interface SplineSceneProps {
  scene: string
  className?: string
  style?: React.CSSProperties
}

export function SplineScene({ scene, className, style }: SplineSceneProps) {
  return (
    <ErrorBoundary 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-black/40">
          {/* Subtle tech dot pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,136,0.025)_0%,transparent_70%)]" />
        </div>
      }
    >
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <span className="loader"></span>
          </div>
        }
      >
        <div style={style} className={className}>
          <Spline
            scene={scene}
            className="w-full h-full"
          />
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
