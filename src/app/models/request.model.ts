
export type Style = 'style-1' | 'style-2';

export type Complexity = 'low' | 'medium' | 'high';

export type Size = 'small' | 'medium' | 'large';

export interface RequestParams {
  style:Style ;
  complexity: Complexity;
  size:Size
}
