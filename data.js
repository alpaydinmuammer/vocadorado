const wordData = [
    { 
        id: 1, 
        word: "ser", 
        definition: "To be (essence, identity)", 
        synonyms: "", 
        example: "Yo soy alto.\nI am tall." 
    },
    { 
        id: 2, 
        word: "estar", 
        definition: "To be (state, location)", 
        synonyms: "", 
        example: "Ella está en casa.\nShe is at home." 
    },
    { 
        id: 3, 
        word: "tener", 
        definition: "To have, to possess", 
        synonyms: "poseer", 
        example: "Tú tienes dinero.\nYou have money." 
    },
    { 
        id: 4, 
        word: "hacer", 
        definition: "To do, to make", 
        synonyms: "realizar", 
        example: "Nosotros hacemos ejercicio.\nWe do exercise." 
    },
    { 
        id: 5, 
        word: "ir", 
        definition: "To go", 
        synonyms: "moverse", 
        example: "Ellos van al cine.\nThey go to the cinema." 
    },
    { 
        id: 6, 
        word: "poder", 
        definition: "To be able to, can", 
        synonyms: "ser capaz", 
        example: "¿Puedes ayudarme?\nCan you help me?" 
    },
    { 
        id: 7, 
        word: "decir", 
        definition: "To say, to tell", 
        synonyms: "expresar", 
        example: "Yo digo la verdad.\nI say the truth." 
    },
    { 
        id: 8, 
        word: "ver", 
        definition: "To see, to watch", 
        synonyms: "observar", 
        example: "Ella ve la televisión.\nShe watches television." 
    },
    { 
        id: 9, 
        word: "dar", 
        definition: "To give, to hand over", 
        synonyms: "entregar", 
        example: "Yo te doy un regalo.\nI give you a gift." 
    },
    { 
        id: 10, 
        word: "saber", 
        definition: "To know (facts, skills)", 
        synonyms: "conocer", 
        example: "Él sabe cocinar.\nHe knows how to cook." 
    },
    { 
        id: 11, 
        word: "querer", 
        definition: "To want, to love", 
        synonyms: "desear", 
        example: "Yo quiero café.\nI want coffee." 
    },
    { 
        id: 12, 
        word: "llegar", 
        definition: "To arrive, to get to", 
        synonyms: "alcanzar", 
        example: "Ella llega tarde.\nShe arrives late." 
    },
    { 
        id: 13, 
        word: "poner", 
        definition: "To put, to place", 
        synonyms: "colocar", 
        example: "Pongo la mesa.\nI set the table." 
    },
    { 
        id: 14, 
        word: "parecer", 
        definition: "To seem, to appear", 
        synonyms: "semejar", 
        example: "Él parece cansado.\nHe seems tired." 
    },
    { 
        id: 15, 
        word: "quedar", 
        definition: "To stay, to remain", 
        synonyms: "permanecer", 
        example: "Nos quedamos aquí.\nWe stay here." 
    },
    { 
        id: 16, 
        word: "creer", 
        definition: "To believe, to think", 
        synonyms: "pensar", 
        example: "¿Tú crees en mí?\nDo you believe in me?" 
    },
    { 
        id: 17, 
        word: "hablar", 
        definition: "To speak, to talk", 
        synonyms: "conversar", 
        example: "Nosotros hablamos mucho.\nWe talk a lot." 
    },
    { 
        id: 18, 
        word: "seguir", 
        definition: "To follow, to continue", 
        synonyms: "continuar", 
        example: "Sigue las instrucciones.\nFollow the instructions." 
    },
    { 
        id: 19, 
        word: "llamar", 
        definition: "To call, to name", 
        synonyms: "nombrar", 
        example: "Ella me llama por teléfono.\nShe calls me on the phone." 
    },
    { 
        id: 20, 
        word: "venir", 
        definition: "To come", 
        synonyms: "acudir", 
        example: "¿Cuándo vienes?\nWhen are you coming?" 
    },
    { 
        id: 21, 
        word: "tomar", 
        definition: "To take, to drink", 
        synonyms: "beber / agarrar", 
        example: "¿Qué quieres tomar?\nWhat do you want to drink?" 
    },
    { 
        id: 22, 
        word: "vivir", 
        definition: "To live, to reside", 
        synonyms: "residir", 
        example: "Ellos viven cerca.\nThey live nearby." 
    },
    { 
        id: 23, 
        word: "sentir", 
        definition: "To feel, to regret", 
        synonyms: "lamentar", 
        example: "Yo siento frío.\nI feel cold." 
    },
    { 
        id: 24, 
        word: "buscar", 
        definition: "To look for, to search", 
        synonyms: "encontrar", 
        example: "Busco mis llaves.\nI am looking for my keys." 
    },
    { 
        id: 25, 
        word: "abrir", 
        definition: "To open", 
        synonyms: "destapar", 
        example: "¿Puedes abrir la puerta?\nCan you open the door?" 
    },
    { 
        id: 26, 
        word: "conocer", 
        definition: "To know (person/place)", 
        synonyms: "saber", 
        example: "Conozco a tu hermano.\nI know your brother." 
    },
    { 
        id: 27, 
        word: "terminar", 
        definition: "To finish, to end", 
        synonyms: "finalizar", 
        example: "La clase termina pronto.\nThe class finishes soon." 
    },
    { 
        id: 28, 
        word: "escribir", 
        definition: "To write, to compose", 
        synonyms: "redactar", 
        example: "Ella escribe un email.\nShe writes an email." 
    },
    { 
        id: 29, 
        word: "trabajar", 
        definition: "To work", 
        synonyms: "laborar", 
        example: "Trabajamos mucho hoy.\nWe work a lot today." 
    },
    { 
        id: 30, 
        word: "empezar", 
        definition: "To start, to begin", 
        synonyms: "iniciar", 
        example: "Empezamos a estudiar.\nWe start to study." 
    },
    { 
        id: 31, 
        word: "entender", 
        definition: "To understand", 
        synonyms: "comprender", 
        example: "Yo no entiendo la lección.\nI don't understand the lesson." 
    },
    { 
        id: 32, 
        word: "pedir", 
        definition: "To ask for, to order", 
        synonyms: "solicitar", 
        example: "Pido un café, por favor.\nI ask for a coffee, please." 
    },
    { 
        id: 33, 
        word: "recibir", 
        definition: "To receive", 
        synonyms: "aceptar", 
        example: "¿Ya recibiste el pago?\nDid you receive the payment yet?" 
    },
    { 
        id: 34, 
        word: "recordar", 
        definition: "To remember, to remind", 
        synonyms: "evocar", 
        example: "No recuerdo su nombre.\nI don't remember his name." 
    },
    { 
        id: 35, 
        word: "morir", 
        definition: "To die", 
        synonyms: "fallecer", 
        example: "El héroe muere al final.\nThe hero dies at the end." 
    },
    { 
        id: 36, 
        word: "permitir", 
        definition: "To permit, to allow", 
        synonyms: "dejar", 
        example: "Él no permite errores.\nHe does not allow mistakes." 
    },
    { 
        id: 37, 
        word: "comenzar", 
        definition: "To begin, to start", 
        synonyms: "empezar", 
        example: "Comenzamos la película.\nWe start the movie." 
    },
    { 
        id: 38, 
        word: "servir", 
        definition: "To serve, to be useful", 
        synonyms: "atender", 
        example: "¿En qué puedo servirte?\nHow can I serve you?" 
    },
    { 
        id: 39, 
        word: "necesitar", 
        definition: "To need", 
        synonyms: "requerir", 
        example: "Necesitas ayuda ahora.\nYou need help now." 
    },
    { 
        id: 40, 
        word: "mantener", 
        definition: "To maintain, to keep", 
        synonyms: "conservar", 
        example: "Mantenemos la calma.\nWe keep calm." 
    },
    { 
        id: 41, 
        word: "presentar", 
        definition: "To present, to introduce", 
        synonyms: "introducir", 
        example: "Quiero presentar a mi jefe.\nI want to introduce my boss." 
    },
    { 
        id: 42, 
        word: "crear", 
        definition: "To create, to make", 
        synonyms: "inventar", 
        example: "Ella crea arte.\nShe creates art." 
    },
    { 
        id: 43, 
        word: "considerar", 
        definition: "To consider, to think about", 
        synonyms: "examinar", 
        example: "Considero tu oferta.\nI consider your offer." 
    },
    { 
        id: 44, 
        word: "ganar", 
        definition: "To win, to earn", 
        synonyms: "obtener", 
        example: "Yo gano un premio.\nI win a prize." 
    },
    { 
        id: 45, 
        word: "ofrecer", 
        definition: "To offer", 
        synonyms: "proporcionar", 
        example: "Nos ofrecen un trato.\nThey offer us a deal." 
    },
    { 
        id: 46, 
        word: "ocurrir", 
        definition: "To occur, to happen", 
        synonyms: "suceder", 
        example: "Algo malo ocurrió.\nSomething bad happened." 
    },
    { 
        id: 47, 
        word: "esperar", 
        definition: "To wait, to hope", 
        synonyms: "aguardar", 
        example: "Espero el bus.\nI wait for the bus." 
    },
    { 
        id: 48, 
        word: "aceptar", 
        definition: "To accept", 
        synonyms: "admitir", 
        example: "Siempre acepto el desafío.\nI always accept the challenge." 
    },
    { 
        id: 49, 
        word: "intentar", 
        definition: "To try, to attempt", 
        synonyms: "probar", 
        example: "Voy a intentar esto.\nI am going to try this." 
    },
    { 
        id: 50, 
        word: "explicar", 
        definition: "To explain", 
        synonyms: "aclarar", 
        example: "¿Puedes explicar eso?\nCan you explain that?" 
    },
    { 
        id: 51, 
        word: "mencionar", 
        definition: "To mention", 
        synonyms: "nombrar", 
        example: "Él menciona el precio.\nHe mentions the price." 
    },
    { 
        id: 52, 
        word: "volver", 
        definition: "To return, to come back", 
        synonyms: "regresar", 
        example: "Ella vuelve a casa.\nShe returns home." 
    },
    { 
        id: 53, 
        word: "decidir", 
        definition: "To decide", 
        synonyms: "resolver", 
        example: "Necesito decidir ahora.\nI need to decide now." 
    },
    { 
        id: 54, 
        word: "salir", 
        definition: "To leave, to go out", 
        synonyms: "abandonar", 
        example: "Salimos a las ocho.\nWe leave at eight." 
    },
    { 
        id: 55, 
        word: "realizar", 
        definition: "To carry out, to perform", 
        synonyms: "hacer", 
        example: "Realizó su sueño.\nHe fulfilled his dream." 
    },
    { 
        id: 56, 
        word: "entrar", 
        definition: "To enter, to come in", 
        synonyms: "acceder", 
        example: "Entras primero.\nYou enter first." 
    },
    { 
        id: 57, 
        word: "guardar", 
        definition: "To keep, to save", 
        synonyms: "conservar", 
        example: "Guardo el dinero.\nI save the money." 
    },
    { 
        id: 58, 
        word: "conocer", 
        definition: "To know (person/place)", 
        synonyms: "saber", 
        example: "Conocemos la ciudad.\nWe know the city." 
    },
    { 
        id: 59, 
        word: "pagar", 
        definition: "To pay", 
        synonyms: "abonar", 
        example: "Yo pago la cuenta.\nI pay the bill." 
    },
    { 
        id: 60, 
        word: "jugar", 
        definition: "To play (game, sport)", 
        synonyms: "divertirse", 
        example: "¿Juegas fútbol?\nDo you play soccer?" 
    },
    { 
        id: 61, 
        word: "establecer", 
        definition: "To establish, to set up", 
        synonyms: "fundar", 
        example: "Establecen nuevas reglas.\nThey establish new rules." 
    },
    { 
        id: 62, 
        word: "caer", 
        definition: "To fall", 
        synonyms: "descender", 
        example: "El vaso cayó.\nThe glass fell." 
    },
    { 
        id: 63, 
        word: "formar", 
        definition: "To form, to shape", 
        synonyms: "crear", 
        example: "Formamos un grupo.\nWe form a group." 
    },
    { 
        id: 64, 
        word: "traer", 
        definition: "To bring, to carry", 
        synonyms: "acercar", 
        example: "Traigo la comida.\nI bring the food." 
    },
    { 
        id: 65, 
        word: "habitar", 
        definition: "To inhabit, to live in", 
        synonyms: "vivir", 
        example: "Ellos habitan aquí.\nThey live here." 
    },
    { 
        id: 66, 
        word: "oír", 
        definition: "To hear", 
        synonyms: "escuchar", 
        example: "No oigo bien.\nI don't hear well." 
    },
    { 
        id: 67, 
        word: "caminar", 
        definition: "To walk", 
        synonyms: "pasear", 
        example: "Me gusta caminar en paz.\nI like to walk in peace." 
    },
    { 
        id: 68, 
        word: "suceder", 
        definition: "To happen, to succeed", 
        synonyms: "ocurrir", 
        example: "¿Qué sucedió anoche?\nWhat happened last night?" 
    },
    { 
        id: 69, 
        word: "producir", 
        definition: "To produce", 
        synonyms: "fabricar", 
        example: "La fábrica produce coches.\nThe factory produces cars." 
    },
    { 
        id: 70, 
        word: "nadar", 
        definition: "To swim", 
        synonyms: "flotar", 
        example: "A él le gusta nadar.\nHe likes to swim." 
    },
    { 
        id: 71, 
        word: "ocupar", 
        definition: "To occupy, to take up", 
        synonyms: "utilizar", 
        example: "Ocupan mi asiento.\nThey take up my seat." 
    },
    { 
        id: 72, 
        word: "defender", 
        definition: "To defend", 
        synonyms: "proteger", 
        example: "Debemos defender la verdad.\nWe must defend the truth." 
    },
    { 
        id: 73, 
        word: "dudar", 
        definition: "To doubt", 
        synonyms: "sospechar", 
        example: "No dudes de ti mismo.\nDon't doubt yourself." 
    },
    { 
        id: 74, 
        word: "leer", 
        definition: "To read", 
        synonyms: "estudiar", 
        example: "Ella lee un libro.\nShe reads a book." 
    },
    { 
        id: 75, 
        word: "imaginar", 
        definition: "To imagine", 
        synonyms: "pensar", 
        example: "Imagino un mundo mejor.\nI imagine a better world." 
    },
    { 
        id: 76, 
        word: "vender", 
        definition: "To sell", 
        synonyms: "comercializar", 
        example: "Vendemos frutas.\nWe sell fruits." 
    },
    { 
        id: 77, 
        word: "repetir", 
        definition: "To repeat", 
        synonyms: "reiterar", 
        example: "Por favor, repite eso.\nPlease, repeat that." 
    },
    { 
        id: 78, 
        word: "recoger", 
        definition: "To pick up, to collect", 
        synonyms: "juntar", 
        example: "Recoge los papeles.\nPick up the papers." 
    },
    { 
        id: 79, 
        word: "cerrar", 
        definition: "To close, to shut", 
        synonyms: "sellar", 
        example: "¿Puedes cerrar la puerta?\nCan you close the door?" 
    },
    { 
        id: 80, 
        word: "preparar", 
        definition: "To prepare, to get ready", 
        synonyms: "disponer", 
        example: "Preparamos la comida.\nWe prepare the food." 
    },
    { 
        id: 81, 
        word: "gastar", 
        definition: "To spend (money), to wear out", 
        synonyms: "consumir", 
        example: "Gasto mucho dinero.\nI spend a lot of money." 
    },
    { 
        id: 82, 
        word: "enseñar", 
        definition: "To teach, to show", 
        synonyms: "instruir", 
        example: "El profesor enseña español.\nThe teacher teaches Spanish." 
    },
    { 
        id: 83, 
        word: "reunir", 
        definition: "To meet, to gather", 
        synonyms: "congregar", 
        example: "Nos reunimos mañana.\nWe meet tomorrow." 
    },
    { 
        id: 84, 
        word: "saltar", 
        definition: "To jump", 
        synonyms: "botar", 
        example: "El niño salta alto.\nThe child jumps high." 
    },
    { 
        id: 85, 
        word: "llorar", 
        definition: "To cry, to weep", 
        synonyms: "gemir", 
        example: "Ella no llora más.\nShe doesn't cry anymore." 
    },
    { 
        id: 86, 
        word: "conducir", 
        definition: "To drive, to lead", 
        synonyms: "guiar", 
        example: "Conduces muy rápido.\nYou drive very fast." 
    },
    { 
        id: 87, 
        word: "pintar", 
        definition: "To paint", 
        synonyms: "dibujar", 
        example: "Queremos pintar la pared.\nWe want to paint the wall." 
    },
    { 
        id: 88, 
        word: "ayudar", 
        definition: "To help", 
        synonyms: "asistir", 
        example: "Él siempre ayuda a otros.\nHe always helps others." 
    },
    { 
        id: 89, 
        word: "prometer", 
        definition: "To promise", 
        synonyms: "jurar", 
        example: "Yo prometo volver.\nI promise to return." 
    },
    { 
        id: 90, 
        word: "cocer", 
        definition: "To cook, to boil", 
        synonyms: "cocinar", 
        example: "Cuece las verduras.\nCook the vegetables." 
    },
    { 
        id: 91, 
        word: "volar", 
        definition: "To fly", 
        synonyms: "planear", 
        example: "El pájaro vuela alto.\nThe bird flies high." 
    },
    { 
        id: 92, 
        word: "agradecer", 
        definition: "To thank, to be grateful", 
        synonyms: "reconocer", 
        example: "Te agradezco la ayuda.\nI thank you for the help." 
    },
    { 
        id: 93, 
        word: "olvidar", 
        definition: "To forget", 
        synonyms: "descuidar", 
        example: "No olvides tu llave.\nDon't forget your key." 
    },
    { 
        id: 94, 
        word: "construir", 
        definition: "To build, to construct", 
        synonyms: "edificar", 
        example: "Construyen una casa.\nThey build a house." 
    },
    { 
        id: 95, 
        word: "destruir", 
        definition: "To destroy", 
        synonyms: "arruinar", 
        example: "La tormenta destruyó el puente.\nThe storm destroyed the bridge." 
    },
    { 
        id: 96, 
        word: "admirar", 
        definition: "To admire", 
        synonyms: "respetar", 
        example: "Admiro tu trabajo.\nI admire your work." 
    },
    { 
        id: 97, 
        word: "odiar", 
        definition: "To hate", 
        synonyms: "aborrecer", 
        example: "Él odia la mentira.\nHe hates lies." 
    },
    { 
        id: 98, 
        word: "amar", 
        definition: "To love", 
        synonyms: "querer", 
        example: "Yo amo la vida.\nI love life." 
    },
    { 
        id: 99, 
        word: "gritar", 
        definition: "To shout, to yell", 
        synonyms: "vociferar", 
        example: "No grites tan fuerte.\nDon't shout so loudly." 
    },
    { 
        id: 100, 
        word: "saludar", 
        definition: "To greet, to say hello", 
        synonyms: "recibir", 
        example: "Ella saluda a todos.\nShe greets everyone." 
    },{ 
        id: 101, 
        word: "despedir", 
        definition: "To say goodbye, to fire", 
        synonyms: "desauciar", 
        example: "Me tengo que despedir.\nI have to say goodbye." 
    },
    { 
        id: 102, 
        word: "preguntar", 
        definition: "To ask (a question)", 
        synonyms: "consultar", 
        example: "¿Qué preguntas?\nWhat are you asking?" 
    },
    { 
        id: 103, 
        word: "el verano", 
        definition: "Summer", 
        synonyms: "", 
        example: "Vamos de vacaciones en el verano.\nWe go on vacation in summer." 
    },
    { 
        id: 104, 
        word: "el otoño", 
        definition: "Autumn / Fall", 
        synonyms: "", 
        example: "Las hojas caen en el otoño.\nThe leaves fall in autumn." 
    },
    { 
        id: 105, 
        word: "el invierno", 
        definition: "Winter", 
        synonyms: "", 
        example: "Hace mucho frío en el invierno.\nIt is very cold in winter." 
    },
    { 
        id: 106, 
        word: "la primavera", 
        definition: "Spring", 
        synonyms: "", 
        example: "La vida vuelve en la primavera.\nLife returns in spring." 
    },
    { 
        id: 107, 
        word: "la estación", 
        definition: "The season", 
        synonyms: "", 
        example: "Mi estación favorita es el otoño.\nMy favorite season is autumn." 
    },
    { 
        id: 108, 
        word: "enero", 
        definition: "January", 
        synonyms: "", 
        example: "Enero es frío.\nJanuary is cold." 
    },
    { 
        id: 109, 
        word: "febrero", 
        definition: "February", 
        synonyms: "", 
        example: "Febrero tiene 28 días.\nFebruary has 28 days." 
    },
    { 
        id: 110, 
        word: "marzo", 
        definition: "March", 
        synonyms: "", 
        example: "Viajo en marzo.\nI travel in March." 
    },
    { 
        id: 111, 
        word: "abril", 
        definition: "April", 
        synonyms: "", 
        example: "El día es en abril.\nThe day is in April." 
    },
    { 
        id: 112, 
        word: "mayo", 
        definition: "May", 
        synonyms: "", 
        example: "Hace sol en mayo.\nIt is sunny in May." 
    },
    { 
        id: 113, 
        word: "junio", 
        definition: "June", 
        synonyms: "", 
        example: "Empieza el verano en junio.\nSummer starts in June." 
    },
    { 
        id: 114, 
        word: "julio", 
        definition: "July", 
        synonyms: "", 
        example: "Julio es caluroso.\nJuly is hot." 
    },
    { 
        id: 115, 
        word: "agosto", 
        definition: "August", 
        synonyms: "", 
        example: "Es mi cumpleaños en agosto.\nIt is my birthday in August." 
    },
    { 
        id: 116, 
        word: "septiembre", 
        definition: "September", 
        synonyms: "", 
        example: "La escuela abre en septiembre.\nSchool opens in September." 
    },
    { 
        id: 117, 
        word: "octubre", 
        definition: "October", 
        synonyms: "", 
        example: "Hace viento en octubre.\nIt is windy in October." 
    },
    { 
        id: 118, 
        word: "noviembre", 
        definition: "November", 
        synonyms: "", 
        example: "Noviembre es el mes once.\nNovember is the eleventh month." 
    },
    { 
        id: 119, 
        word: "diciembre", 
        definition: "December", 
        synonyms: "", 
        example: "Llega la Navidad en diciembre.\nChristmas arrives in December." 
    },
    { 
        id: 120, 
        word: "los meses del año", 
        definition: "The months of the year", 
        synonyms: "", 
        example: "Los meses del año son doce.\nThe months of the year are twelve." 
    },
    { 
        id: 121, 
        word: "rojo", 
        definition: "Red", 
        synonyms: "", 
        example: "La manzana es roja. Los coches son rojos.\nThe apple is red. The cars are red." 
    },
    { 
        id: 122, 
        word: "azul", 
        definition: "Blue", 
        synonyms: "", 
        example: "El cielo es azul. Las flores son azules.\nThe sky is blue. The flowers are blue." 
    },
    { 
        id: 123, 
        word: "amarillo", 
        definition: "Yellow", 
        synonyms: "", 
        example: "El sol es amarillo. Las luces son amarillas.\nThe sun is yellow. The lights are yellow." 
    },
    { 
        id: 124, 
        word: "verde", 
        definition: "Green", 
        synonyms: "", 
        example: "El pasto es verde. Los árboles son verdes.\nThe grass is green. The trees are green." 
    },
    { 
        id: 125, 
        word: "blanco", 
        definition: "White", 
        synonyms: "", 
        example: "La nieve es blanca. Los papeles son blancos.\nThe snow is white. The papers are white." 
    },
    { 
        id: 126, 
        word: "negro", 
        definition: "Black", 
        synonyms: "", 
        example: "El gato es negro. Las chaquetas son negras.\nThe cat is black. The jackets are black." 
    },
    { 
        id: 127, 
        word: "rosa", 
        definition: "Pink", 
        synonyms: "", 
        example: "La flor es rosa. Las cintas son rosas.\nThe flower is pink. The ribbons are pink." 
    },
    { 
        id: 128, 
        word: "morado", 
        definition: "Purple", 
        synonyms: "", 
        example: "El vestido es morado. Las uvas son moradas.\nThe dress is purple. The grapes are purple." 
    },
    { 
        id: 129, 
        word: "naranja", 
        definition: "Orange", 
        synonyms: "", 
        example: "La fruta es naranja. Las zanahorias son naranjas.\nThe fruit is orange. The carrots are orange." 
    },
    { 
        id: 130, 
        word: "gris", 
        definition: "Gray", 
        synonyms: "", 
        example: "El día está gris. Los edificios son grises.\nThe day is gray. The buildings are gray." 
    },
    { 
        id: 131, 
        word: "el color / los colores", 
        definition: "The color / The colors", 
        synonyms: "", 
        example: "El color es vibrante. Los colores son brillantes.\nThe color is vibrant. The colors are bright." 
    },
    { 
        id: 132, 
        word: "los días de la semana", 
        definition: "The days of the week", 
        synonyms: "", 
        example: "Hay siete días en la semana.\nThere are seven days in the week." 
    },
    { 
        id: 133, 
        word: "el lunes / los lunes", 
        definition: "Monday / Mondays", 
        synonyms: "", 
        example: "El lunes es el primer día.\nMonday is the first day." 
    },
    { 
        id: 134, 
        word: "el martes / los martes", 
        definition: "Tuesday / Tuesdays", 
        synonyms: "", 
        example: "Los martes ella estudia español.\nShe studies Spanish on Tuesdays." 
    },
    { 
        id: 135, 
        word: "el miércoles / los miércoles", 
        definition: "Wednesday / Wednesdays", 
        synonyms: "", 
        example: "Nosotros vamos al gimnasio el miércoles.\nWe go to the gym on Wednesday." 
    },
    { 
        id: 136, 
        word: "el jueves / los jueves", 
        definition: "Thursday / Thursdays", 
        synonyms: "", 
        example: "Yo leo el periódico los jueves.\nI read the newspaper on Thursdays." 
    },
    { 
        id: 137, 
        word: "el viernes / los viernes", 
        definition: "Friday / Fridays", 
        synonyms: "", 
        example: "¿Tú trabajas el viernes?\nDo you work on Friday?" 
    },
    { 
        id: 138, 
        word: "el sábado / los sábados", 
        definition: "Saturday / Saturdays", 
        synonyms: "", 
        example: "Los sábados salimos a cenar.\nWe go out to dinner on Saturdays." 
    },
    { 
        id: 139, 
        word: "el domingo / los domingos", 
        definition: "Sunday / Sundays", 
        synonyms: "", 
        example: "Él descansa el domingo.\nHe rests on Sunday." 
    },
    { 
        id: 140, 
        word: "la familia", 
        definition: "The family", 
        synonyms: "", 
        example: "Mi familia vive en esta ciudad.\nMy family lives in this city." 
    },
    { 
        id: 141, 
        word: "el padre / la madre", 
        definition: "The father / The mother", 
        synonyms: "", 
        example: "Mis padres viajan mucho.\nMy parents travel a lot." 
    },
    { 
        id: 142, 
        word: "el hermano / la hermana", 
        definition: "The brother / The sister", 
        synonyms: "", 
        example: "Tengo dos hermanos y una hermana.\nI have two brothers and one sister." 
    },
    { 
        id: 143, 
        word: "el abuelo / la abuela", 
        definition: "The grandfather / The grandmother", 
        synonyms: "", 
        example: "Mi abuela cocina muy bien.\nMy grandmother cooks very well." 
    },
    { 
        id: 144, 
        word: "el tío / la tía", 
        definition: "The uncle / The aunt", 
        synonyms: "", 
        example: "Mi tía y mi tío trabajan juntos.\nMy aunt and my uncle work together." 
    },
    { 
        id: 145, 
        word: "el primo / la prima", 
        definition: "The (male) cousin / The (female) cousin", 
        synonyms: "", 
        example: "Mi prima y yo vamos al cine.\nMy cousin and I go to the cinema." 
    },
    { 
        id: 146, 
        word: "el sobrino / la sobrina", 
        definition: "The nephew / The niece", 
        synonyms: "", 
        example: "Su sobrino es alto. Su sobrina es joven.\nHis nephew is tall. His niece is young." 
    },
    { 
        id: 147, 
        word: "el cuñado / la cuñada", 
        definition: "The brother-in-law / The sister-in-law", 
        synonyms: "", 
        example: "Mi cuñado es simpático. Mi cuñada es amable.\nMy brother-in-law is nice. My sister-in-law is kind." 
    },
    { 
        id: 148, 
        word: "el suegro / la suegra", 
        definition: "The father-in-law / The mother-in-law", 
        synonyms: "", 
        example: "Mis suegros viven en otra ciudad.\nMy in-laws live in another city." 
    },
    { 
        id: 149, 
        word: "los animales", 
        definition: "The animals", 
        synonyms: "", 
        example: "Los animales viven libres en el campo.\nThe animals live free in the field." 
    },
    { 
        id: 150, 
        word: "el perro / la perra", 
        definition: "The dog (male/female)", 
        synonyms: "", 
        example: "El perro es mi amigo. La perra duerme.\nThe dog is my friend. The female dog sleeps." 
    },
    { 
        id: 151, 
        word: "el gato / la gata", 
        definition: "The cat (male/female)", 
        synonyms: "", 
        example: "La gata salta alto. El gato es grande.\nThe female cat jumps high. The male cat is big." 
    },
    { 
        id: 152, 
        word: "el oso / la osa", 
        definition: "The bear (male/female)", 
        synonyms: "", 
        example: "El oso come bayas. La osa tiene crías.\nThe bear eats berries. The female bear has cubs." 
    },
    { 
        id: 153, 
        word: "el león / la leona", 
        definition: "The lion (male/female)", 
        synonyms: "", 
        example: "El león ruge fuerte. La leona caza.\nThe lion roars loudly. The lioness hunts." 
    },
    { 
        id: 154, 
        word: "el tigre / la tigresa", 
        definition: "The tiger (male/female)", 
        synonyms: "", 
        example: "El tigre camina lento. La tigresa es rápida.\nThe tiger walks slowly. The tigress is fast." 
    },
    { 
        id: 155, 
        word: "el cerdo / la cerda", 
        definition: "The pig (male/female)", 
        synonyms: "", 
        example: "El cerdo come mucho. La cerda es gorda.\nThe pig eats a lot. The female pig is fat." 
    },
    { 
        id: 156, 
        word: "el zorro / la zorra", 
        definition: "The fox (male/female)", 
        synonyms: "", 
        example: "El zorro es astuto. La zorra es rápida.\nThe fox is cunning. The female fox is fast." 
    },
    { 
        id: 157, 
        word: "el conejo / la coneja", 
        definition: "The rabbit (male/female)", 
        synonyms: "", 
        example: "El conejo salta. La coneja se esconde.\nThe rabbit jumps. The female rabbit hides." 
    },
    { 
        id: 158, 
        word: "el pato / la pata", 
        definition: "The duck (male/female)", 
        synonyms: "", 
        example: "El pato nada. La pata camina.\nThe male duck swims. The female duck walks." 
    },
    { 
        id: 159, 
        word: "el cordero / la cordera", 
        definition: "The lamb (male/female)", 
        synonyms: "", 
        example: "El cordero bebe leche. La cordera corre.\nThe lamb drinks milk. The female lamb runs." 
    },
    { 
        id: 160, 
        word: "el caballo / la yegua", 
        definition: "The horse / The mare (ATTENTION: The word changes!)", 
        synonyms: "", 
        example: "El caballo corre. La yegua es fuerte.\nThe horse runs. The mare is strong." 
    },
    { 
        id: 161, 
        word: "el elefante", 
        definition: "The elephant (Fixed Masculine)", 
        synonyms: "", 
        example: "El elefante bebe agua.\nThe elephant drinks water." 
    },
    { 
        id: 162, 
        word: "el pez", 
        definition: "The fish (Fixed Masculine)", 
        synonyms: "", 
        example: "El pez vive en el mar.\nThe fish lives in the sea." 
    },
    { 
        id: 163, 
        word: "el pájaro", 
        definition: "The bird (Fixed Masculine)", 
        synonyms: "", 
        example: "El pájaro vuela alto.\nThe bird flies high." 
    },
    { 
        id: 164, 
        word: "el ratón", 
        definition: "The mouse (Fixed Masculine)", 
        synonyms: "", 
        example: "El ratón come queso.\nThe mouse eats cheese." 
    },
    { 
        id: 165, 
        word: "la vaca", 
        definition: "The cow (Fixed Feminine)", 
        synonyms: "", 
        example: "La vaca da leche.\nThe cow gives milk." 
    },
    { 
        id: 166, 
        word: "la oveja", 
        definition: "The sheep (Fixed Feminine)", 
        synonyms: "", 
        example: "La oveja tiene lana.\nThe sheep has wool." 
    },
    { 
        id: 167, 
        word: "la jirafa", 
        definition: "The giraffe (Fixed Feminine)", 
        synonyms: "", 
        example: "La jirafa es muy alta.\nThe giraffe is very tall." 
    },
    { 
        id: 168, 
        word: "la serpiente", 
        definition: "The snake (Fixed Feminine)", 
        synonyms: "", 
        example: "La serpiente es peligrosa.\nThe snake is dangerous." 
    },
    { 
        id: 169, 
        word: "la tortuga", 
        definition: "The turtle / tortoise (Fixed Feminine)", 
        synonyms: "", 
        example: "La tortuga es muy lenta.\nThe turtle is very slow." 
    },
    { 
        id: 170, 
        word: "la fruta", 
        definition: "The fruit", 
        synonyms: "", 
        example: "Las frutas son buenas para la salud.\nThe fruits are good for health." 
    },
    { 
        id: 171, 
        word: "la manzana", 
        definition: "The apple", 
        synonyms: "", 
        example: "Las manzanas son rojas.\nThe apples are red." 
    },
    { 
        id: 172, 
        word: "el plátano", 
        definition: "The banana", 
        synonyms: "", 
        example: "El plátano es amarillo.\nThe banana is yellow." 
    },
    { 
        id: 173, 
        word: "la naranja", 
        definition: "The orange", 
        synonyms: "", 
        example: "Las naranjas tienen vitamina C.\nThe oranges have Vitamin C." 
    },
    { 
        id: 174, 
        word: "la fresa", 
        definition: "The strawberry", 
        synonyms: "", 
        example: "La fresa es dulce.\nThe strawberry is sweet." 
    },
    { 
        id: 175, 
        word: "la uva", 
        definition: "The grape", 
        synonyms: "", 
        example: "Las uvas son pequeñas.\nThe grapes are small." 
    },
    { 
        id: 176, 
        word: "la pera", 
        definition: "The pear", 
        synonyms: "", 
        example: "La pera está madura.\nThe pear is ripe." 
    },
    { 
        id: 177, 
        word: "la cereza", 
        definition: "The cherry", 
        synonyms: "", 
        example: "Las cerezas son rojas.\nThe cherries are red." 
    },
    { 
        id: 178, 
        word: "la sandía", 
        definition: "The watermelon", 
        synonyms: "", 
        example: "La sandía es grande.\nThe watermelon is big." 
    },
    { 
        id: 179, 
        word: "el limón", 
        definition: "The lemon", 
        synonyms: "", 
        example: "Los limones son ácidos.\nThe lemons are sour." 
    },
    { 
        id: 180, 
        word: "el melón", 
        definition: "The melon", 
        synonyms: "", 
        example: "El melón es muy dulce.\nThe melon is very sweet." 
    },
    { 
        id: 181, 
        word: "el melocotón", 
        definition: "The peach", 
        synonyms: "", 
        example: "Los melocotones son sabrosos.\nThe peaches are tasty." 
    },
    { 
        id: 182, 
        word: "la piña", 
        definition: "The pineapple", 
        synonyms: "", 
        example: "La piña viene de un árbol.\nThe pineapple comes from a tree." 
    },
    { 
        id: 183, 
        word: "el aguacate", 
        definition: "The avocado", 
        synonyms: "", 
        example: "Los aguacates son verdes.\nThe avocados are green." 
    },
    { 
        id: 184, 
        word: "la frambuesa", 
        definition: "The raspberry", 
        synonyms: "", 
        example: "La frambuesa es pequeña y roja.\nThe raspberry is small and red." 
    },
    { 
        id: 185, 
        word: "la verdura / el vegetal", 
        definition: "The vegetable", 
        synonyms: "", 
        example: "Las verduras son saludables.\nThe vegetables are healthy." 
    },
    { 
        id: 186, 
        word: "la zanahoria", 
        definition: "The carrot", 
        synonyms: "", 
        example: "Las zanahorias son nutritivas.\nThe carrots are nutritious." 
    },
    { 
        id: 187, 
        word: "la patata / la papa", 
        definition: "The potato", 
        synonyms: "", 
        example: "La patata está caliente.\nThe potato is hot." 
    },
    { 
        id: 188, 
        word: "el tomate", 
        definition: "The tomato", 
        synonyms: "", 
        example: "Los tomates son rojos.\nThe tomatoes are red." 
    },
    { 
        id: 189, 
        word: "la cebolla", 
        definition: "The onion", 
        synonyms: "", 
        example: "Las cebollas me hacen llorar.\nThe onions make me cry." 
    },
    { 
        id: 190, 
        word: "el pimiento", 
        definition: "The pepper", 
        synonyms: "", 
        example: "El pimiento es verde.\nThe pepper is green." 
    },
    { 
        id: 191, 
        word: "el brócoli", 
        definition: "The broccoli", 
        synonyms: "", 
        example: "El brócoli es verde oscuro.\nThe broccoli is dark green." 
    },
    { 
        id: 192, 
        word: "la lechuga", 
        definition: "The lettuce", 
        synonyms: "", 
        example: "Las lechugas son frescas.\nThe lettuces are fresh." 
    },
    { 
        id: 193, 
        word: "la coliflor", 
        definition: "The cauliflower", 
        synonyms: "", 
        example: "La coliflor es blanca.\nThe cauliflower is white." 
    },
    { 
        id: 194, 
        word: "el pepino", 
        definition: "The cucumber", 
        synonyms: "", 
        example: "Los pepinos son refrescantes.\nThe cucumbers are refreshing." 
    },
    { 
        id: 195, 
        word: "el maíz", 
        definition: "The corn", 
        synonyms: "", 
        example: "El maíz es amarillo.\nThe corn is yellow." 
    },
    { 
        id: 196, 
        word: "la berenjena", 
        definition: "The eggplant", 
        synonyms: "", 
        example: "Las berenjenas son moradas.\nThe eggplants are purple." 
    },
    { 
        id: 197, 
        word: "el ajo", 
        definition: "The garlic", 
        synonyms: "", 
        example: "El ajo da sabor a la comida.\nThe garlic gives flavor to the food." 
    },
    { 
        id: 198, 
        word: "el champiñón", 
        definition: "The mushroom", 
        synonyms: "", 
        example: "Los champiñones son deliciosos.\nThe mushrooms are delicious." 
    },
    { 
        id: 199, 
        word: "el guisante", 
        definition: "The pea", 
        synonyms: "", 
        example: "El guisante es muy pequeño.\nThe pea is very small." 
    },
    { 
        id: 200, 
        word: "los objetos", 
        definition: "The objects / The items", 
        synonyms: "", 
        example: "Los objetos están en las cajas.\nThe items are in the boxes." 
    },{ 
        id: 201, 
        word: "el libro", 
        definition: "The book", 
        synonyms: "", 
        example: "Los libros son interesantes.\nThe books are interesting." 
    },
    { 
        id: 202, 
        word: "el móvil", 
        definition: "The mobile phone", 
        synonyms: "", 
        example: "El móvil está en mi bolsillo.\nThe mobile phone is in my pocket." 
    },
    { 
        id: 203, 
        word: "la llave", 
        definition: "The key", 
        synonyms: "", 
        example: "Las llaves abren las puertas.\nThe keys open the doors." 
    },
    { 
        id: 204, 
        word: "la silla", 
        definition: "The chair", 
        synonyms: "", 
        example: "Las sillas son cómodas.\nThe chairs are comfortable." 
    },
    { 
        id: 205, 
        word: "la mesa", 
        definition: "The table", 
        synonyms: "", 
        example: "La mesa es grande.\nThe table is big." 
    },
    { 
        id: 206, 
        word: "el vaso", 
        definition: "The glass (drinking)", 
        synonyms: "", 
        example: "Los vasos están vacíos.\nThe glasses are empty." 
    },
    { 
        id: 207, 
        word: "el plato", 
        definition: "The plate", 
        synonyms: "", 
        example: "El plato es de cerámica.\nThe plate is ceramic." 
    },
    { 
        id: 208, 
        word: "el tenedor", 
        definition: "The fork", 
        synonyms: "", 
        example: "Los tenedores están limpios.\nThe forks are clean." 
    },
    { 
        id: 209, 
        word: "el cuchillo", 
        definition: "The knife", 
        synonyms: "", 
        example: "El cuchillo corta la carne.\nThe knife cuts the meat." 
    },
    { 
        id: 210, 
        word: "la cuchara", 
        definition: "The spoon", 
        synonyms: "", 
        example: "Las cucharas son pequeñas.\nThe spoons are small." 
    },
    { 
        id: 211, 
        word: "la ventana", 
        definition: "The window", 
        synonyms: "", 
        example: "Las ventanas están abiertas.\nThe windows are open." 
    },
    { 
        id: 212, 
        word: "la puerta", 
        definition: "The door", 
        synonyms: "", 
        example: "La puerta es de madera.\nThe door is made of wood." 
    },
    { 
        id: 213, 
        word: "el reloj", 
        definition: "The clock / The watch", 
        synonyms: "", 
        example: "Los relojes marcan las horas.\nThe clocks mark the hours." 
    },
    { 
        id: 214, 
        word: "la cama", 
        definition: "The bed", 
        synonyms: "", 
        example: "La cama es blanda.\nThe bed is soft." 
    },
    { 
        id: 215, 
        word: "la luz", 
        definition: "The light", 
        synonyms: "", 
        example: "Las luces están encendidas.\nThe lights are on." 
    },
    { 
        id: 216, 
        word: "la pared", 
        definition: "The wall", 
        synonyms: "", 
        example: "La pared es blanca.\nThe wall is white." 
    },
    { 
        id: 217, 
        word: "el bolígrafo", 
        definition: "The pen", 
        synonyms: "", 
        example: "Los bolígrafos escriben bien.\nThe pens write well." 
    },
    { 
        id: 218, 
        word: "el papel", 
        definition: "The paper", 
        synonyms: "", 
        example: "El papel es fino.\nThe paper is thin." 
    },
    { 
        id: 219, 
        word: "el dinero", 
        definition: "The money", 
        synonyms: "", 
        example: "El dinero es importante.\nThe money is important." 
    },
    { 
        id: 220, 
        word: "la comida", 
        definition: "The food / The meal", 
        synonyms: "", 
        example: "Las comidas del país son deliciosas.\nThe meals of the country are delicious." 
    },
    { 
        id: 221, 
        word: "el pan", 
        definition: "The bread", 
        synonyms: "", 
        example: "El pan está fresco.\nThe bread is fresh." 
    },
    { 
        id: 222, 
        word: "el queso", 
        definition: "The cheese", 
        synonyms: "", 
        example: "Los quesos de esta región son salados.\nThe cheeses from this region are salty." 
    },
    { 
        id: 223, 
        word: "la carne", 
        definition: "The meat", 
        synonyms: "", 
        example: "La carne es roja.\nThe meat is red." 
    },
    { 
        id: 224, 
        word: "el pollo", 
        definition: "The chicken", 
        synonyms: "", 
        example: "Los pollos corren en la granja.\nThe chickens run on the farm." 
    },
    { 
        id: 225, 
        word: "el pescado", 
        definition: "The fish (food)", 
        synonyms: "", 
        example: "El pescado es una comida sana.\nThe fish is a healthy food." 
    },
    { 
        id: 226, 
        word: "el arroz", 
        definition: "The rice", 
        synonyms: "", 
        example: "El arroz es el alimento básico.\nThe rice is the basic food." 
    },
    { 
        id: 227, 
        word: "la pasta", 
        definition: "The pasta", 
        synonyms: "", 
        example: "Las pastas son fáciles de cocinar.\nThe pastas are easy to cook." 
    },
    { 
        id: 228, 
        word: "la sopa", 
        definition: "The soup", 
        synonyms: "", 
        example: "La sopa está caliente.\nThe soup is hot." 
    },
    { 
        id: 229, 
        word: "la ensalada", 
        definition: "The salad", 
        synonyms: "", 
        example: "Las ensaladas tienen muchos colores.\nThe salads have many colors." 
    },
    { 
        id: 230, 
        word: "el huevo", 
        definition: "The egg", 
        synonyms: "", 
        example: "Los huevos son una buena fuente de proteína.\nThe eggs are a good source of protein." 
    },
    { 
        id: 231, 
        word: "el azúcar", 
        definition: "The sugar", 
        synonyms: "", 
        example: "El azúcar es dulce.\nThe sugar is sweet." 
    },
    { 
        id: 232, 
        word: "la sal", 
        definition: "The salt", 
        synonyms: "", 
        example: "La sal da sabor a la comida.\nThe salt gives flavor to the food." 
    },
    { 
        id: 233, 
        word: "el aceite", 
        definition: "The oil (cooking)", 
        synonyms: "", 
        example: "El aceite está en la botella.\nThe oil is in the bottle." 
    },
    { 
        id: 234, 
        word: "la mantequilla", 
        definition: "The butter", 
        synonyms: "", 
        example: "La mantequilla es amarilla.\nThe butter is yellow." 
    },
    { 
        id: 235, 
        word: "el postre", 
        definition: "The dessert", 
        synonyms: "", 
        example: "Los postres son mi parte favorita.\nDesserts are my favorite part." 
    },
    { 
        id: 236, 
        word: "el helado", 
        definition: "The ice cream", 
        synonyms: "", 
        example: "El helado es frío.\nThe ice cream is cold." 
    },
    { 
        id: 237, 
        word: "la pizza", 
        definition: "The pizza", 
        synonyms: "", 
        example: "Las pizzas tienen mucho queso.\nThe pizzas have a lot of cheese." 
    },
    { 
        id: 238, 
        word: "la hamburguesa", 
        definition: "The hamburger", 
        synonyms: "", 
        example: "La hamburguesa es grande.\nThe hamburger is big." 
    },
    { 
        id: 239, 
        word: "el bocadillo", 
        definition: "The sandwich", 
        synonyms: "", 
        example: "Los bocadillos son rápidos.\nThe sandwiches are quick." 
    },
    { 
        id: 240, 
        word: "la bebida", 
        definition: "The drink", 
        synonyms: "", 
        example: "Las bebidas están frías.\nThe drinks are cold." 
    },
    { 
        id: 241, 
        word: "el agua", 
        definition: "The water", 
        synonyms: "", 
        example: "El agua es importante.\nThe water is important." 
    },
    { 
        id: 242, 
        word: "el café", 
        definition: "The coffee", 
        synonyms: "", 
        example: "Los cafés se preparan con leche.\nThe coffees (drinks) are prepared with milk." 
    },
    { 
        id: 243, 
        word: "el té", 
        definition: "The tea", 
        synonyms: "", 
        example: "El té está muy caliente.\nThe tea is very hot." 
    },
    { 
        id: 244, 
        word: "la leche", 
        definition: "The milk", 
        synonyms: "", 
        example: "La leche es blanca.\nThe milk is white." 
    },
    { 
        id: 245, 
        word: "el zumo / el jugo", 
        definition: "The juice", 
        synonyms: "", 
        example: "Los zumos son dulces.\nThe juices are sweet." 
    },
    { 
        id: 246, 
        word: "el vino", 
        definition: "The wine", 
        synonyms: "", 
        example: "El vino es rojo o blanco.\nThe wine is red or white." 
    },
    { 
        id: 247, 
        word: "la cerveza", 
        definition: "The beer", 
        synonyms: "", 
        example: "La cerveza es popular aquí.\nThe beer is popular here." 
    },
    { 
        id: 248, 
        word: "el refresco", 
        definition: "The soda / soft drink", 
        synonyms: "", 
        example: "Los refrescos no son saludables.\nThe soft drinks are not healthy." 
    },
    { 
        id: 249, 
        word: "el coctel", 
        definition: "The cocktail", 
        synonyms: "", 
        example: "El coctel es delicioso.\nThe cocktail is delicious." 
    },
    { 
        id: 250, 
        word: "las ocupaciones", 
        definition: "The occupations", 
        synonyms: "", 
        example: "Las ocupaciones son muy diversas.\nThe occupations are very diverse." 
    },
    { 
        id: 251, 
        word: "el doctor / la doctora", 
        definition: "The doctor (male/female)", 
        synonyms: "", 
        example: "Los doctores trabajan mucho.\nThe doctors work a lot." 
    },
    { 
        id: 252, 
        word: "el profesor / la profesora", 
        definition: "The teacher (male/female)", 
        synonyms: "", 
        example: "La profesora enseña español.\nThe teacher teaches Spanish." 
    },
    { 
        id: 253, 
        word: "el estudiante / la estudiante", 
        definition: "The student (male/female)", 
        synonyms: "", 
        example: "Los estudiantes leen libros.\nThe students read books." 
    },
    { 
        id: 254, 
        word: "el ingeniero / la ingeniera", 
        definition: "The engineer (male/female)", 
        synonyms: "", 
        example: "El ingeniero construye casas.\nThe engineer builds houses." 
    },
    { 
        id: 255, 
        word: "el chef / la chef", 
        definition: "The chef (male/female)", 
        synonyms: "", 
        example: "Los chefs cocinan bien.\nThe chefs cook well." 
    },
    { 
        id: 256, 
        word: "el cantante / la cantante", 
        definition: "The singer (male/female)", 
        synonyms: "", 
        example: "La cantante tiene buena voz.\nThe singer has a good voice." 
    },
    { 
        id: 257, 
        word: "el policía / la policía", 
        definition: "The police officer (male/female)", 
        synonyms: "", 
        example: "Los policías mantienen el orden.\nThe police officers maintain order." 
    },
    { 
        id: 258, 
        word: "el periodista / la periodista", 
        definition: "The journalist (male/female)", 
        synonyms: "", 
        example: "El periodista escribe noticias.\nThe journalist writes news." 
    },
    { 
        id: 259, 
        word: "el artista / la artista", 
        definition: "The artist (male/female)", 
        synonyms: "", 
        example: "Los artistas usan muchos colores.\nThe artists use many colors." 
    },
    { 
        id: 260, 
        word: "el vendedor / la vendedora", 
        definition: "The salesperson (male/female)", 
        synonyms: "", 
        example: "La vendedora ofrece ayuda.\nThe salesperson offers help." 
    },
    { 
        id: 261, 
        word: "el mecánico / la mecánica", 
        definition: "The mechanic (male/female)", 
        synonyms: "", 
        example: "El mecánico repara coches.\nThe mechanic repairs cars." 
    },
    { 
        id: 262, 
        word: "el enfermero / la enfermera", 
        definition: "The nurse (male/female)", 
        synonyms: "", 
        example: "Las enfermeras ayudan a los enfermos.\nThe nurses help the sick." 
    },
    { 
        id: 263, 
        word: "el fotógrafo / la fotógrafa", 
        definition: "The photographer (male/female)", 
        synonyms: "", 
        example: "El fotógrafo toma fotos.\nThe photographer takes photos." 
    },
    { 
        id: 264, 
        word: "el piloto / la piloto", 
        definition: "The pilot (male/female)", 
        synonyms: "", 
        example: "Los pilotos vuelan aviones.\nThe pilots fly planes." 
    },
    { 
        id: 265, 
        word: "el arquitecto / la arquitecta", 
        definition: "The architect (male/female)", 
        synonyms: "", 
        example: "Los arquitectos diseñan edificios.\nThe architects design buildings." 
    },
    { 
        id: 266, 
        word: "el camarero / la camarera", 
        definition: "The waiter / The waitress", 
        synonyms: "", 
        example: "La camarera sirve la comida.\nThe waitress serves the food." 
    },
    { 
        id: 267, 
        word: "el abogado / la abogada", 
        definition: "The lawyer (male/female)", 
        synonyms: "", 
        example: "El abogado defiende al cliente.\nThe lawyer defends the client." 
    },
    { 
        id: 268, 
        word: "el bombero / la bombera", 
        definition: "The firefighter (male/female)", 
        synonyms: "", 
        example: "Los bomberos apagan el fuego.\nThe firefighters put out the fire." 
    },
    { 
        id: 269, 
        word: "el granjero / la granjera", 
        definition: "The farmer (male/female)", 
        synonyms: "", 
        example: "La granjera cultiva frutas.\nThe farmer (f.) grows fruits." 
    },
    { 
        id: 270, 
        word: "la ropa", 
        definition: "The clothes (collective noun)", 
        synonyms: "", 
        example: "La ropa está limpia y doblada.\nThe clothes are clean and folded." 
    },
    { 
        id: 271, 
        word: "la camisa", 
        definition: "The shirt (button-down)", 
        synonyms: "", 
        example: "Las camisas son de algodón.\nThe shirts are cotton." 
    },
    { 
        id: 272, 
        word: "la camiseta", 
        definition: "The t-shirt", 
        synonyms: "", 
        example: "La camiseta es azul.\nThe t-shirt is blue." 
    },
    { 
        id: 273, 
        word: "el pantalón", 
        definition: "The pants / trousers", 
        synonyms: "", 
        example: "Los pantalones son nuevos.\nThe pants are new." 
    },
    { 
        id: 274, 
        word: "el vestido", 
        definition: "The dress", 
        synonyms: "", 
        example: "El vestido es largo y elegante.\nThe dress is long and elegant." 
    },
    { 
        id: 275, 
        word: "la falda", 
        definition: "The skirt", 
        synonyms: "", 
        example: "La falda es corta.\nThe skirt is short." 
    },
    { 
        id: 276, 
        word: "el zapato", 
        definition: "The shoe", 
        synonyms: "", 
        example: "Los zapatos son cómodos.\nThe shoes are comfortable." 
    },
    { 
        id: 277, 
        word: "la chaqueta", 
        definition: "The jacket", 
        synonyms: "", 
        example: "La chaqueta es de cuero.\nThe jacket is leather." 
    },
    { 
        id: 278, 
        word: "el abrigo", 
        definition: "The coat", 
        synonyms: "", 
        example: "El abrigo es grueso para el invierno.\nThe coat is thick for the winter." 
    },
    { 
        id: 279, 
        word: "el calcetín", 
        definition: "The sock", 
        synonyms: "", 
        example: "Los calcetines son de lana.\nThe socks are wool." 
    },
    { 
        id: 280, 
        word: "el sombrero", 
        definition: "The hat", 
        synonyms: "", 
        example: "El sombrero es grande.\nThe hat is big." 
    },
    { 
        id: 281, 
        word: "la gorra", 
        definition: "The cap", 
        synonyms: "", 
        example: "Las gorras son rojas.\nThe caps are red." 
    },
    { 
        id: 282, 
        word: "el traje", 
        definition: "The suit", 
        synonyms: "", 
        example: "El traje es de color gris.\nThe suit is gray." 
    },
    { 
        id: 283, 
        word: "el bañador", 
        definition: "The swimsuit", 
        synonyms: "", 
        example: "Los bañadores están secos.\nThe swimsuits are dry." 
    },
    { 
        id: 284, 
        word: "la bufanda", 
        definition: "The scarf", 
        synonyms: "", 
        example: "La bufanda es de seda.\nThe scarf is silk." 
    },
    { 
        id: 285, 
        word: "las gafas", 
        definition: "The glasses / spectacles", 
        synonyms: "", 
        example: "Las gafas son necesarias para leer.\nThe glasses are necessary for reading." 
    },
    { 
        id: 286, 
        word: "los guantes", 
        definition: "The gloves", 
        synonyms: "", 
        example: "Los guantes son negros.\nThe gloves are black." 
    },
    { 
        id: 287, 
        word: "las partes del cuerpo", 
        definition: "Body parts", 
        synonyms: "", 
        example: "Las partes del cuerpo son vitales.\nThe body parts are vital." 
    },
    { 
        id: 288, 
        word: "la cabeza", 
        definition: "The head", 
        synonyms: "", 
        example: "Mi cabeza duele un poco.\nMy head hurts a little." 
    },
    { 
        id: 289, 
        word: "el brazo", 
        definition: "The arm", 
        synonyms: "", 
        example: "Los brazos son fuertes.\nThe arms are strong." 
    },
    { 
        id: 290, 
        word: "la mano", 
        definition: "The hand", 
        synonyms: "", 
        example: "Mis manos están frías.\nMy hands are cold." 
    },
    { 
        id: 291, 
        word: "el dedo", 
        definition: "The finger / toe", 
        synonyms: "", 
        example: "Los dedos se mueven rápido.\nThe fingers move fast." 
    },
    { 
        id: 292, 
        word: "la pierna", 
        definition: "The leg", 
        synonyms: "", 
        example: "La pierna es larga.\nThe leg is long." 
    },
    { 
        id: 293, 
        word: "el pie", 
        definition: "The foot", 
        synonyms: "", 
        example: "Los pies tocan el suelo.\nThe feet touch the floor." 
    },
    { 
        id: 294, 
        word: "el ojo", 
        definition: "The eye", 
        synonyms: "", 
        example: "Mis ojos ven bien.\nMy eyes see well." 
    },
    { 
        id: 295, 
        word: "la oreja", 
        definition: "The ear", 
        synonyms: "", 
        example: "La oreja escucha la música.\nThe ear listens to the music." 
    },
    { 
        id: 296, 
        word: "la nariz", 
        definition: "The nose", 
        synonyms: "", 
        example: "Tu nariz es pequeña.\nYour nose is small." 
    },
    { 
        id: 297, 
        word: "los órganos", 
        definition: "The organs", 
        synonyms: "", 
        example: "Los órganos principales funcionan juntos.\nThe main organs function together." 
    },
    { 
        id: 298, 
        word: "el corazón", 
        definition: "The heart", 
        synonyms: "", 
        example: "El corazón late muy rápido.\nThe heart beats very fast." 
    },
    { 
        id: 299, 
        word: "el pulmón", 
        definition: "The lung", 
        synonyms: "", 
        example: "Los pulmones son necesarios para respirar.\nThe lungs are necessary for breathing." 
    },
    { 
        id: 300, 
        word: "el estómago", 
        definition: "The stomach", 
        synonyms: "", 
        example: "El estómago digiere la comida.\nThe stomach digests the food." 
    },{ 
        id: 301, 
        word: "el cerebro", 
        definition: "The brain", 
        synonyms: "", 
        example: "El cerebro piensa y aprende.\nThe brain thinks and learns." 
    },
    { 
        id: 302, 
        word: "el hígado", 
        definition: "The liver", 
        synonyms: "", 
        example: "El hígado limpia la sangre.\nThe liver cleans the blood." 
    },
    { 
        id: 303, 
        word: "el riñón", 
        definition: "The kidney", 
        synonyms: "", 
        example: "Los riñones filtran el agua.\nThe kidneys filter the water." 
    },
    { 
        id: 304, 
        word: "el intestino", 
        definition: "The intestine", 
        synonyms: "", 
        example: "Los intestinos absorben nutrientes.\nThe intestines absorb nutrients." 
    },
    { 
        id: 305, 
        word: "el músculo", 
        definition: "The muscle", 
        synonyms: "", 
        example: "Los músculos mueven el cuerpo.\nThe muscles move the body." 
    },
    { 
        id: 306, 
        word: "el hueso", 
        definition: "The bone", 
        synonyms: "", 
        example: "Los huesos son muy duros.\nThe bones are very hard." 
    },
    { 
        id: 307, 
        word: "la piel", 
        definition: "The skin (largest organ)", 
        synonyms: "", 
        example: "La piel protege el cuerpo.\nThe skin protects the body." 
    },
    { 
        id: 308, 
        word: "los adjetivos", 
        definition: "The Adjectives", 
        synonyms: "las cualidades", 
        example: "Los adjetivos describen nombres.\nThe adjectives describe nouns." 
    },
    { 
        id: 309, 
        word: "grande", 
        definition: "Big, large", 
        synonyms: "amplio", 
        example: "Las casas son grandes.\nThe houses are big." 
    },
    { 
        id: 310, 
        word: "pequeño", 
        definition: "Small, little", 
        synonyms: "chico", 
        example: "El gato es pequeño.\nThe cat is small." 
    },
    { 
        id: 311, 
        word: "bueno", 
        definition: "Good", 
        synonyms: "excelente", 
        example: "Los días son buenos.\nThe days are good." 
    },
    { 
        id: 312, 
        word: "malo", 
        definition: "Bad", 
        synonyms: "pésimo", 
        example: "La comida es mala.\nThe food is bad." 
    },
    { 
        id: 313, 
        word: "fácil", 
        definition: "Easy", 
        synonyms: "sencillo", 
        example: "Los exámenes son fáciles.\nThe exams are easy." 
    },
    { 
        id: 314, 
        word: "difícil", 
        definition: "Difficult", 
        synonyms: "complicado", 
        example: "La lección es difícil.\nThe lesson is difficult." 
    },
    { 
        id: 315, 
        word: "nuevo", 
        definition: "New", 
        synonyms: "reciente", 
        example: "El coche es nuevo.\nThe car is new." 
    },
    { 
        id: 316, 
        word: "viejo", 
        definition: "Old", 
        synonyms: "antiguo", 
        example: "Las sillas son viejas.\nThe chairs are old." 
    },
    { 
        id: 317, 
        word: "feliz", 
        definition: "Happy", 
        synonyms: "contento", 
        example: "Los niños están felices.\nThe children are happy." 
    },
    { 
        id: 318, 
        word: "triste", 
        definition: "Sad", 
        synonyms: "deprimido", 
        example: "La chica está triste.\nThe girl is sad." 
    },
    { 
        id: 319, 
        word: "alto", 
        definition: "Tall, high", 
        synonyms: "elevado", 
        example: "Las montañas son altas.\nThe mountains are tall." 
    },
    { 
        id: 320, 
        word: "bajo", 
        definition: "Short, low", 
        synonyms: "corto", 
        example: "El edificio es bajo.\nThe building is low." 
    },
    { 
        id: 321, 
        word: "bonito", 
        definition: "Pretty, beautiful", 
        synonyms: "hermoso", 
        example: "Las flores son bonitas.\nThe flowers are pretty." 
    },
    { 
        id: 322, 
        word: "feo", 
        definition: "Ugly", 
        synonyms: "horrible", 
        example: "El color es feo.\nThe color is ugly." 
    },
    { 
        id: 323, 
        word: "rápido", 
        definition: "Fast, quick", 
        synonyms: "veloz", 
        example: "Los aviones son rápidos.\nThe airplanes are fast." 
    },
    { 
        id: 324, 
        word: "lento", 
        definition: "Slow", 
        synonyms: "despacio", 
        example: "La tortuga es lenta.\nThe turtle is slow." 
    },
    { 
        id: 325, 
        word: "fuerte", 
        definition: "Strong", 
        synonyms: "robusto", 
        example: "Los brazos son fuertes.\The arms are strong." 
    },
    { 
        id: 326, 
        word: "débil", 
        definition: "Weak", 
        synonyms: "frágil", 
        example: "El bebé es débil.\nThe baby is weak." 
    },
    { 
        id: 327, 
        word: "limpio", 
        definition: "Clean", 
        synonyms: "inmaculado", 
        example: "Las manos están limpias.\The hands are clean." 
    },
    { 
        id: 328, 
        word: "sucio", 
        definition: "Dirty", 
        synonyms: "manchado", 
        example: "El plato está sucio.\The plate is dirty." 
    },
    { 
        id: 329, 
        word: "caliente", 
        definition: "Hot", 
        synonyms: "cálido", 
        example: "El café está caliente.\The coffee is hot." 
    },
    { 
        id: 330, 
        word: "frío", 
        definition: "Cold", 
        synonyms: "helado", 
        example: "Las bebidas están frías.\The drinks are cold." 
    },
    { 
        id: 331, 
        word: "interesante", 
        definition: "Interesting", 
        synonyms: "atractivo", 
        example: "La película es interesante.\The movie is interesting." 
    },
    { 
        id: 332, 
        word: "aburrido", 
        definition: "Boring", 
        synonyms: "tedioso", 
        example: "Los libros son aburridos.\The books are boring." 
    },
    { 
        id: 333, 
        word: "verdadero", 
        definition: "True", 
        synonyms: "cierto", 
        example: "La historia es verdadera.\nThe story is true." 
    },
    { 
        id: 334, 
        word: "falso", 
        definition: "False", 
        synonyms: "erróneo", 
        example: "Los comentarios son falsos.\nThe comments are false." 
    },
    { 
        id: 335, 
        word: "corto", 
        definition: "Short (length)", 
        synonyms: "breve", 
        example: "El pantalón es corto.\nThe pants are short." 
    },
    { 
        id: 336, 
        word: "largo", 
        definition: "Long", 
        synonyms: "extenso", 
        example: "Las piernas son largas.\nThe legs are long." 
    },
    { 
        id: 337, 
        word: "gratis", 
        definition: "Free (no cost)", 
        synonyms: "libre", 
        example: "Las entradas son gratis.\nThe tickets are free." 
    },
    { 
        id: 338, 
        word: "lleno", 
        definition: "Full", 
        synonyms: "repleto", 
        example: "El vaso está lleno.\nThe glass is full." 
    },
    { 
        id: 339, 
        word: "vacío", 
        definition: "Empty", 
        synonyms: "hueco", 
        example: "Las botellas están vacías.\nThe bottles are empty." 
    },
    { 
        id: 340, 
        word: "amable", 
        definition: "Kind, nice", 
        synonyms: "cordial", 
        example: "La gente es amable.\The people are kind." 
    },
    { 
        id: 341, 
        word: "inteligente", 
        definition: "Intelligent", 
        synonyms: "listo", 
        example: "Los estudiantes son inteligentes.\nThe students are intelligent." 
    },
    { 
        id: 342, 
        word: "loca", 
        definition: "Crazy", 
        synonyms: "chiflada", 
        example: "La idea es loca.\The idea is crazy." 
    },
    { 
        id: 343, 
        word: "normal", 
        definition: "Normal", 
        synonyms: "regular", 
        example: "Los días son normales.\nThe days are normal." 
    },
    { 
        id: 344, 
        word: "útil", 
        definition: "Useful", 
        synonyms: "servicial", 
        example: "Las herramientas son útiles.\nThe tools are useful." 
    },
    { 
        id: 345, 
        word: "inútil", 
        definition: "Useless", 
        synonyms: "ineficaz", 
        example: "El objeto es inútil.\The object is useless." 
    },
    { 
        id: 346, 
        word: "profundo", 
        definition: "Deep", 
        synonyms: "hondo", 
        example: "Los lagos son profundos.\The lakes are deep." 
    },
    { 
        id: 347, 
        word: "superficial", 
        definition: "Shallow, superficial", 
        synonyms: "bajo", 
        example: "El mar es superficial aquí.\nThe sea is shallow here." 
    },
    { 
        id: 348, 
        word: "pesado", 
        definition: "Heavy", 
        synonyms: "grueso", 
        example: "Las cajas son pesadas.\The boxes are heavy." 
    },
    { 
        id: 349, 
        word: "ligero", 
        definition: "Light (weight)", 
        synonyms: "leve", 
        example: "El papel es ligero.\nThe paper is light." 
    },
    { 
        id: 350, 
        word: "ancho", 
        definition: "Wide", 
        synonyms: "amplio", 
        example: "Las calles son anchas.\nThe streets are wide." 
    },
    { 
        id: 351, 
        word: "estrecho", 
        definition: "Narrow", 
        synonyms: "pequeño", 
        example: "El camino es estrecho.\nThe road is narrow." 
    },
    { 
        id: 352, 
        word: "cortés", 
        definition: "Polite", 
        synonyms: "respetuoso", 
        example: "La camarera es cortés.\nThe waitress is polite." 
    },
    { 
        id: 353, 
        word: "maleducado", 
        definition: "Rude", 
        synonyms: "grosero", 
        example: "Los niños son maleducados.\nThe children are rude." 
    },
    { 
        id: 354, 
        word: "seco", 
        definition: "Dry", 
        synonyms: "árido", 
        example: "El suelo está seco.\The floor is dry." 
    },
    { 
        id: 355, 
        word: "mojado", 
        definition: "Wet", 
        synonyms: "húmedo", 
        example: "La ropa está mojada.\nThe clothes are wet." 
    },
    { 
        id: 356, 
        word: "claro", 
        definition: "Clear, light (color)", 
        synonyms: "luminoso", 
        example: "El agua es clara.\nThe water is clear." 
    },
    { 
        id: 357, 
        word: "oscuro", 
        definition: "Dark", 
        synonyms: "sombrío", 
        example: "Las noches son oscuras.\nThe nights are dark." 
    },
    { 
        id: 358, 
        word: "tranquilo", 
        definition: "Calm, quiet", 
        synonyms: "quieto", 
        example: "El lugar es tranquilo.\nThe place is calm." 
    },
    { 
        id: 359, 
        word: "ruidoso", 
        definition: "Noisy", 
        synonyms: "bulicioso", 
        example: "Los bares son ruidosos.\nThe bars are noisy." 
    },
    { 
        id: 360, 
        word: "cómodo", 
        definition: "Comfortable", 
        synonyms: "agradable", 
        example: "Los zapatos son cómodos.\nThe shoes are comfortable." 
    },
    { 
        id: 361, 
        word: "incómodo", 
        definition: "Uncomfortable", 
        synonyms: "molesto", 
        example: "La silla es incómoda.\nThe chair is uncomfortable." 
    },
    { 
        id: 362, 
        word: "sabroso", 
        definition: "Tasty, delicious", 
        synonyms: "rico", 
        example: "Las frutas son sabrosas.\nThe fruits are tasty." 
    },
    { 
        id: 363, 
        word: "asqueroso", 
        definition: "Disgusting", 
        synonyms: "repugnante", 
        example: "El olor es asqueroso.\nThe smell is disgusting." 
    },
    { 
        id: 364, 
        word: "necesario", 
        definition: "Necessary", 
        synonyms: "imprescindible", 
        example: "Los documentos son necesarios.\nThe documents are necessary." 
    },
    { 
        id: 365, 
        word: "posible", 
        definition: "Possible", 
        synonyms: "factible", 
        example: "La solución es posible.\nThe solution is possible." 
    },
    { 
        id: 366, 
        word: "imposible", 
        definition: "Impossible", 
        synonyms: "inalcanzable", 
        example: "Los cambios son imposibles.\nThe changes are impossible." 
    },
    { 
        id: 367, 
        word: "honesto", 
        definition: "Honest", 
        synonyms: "sincero", 
        example: "Los amigos son honestos.\nThe friends are honest." 
    },
    { 
        id: 368, 
        word: "deshonesto", 
        definition: "Dishonest", 
        synonyms: "mentiroso", 
        example: "El vendedor es deshonesto.\nThe seller is dishonest." 
    },
    { 
        id: 369, 
        word: "activo", 
        definition: "Active", 
        synonyms: "enérgico", 
        example: "Los atletas son activos.\nThe athletes are active." 
    },
    { 
        id: 370, 
        word: "pasivo", 
        definition: "Passive", 
        synonyms: "inerte", 
        example: "La gente es pasiva.\nThe people are passive." 
    },
    { 
        id: 371, 
        word: "cierto", 
        definition: "Certain, true", 
        synonyms: "seguro", 
        example: "La respuesta es cierta.\nThe answer is certain." 
    },
    { 
        id: 372, 
        word: "claro", 
        definition: "Clear, obvious", 
        synonyms: "obvio", 
        example: "Las instrucciones son claras.\nThe instructions are clear." 
    },
    { 
        id: 373, 
        word: "dulce", 
        definition: "Sweet", 
        synonyms: "azucarado", 
        example: "Los pasteles son dulces.\nThe cakes are sweet." 
    },
    { 
        id: 374, 
        word: "salado", 
        definition: "Salty", 
        synonyms: "salobre", 
        example: "El pescado es salado.\nThe fish is salty." 
    },
    { 
        id: 375, 
        word: "amargo", 
        definition: "Bitter", 
        synonyms: "ácido", 
        example: "El chocolate es amargo.\nThe chocolate is bitter." 
    },
    { 
        id: 376, 
        word: "picante", 
        definition: "Spicy", 
        synonyms: "chiloso", 
        example: "Las salsas son picantes.\nThe sauces are spicy." 
    },
    { 
        id: 377, 
        word: "divertido", 
        definition: "Fun", 
        synonyms: "alegre", 
        example: "Los juegos son divertidos.\nThe games are fun." 
    },
    { 
        id: 378, 
        word: "peligroso", 
        definition: "Dangerous", 
        synonyms: "arriesgado", 
        example: "El camino es peligroso.\nThe road is dangerous." 
    },
    { 
        id: 379, 
        word: "seguro", 
        definition: "Safe", 
        synonyms: "a salvo", 
        example: "Las ciudades son seguras.\nThe cities are safe." 
    },
    { 
        id: 380, 
        word: "perfecto", 
        definition: "Perfect", 
        synonyms: "ideal", 
        example: "La hora es perfecta.\nThe time is perfect." 
    },
    { 
        id: 381, 
        word: "imperfecto", 
        definition: "Imperfect", 
        synonyms: "defectuoso", 
        example: "Los resultados son imperfectos.\nThe results are imperfect." 
    },
    { 
        id: 382, 
        word: "famoso", 
        definition: "Famous", 
        synonyms: "célebre", 
        example: "Los actores son famosos.\nThe actors are famous." 
    },
    { 
        id: 383, 
        word: "desconocido", 
        definition: "Unknown", 
        synonyms: "ignorado", 
        example: "El lugar es desconocido.\nThe place is unknown." 
    },
    { 
        id: 384, 
        word: "creativo", 
        definition: "Creative", 
        synonyms: "imaginativo", 
        example: "Las ideas son creativas.\nThe ideas are creative." 
    },
    { 
        id: 385, 
        word: "simple", 
        definition: "Simple", 
        synonyms: "sencillo", 
        example: "La tarea es simple.\nThe task is simple." 
    },
    { 
        id: 386, 
        word: "complejo", 
        definition: "Complex", 
        synonyms: "difícil", 
        example: "Los problemas son complejos.\nThe problems are complex." 
    },
    { 
        id: 387, 
        word: "único", 
        definition: "Unique", 
        synonyms: "excepcional", 
        example: "El anillo es único.\nThe ring is unique." 
    },
    { 
        id: 388, 
        word: "común", 
        definition: "Common", 
        synonyms: "habitual", 
        example: "Las palabras son comunes.\nThe words are common." 
    },
    { 
        id: 389, 
        word: "fugaz", 
        definition: "Fleeting", 
        synonyms: "efímero", 
        example: "La felicidad es fugaz.\nThe happiness is fleeting." 
    },
    { 
        id: 390, 
        word: "temporal", 
        definition: "Temporary", 
        synonyms: "provisional", 
        example: "Las estructuras son temporales.\nThe structures are temporary." 
    },
    { 
        id: 391, 
        word: "permanente", 
        definition: "Permanent", 
        synonyms: "duradero", 
        example: "El cambio es permanente.\nThe change is permanent." 
    },
    { 
        id: 392, 
        word: "responsable", 
        definition: "Responsible", 
        synonyms: "culpable", 
        example: "Los estudiantes son responsables.\nThe students are responsible." 
    },
    { 
        id: 393, 
        word: "los adverbios", 
        definition: "The Adverbs", 
        synonyms: "las circunstancias", 
        example: "Los adverbios modifican verbos.\nThe adverbs modify verbs." 
    },
    { 
        id: 394, 
        word: "ahora", 
        definition: "Now", 
        synonyms: "ya mismo", 
        example: "Vienen ahora .\nThey are coming now." 
    },
    { 
        id: 395, 
        word: "hoy", 
        definition: "Today", 
        synonyms: "este día", 
        example: "Trabajo hoy .\nI work today." 
    },
    { 
        id: 396, 
        word: "mañana", 
        definition: "Tomorrow", 
        synonyms: "el día siguiente", 
        example: "Viajamos mañana .\nWe travel tomorrow." 
    },
    { 
        id: 397, 
        word: "ayer", 
        definition: "Yesterday", 
        synonyms: "el día anterior", 
        example: "Ayer es el día pasado.\nYesterday is the past day." 
    },
    { 
        id: 398, 
        word: "siempre", 
        definition: "Always", 
        synonyms: "eternamente", 
        example: "Él estudia siempre .\nHe always studies." 
    },
    { 
        id: 399, 
        word: "nunca", 
        definition: "Never", 
        synonyms: "jamás", 
        example: "Ella nunca come carne.\nShe never eats meat." 
    },
    { 
        id: 400, 
        word: "tarde", 
        definition: "Late", 
        synonyms: "después de hora", 
        example: "Llegamos tarde .\nWe arrive late." 
    },{ 
        id: 401, 
        word: "temprano", 
        definition: "Early", 
        synonyms: "pronto", 
        example: "Salgo temprano.\nI leave early." 
    },
    { 
        id: 402, 
        word: "aquí", 
        definition: "Here", 
        synonyms: "acá", 
        example: "Esperamos aquí.\nWe wait here." 
    },
    { 
        id: 403, 
        word: "allí", 
        definition: "There (far)", 
        synonyms: "allá", 
        example: "Los libros están allí.\nThe books are there." 
    },
    { 
        id: 404, 
        word: "cerca", 
        definition: "Near, close", 
        synonyms: "próximo", 
        example: "Vivimos cerca.\nWe live close by." 
    },
    { 
        id: 405, 
        word: "lejos", 
        definition: "Far", 
        synonyms: "distante", 
        example: "La escuela está lejos.\nThe school is far." 
    },
    { 
        id: 406, 
        word: "dentro", 
        definition: "Inside", 
        synonyms: "adentro", 
        example: "El perro está dentro.\nThe dog is inside." 
    },
    { 
        id: 407, 
        word: "fuera", 
        definition: "Outside", 
        synonyms: "afuera", 
        example: "Los niños juegan fuera.\nThe children play outside." 
    },
    { 
        id: 408, 
        word: "bien", 
        definition: "Well", 
        synonyms: "correctamente", 
        example: "Ella canta bien.\nShe sings well." 
    },
    { 
        id: 409, 
        word: "mal", 
        definition: "Badly", 
        synonyms: "erróneamente", 
        example: "Él dibuja mal.\nHe draws badly." 
    },
    { 
        id: 410, 
        word: "despacio", 
        definition: "Slowly", 
        synonyms: "lentamente", 
        example: "Hablamos despacio.\nWe speak slowly." 
    },
    { 
        id: 411, 
        word: "rápidamente", 
        definition: "Quickly", 
        synonyms: "velozmente", 
        example: "Caminamos rápidamente.\nWe walk quickly." 
    },
    { 
        id: 412, 
        word: "mucho", 
        definition: "Much, a lot", 
        synonyms: "bastante", 
        example: "Ella come mucho.\nShe eats a lot." 
    },
    { 
        id: 413, 
        word: "poco", 
        definition: "Little, few", 
        synonyms: "escaso", 
        example: "Él bebe poco.\nHe drinks little." 
    },
    { 
        id: 414, 
        word: "más", 
        definition: "More", 
        synonyms: "además", 
        example: "Quiero más pan.\nI want more bread." 
    },
    { 
        id: 415, 
        word: "menos", 
        definition: "Less", 
        synonyms: "inferior", 
        example: "Necesitamos menos azúcar.\nWe need less sugar." 
    },
    { 
        id: 416, 
        word: "muy", 
        definition: "Very", 
        synonyms: "bastante", 
        example: "Es muy difícil.\nIt is very difficult." 
    },
    { 
        id: 417, 
        word: "sí", 
        definition: "Yes, indeed", 
        synonyms: "afirmativamente", 
        example: "Sí trabajamos.\nYes, we work." 
    },
    { 
        id: 418, 
        word: "no", 
        definition: "No", 
        synonyms: "negativamente", 
        example: "Yo no fumo.\nI do not smoke." 
    },
    { 
        id: 419, 
        word: "también", 
        definition: "Also, too", 
        synonyms: "asimismo", 
        example: "Yo voy también.\nI am going too." 
    },
    { 
        id: 420, 
        word: "tampoco", 
        definition: "Neither, either", 
        synonyms: "ni siquiera", 
        example: "Ellos tampoco vienen.\nThey aren't coming either." 
    },
    { 
        id: 421, 
        word: "acaso", 
        definition: "Perhaps, maybe", 
        synonyms: "tal vez", 
        example: "Acaso viene mañana.\nPerhaps he comes tomorrow." 
    },
    { 
        id: 422, 
        word: "aún", 
        definition: "Still, yet", 
        synonyms: "todavía", 
        example: "El tren aún no llega.\nThe train still does not arrive." 
    },
    { 
        id: 423, 
        word: "ya", 
        definition: "Already, now", 
        synonyms: "ahora mismo", 
        example: "Ya comemos la cena.\nWe already eat dinner." 
    },
    { 
        id: 424, 
        word: "todavía", 
        definition: "Still, yet (alternate)", 
        synonyms: "aún", 
        example: "Todavía leo este libro.\nI am still reading this book." 
    },
    { 
        id: 425, 
        word: "de pronto", 
        definition: "Suddenly", 
        synonyms: "repentinamente", 
        example: "De pronto abren la puerta.\nSuddenly they open the door." 
    },
    { 
        id: 426, 
        word: "luego", 
        definition: "Then, later", 
        synonyms: "después", 
        example: "Hablamos luego.\nWe talk later." 
    },
    { 
        id: 427, 
        word: "después", 
        definition: "After, afterwards", 
        synonyms: "posteriormente", 
        example: "Vienes después.\nYou come afterwards." 
    },
    { 
        id: 428, 
        word: "encima", 
        definition: "On top, above", 
        synonyms: "arriba", 
        example: "El libro está encima.\nThe book is on top." 
    },
    { 
        id: 429, 
        word: "abajo", 
        definition: "Down, below", 
        synonyms: "debajo", 
        example: "La llave está abajo.\nThe key is below." 
    },
    { 
        id: 430, 
        word: "adelante", 
        definition: "Forward", 
        synonyms: "en frente", 
        example: "Mira siempre adelante.\nHe always looks forward." 
    },
    { 
        id: 431, 
        word: "atrás", 
        definition: "Back, behind", 
        synonyms: "detrás", 
        example: "El perro corre atrás.\nThe dog runs behind." 
    },
    { 
        id: 432, 
        word: "así", 
        definition: "Like this, thus", 
        synonyms: "de esta manera", 
        example: "Hacemos el trabajo así.\nWe do the work like this." 
    },
    { 
        id: 433, 
        word: "solamente", 
        definition: "Only, just", 
        synonyms: "solo", 
        example: "Solamente quiero pan.\nI only want bread." 
    },
    { 
        id: 434, 
        word: "casi", 
        definition: "Almost", 
        synonyms: "cerca de", 
        example: "Casi terminamos el proyecto.\nWe almost finish the project." 
    },
    { 
        id: 435, 
        word: "demasiado", 
        definition: "Too much", 
        synonyms: "excesivo", 
        example: "Hay demasiado ruido aquí.\nThere is too much noise here." 
    },
    { 
        id: 436, 
        word: "bastante", 
        definition: "Enough, quite", 
        synonyms: "suficiente", 
        example: "Tenemos bastante comida.\nWe have enough food." 
    },
    { 
        id: 437, 
        word: "realmente", 
        definition: "Really, truly", 
        synonyms: "de verdad", 
        example: "Realmente disfruto la clase.\nI really enjoy the class." 
    },
    { 
        id: 438, 
        word: "a veces", 
        definition: "Sometimes", 
        synonyms: "ocasionalmente", 
        example: "A veces comemos pizza.\nSometimes we eat pizza." 
    },
    { 
        id: 439, 
        word: "ciertamente", 
        definition: "Certainly", 
        synonyms: "seguramente", 
        example: "Ciertamente entiendes la lección.\nYou certainly understand the lesson." 
    },
    { 
        id: 440, 
        word: "generalmente", 
        definition: "Generally", 
        synonyms: "usualmente", 
        example: "Generalmente llueve en invierno.\nIt generally rains in winter." 
    },
    { 
        id: 441, 
        word: "simplemente", 
        definition: "Simply", 
        synonyms: "fácilmente", 
        example: "Simplemente leo el libro.\nI simply read the book." 
    },
    { 
        id: 442, 
        word: "principalmente", 
        definition: "Mainly, principally", 
        synonyms: "mayormente", 
        example: "Comemos principalmente frutas.\nWe mainly eat fruits." 
    },
    { 
        id: 443, 
        word: "últimamente", 
        definition: "Lately", 
        synonyms: "recientemente", 
        example: "Últimamente él entrena mucho.\nLately he trains a lot." 
    },
    { 
        id: 444, 
        word: "desde luego", 
        definition: "Of course, certainly", 
        synonyms: "claro", 
        example: "Desde luego quiero ir.\nOf course I want to go." 
    },
    { 
        id: 445, 
        word: "claro", 
        definition: "Clearly, of course", 
        synonyms: "obviamente", 
        example: "Claro que sí.\nClearly, yes. / Of course." 
    },
    { 
        id: 446, 
        word: "tal vez", 
        definition: "Maybe, perhaps", 
        synonyms: "quizás", 
        example: "Tal vez vemos una película.\nMaybe we watch a movie." 
    },
    { 
        id: 447, 
        word: "mejor", 
        definition: "Better", 
        synonyms: "superiormente", 
        example: "Ella canta mejor.\nShe sings better." 
    },
    { 
        id: 448, 
        word: "peor", 
        definition: "Worse", 
        synonyms: "inferiormente", 
        example: "Él dibuja peor.\nHe draws worse." 
    },
    { 
        id: 449, 
        word: "si quiera", 
        definition: "Even", 
        synonyms: "por lo menos", 
        example: "No tengo siquiera un bolígrafo.\nI do not even have a pen." 
    },
    { 
        id: 450, 
        word: "jamás", 
        definition: "Never (stronger than 'nunca')", 
        synonyms: "en ningún momento", 
        example: "Él jamás dice la verdad.\nHe never tells the truth." 
    },
    { 
        id: 451, 
        word: "recientemente", 
        definition: "Recently", 
        synonyms: "hace poco", 
        example: "Recientemente compran un coche.\nRecently they buy a car." 
    },
    { 
        id: 452, 
        word: "normalmente", 
        definition: "Normally", 
        synonyms: "habitualmente", 
        example: "Normalmente cenamos a las ocho.\nNormally we have dinner at eight." 
    },
    { 
        id: 453, 
        word: "totalmente", 
        definition: "Totally", 
        synonyms: "completamente", 
        example: "Estamos totalmente de acuerdo.\nWe totally agree." 
    },
    { 
        id: 454, 
        word: "certeramente", 
        definition: "Certainly, surely", 
        synonyms: "con certeza", 
        example: "Certeramente llegamos a tiempo.\nWe certainly arrive on time." 
    },
    { 
        id: 455, 
        word: "probablemente", 
        definition: "Probably", 
        synonyms: "posiblemente", 
        example: "Probablemente voy a la fiesta.\nI probably go to the party." 
    },
    { 
        id: 456, 
        word: "seguramente", 
        definition: "Surely", 
        synonyms: "de seguro", 
        example: "Seguramente tienen hambre.\nThey surely are hungry." 
    },
    { 
        id: 457, 
        word: "a menudo", 
        definition: "Often", 
        synonyms: "frecuentemente", 
        example: "Ella lee a menudo.\nShe reads often." 
    },
    { 
        id: 458, 
        word: "casualmente", 
        definition: "Casually, by chance", 
        synonyms: "por casualidad", 
        example: "Casualmente lo encuentro.\nI casually find it." 
    },
    { 
        id: 459, 
        word: "lamentablemente", 
        definition: "Unfortunately", 
        synonyms: "por desgracia", 
        example: "Lamentablemente no podemos ir.\nUnfortunately we cannot go." 
    },
    { 
        id: 460, 
        word: "finalmente", 
        definition: "Finally", 
        synonyms: "al fin", 
        example: "Finalmente acabamos el trabajo.\nFinally we finish the work." 
    },
    { 
        id: 461, 
        word: "absolutamente", 
        definition: "Absolutely", 
        synonyms: "sin duda", 
        example: "Absolutamente quiero más café.\nI absolutely want more coffee." 
    },
    { 
        id: 462, 
        word: "exclusivamente", 
        definition: "Exclusively", 
        synonyms: "solamente", 
        example: "Esto es exclusivamente para mí.\nThis is exclusively for me." 
    },
    { 
        id: 463, 
        word: "igualmente", 
        definition: "Equally, likewise", 
        synonyms: "de igual forma", 
        example: "Pensamos igualmente.\nWe think equally." 
    },
    { 
        id: 464, 
        word: "solamente", 
        definition: "Only, just (alternate)", 
        synonyms: "exclusivamente", 
        example: "Solamente estudio por la mañana.\nI only study in the morning." 
    },
    { 
        id: 465, 
        word: "posiblemente", 
        definition: "Possibly (alternate)", 
        synonyms: "tal vez", 
        example: "Posiblemente llega el paquete.\nPossibly the package arrives." 
    },
    { 
        id: 466, 
        word: "muy bien", 
        definition: "Very well", 
        synonyms: "óptimamente", 
        example: "Cantas muy bien.\nYou sing very well." 
    },
    { 
        id: 467, 
        word: "muy mal", 
        definition: "Very badly", 
        synonyms: "pésimamente", 
        example: "Él juega muy mal.\nHe plays very badly." 
    },
    { 
        id: 468, 
        word: "hoy en día", 
        definition: "Nowadays", 
        synonyms: "actualmente", 
        example: "Hoy en día todos usan móvil.\nNowadays everyone uses a mobile phone." 
    },
    { 
        id: 469, 
        word: "deliberadamente", 
        definition: "Deliberately", 
        synonyms: "intencionalmente", 
        example: "Ellos actúan deliberadamente.\nThey act deliberately." 
    },
    { 
        id: 470, 
        word: "suavemente", 
        definition: "Softly, gently", 
        synonyms: "tierna mente", 
        example: "Habla suavemente.\nHe speaks softly." 
    },
    { 
        id: 471, 
        word: "duramente", 
        definition: "Hard, harshly", 
        synonyms: "con dureza", 
        example: "Ellos trabajan duramente.\nThey work hard." 
    },
    { 
        id: 472, 
        word: "lentamente", 
        definition: "Slowly (alternate)", 
        synonyms: "despacio", 
        example: "Camina lentamente.\nHe walks slowly." 
    },
    { 
        id: 473, 
        word: "velozmente", 
        definition: "Swiftly, quickly", 
        synonyms: "rápido", 
        example: "El animal corre velozmente.\nThe animal runs swiftly." 
    },
    { 
        id: 474, 
        word: "casi nunca", 
        definition: "Almost never", 
        synonyms: "rara vez", 
        example: "Yo casi nunca veo televisión.\nI almost never watch television." 
    },
    { 
        id: 475, 
        word: "casi siempre", 
        definition: "Almost always", 
        synonyms: "regularmente", 
        example: "Casi siempre comemos pasta.\nWe almost always eat pasta." 
    },
    { 
        id: 476, 
        word: "en medio", 
        definition: "In the middle", 
        synonyms: "en el centro", 
        example: "Estamos en medio de la calle.\nWe are in the middle of the street." 
    },
    { 
        id: 477, 
        word: "en frente", 
        definition: "In front", 
        synonyms: "delante", 
        example: "La tienda está en frente.\nThe store is in front." 
    },
    { 
        id: 478, 
        word: "detrás", 
        definition: "Behind", 
        synonyms: "atrás", 
        example: "Él se sienta detrás.\nHe sits behind." 
    },
    { 
        id: 479, 
        word: "alrededor", 
        definition: "Around", 
        synonyms: "en torno", 
        example: "Caminamos alrededor del parque.\nWe walk around the park." 
    },
    { 
        id: 480, 
        word: "encima de", 
        definition: "On top of", 
        synonyms: "sobre", 
        example: "El libro está encima de la mesa.\nThe book is on top of the table." 
    },
    { 
        id: 481, 
        word: "debajo de", 
        definition: "Under, below", 
        synonyms: "bajo", 
        example: "El perro duerme debajo de la cama.\nThe dog sleeps under the bed." 
    },
    { 
        id: 482, 
        word: "entre", 
        definition: "Between", 
        synonyms: "en medio de", 
        example: "El café está entre el agua y la leche.\nThe coffee is between the water and the milk." 
    },
    { 
        id: 483, 
        word: "antes", 
        definition: "Before", 
        synonyms: "previamente", 
        example: "Ella llega antes de la hora.\nShe arrives before the time." 
    },
    { 
        id: 484, 
        word: "además", 
        definition: "Furthermore, besides", 
        synonyms: "asimismo", 
        example: "No llueve, además hace sol.\nIt is not raining, furthermore it is sunny." 
    },
    { 
        id: 485, 
        word: "y", 
        definition: "And", 
        synonyms: "además", 
        example: "Ella canta y él baila.\nShe sings and he dances." 
    },
    { 
        id: 486, 
        word: "o", 
        definition: "Or", 
        synonyms: "o bien", 
        example: "¿Quieres café o té?\nDo you want coffee or tea?" 
    },
    { 
        id: 487, 
        word: "pero", 
        definition: "But", 
        synonyms: "sin embargo", 
        example: "Me gusta, pero no compro.\nI like it, but I don't buy it." 
    },
    { 
        id: 488, 
        word: "porque", 
        definition: "Because", 
        synonyms: "puesto que", 
        example: "Vengo porque quiero.\nI come because I want to." 
    },
    { 
        id: 489, 
        word: "si", 
        definition: "If", 
        synonyms: "en caso de que", 
        example: "Si estudias, aprendes.\nIf you study, you learn." 
    },
    { 
        id: 490, 
        word: "aunque", 
        definition: "Although, even though", 
        synonyms: "a pesar de", 
        example: "Aunque llueve, salimos.\nAlthough it rains, we go out." 
    },
    { 
        id: 491, 
        word: "para", 
        definition: "For, in order to", 
        synonyms: "con el fin de", 
        example: "Compro pan para la cena.\nI buy bread for dinner." 
    },
    { 
        id: 492, 
        word: "desde", 
        definition: "Since, from", 
        synonyms: "a partir de", 
        example: "Trabajo desde la mañana.\nI work since the morning." 
    },
    { 
        id: 493, 
        word: "qué", 
        definition: "What", 
        synonyms: "cuál es", 
        example: "¿Qué comes?\nWhat do you eat?" 
    },
    { 
        id: 494, 
        word: "quién", 
        definition: "Who", 
        synonyms: "qué persona", 
        example: "¿Quién llama?\nWho is calling?" 
    },
    { 
        id: 495, 
        word: "dónde", 
        definition: "Where", 
        synonyms: "en qué lugar", 
        example: "¿Dónde vives?\nWhere do you live?" 
    },
    { 
        id: 496, 
        word: "cuándo", 
        definition: "When", 
        synonyms: "en qué momento", 
        example: "¿Cuándo llegas?\nWhen do you arrive?" 
    },
    { 
        id: 497, 
        word: "cuál", 
        definition: "Which", 
        synonyms: "qué cosa", 
        example: "¿Cuál quieres?\nWhich one do you want?" 
    },
    { 
        id: 498, 
        word: "cómo", 
        definition: "How", 
        synonyms: "de qué modo", 
        example: "¿Cómo estás?\nHow are you?" 
    },
    { 
        id: 499, 
        word: "por qué", 
        definition: "Why", 
        synonyms: "la razón", 
        example: "¿Por qué estudias?\nWhy do you study?" 
    },
    { 
        id: 500, 
        word: "cuánto", 
        definition: "How much", 
        synonyms: "qué cantidad", 
        example: "¿Cuánto cuesta?\nHow much does it cost?" 
    }
];