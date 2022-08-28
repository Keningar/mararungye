import { InsData } from '@/libs/types/inscriptionData';
import { format } from 'date-fns';

export default function getEmailHtml(data: InsData) {
  const Name = `${data.firstName} ${data.secondName} ${data.lastName} ${data.secondLastName}`;
  const Address = `${data.country} - ${data.city}, ${data.address}`;

  return `
  <table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="100%"
  style="
    border-collapse: collapse !important;
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: #e5e7eb;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  "
>
  <tbody>
    <tr>
      <td
        style="
          background-position: top center;
          background-repeat: no-repeat;
          margin: 0;
          padding: 0;

          box-sizing: border-box;
          border-width: 0;
          border-style: solid;
          border-color: #e5e7eb;
          line-height: inherit;
        "
        bgcolor="#f3f4f6"
        valign="top"
      >
        <div>
          <div style="height: 48px"></div>

          <table
            width="600"
            align="center"
            cellpadding="0"
            cellspacing="0"
            style="
              background-color: #fff;
              box-sizing: border-box;
              margin: auto;
              max-width: 600px !important;
              width: 100% !important;
              text-align: left;
              border-radius: 20px;
              overflow: hidden;
              border: 1px solid #f3f3f5;
            "
          >
            <tbody>
              <tr>
                <td
                  bgcolor="#FFFFFF"
                  style="
                    padding-bottom: 40px;
                    padding-top: 40px;
                    text-align: left;
                  "
                >
                  <table
                    width="540"
                    align="center"
                    cellpadding="0"
                    cellspacing="0"
                    style="
                      border-collapse: collapse !important;
                      box-sizing: border-box;
                      margin: auto;
                      max-width: 540px !important;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="padding: 0 20px; text-align: left"
                        >
                          <h1
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              margin: 0;
                              font-size: 1.5rem;
                              line-height: 2rem;
                              font-weight: 600;
                            "
                          >
                            Datos de inscipción
                          </h1>

                          <!-- Datos del registro -->
                          <table
                            width="100%"
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              margin-top: 1rem;
                            "
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <!-- Datos -->
                                  <table
                                    width="100%"
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      padding-left: 2rem;
                                      padding-right: 2rem;
                                    "
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style="
                                            box-sizing: border-box;
                                            border-width: 0;
                                            border-style: solid;
                                            border-color: #e5e7eb;
                                            overflow: hidden;
                                            border-radius: 0.75rem;
                                            background-color: rgb(
                                              243 244 246 / 1
                                            );
                                            padding: 2.5rem;
                                          "
                                        >
                                          <table
                                            style="
                                              box-sizing: border-box;
                                              border-width: 0;
                                              border-style: solid;
                                              border-color: #e5e7eb;
                                              display: flex;
                                              flex-direction: column;
                                            "
                                            cellspacing="0"
                                            cellpadding="0"
                                          >
                                            <tbody>
                                              <tr>
                                                <td>
                                                <h4
                                                style="
                                                  box-sizing: border-box;
                                                  border-width: 0;
                                                  border-style: solid;
                                                  border-color: #e5e7eb;
                                                  font-weight: 600;
                                                  margin: 0;
                                                "
                                              >
                                                Evento:
                                              </h4>
                                              <p
                                                style="
                                                  box-sizing: border-box;
                                                  border-width: 0;
                                                  border-style: solid;
                                                  border-color: #e5e7eb;
                                                  margin: 0;
                                                "
                                              >
                                                ${data.event}
                                              </p>
                                              <div
                                              style="height: 16px"
                                            ></div>
                                        <h4
                                        style="
                                          box-sizing: border-box;
                                          border-width: 0;
                                          border-style: solid;
                                          border-color: #e5e7eb;
                                          font-weight: 600;
                                          margin: 0;
                                        "
                                      >
                                      Distancia:
                                      </h4>
                                      <p
                                        style="
                                          box-sizing: border-box;
                                          border-width: 0;
                                          border-style: solid;
                                          border-color: #e5e7eb;
                                          margin: 0;
                                        "
                                      >
                                        ${data.distancia}
                                      </p>
                                              <div
                                                    style="height: 16px"
                                                  ></div>
                                              <h4
                                              style="
                                                box-sizing: border-box;
                                                border-width: 0;
                                                border-style: solid;
                                                border-color: #e5e7eb;
                                                font-weight: 600;
                                                margin: 0;
                                              "
                                            >
                                            Empresa/Club/Grupo:
                                            </h4>
                                            <p
                                              style="
                                                box-sizing: border-box;
                                                border-width: 0;
                                                border-style: solid;
                                                border-color: #e5e7eb;
                                                margin: 0;
                                              "
                                            >
                                              ${
                                                data.grupo == ''
                                                  ? 'Ninguno'
                                                  : data.grupo
                                              }
                                            </p>
                                              <div
                                                    style="height: 16px"
                                                  ></div>
                                                  <h4
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      font-weight: 600;
                                                      margin: 0;
                                                    "
                                                  >
                                                    Nombre:
                                                  </h4>
                                                  <p
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin: 0;
                                                    "
                                                  >
                                                    ${Name}
                                                  </p>
                                                  <div
                                                    style="height: 16px"
                                                  ></div>
                                                  <h4
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      font-weight: 600;
                                                      margin: 0;
                                                    "
                                                  >
                                                    Edad:
                                                  </h4>
                                                  <p
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin: 0;
                                                    "
                                                  >
                                                    ${data.age}
                                                  </p>
                                                  <div
                                                    style="height: 16px"
                                                  ></div>
                                                  <h4
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      font-weight: 600;
                                                      margin: 0;
                                                    "
                                                  >
                                                    Dirección:
                                                  </h4>
                                                  <p
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin: 0;
                                                    "
                                                  >
                                                    ${Address}
                                                  </p>
                                                  <div
                                                    style="height: 16px"
                                                  ></div>
                                                  <h4
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      font-weight: 600;
                                                      margin: 0;
                                                    "
                                                  >
                                                    Celular:
                                                  </h4>
                                                  <p
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin: 0;
                                                    "
                                                  >
                                                    ${data.phone}
                                                  </p>

                                                  <div
                                                  style="height: 16px"
                                                ></div>
                                                <h4
                                                  style="
                                                    box-sizing: border-box;
                                                    border-width: 0;
                                                    border-style: solid;
                                                    border-color: #e5e7eb;
                                                    font-weight: 600;
                                                    margin: 0;
                                                  "
                                                >
                                                  Fecha de nacimiento:
                                                </h4>
                                                <p
                                                  style="
                                                    box-sizing: border-box;
                                                    border-width: 0;
                                                    border-style: solid;
                                                    border-color: #e5e7eb;
                                                    margin: 0;
                                                  "
                                                >
                                                  ${format(
                                                    new Date(data.birthday),
                                                    'dd/MM/yyyy'
                                                  )}
                                                </p>

                                                <div
                                                style="height: 16px"
                                              ></div>
                                              <h4
                                                style="
                                                  box-sizing: border-box;
                                                  border-width: 0;
                                                  border-style: solid;
                                                  border-color: #e5e7eb;
                                                  font-weight: 600;
                                                  margin: 0;
                                                "
                                              >
                                                Cedula:
                                              </h4>
                                              <p
                                                style="
                                                  box-sizing: border-box;
                                                  border-width: 0;
                                                  border-style: solid;
                                                  border-color: #e5e7eb;
                                                  margin: 0;
                                                "
                                              >
                                                ${data.ci}
                                              </p>

                                              <div
                                              style="height: 16px"
                                            ></div>
                                            <h4
                                              style="
                                                box-sizing: border-box;
                                                border-width: 0;
                                                border-style: solid;
                                                border-color: #e5e7eb;
                                                font-weight: 600;
                                                margin: 0;
                                              "
                                            >
                                              Email:
                                            </h4>
                                            <p
                                              style="
                                                box-sizing: border-box;
                                                border-width: 0;
                                                border-style: solid;
                                                border-color: #e5e7eb;
                                                margin: 0;
                                              "
                                            >
                                              ${data.email}
                                            </p>

                                            <div
                                            style="height: 16px"
                                          ></div>
                                          <h4
                                            style="
                                              box-sizing: border-box;
                                              border-width: 0;
                                              border-style: solid;
                                              border-color: #e5e7eb;
                                              font-weight: 600;
                                              margin: 0;
                                            "
                                          >
                                            Sexo:
                                          </h4>
                                          <p
                                            style="
                                              box-sizing: border-box;
                                              border-width: 0;
                                              border-style: solid;
                                              border-color: #e5e7eb;
                                              margin: 0;
                                            "
                                          >
                                            ${data.sex}
                                          </p>
                                          <div
                                          style="height: 16px"
                                        ></div>
                                    <h4
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      font-weight: 600;
                                      margin: 0;
                                    "
                                  >
                                  Capacidad especial:
                                  </h4>
                                  <p
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      margin: 0;
                                    "
                                  >
                                    ${data.especial}
                                  </p>
                                  <div
                                  style="height: 16px"
                                ></div>
                            <h4
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              font-weight: 600;
                              margin: 0;
                            "
                          >
                          Talla:
                          </h4>
                          <p
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              margin: 0;
                            "
                          >
                            ${data.talla}
                          </p>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>

          <div style="height: 48px;"></div>
        </div>
      </td>
    </tr>
  </tbody>
</table>

  `;
}
