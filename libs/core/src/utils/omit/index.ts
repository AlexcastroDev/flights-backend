type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export default function omit<T, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const clonedObj = { ...obj };
  keys.forEach((key) => delete clonedObj[key]);
  return clonedObj;
}
