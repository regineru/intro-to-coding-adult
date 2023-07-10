export var tasks = [
  {
    id: "0",
    title: "Intro oppgave",
    description:
      "I denne oppgaven skal vi teste hvordan oppgavene vil fungere. Vi skal navigere oss til riktig fil og endre på nettsiden fra denne fila. Fila vi skal jobbe i heter Welcome.tsx og ligger i mappa som heter code",
    subtask: [
      {
        id: 0,
        name: "a",
        description:
          "Finn der hvor overskriften står. Endre overskriften til Velkommen til Workshop!",
        hint: "Se linje X . Prøv å endre på teksten på linja og se hva som skjer på nettsiden.",
      },
      {
        id: 1,
        name: "b",
        description:
          "Endre farge på overskriften til en farge du ønsker, for eksempel rosa (pink) eller blå (blue).",
        hint: "Her må vi endre på overskriftens Style og legge til <code class=“dnb-code”>color:'pink'</code> eller color:'blue'. ",
      },
      {
        id: 2,
        name: "c",
        description:
          "Lag en ny linje under overskriften og legg til en underoverskrift med elementet H2. Velg selv hva underoverskriften skal være, for eksempel navnet ditt.",
        hint: "Her skal du skrive en nesten lik linje som på overskriften, bare at du skal bytte ut <H1> med <H2>. I style kan du velge farge og plassering slik du ønsker.",
      },
    ],
  },
  {
    id: "x",
    title: "Oppgave 1",
    description: "Oppgave om transaksjoner i banken A",
    subtask: [
      {
        id: 3,
        name: "a",
        description: "[Beskrivelse av oppgave]",
        hint: "",
      },
      {
        id: 4,
        name: "b",
        description:
          "Legg til en kolonne for en egen kommentar i tabellen og skriv en kommentar på en transaksjon som virker mistenkelig.",
        hint: "",
      },
      {
        id: 5,
        name: "c",
        description:
          "Prøv å filtrere tabellen med valgmenyen øverst. Filtrering på beløp fungerer ikke som det skal, prøv å fikse det så det fungere likt som de andre.",
        hint: "",
      },
      {
        id: 6,
        name: "d",
        description:
          "Finn den påbegynte funksjonen som heter findSuspectTransaction() i filen TransactionTable.tsx. Implementer en metode for å markere en rad rødt hvis transaksjonen kommer fra eller til et land med høy risiko (level 3).",
        hint: "",
      },
    ],
  },
  {
    id: "y",
    title: "Oppgave y",
    description: "Oppgave om transaksjoner i banken B",
    subtask: [
      {
        id: 3,
        name: "a",
        description: "[Beskrivelse av oppgave]",
        hint: "",
      }
    ],
  },
];
