export const isTermux = Boolean(
  process.env.TERMUX_VERSION || (process.env.PREFIX && process.env.PREFIX.includes("com.termux"))
);
export default { isTermux };
