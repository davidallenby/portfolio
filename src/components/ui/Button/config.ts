export const BUTTON_BASE_CLASSES =
  'inline-flex items-center px-4 py-2 transition-all duration-250 cursor-pointer'

export const BUTTON_VARIANTS = {
  primary: `${BUTTON_BASE_CLASSES} border border-primary text-white bg-primary hover:bg-primary/80 hover:border-primary/80`,
  secondary: `${BUTTON_BASE_CLASSES} border border-primary text-primary bg-transparent hover:bg-primary hover:text-white`,
  tertiary: `${BUTTON_BASE_CLASSES} border border-tertiary text-white bg-tertiary`
}

export const BUTTON_SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg'
}
