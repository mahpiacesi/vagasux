@echo off
title VagasUX - mural local
cd /d "%~dp0web"

if not exist "package.json" (
  echo Pasta web nao encontrada. Abra este arquivo de dentro do projeto vagasux.
  pause
  exit /b 1
)

if not exist "node_modules" (
  echo Primeira vez: instalando dependencias...
  call npm install
  if errorlevel 1 (
    echo Falhou o npm install. Confira se o Node.js esta instalado.
    pause
    exit /b 1
  )
)

echo.
echo Abrindo o mural em http://localhost:5173
echo Para parar: feche esta janela ou aperte Ctrl+C
echo.
call npm run dev
pause
