import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Repo: jlthreek/hello-world  ->  served at https://jlthreek.github.io/hello-world/
// If you rename the repo, change `base` to "/<new-repo-name>/".
export default defineConfig({
  plugins: [react()],
  base: '/hello-world/',
})
