import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import packageJson from "./package.json";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true,
      }),
      resolve(),
      commonjs(),
    ],
    external: (id) => /^react|react-dom|styled-components/.test(id),
  },
];
