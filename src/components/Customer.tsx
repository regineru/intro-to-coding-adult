import React from "react";

interface Customer {
  fornavn: String;
  etternavn: String;
  personnummer: String;
}

export const overfør = (
  fra_konto: String,
  til_konto: String,
  beløp: Number,
  valuta: String
) => {};

export const betal = (
  fra_konto: String,
  til_konto: String,
  kid: String,
  beløp: Number,
  valuta: String
) => {};

export default function Customer() {
  return <h1>Dette er en Kunde!</h1>;
}
