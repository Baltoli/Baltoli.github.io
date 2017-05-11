# TESLA

TESLA allows you to make **temporal assertions** about your programs. Instead of
being limited to its current state, you can make assertions about its _past_ and
_future_ as well---letting you write safer programs as naturally as possible.

With TESLA, you can make assertions like "The function `access_control_check`
returned `0` before reading a file" or "The structure field `lock->held` is set
to `false` in the future". In normal programs, these properties are often
asserted informally or not at all. With TESLA, they can be checked automatically
at compile- or run-time.

## Examples

```c
char *read_sensitive_data() {
  TESLA_WITHIN(main, previously(
    access_control_check() == 0
  ));
  
  char *data;
  // perform sensitive data access
  return data;
}
```

```c
void critical_section_begin(lock_t *lock) {
  TESLA_WITHIN(main, eventually(
    lock->held = false
  ));

  // do locked critical section work
}
```

## Setup

See the [installation guide](installation) for instructions on getting set up
with TESLA. Once you've got it up and running, the [programming
guide](programming) walks you through how to write a program with TESLA
assertions.

## Publications

* [TESLA: Temporally Enhanced System Logic Assertions][tesla-paper]
* Static Analysis for TESLA (_upcoming_)

[tesla-paper]: https://www.cl.cam.ac.uk/research/security/ctsrd/pdfs/201404-eurosys2014-tesla.pdf
