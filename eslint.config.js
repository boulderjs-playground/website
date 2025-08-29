import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import solid from "eslint-plugin-solid/configs/recommended";

export default defineConfig([
  globalIgnores(["package-lock.json"]),
  js.configs.recommended,
  solid,
]);
