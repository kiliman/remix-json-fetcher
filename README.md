# useFetcher() with native JSON support

This example includes a patch to add native JSON support to `useFetcher().submit()`

```ts
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
    <div>
      <h1>useFetcher with JSON</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <button onClick={handleClick}>Fetch</button>
    </div>
  )
}
```
