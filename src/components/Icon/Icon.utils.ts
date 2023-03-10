export const iconNames = [
  'add-circle-outline',
  'add-circle',
  'add',
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'arrow-up',
  'check-circle-outline',
  'check-circle',
  'check',
  'checkbox-false',
  'checkbox-true-outline',
  'checkbox-true',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'close-circle-outline',
  'close-circle',
  'close',
  'collapse-left',
  'collapse-right',
  'download',
  'expand-left',
  'expand-right',
  'hamburger',
  'login',
  'logout',
  'plus',
  'upload',
] as const

export type IconName = (typeof iconNames)[number]
