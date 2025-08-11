async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);

  return (
    <>
      <h1>Cabins</h1>
      <ul>
        {data.map(x => (
          <li key={x.id}>
            {x.name}
          </li>
        )
        )}
      </ul>
    </>
  );
}

export default Page;