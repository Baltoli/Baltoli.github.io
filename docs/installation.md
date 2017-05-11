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

The TESLA dependencies don't need to be installed from source&mdash;you can get them
from a package manager if that's easier.

## Build Instructions

Once you've installed the dependencies, you can build TESLA as follows:

```shell
git clone "http://github.com/cadets/tesla-static-analysis"
cd tesla-static-analysis

mkdir build
cd build

cmake -D LLVM_DIR="path/to/llvm" ..
make
make install
```

The CMake option `LLVM_DIR` should point to the directory where LLVM has
installed its CMake files. This will typically be the `lib/cmake/llvm/`
subdirectory of the LLVM install directory.

To install TESLA to a non-standard location, set `CMAKE_INSTALL_PREFIX` and run
`make install`.

Once you have TESLA installed, you should be able to run `tesla` to see a list
of the available toolchain commands. The next step is to [write some TESLA
assertions](programming).

[protobuf]: https://developers.google.com/protocol-buffers/
[z3]: https://github.com/Z3Prover/z3
[llvm]: http://llvm.org/
