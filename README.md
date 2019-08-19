#Graphycs
Initial google chart experiments with React.

## Built With

- [React](https://pt-br.reactjs.org/)
- [Webpack](https://webpack.js.org)

Plus *some* of packages, a complete list of which is at [/package.json](https://github.com/michelsazevedo/graphycs/blob/master/package.json).

## Instructions

#### Install with Docker
[Docker](www.docker.com) is an open platform for developers and sysadmins to build, ship, and run distributed applications, whether on laptops, data center VMs, or the cloud.

If you haven't used Docker before, it would be good idea to read this article first: Install [Docker Engine](https://docs.docker.com/engine/installation/)

1. Install [Docker](https://www.docker.com/what-docker) and then [Docker Compose](https://docs.docker.com/compose/):

2. Run `docker run -it -w=/usr/graphycs/ -v=$(pwd)/:/usr/graphycs/ node yarn build` to build the project dist.

3. Finally, run `open dist.index.html` and graphycs should be running on your browser.

## License
Copyright © 2019

