//var assigns variables, and new Array just make a list similar to python.
var r_text = new Array();
r_text[0] = "Donate to L.I.V.E, support the Invertebrates 🐌";
r_text[1] =
  "Donate to Oceans Promotion: Expanding the ocean one day at a time. ";
r_text[2] = "Donate to Help the Straw Hats 🏴‍☠️👒";
r_text[3] = "Donate to Help Mental Health Awareness for the Minions";
r_text[4] = "Donate money to humans!";

//Math.random assigns the variable to a random decimal between 0 and 1
var i = Math.random();

//change 5 to the number of items in your array to have i = a random number
i = 5 * i;

//since it is still a decimal, this operation rounds the number down
i = Math.floor(i);

//document.write writes the variable in string format, [i] is the same as index and r_text is just the names of variables
document.write(r_text[i]);
