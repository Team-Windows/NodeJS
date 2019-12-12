
var echange = function (list) {


    var listDonneur = [...list];
    var listReceveur = [...list];
    var listCouple =[];
    for (let i=0; i<list.length; i++){

        do{
            var rng =Math.floor(Math.random() * listReceveur.length);
        }

        while (listDonneur[0] !==listReceveur[rng]);
        listCouple.push(listReceveur[rng]);
        listDonneur.shift();
        listReceveur.splice(rng,1);
    }
    return listCouple;
};


