# Next.js Demo Playground

一些 Next.js 项目，just for playground

## with_react_query_rsc

* 使用 Server Component fetch 数据，通过 props 和 initialData 传入给 Client Component 的 react-query
* 数据使用 route handler 提供 fake data

## with_react_query_use_client 

* 未使用 next.js 的 fetch，仅通过 Client Component 的 react-query fetch 数据
* 数据使用 route handler 提供 fake data

## with_zustand_rsc

* 使用 Server Component fetch 数据，通过 createContext 传入 props 将数据传入 Client Component，在 Client Component 中使用 zustand useContext 获取数据
* 数据使用 route handler 提供 fake data

## with_zustand_all_client

* 未使用 next.js 的 fetch, 在 Client Component 直接 fetch 数据并放入 zustand
* 数据使用 route handler 提供 fake data
