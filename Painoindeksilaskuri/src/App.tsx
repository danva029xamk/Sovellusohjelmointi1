import React, { useState, useRef } from 'react';
import './App.css';


const App : React.FC = () : React.ReactElement => {

  const [painoindeksi, setPainoindeksi] = useState<number>()
  const [nappiPainettu, setNappiPainettu] = useState<boolean>(false);

  const annettuPituus: any = useRef<any>();
  const annettuPaino: any = useRef<any>();

  const laskePainoindeksi = (pituus : any, paino: any): void => {
    let pindeksi = Number(paino)/((Number(pituus)/100)**2);
    setPainoindeksi(pindeksi);
    setNappiPainettu(true);
  }

  const haeKuvausteksti = (painoindeksi: any): String => {
    if(painoindeksi < 17){
      return "Merkittävä alipaino";
    } else if(painoindeksi >= 17 && painoindeksi < 18.5){
      return "Lievä alipaino";
    } else if (painoindeksi >= 18.5 && painoindeksi < 25){
      return "Normaali";
    } else if (painoindeksi >= 25 && painoindeksi < 30){
      return "Lievä ylipaino";
    } else {
      return "Ylipaino";
    }
  }

  const haeVari = (painoindeksi:any) => {
    if (painoindeksi < 17) {
      return "vaarallinen";
    } else if (painoindeksi >= 17 && painoindeksi < 18.5){
      return "lieva";
    } else if (painoindeksi >= 18.5 && painoindeksi < 25) {
      return "normaali";
    } else if (painoindeksi >= 25 && painoindeksi < 30){
      return "lieva";
    } else {
      return "vaarallinen";
    }
  }
  
  return (
    <div className='container'>
      <h1>Painoindeksilaskuri</h1>

      <h3>Pituus (cm)</h3>
      <input
        ref={annettuPituus}
        type='text'
        placeholder='Kirjoita pituutesi senttimetreissä'
      /><br></br>

      <h3>Paino (kg)</h3>
      <input
        ref={annettuPaino}
        type='text'
        placeholder='Kirjoita painosi kilogrammoissa'
      />
      <br></br>

      <button onClick={ (e) => { 
        laskePainoindeksi(annettuPituus.current.value, annettuPaino.current.value)}}
        >Laske painoindeksi</button>
      
      {nappiPainettu &&
      <div className={`tulos ${haeVari(painoindeksi)}`}>
        <p>Painoindeksi on: {painoindeksi?.toFixed(2)}</p>
        <p>{haeKuvausteksti(painoindeksi)}</p>
      </div>
      }
    </div>
  );
}

export default App;
