import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Variables de entorno del servidor
   */
  server: {
    DATABASE_URL: z.string(),
    DATABASE_SERVICE_ROLE: z.string(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),

    CLOUDINARY_CLOUD_NAME: z.string(),
    CLOUDINARY_API_KEY: z.string(),
    CLOUDINARY_API_SECRET: z.string(),
  },

  /**
   * Variables de entorno del cliente (browser)
   * Deben empezar con NEXT_PUBLIC_
   */
  client: {
    NEXT_PUBLIC_SITE_URL: z.string(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_PROJECT_REF: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string(),

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(), // Cloudinary público para el frontend
  },

  /**
   * Runtime env (tanto servidor como cliente)
   */
  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    DATABASE_SERVICE_ROLE: process.env.DATABASE_SERVICE_ROLE,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_PROJECT_REF: process.env.NEXT_PUBLIC_SUPABASE_PROJECT_REF,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

    // Cloudinary servidor
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,

    // Cloudinary público para frontend
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  },

  /**
   * Opción para saltarse la validación de variables de entorno (útil en Docker)
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
