---
layout: default
---

# Installing TESLA

Currently TESLA has to be built from source (though package manager
distributions are in the works).

## Dependencies

To build TESLA, you need:

* Build system:
  * CMake
  * A C++14 compatible compiler (GCC 5+ or Clang 3.4+)

* TESLA dependencies:
  * [LLVM 4.0][llvm]
  * [Protocol Buffers][protobuf]
  * [Z3][z3]

The TESLA dependencies don't need to be installed from source---you can get them
from a package manager if that's easier.

## Build Instructions

Once you've installed the dependencies, you can build TESLA as follows:

```shell_session
$ git clone {{ site.github.repository_url }}
$ cd {{ site.github.repository_name }}
$ mkdir build
$ cd build
$ cmake \
    -D LLVM_DIR=path/to/llvm \
    ..
$ make
```

The cmake option `LLVM_DIR` should point to the directory where LLVM has
installed its CMake files. This will typically be the `lib/cmake/llvm/`
subdirectory of the LLVM install directory.

[protobuf]: https://developers.google.com/protocol-buffers/
[z3]: https://github.com/Z3Prover/z3
[llvm]: http://llvm.org/
