import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(' text-foreground', {
    variants: {
        variant: {
            default: 'font-normal',
            semibold: 'font-semibold',
            bold: 'font-bold',
            extrabold: 'font-extrabold',
            light: 'font-light',
            extralight: 'font-extralight',
            'custom-400': 'font-custom-400',
            'custom-500': 'font-custom-500',
            'custom-600': 'font-custom-600',
            'custom-700': 'font-custom-700',
            link: 'hover:underline underline-offset-4 cursor-pointer',
        },
        size: {
            default: 'text-base',
            xs: 'text-xs',
            sm: 'text-sm',
            lg: 'text-xl',
            xl: 'text-3xl',
            'custom-size-3xs': 'text-custom-size-xxxs',
            'custom-size-2xs': 'text-custom-size-xxs',
            'custom-size-xs': 'text-custom-size-xs',
            'custom-size-sm': 'text-custom-size-sm',
            'custom-size-base': 'text-custom-size-base',
            'custom-size-lg': 'text-custom-size-lg',
            'custom-size-xl': 'text-custom-size-xl',
            'custom-size-2xl': 'text-custom-size-2xl',
            'custom-size-3xl': 'text-custom-size-3xl',
            'custom-size-4xl': 'text-custom-size-4xl',
            'custom-size-5xl': 'text-custom-size-5xl',
            'custom-size-6xl': 'text-custom-size-6xl',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
});

export interface LabelProps
    extends React.LabelHTMLAttributes<HTMLLabelElement>,
        VariantProps<typeof labelVariants> {
    asChild?: boolean;
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'label';
        return (
            <Comp
                className={cn(labelVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);
Label.displayName = 'Label';

export { Label, labelVariants };
