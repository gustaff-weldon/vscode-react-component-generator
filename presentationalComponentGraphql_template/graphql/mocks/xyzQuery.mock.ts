import { XyzQueryDocument } from '..';

export const mockXyz = () => ({
  request: {
    query: XyzQueryDocument,
    variables: {
      id: 1
    }
  },
  result: {
    data: {
      xyz: {
        nodes: [
          {
            name: 'John Doe',
            __typename: 'Xyz'
          }
        ],
        __typename: 'XyzConnection'
      }
    }
  }
});