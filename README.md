# MovieQL

Movie API with GraphQL

## Packages

### GraphQL

[GraphQL Getting Started](https://graphql-kr.github.io/learn/)

[How to graphql](https://www.howtographql.com/)

### GraphQL-yoga

[Github Repo](https://github.com/prisma-labs/graphql-yoga)

GraphQL을 쉽게 설치하고 설정하고 테스트할 수 있도록 도와준다.

```js
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "./graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("GraphQL Server Running on http://localhost:4000"));
```

>GraphQL 서비스는 어떤 언어로든 작성할 수 있습니다. GraphQL 스키마에 대해 이야기하기 전에 JavaScript와 같은 특정 언어 문법에 의존 할 수 없기 때문에 간단한 언어를 정의할 것입니다. 여기서는 GraphQL 스키마 언어(GraphQL schema language) 를 사용할 것입니다. 이것은 쿼리 언어와 비슷하며, GraphQL 스키마를 언어에 의존적이지 않은 방식으로 표현할 수 있게 해줍니다.

`schema.graphql` 파일을 생성하여 GraphQL 스키마 언어를 작성한다. `typeDefs`가 해당 파일의 위치를 가진다.

`resolvers`: 데이터베이스, 파일, API 등하고 연결되어 query를 받고 사용자가 필요한 정보를 전달한다.

Playground(http://localhost:4000)를 통해 Query를 테스트할 수 있다.

```graphql
query GetMovies {
  movies {
    id
    name
    score
  }
}

query GetMovie {
  movie(id: 3) {
    name
  }
}
```
