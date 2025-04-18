export type Awaitable<T> = Promise<T> | T;

export async function interopDefault<T>(
  m: Awaitable<T>
): Promise<T extends { default: infer U } ? U : T> {
  const resolved = await m;
  return (resolved as any).default || resolved;
}

// export async function interopDefault<T>(
//   m: Promise<T>,
// ): Promise<T extends { default: infer D } ? D : T> {
//   const resolved = await m;
//   return (resolved as any).default || resolved;
// }
