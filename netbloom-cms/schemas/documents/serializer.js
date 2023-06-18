import React from 'react'
import Code from './code'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    code: Code
  }
}

export default serializers