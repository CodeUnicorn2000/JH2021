
const nullpunkte = "W-Lan los? Hmm... Das lief jetzt nicht so gut, du hast 0 Punkte erreicht. Informier dich doch, wenn du möchtest, noch einmal. Wir haben dir alle unsere Quellen unten verlinkt."
const einbisfuenfpunkte = "Hmm... Das lief jetzt nicht so gut, du hast einen bis fünf Punkte erreicht. Informier dich doch, wenn du möchtest, noch einmal. Wir haben dir alle unsere Quellen unten verlinkt."
const sechsbiszehnpunkte = "Du hast 6- 10 Punkte erreicht! Das entspricht dem Blinry-Level! Warst du villeicht zu pessimistisch oder wurdest du von uns auf falsche Pfade geführt? "
const elfbisvierzehnpunkte = "Super, du hast 11- 14 Punkte erreicht. Du kennst dich schon gut aus, aber  es schadet nicht sich diese Themen nocheinmal anzuschauen, wir haben alle unsere Quellen für dich unten velinkt..."
const fuenfzehnpunkte = "Super-Alpaka!Du hast alles richtig beantwortet! Auch bei den Schätzfragen bist du auf keinen unser' 'kreativen Lösungsvorschläge' reingefallen!"

let questioncounter=0;


const data = {
    0: {
    "question": "Wie viel Prozent des Stromverbrauches in Deutschland wurde im ersten Halbjahr von 2019 durch erneuerbare Energien gedeckt?",
    "answers": ["Ca. 45%","Ca. 15%", "Ca. 30%", "Ca. 60%"],
    "correctAnswer": 0
  },
  1: {
    "question": "Wann wurde die erste Wasserturbine gebaut?",
    "answers": ["1850", "1870", "1890", "1900"],
    "correctAnswer": 1
  },
  2: {
    "question": "Wann wurde die erste Solaranlage in Betrieb genommen?",
    "answers": ["1842", "1954", "1873", "1924"],
    "correctAnswer": 1
  },
  3: {
    "question": "Welches Bundesland hat den größten Photovoltaikausbau?",
    "answers": ["Bayern", "Brandenburg", "Baden Württemberg", "Nordrhein-Westpfahlen"],
    "correctAnswer": 0
  },
  4: {
    "question": "Wie hoch war der Anteil der Windenergie an der Stromversorgung in 2020?",
    "answers": ["10%", "45%", "56%", "27%"],
    "correctAnswer": 3
  },
  5: {
    "question": "Wie viele Länder bezogen ihren Strombedarf 2009 aus der Wasserkraft?",
    "answers": ["15", "25", "35", "45"],
    "correctAnswer": 2
  },
  6: {
    "question": "Wie viel CO2 wurde 2018 durch Windenergie eingespart?",
    "answers": ["gar nichts- im Gegenteil es wurde mehr CO2 benötigt (Aufbau, etc.)", "ungefähr 75 Millionen Tonnen", "2 Millionen Tonnen", "1,5 Milliarden Tonnen"],
    "correctAnswer": 1
  },
  7: {
    "question": "Wie viel Prozent der vorhandenen Dämme weltweit werden nicht zur Wasserkraft Produktion genutzt?",
    "answers": ["55%", "75%", "85%", "35%"],
    "correctAnswer": 2
  },
  8: {
    "question": "Wie viele Vögel werden durchschnittlich pro Jahr und Windrad getötet?",
    "answers": ["10", "4", "35", "120"],
    "correctAnswer": 1
  },
  9: {
    "question": "Wie viel Prozent der erneuerbaren Energien weltweit kommt von der Wasserkraft?",
    "answers": ["20%", "60%", "80%", "87,3%"],
    "correctAnswer": 2
  },
  10: {
    "question": "Ist Stromerzeugung möglich, wenn es bewölkt ist?",
    "answers": ["Keine Stromproduktion.", "Ja, aber je mehr von der Fläche der Solaranlage bedeckt ist desto weniger Strom wird Produziert.", "Ja, aber solange auch nur ein Pannel der Solaranlage beschattet ist, wirkt sich das drastisch auf die Stromproduktion aus.", "Ja, aber nur bei Staaten in der Nähe des Äquators."],
    "correctAnswer": 2
  },
  11: {
    "question": "Wie hoch sind die Anteile der Stromerzeugung durch Photovoltaik vom Gesamtnetz im Jahr 2020? ",
    "answers": ["24%", "8,9%", "17,4%", "3,7%"],
    "correctAnswer": 1
  },
  12: {
    "question": "Wie lange braucht eine Windenergieanlage, bis sie energetisch effizient ist?",
    "answers": ["1-2 Monate", "3-7 Monate", "8- 10 Monate", "1 Jahr und länger"],
    "correctAnswer": 1
  },
  13: {
    "question": "Wie viel Prozent der weltweiten Kapazitäten zur Energiespeicherung bilden Pumpspeicher?",
    "answers": ["59%", "69%", "79%", "99%"],
    "correctAnswer": 3
  },
  14: {
    "question": "Wie hoch ist die Strahlungsmenge bei einer Solaranlage?",
    "answers": ["23W/m^2", "Keine", "0,5 W/m^2", "6W/m^2"],
    "correctAnswer": 1
  }
}


function content() {
  checkifresultcorrect()
  questioncounter=questioncounter+1
  document.querySelector('#question').innerHTML = data[questioncounter]["question"]
  document.querySelector('#nulllabel').innerHTML = data[questioncounter]["answers"][0]
  document.querySelector('#einslabel').innerHTML =data[questioncounter]["answers"][1]
  document.querySelector('#zweilabel').innerHTML = data[questioncounter]["answers"][2]
  document.querySelector('#dreilabel').innerHTML = data[questioncounter]["answers"][3]

  //data[number].question

}


let ergebnis = 0
let richtigesergebnis = 0

function checkifresultcorrect() {
  if (document.getElementById("nulll").checked) {
    console.log("die erste antwort ist ausgewählt")
  }
  else if (document.getElementById("eins").checked) {
    console.log("die zweite antwort ist ausgewählt")
    richtigesergebnis = 1
  }
  else if (document.getElementById("zwei").checked) {
    console.log("die dritte antwort ist ausgewählt")
    richtigesergebnis = 2
  }
  else if (document.getElementById("drei").checked) {
    console.log("die vierte antwort ist ausgewählt")
    richtigesergebnis = 3
  }
  console.log('richtigesergebnis', richtigesergebnis)

  endergebnis = vergleich(richtigesergebnis)

  if (questioncounter == 14) {
    popUp(endergebnis)
  }
}

function vergleich (chosenoption) {
 console.log('correctAnswer', data[questioncounter].correctAnswer )
 if (chosenoption === data[questioncounter].correctAnswer){
   ergebnis = ergebnis + 1
 }
  console.log(ergebnis)
  return ergebnis
}


function popUp(endergebnis) {
  console.log("test")
  if (endergebnis == 0) {
    alert(nullpunkte)
  }
  else if (endergebnis > 0 && endergebnis < 6) {
    alert(einbisfuenfpunkte)
  }
  else if (endergebnis > 5 && endergebnis < 11) {
    alert(sechsbiszehnpunkte)
  }
  else if (endergebnis > 10 && endergebnis < 15) {
    alert(elfbisvierzehnpunkte)
  }
  else if (endergebnis == 15) {
    alert(fuenfzehnpunkte)
  }
}
