# Acme Financial #

Acme Financial has purchased a fabulously useless automation tool that translates hand written account numbers into a digital format. 
Unfortunately, the current version of the OCR software produces a file with entries that look like:

```
    _ _    _  _  _ _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _| 
```

## Task 1 ##

The task is to accept a file with entries in this format and produce a table containing "normal" machine readable account numbers - ex: "123456789"

The individual entries in the files are well formed and regular. 

Each entry is:

* 4 lines long
* 3 lines with data and a 4th blank line 
* Every account number contains 12 digits

After processing the numbers, write them into the table under "Processed Numbers".

## Task 2 ##

The second task is to check that each account number is in fact valid.

Acme Financial uses a REST webservice to validate account numbers located at http://twitlabs.net/bank-kata/validate.php which accepts a number in the body of a HTTP POST. Unfortunately, the service is rate limited to a maximum of one request every 3 seconds.

The service accepts an account number in the body of a HTTP POST:

```
ashish@ashish:~$ curl -X POST -d "547849503293" http://twitlabs.net/bank-kata/validate.php
{"valid":true}
```

And errors look like:
```
ashish@ashish:~$ curl -X POST -d "547849503293" http://twitlabs.net/bank-kata/validate.php
{"error":"Requesting to fast"}
```

After validating, write the results into the table under "Processed Numbers".

