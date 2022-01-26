import { ActionFunction, useFetcher, json } from 'remix'

export const action: ActionFunction = async ({ request }) => {
  const data = await request.json()
  return json({ result: { success: true, message: 'ok' }, posted: data })
}

export default function () {
  const fetcher = useFetcher()
  const data = fetcher.data
  const handleClick = () => {
    fetcher.submit(null, {
      action: '?index',
      method: 'post',
      json: { hello: 'world' },
      // you can also use json: JSON.stringify({ hello: 'world' })
    })
  }
  return (
    <div style={{ width: '330px' }}>
      <h1>useFetcher with JSON</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleClick}>Fetch</button>
      <p>
        This example will post JSON to action, which you can get from your
        action using <code>await request.json()</code>.
      </p>
      <p>
        The returned data will be in <code>fetcher.data</code>
      </p>
    </div>
  )
}
