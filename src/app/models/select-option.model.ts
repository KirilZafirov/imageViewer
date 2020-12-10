export interface SelectOption {
  value: string;
  displayValue: string;
}
export const STYLES: SelectOption[]= [
  {
    value: 'style-1',
    displayValue: 'Style 1'
  },
  {
    value: 'style-2',
    displayValue: 'Style 2'
  },
];
export const COMPLEXITY: SelectOption[]= [
  {
    value: 'low',
    displayValue: 'Low'
  },
  {
    value: 'medium',
    displayValue: 'Medium'
  },
  {
    value: 'high',
    displayValue: 'High'
  },
];
export const SIZE: SelectOption[] = [
  {
    value: 'small',
    displayValue: 'Small'
  },
  {
    value: 'medium',
    displayValue: 'Medium'
  },
  {
    value: 'large',
    displayValue: 'Large'
  },
];
