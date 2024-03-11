import './Programok.css'


function Programok(){
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Programok</th>
            <th>Program Kezdete</th>
            <th>Program Végződése</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Január</th>
            <td>minden nap</td>
            <td>Majom etetés és bemutató<br />Pingvin show a jegesmedencében</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
          <th scope="row">Ferbuár</th>
            <td>minden nap</td>
            <td>Elefánt fűrdetés<br />Ragadozómadár bemutató</td>
            <td>12:00-től<br />14:30-tól</td>
            <td>13:00-ig<br />16:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Március</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Krokodil táplálkozási bemutató<br />Akváriumokban való hal etetés</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Április</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Delfinshow<br />Zsiráfetetés interaktív élmény</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Május</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Kenguruk közötti séta<br />Fóka show a tengeri medencében</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Június</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Szafari buszos túra a nagyobb területeken<br />Medve tréning és oktatás</td>
            <td>12:00-től<br />14:30-tól</td>
            <td>13:00-ig<br />16:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Július</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Zebrafuttatás a bagy kifutóban<br />Koalabemutató és információs előadás</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Augusztus</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Kaméleonok és gyíkok kiállítás<br />Állatkerti állatokra fókuszáló gyerekfoglalkozás</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Szeptember</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Vadmacska etetés és magyarázat<br />Viziló pancsolás a tavacska mellett</td>
            <td>12:00-től<br />14:30-tól</td>
            <td>13:00-ig<br />16:00-ig</td>
          </tr>
          <tr>
            <th scope="row">Október</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>Színes pillangó kiállítás<br />Alpakafuttatás és simogatás</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:30-ig</td>
          </tr>
          <tr>
            <th scope="row">November</th>
            <td>minden nap</td>
            <td>Fókaetetés és interaktív program<br />Kézműves foglalkozások</td>
            <td>10:00-től<br />12:30-tól</td>
            <td>11:00-ig<br />14:00-ig</td>
          </tr>
          <tr>
            <th scope="row">December</th>
            <td>minden nap<br/><b>kivéve:</b><br/>december 24-én<br/>és<br/>december 31-én</td>
            <td>Tevegelés<br />Tigris tréning</td>
            <td>15:00-től<br />9:30-tól</td>
            <td>16:30-ig<br />11:00-ig</td>
          </tr>
        </tbody>
      </table>
    </div>    
  )
}

export default Programok;