Debouncing 

typing slow = 200ms
typing fast = 30ms 

Performance:
- iphone pro max - 14 letter * 1000 = 14000
- with debouncing = 3 API calls * 1000 = 3000


Debouncing with 200ms
- if difference between 2 key strokes is < 200ms - DECLINE API Call
- >200ms make an API Call 



Cache:
time complexity to search in array = 0(n) 

array.indexOf()
[i, ip, iph, iphone]

{
    i:
    ip:
    iph:
    iphone:
}