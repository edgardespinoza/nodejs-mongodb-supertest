# Workers and Cluster with Node.js

in this we use workers and cluster

## cluster

we use primary to instance many server according the number of ore of CPU

```js
node src/cluster/primary.js                                         
```

[![](https://mermaid.ink/img/pako:eNqFjrEOwjAMRH_F8gRSiwRsHZBAhR-ACdLBag20kKRyUhAi_XcCiAUGbrLvnq27Y2krxgz3Z3stjyQeNrkyEDXfmVYXkKaz4HwMAiwGrdSa5DZq3PANLV55aYVhHCDfOZYLC5j4tHHFDzMJsPzHTAOsvhhMULNoqqvY9P68UOiPrFlhFseK5KRQmT5y1Hm7vpkSMy8dJ9i1FXnOazoIacz2dHbRbclsrf3s_QOqrVaW?type=png)](https://mermaid.live/edit#pako:eNqFjrEOwjAMRH_F8gRSiwRsHZBAhR-ACdLBag20kKRyUhAi_XcCiAUGbrLvnq27Y2krxgz3Z3stjyQeNrkyEDXfmVYXkKaz4HwMAiwGrdSa5DZq3PANLV55aYVhHCDfOZYLC5j4tHHFDzMJsPzHTAOsvhhMULNoqqvY9P68UOiPrFlhFseK5KRQmT5y1Hm7vpkSMy8dJ9i1FXnOazoIacz2dHbRbclsrf3s_QOqrVaW)

## Workers

we use `workers.js` for not blocking and `config.worker.js` for optimize the request.

## SuperTest

It's how create test using supertest with mongodb-memory-server
we use commonjs
we use router dynamic

```dir
├── README.md
├── example.http
├── package.json
├── src
│   ├── app.js
│   ├── cluster
│   │   └── primary.js
│   ├── controllers
│   │   └── meter.controller.js
│   ├── db
│   │   └── mongo.db.js
│   ├── example.js
│   ├── models
│   │   └── meter.model.js
│   ├── routers
│   │   ├── index.js
│   │   └── meter.js
│   ├── server.js
│   ├── services
│   │   └── meter.service.js
│   ├── sum.js
│   ├── utils
│   │   ├── CustomError.js
│   │   └── handleError.js
│   └── worker
│       ├── config.worker.js
│       ├── four_workers.js
│       └── worker.js
└── tests
    ├── meter.test.js
    └── sum.test.js
```
