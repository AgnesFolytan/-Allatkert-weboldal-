import './Programok.css'


function Programok(){
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th>Állatkert</th>
            <th>Belépés</th>
            <th>Állatházak*</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Január</th>
            <td>minden nap</td>
            <td>9:00-16:00</td>
            <td>15:00-ig</td>
            <td>9:00-15:30</td>
          </tr>
          <tr>
          <th scope="row">Ferbuár</th>
            <td>minden nap</td>
            <td>9:00-16:00</td>
            <td>15:00-ig</td>
            <td>9:00-15:30</td>
          </tr>
          <tr>
            <th scope="row">Március</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-17:00<br />9:00-17:30</td>
            <td>16:00-ig<br/>16:30-ig</td>
            <td>9:00-16:30<br/>9:00-17:00</td>
          </tr>
          <tr>
            <th scope="row">Április</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-17:30<br/>9:00-18:00</td>
            <td>16:30-ig<br/>17:00-ig</td>
            <td>9:00-17:00<br/>9:00-17:30</td>
          </tr>
          <tr>
            <th scope="row">Május</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-18:00<br/>9:00-19:00</td>
            <td>17:00-ig<br/>18:00-ig</td>
            <td>9:00-17:00<br/>9:00-18:30</td>
          </tr>
          <tr>
            <th scope="row">Június</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-18:00<br/>9:00-19:00</td>
            <td>17:00-ig<br/>18:00-ig</td>
            <td>9:00-17:00<br/>9:00-18:30</td>
          </tr>
          <tr>
            <th scope="row">Július</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-18:00<br/>9:00-19:00</td>
            <td>17:00-ig<br/>18:00-ig</td>
            <td>9:00-17:00<br/>9:00-18:30</td>
          </tr>
          <tr>
            <th scope="row">Augusztus</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-18:00<br/>9:00-19:00</td>
            <td>17:00-ig<br/>18:00-ig</td>
            <td>9:00-17:00<br/>9:00-18:30</td>
          </tr>
          <tr>
            <th scope="row">Szeptember</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-17:30<br/>9:00-18:00</td>
            <td>16:30-ig<br/>17:00-ig</td>
            <td>9:00-17:00<br/>9:00-17:30</td>
          </tr>
          <tr>
            <th scope="row">Október</th>
            <td>hétfőtől péntekig<br />hétvégén és ünnepnapokon</td>
            <td>9:00-17:00<br/>9:00-17:30</td>
            <td>16:00-ig<br/>16:30-ig</td>
            <td>9:00-16:30<br/>9:00-17:00</td>
          </tr>
          <tr>
            <th scope="row">Október</th>
            <td>minden nap</td>
            <td>9:00-16:00</td>
            <td>15:00-ig</td>
            <td>9:00-15:30</td>
          </tr>
          <tr>
            <th scope="row">December</th>
            <td>minden nap<br/><b>kivéve:</b><br/>december 24-én<br/>és<br/>december 31-én</td>
            <td>9:00-16:00<br/>9:00-13:00<br/>9:00-13:00</td>
            <td>15:00-ig<br/>12:00-ig<br/>12:00-ig</td>
            <td>9:00-15:30<br/>9:00-12:30<br/>9:00-12:30</td>
          </tr>
        </tbody>
      </table>
    </div>    
  )
}

export default Programok;