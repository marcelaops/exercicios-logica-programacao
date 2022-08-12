// O fuso horário da França m relação ao Br é de +5h. Elabore um programa que leia a hora no BR e informe a hora da França.

// Resolvendo pegando a hora altomaticamente do sistema:
const conversorFusoHorárioBrFr = () => {
  const date = new Date;
  // return date; -> retorna assim: 2022-08-12T15:40:20.020Z
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const hoursFrance = hours + 5;
  const hoursMinutesFrance = [hoursFrance, minutes].join(':');

  return `O horário na França agora é ${hoursMinutesFrance}`;
};

// console.log(conversorFusoHorárioBrFr());

// Agora resolvendo passando a hora manualmente:

const conversorFusoHorárioBrFrManual = (h, m) => {
  let hoursFrance = h + 5;

  (hoursFrance > 24 ? hoursFrance = hoursFrance - 24 : hoursFrance);

  return `O horário na França agora é ${hoursFrance}:${m}`;
};

console.log(conversorFusoHorárioBrFrManual(24, 30));