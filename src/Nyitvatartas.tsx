import './Nyitvatartas.css'

function Nyitvatartas(){
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
                <td>minden nap</td>
                <td>9:00-16:00</td>
                <td>15:00-ig</td>
                <td>9:00-15:30</td>
              </tr>
            </tbody>
          </table>
        </div>    
      )
}

export default Nyitvatartas;