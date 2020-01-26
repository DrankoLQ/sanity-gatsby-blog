import React from 'react'
import Figure from './Figure'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({node}) => <pre className={`language-${node.language}`}><code>{node.code}</code></pre>
  }
}

export default serializers
