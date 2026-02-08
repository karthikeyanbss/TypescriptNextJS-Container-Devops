export default function Home() {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || 'development'
  const version = process.env.NEXT_PUBLIC_VERSION || '1.0.0'
  const environmentMap: Record<string, { label: string; display: string }> = {
    dev: { label: 'DEV', display: 'Development' },
    qa: { label: 'QA', display: 'Quality Assurance' },
    prod: { label: 'PROD', display: 'Production' },
  }
  const normalizedEnv = environment.toLowerCase()
  const envMeta = environmentMap[normalizedEnv] || { label: environment.toUpperCase(), display: environment }

  return (
    <main className="container">
      <div className="content">
        <h1>NextJS TypeScript Azure Container App · {envMeta.label}</h1>
        <div className="info-card">
          <h2>Environment Information</h2>
          <p><strong>Environment:</strong> {envMeta.display}</p>
          <p><strong>Version:</strong> {version}</p>
          <p><strong>Build:</strong> Build once, deploy everywhere</p>
        </div>
        <div className="features">
          <h2>Features</h2>
          <ul>
            <li>✅ Single Image Build (TypeScript/NextJS)</li>
            <li>✅ Immutable Deployments in Azure Container Registry</li>
            <li>✅ Matrix Deployment (Dev, QA, Prod)</li>
            <li>✅ Azure Container Apps</li>
            <li>✅ Environment Isolation</li>
            <li>✅ Security: Non-root container user</li>
            <li>✅ Minimal base image (Alpine)</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
