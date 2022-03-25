# Wunderdog.LinkShortener.EventEmitter

Wunderdog.LinkShortener.EventEmitter is data persistency microservice.

---
## Requirements

For development, you will  need Node.js and a node global package, also Docker installed in your environment.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.14.2

    $ npm --version
    8.5.0


If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

### Docker installation
Just click the following link below here and select Docker for your environments.
https://www.docker.com/products/docker-desktop    

---

## Install

    $ git clone https://github.com/kemalakoglu/Wunderdog.LinkShortener.EventEmitter.git
    $ cd Wunderdog.LinkShortener.EventEmitter
    $ npm install

## Running the project

First thing is checking 8081 port on your computer. If it is not available please define the port information which is available, onto some documents under the project. This is described below here;  

- #### "EXPOSE 8081" on DockerFile

Then, run these commands to dockerize this application;

- #### docker build -t cachecontainer .
- ####  docker-compose up


