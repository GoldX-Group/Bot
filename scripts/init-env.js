const fs = require('node:fs');
const path = require('node:path');

const projectRoot = path.resolve(__dirname, '..');
const envPath = path.join(projectRoot, '.env');
const envExamplePath = path.join(projectRoot, '.env.example');

function fileExists(p) {
  try {
    fs.accessSync(p, fs.constants.F_OK);
    return true;
  } catch {
    return false;
  }
}

try {
  if (fileExists(envPath)) {
    console.log('.env ya existe. No se sobrescribió.');
    process.exit(0);
  }

  if (!fileExists(envExamplePath)) {
    console.error('No se encontró .env.example en la raíz del proyecto.');
    process.exit(1);
  }

  const content = fs.readFileSync(envExamplePath, 'utf8');
  fs.writeFileSync(envPath, content, { encoding: 'utf8', flag: 'wx' });
  console.log('✅ .env creado desde .env.example');
} catch (error) {
  if (error && error.code === 'EEXIST') {
    console.log('.env ya existe. No se sobrescribió.');
    process.exit(0);
  }

  console.error('Error creando .env:', error);
  process.exit(1);
}
