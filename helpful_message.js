function every()
{
    var appId = 0;
    var b = appId;
    for (var a = 0; a < 10 ; a++)
    {
        b = b + a;
    }
    document.getElementById('txtFyarbasi').innerText = b.toString();
}