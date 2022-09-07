var dls = Array.from(document.getElementsByClassName("link-generated"));
var index;
for (index = 0; index < dls.length; ++index) {
    console.log("clicking button.");
    dls[index].getElementsByTagName('a')[0].click();
    //2 sec
    await new Promise(r => setTimeout(r, 2000));
}

// mass download for real-debrid unrestricted links