const Minisearch = require('minisearch')


async function run() {
  const minisearch = new Minisearch({
    idField: 'id',
    fields: ['value']
  })

  minisearch.add({ id: 'b', value: 'bob' })
  minisearch.add({ id: 'b', value: 'boba' })


  const ans = minisearch.search('bob', { fuzzy: true })

  console.dir(ans, { depth: 4 })
}


run()

