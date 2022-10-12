
let objAlbum = 
{
    _name : "Afaq",
    _title : "House",
    _tracks : "1",
};


function make_album(name,title,tracks)
{
    objAlbum._name = name;
    objAlbum._title = title;
    objAlbum._tracks = tracks;

    console.log(objAlbum)
}

make_album("noor", "album",2);
make_album("noor1", "album2",3);
make_album("noor2", "_album2", 7);