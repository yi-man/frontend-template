'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

// Directly re-export Radix UI components
export const Accordion = AccordionPrimitive.Accordion;
export const AccordionItem = AccordionPrimitive.AccordionItem;
export const AccordionHeader = AccordionPrimitive.AccordionHeader;
export const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.AccordionTrigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionTrigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.AccordionTrigger
    ref={ref}
    className={cn(
      'flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      className,
    )}
    {...props}
  >
    {children}
    <ChevronDown className="text-muted-foreground h-4 w-4 shrink-0 transition-transform duration-200" />
  </AccordionPrimitive.AccordionTrigger>
));
AccordionTrigger.displayName = 'AccordionTrigger';

export const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.AccordionContent>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.AccordionContent>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.AccordionContent
    ref={ref}
    className={cn('overflow-hidden text-sm', className)}
    {...props}
  >
    <div className="pt-0 pb-4">{children}</div>
  </AccordionPrimitive.AccordionContent>
));
AccordionContent.displayName = 'AccordionContent';
