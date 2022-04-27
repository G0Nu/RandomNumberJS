var z;

for(var i = 0; i<10; i++)
{
    var z = random(0,3);
    document.write(z + ",");m

}

function random(min, max)
{
    var result;
    result = Math.floor(Math.random() * (max - min + 1)+min);
    return result;
}