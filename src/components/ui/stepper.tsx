
import * as React from "react"
import { CheckIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: number
  activeStep: number
  orientation?: "horizontal" | "vertical"
  isClickable?: boolean
  onStepChange?: (step: number) => void
}

export interface StepCircleProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isCompleted?: boolean
  isClickable?: boolean
  index?: number
  onClick?: () => void
}

export interface StepLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isCompleted?: boolean
}

export interface StepDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  isActive?: boolean
  isCompleted?: boolean
}

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  isActive?: boolean
  isCompleted?: boolean
  isLastStep?: boolean
  isVertical?: boolean
  index?: number
  onClick?: () => void
  isClickable?: boolean
}

const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      steps,
      activeStep,
      orientation = "horizontal",
      isClickable = false,
      onStepChange,
      ...props
    },
    ref
  ) => {
    const stepsArray = Array.from({ length: steps }, (_, i) => i + 1)

    return (
      <div
        ref={ref}
        className={cn(
          orientation === "horizontal"
            ? "flex w-full flex-row justify-between"
            : "flex flex-col space-y-4",
          className
        )}
        data-orientation={orientation}
        {...props}
      >
        {stepsArray.map((step) => (
          <Step
            key={step}
            isActive={step === activeStep}
            isCompleted={step < activeStep}
            isLastStep={step === steps}
            isVertical={orientation === "vertical"}
            index={step}
            onClick={() => onStepChange?.(step)}
            isClickable={isClickable}
          >
            {props.children}
          </Step>
        ))}
      </div>
    )
  }
)

Stepper.displayName = "Stepper"

const Step = React.forwardRef<HTMLDivElement, StepProps>(
  (
    {
      className,
      isActive,
      isCompleted,
      isLastStep,
      isVertical,
      index,
      onClick,
      isClickable,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(props.children)
    const hasConnector = !isLastStep

    return (
      <div
        ref={ref}
        className={cn(
          "relative flex",
          isVertical ? "flex-col" : "flex-col items-center justify-center",
          className
        )}
        {...props}
      >
        {childrenArray.map((child, idx) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: idx,
              isActive,
              isCompleted,
              index,
              onClick: isClickable ? onClick : undefined,
            } as any)
          }
          return child
        })}

        {hasConnector && (
          <div
            className={cn(
              "connector",
              isVertical
                ? "left-4 top-0 h-full border-l-2"
                : "left-0 top-4 w-full border-t-2",
              isActive || isCompleted
                ? "border-primary"
                : "border-muted-foreground/20"
            )}
          />
        )}
      </div>
    )
  }
)

Step.displayName = "Step"

const StepCircle = React.forwardRef<HTMLDivElement, StepCircleProps>(
  (
    {
      className,
      isActive,
      isCompleted,
      isClickable,
      index,
      onClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2",
          isActive
            ? "border-primary bg-primary text-primary-foreground"
            : isCompleted
            ? "border-primary bg-primary text-primary-foreground"
            : "border-muted-foreground/20 bg-background text-muted-foreground",
          isClickable && "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {isCompleted ? (
          <CheckIcon className="h-4 w-4" />
        ) : (
          <span className="text-sm font-semibold">{index}</span>
        )}
      </div>
    )
  }
)

StepCircle.displayName = "StepCircle"

const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>(
  ({ className, isActive, isCompleted, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-2 text-center text-sm font-medium",
          isActive
            ? "text-foreground"
            : isCompleted
            ? "text-foreground"
            : "text-muted-foreground",
          className
        )}
        {...props}
      />
    )
  }
)

StepLabel.displayName = "StepLabel"

const StepDescription = React.forwardRef<
  HTMLParagraphElement,
  StepDescriptionProps
>(({ className, isActive, isCompleted, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn(
        "text-center text-xs",
        isActive
          ? "text-muted-foreground"
          : isCompleted
          ? "text-muted-foreground/70"
          : "text-muted-foreground/50",
        className
      )}
      {...props}
    />
  )
})

StepDescription.displayName = "StepDescription"

export { Stepper, Step, StepCircle, StepLabel, StepDescription }
