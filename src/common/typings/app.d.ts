export interface INames {
  names: string[];
}

export type OptionalUtility<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
