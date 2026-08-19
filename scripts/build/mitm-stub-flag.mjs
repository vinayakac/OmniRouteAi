export function mitmManagerAliasFor(env = process.env) {
  if (env && env.OMNIROUTE_MITM_STUB === "1") {
    return {
      "@/mitm/manager": "./src/mitm/manager.stub.ts",
    };
  }
  return {};
}
