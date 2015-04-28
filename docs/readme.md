# Acme Financial #

Acme Financial has purchased a fabulously useless automation tool that translates hand written account numbers into a digital format. Unfortunately, the current version of the OCR software produces a file with entries that look like:

```
    _ _    _  _  _ _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _| 
```

## Task 1 ##

The task is to accept a file with entries in this format and produce a file containing "normal" machine readable account numbers - ex: "123456789"

The individual entries in the files are well formed and regular. 

Each entry is:

* 4 lines long
* 3 lines with data and a 4th blank line 
* Every account number contains 9 digits

## Task 2 ##

The second task is to validate that each account number is in fact valid.

In order for an account number to be valid it must be:

* Unique within the file
* Given an account number of form d1, d2...d8, d9 the following must be true: (d1+2 * d2+3 + .. + 9*d9) mod 11 = 0
