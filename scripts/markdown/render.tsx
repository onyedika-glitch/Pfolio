import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from '../../src/App'

export function render(path: string): string {
  return renderToStaticMarkup(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>,
  )
}
