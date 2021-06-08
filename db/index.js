const Database = require('./config')

const initDB = {
    async init() {
        await this.createTableUsers()
        await this.insertUsers();
    },
    async createTableUsers() {
        const connector = await Database()

        await connector.run(`DROP TABLE IF EXISTS Users;`)

        await connector.run(`
            CREATE TABLE Users (
                id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
                name varchar(255) default NULL,
                age mediumint default NULL,
                mail varchar(255) default NULL,
                company varchar(255)
            );
        `)

        await connector.close()
    },
    async insertUsers() {
        const connector = await Database()

        await connector.run(`

            INSERT INTO Users (name,age,mail,company) VALUES ("Preston",10,"dui.augue.eu@Nunclectuspede.co.uk","Arcu Nunc Mauris LLP"),("Chadwick",64,"non.bibendum@acrisus.com","Tincidunt Neque Vitae Inc."),("Ishmael",98,"amet@vestibulum.net","Ornare In Faucibus Inc."),("Portia",23,"et.rutrum.non@adipiscingnonluctus.edu","Non Corp."),("Demetria",81,"sed@loremtristique.org","Nam Ligula Consulting"),("Autumn",58,"euismod.urna.Nullam@Naminterdumenim.ca","Scelerisque Consulting"),("Kasimir",76,"non.arcu@diam.co.uk","Nec Company"),("Claudia",76,"Nunc.sollicitudin@sit.com","Magna Incorporated"),("Omar",13,"rutrum.urna@quispede.org","Ut Foundation"),("Marcia",13,"nec.ante.blandit@urnaUt.com","Tellus Nunc Lectus LLC"),("Dylan",79,"non.magna.Nam@variusorciin.org","Maecenas Malesuada Associates"),("Isadora",60,"et@a.com","Ante Industries"),("Samuel",55,"Nullam@amet.ca","Id Consulting"),("Ferris",48,"pulvinar.arcu@aliquetmolestie.ca","Diam Duis Industries"),("Kirestin",61,"Etiam.vestibulum@arcu.ca","Elit Elit Fermentum Consulting"),("Alexa",73,"nunc@Nullam.org","Lacinia Mattis Inc."),("Ariel",58,"amet.ante.Vivamus@Cumsociisnatoque.net","Sagittis Semper PC"),("Katell",94,"mi@aliquetlobortis.com","Cras Convallis PC"),("Haley",11,"at@hendrerit.com","Est Foundation"),("Peter",65,"a.magna.Lorem@nullaIntincidunt.com","Ac Ipsum Consulting"
            
            );

            INSERT INTO Users (name,age,mail,company) VALUES ("Clementine",46,"leo@Vestibulumanteipsum.co.uk","Vestibulum Incorporated"),("Igor",93,"eget.ipsum.Donec@sagittislobortismauris.ca","Malesuada Vel Convallis Incorporated"),("Desirae",29,"vestibulum.neque@pedeCumsociis.ca","Mi Foundation"),("Tashya",80,"adipiscing.elit.Etiam@accumsanconvallis.org","Cursus Nunc Mauris Industries"),("Henry",79,"sit.amet@elitfermentumrisus.edu","Enim LLP"),("Iola",25,"eget.nisi@Etiam.edu","Rutrum Non Hendrerit Ltd"),("Silas",35,"malesuada.fames.ac@amet.org","Fusce Aliquam Incorporated"),("Noble",6,"convallis.convallis@Fuscemilorem.co.uk","Tincidunt Donec Incorporated"),("Ayanna",46,"penatibus@eusemPellentesque.net","Malesuada Corp."),("Demetrius",55,"Curabitur@lacinia.edu","Ipsum Non Ltd"),("Gemma",87,"hymenaeos.Mauris.ut@tempusscelerisquelorem.edu","Dolor Dapibus Gravida Ltd"),("Kitra",96,"risus@loremfringilla.edu","Nisi Magna Limited"),("Dorian",8,"augue@ametornare.ca","Non Enim Institute"),("Ryan",64,"ultrices@etarcuimperdiet.net","Lobortis Nisi Inc."),("Keefe",14,"Etiam.laoreet@magnatellus.co.uk","Egestas A PC"),("Sophia",97,"neque.sed.dictum@Namnulla.net","Arcu Et Pede Company"),("Octavius",57,"pede.Suspendisse@Quisque.com","Magna Associates"),("Quin",97,"sit.amet.luctus@risus.com","Lobortis Industries"),("Joy",85,"non.ante@turpis.co.uk","Euismod Enim Etiam Consulting"),("Xerxes",55,"luctus.ipsum@magnaSuspendisse.com","Vitae Corporation"
            
            );
            
            INSERT INTO Users (name,age,mail,company) VALUES ("Ulric",11,"et.malesuada.fames@metusurnaconvallis.net","Enim Non Nisi PC"),("Alan",58,"lorem@Quisquelibero.net","Et Netus Inc."),("Harding",68,"habitant.morbi.tristique@idenimCurabitur.co.uk","Interdum Ligula Eu Corp."),("Dakota",56,"amet@sagittissemperNam.edu","Ligula Company"),("Matthew",35,"tortor.dictum@urnaNullam.ca","Turpis In LLC"),("Yolanda",43,"erat.vitae.risus@ipsumSuspendissesagittis.edu","Neque Nullam Foundation"),("Baker",17,"amet.ante.Vivamus@In.ca","Mauris Sit Amet Consulting"),("Ora",42,"neque.vitae.semper@egetmetus.com","Metus Vitae Velit Incorporated"),("Cheyenne",91,"vel.lectus.Cum@convallisdolorQuisque.com","Risus Associates"),("Curran",16,"magnis@ornare.org","Ac Mattis Associates"),("Jordan",11,"et.magna.Praesent@nisi.net","Integer Aliquam Foundation"),("Gil",24,"hendrerit.consectetuer.cursus@Duiselementumdui.com","Cursus Nunc Mauris Industries"),("Devin",57,"lacinia.vitae.sodales@sapienimperdietornare.co.uk","Duis Risus Associates"),("Eleanor",56,"augue@aliquetvelvulputate.net","Eu Lacus Institute"),("Troy",28,"blandit.at@leoMorbineque.ca","Magna Nam Ligula Limited"),("Jeanette",1,"at.fringilla.purus@Innec.co.uk","Elementum Sem Foundation"),("Sydnee",14,"cursus.in.hendrerit@nullaDonecnon.org","Nisi Magna Limited"),("Benjamin",67,"dolor@venenatisvelfaucibus.ca","Habitant Morbi Tristique Industries"),("Odette",83,"lorem@Phasellus.net","Ac Foundation"),("Stacey",20,"est@nisiaodio.co.uk","Sagittis Lobortis Ltd"
            
            );
            
            INSERT INTO Users (name,age,mail,company) VALUES ("Alden",5,"enim@velnislQuisque.com","Senectus Ltd"),("Freya",81,"enim@Namconsequat.org","Et Institute"),("Cameron",31,"arcu@augue.edu","Sed Associates"),("Kenneth",6,"fermentum@tellus.net","Auctor Velit Eget Foundation"),("Miranda",83,"Cras@sed.edu","Neque In Associates"),("Karina",99,"lacus.pede@Sedidrisus.com","Euismod Et Commodo Inc."),("Nayda",50,"adipiscing.non@ullamcorpereu.net","Hendrerit A Inc."),("Price",72,"nec@est.co.uk","Nullam Velit Dui Incorporated"),("Lucius",40,"In@cursusInteger.ca","Ac Eleifend Consulting"),("Addison",18,"lorem@dolorvitae.com","Dui Incorporated"),("Len",97,"magna.Duis@eueuismodac.edu","Luctus Sit Amet Foundation"),("Cedric",60,"Lorem.ipsum.dolor@adipiscingelitEtiam.com","Odio Semper Cursus LLC"),("Simon",13,"urna.Vivamus@convallisin.co.uk","Donec Dignissim Magna Associates"),("Hoyt",96,"adipiscing.elit.Etiam@velvulputate.net","Quam Limited"),("Mallory",88,"a@semutcursus.com","Orci Inc."),("Elizabeth",4,"amet.consectetuer@tinciduntpede.co.uk","Scelerisque Dui Suspendisse PC"),("Martin",29,"est@enim.ca","Dui Corp."),("Baker",34,"ultricies@tortor.co.uk","A Enim Suspendisse Incorporated"),("Nola",17,"neque.Sed@Cum.edu","Nunc Inc."),("Yuli",82,"mauris.ipsum@eratEtiam.com","Phasellus Dapibus Quam Foundation"
            
            );
            
            INSERT INTO Users (name,age,mail,company) VALUES ("Quinn",74,"bibendum@turpis.org","Metus Eu Erat Inc."),("Avram",38,"fringilla.cursus@Vivamusnon.co.uk","Leo Incorporated"),("Nayda",4,"diam.vel.arcu@variusNamporttitor.org","Mi Eleifend Foundation"),("Hu",87,"euismod.enim.Etiam@ridiculusmus.ca","Tortor Nibh Corporation"),("Kenneth",87,"sem.mollis.dui@estarcu.edu","Mollis Incorporated"),("Velma",33,"est.vitae@nonmagna.edu","Neque Tellus Corporation"),("Thaddeus",65,"nec@estNunc.org","Tempus Inc."),("Sacha",46,"congue.elit@MorbivehiculaPellentesque.net","Vel Consulting"),("Chaim",74,"justo.Praesent.luctus@Nuncmauris.ca","In Ornare Sagittis Consulting"),("Jolie",3,"velit@tinciduntnunc.net","Dui In Inc."),("Sarah",16,"odio@aliquetPhasellusfermentum.edu","Ipsum Dolor Sit LLP"),("Keiko",71,"Aenean@loremfringilla.net","Sem Ut Dolor LLP"),("Wylie",11,"vestibulum@laciniaorci.net","Vitae Erat Vivamus Institute"),("Hop",19,"non.enim.Mauris@amet.org","Lobortis Class LLC"),("Iola",19,"molestie.Sed.id@et.edu","Ipsum Phasellus Incorporated"),("Herman",15,"volutpat.Nulla@facilisislorem.com","Tempor Company"),("Chelsea",65,"euismod.enim@Donecconsectetuermauris.net","Diam Vel Arcu Limited"),("Edan",29,"mi@parturient.org","Enim Commodo Limited"),("Rhiannon",94,"libero.est@sitametmetus.co.uk","In Consequat Company"),("Mallory",15,"eu.ultrices.sit@elementumat.net","Est Ac Facilisis Industries"
            
            );`

        )

        await connector.close()
    }
}

initDB.init()