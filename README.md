# Project-POP
From time to time, usually between 8 and 10 at night, Mariano transforms into an elusive large octopus with a long white beard, which in Galicia we call a wolf-octopus.

On the one hand, Mariano is grateful for not suffering the typical lycanthropy of the Galicians. Instead of worrying about accidentally eating the next-door countryman, he worries not to end up in the pot on Tuesdays where there is an octopus fair in town. After several occasions in which he has woken up dazed and naked among the rocks of the beach, he has decided to close the doors of his house with a key and fill the bathtub with mussels from the estuary to be entertained when he transforms.

But Mariano is worried and wants to solve his problem. He suspects that there is something that triggers the transformation, since it does not happen every day. As he is a little nerdy, he decides to face the problem in a scientific way, recording in a diary what he does every day and noting if he transformed or not with one of his eight arms.

We will help you build a program through which you can collect the information you need in a data structure, and then apply an algorithm to find out which or which of the things you do (walk, watch around, drink wine, etc.) It produces that it is transformed into octopus.

## Correlation class

We will find out what factors are the ones that most affect Mariano becoming an octopus.

The Phi φ Correlation is a measure of the dependence between variables (“variables” in the statistical sense, not in that of programming). It is expressed as a coefficient whose value falls in the range of −1 to 1. Correlation 0 means that the variables are not related, while correlation 1 means that the variables are perfectly related: if you know one, you know the value of the other. Correlation with negative values, means that the variables are related but are opposite: when one is true, the other is false.

For binary variables such as ours (octopus is true or false, "resting" is true or false), the phi coefficient (φ) provides a good measure of the correlation. To calculate it, we have to create a table that contains the number of times the different combinations of the variables have been observed. For example, the table for the “eat pizza” event would be like this:
```
 |no octopus, no pizza| no octopus, pizza|
 |--------------------|------------------|
 |        76          |         9        |
 |--------------------|------------------|
 |Octopus, no pizza   | Octopus, pizza   |
 |        4           |        1         |
``` 
If you represent this table in a matrix, you get the following indexes (positions in the matrix):
```
            Pizza
            False true
Octopus False 00 01
        True  10 11
```
phi φ is calculated with the following formula, where n refers to the values ​​found in each position of the matrix (76, 9, 4, 1) and the subscripts are the positions of the matrix:

``` 
![alt text](https://github.com/dfleta/pulpo-raza-loba/blob/master/phi.png)

```
Thus, the notation ```n01``` indicates the number of measures where the first measured variable - has become octopus or not - is false (0) and the second measure - has eaten pizza - is true (1). In this example, ```n01``` is 9. Similarly, ```n10``` is 4, ```n00``` is 76 and ```n11``` is 1.

The value ```n1 •``` refers to the sum of all the measures where the first variable (pizza) is true, which corresponds to 5 in the example table. ```n • 0``` refers to the sum of the measures where the octopus variable is false, 85.

Therefore, for the pizza table, the top of the division (the dividend) would be:
```
1 × 76 - 4x9 = 40
```
and the bottom of the division (the divisor) would be the square root of
```
5 × 85 × 10 × 80 = 340000
```
This means that ```phi``` is worth ```φ ≈ 0.069```, a very small value compared to 1, which means that eating pizza does not seem to have much influence on the octopus transformation.
