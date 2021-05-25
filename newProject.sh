#! /bin/bash

yarn init -y
yarn add typescript -D
yarn add @types/node -D
yarn add @types/request -D
yarn add ts-node -D
yarn add request
yarn add eslint

tsc --init
mkdir src
mkdir dist
mkdir .vscode
cd .vscode
cat <<EOT >> launch.json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [

  
    {
      "name": "Current TS File",
      "type": "node",
      "request": "launch",
      "args": ["${relativeFile}"],
      "runtimeArgs": ["--nolazy", "-r", "ts-node/register"],
      "sourceMaps": true,
      "cwd": "${workspaceRoot}",
      "protocol": "inspector",
  }
  ]
}
EOT