# catalogue-mixins

see [Documentation](https://sedoo.github.io/catalogue-mixins/)

## Library

## For users

### How to integrate catalogue-mixins in a project

1. Install the module

```shell
npm i @sedoo/catalogue-mixins
```

2. In you main.js add the following lines

```
import CatalogueMixins from '@sedoo/catalogue-mixins'
Vue.use(CatalogueMixins)
```

## For developers

### Warning

**catalogue-mixins** uses the new Github naming convention: the main branch is called *main* and not *master* anymore.


### How to publish the library in NPM ?

The publishing if the library is an automated mechanism based on Github workflow system. No other method should be used.

After each push on the *main* branch, a build is launched. 
If the build is successful, the system will publish it on NPM using the version number indicated in the *package.json* file.
If this version corresponds to an already published version, the build will stop here. Else, the version is published.

Hence, to publish an new version, it is important to modify the number in the *package.json* file.    

### Publishing of the online documentation

The publishing of the library is an automated mechanism based on Github workflow system. No other method should be used.
After each push on the *main* branch, the online documentation is launched.


## Demonstration

[Live demonstration](https://sedoo.github.io/catalogue-mixins/)
