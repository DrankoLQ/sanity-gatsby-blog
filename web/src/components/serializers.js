import React from 'react'
import Figure from './Figure'
import SyntaxHighlighter from 'react-syntax-highlighter';

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: ({node}) => <SyntaxHighlighter language={node.language}>{node.code}</SyntaxHighlighter>
  }
}

export default serializers
