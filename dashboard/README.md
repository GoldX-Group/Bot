# Aura Hax Bot Dashboard

Panel de administración para el bot Aura Hax, construido con Next.js, TypeScript y Tailwind CSS.

## Uso
```bash
npm install
npm run dev
```

## Conexión a Prisma
Este dashboard reutiliza el cliente Prisma generado en el proyecto principal (`../src/generated/client`). El script `postinstall` asegura que el cliente se genere antes de iniciar el dashboard.

## Acceso
El acceso está protegido con Next Auth. Actualmente requiere una sesión activa para acceder a cualquier ruta del dashboard.
