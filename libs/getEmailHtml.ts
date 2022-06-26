import { InsData } from "@/libs/types/inscriptionData";
import cuentasDB from "@/DB/cuentas.json";

// import StringUtils from "@/utils/StringUtils";

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
          <div style="height: 48px;"></div>
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
                            Gracias por registrarse
                          </h1>
                          <div
                            class="mt-6 text-lg text-gray-600"
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              margin-top: 1.5rem;
                              font-size: 1.125rem;
                              line-height: 1.75rem;
                              color: rgb(75 85 99 / 1);
                            "
                          >
                            <p
                              style="
                                box-sizing: border-box;
                                border-width: 0;
                                border-style: solid;
                                border-color: #e5e7eb;
                                margin: 0;
                              "
                            >
                              Es un gusto Sr(a).
                              <span
                                class="ml-0.5 font-semibold text-black"
                                style="
                                  box-sizing: border-box;
                                  border-width: 0;
                                  border-style: solid;
                                  border-color: #e5e7eb;
                                  margin-left: 0.125rem;
                                  font-weight: 600;
                                  color: rgb(0 0 0 / 1);
                                  text-transform: capitalize;
                                "
                                >${Name}</span
                              >
                            </p>
                            <p
                              class="mt-4"
                              style="
                                box-sizing: border-box;
                                border-width: 0;
                                border-style: solid;
                                border-color: #e5e7eb;
                                margin: 0;
                                margin-top: 1rem;
                              "
                            >
                              Se completo su registro para el evento:
                              <span
                                class="ml-0.5 font-semibold text-black inline-block"
                                style="
                                  box-sizing: border-box;
                                  border-width: 0;
                                  border-style: solid;
                                  border-color: #e5e7eb;
                                  margin-left: 0.125rem;
                                  display: inline-block;
                                  font-weight: 600;
                                  color: rgb(0 0 0 / 1);
                                "
                                >${data.event}</span
                              >
                            </p>
                          </div>

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
                                  <h2
                                    class="text-gray-600 text-xl font-semibold my-4"
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      margin: 0;
                                      margin-top: 1rem;
                                      margin-bottom: 1rem;
                                      font-size: 1.25rem;
                                      line-height: 1.75rem;
                                      font-weight: 600;
                                      color: rgb(75 85 99 / 1);
                                    "
                                  >
                                    Datos del registro
                                  </h2>

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
                                                    Nombre:
                                                  </h4>
                                                  <p
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin: 0;
                                                      text-transform: capitalize;
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
                                                      text-transform: capitalize;
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

                          <!-- Datos del Pago -->
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
                                  <h2
                                    class="text-gray-600 text-xl font-semibold my-4"
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      margin: 0;
                                      margin-top: 1rem;
                                      margin-bottom: 1rem;
                                      font-size: 1.25rem;
                                      line-height: 1.75rem;
                                      font-weight: 600;
                                      color: rgb(75 85 99 / 1);
                                    "
                                  >
                                    Datos del Pago
                                  </h2>

                                  <p
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      margin: 0;
                                      margin-top: 1rem;
                                      margin-bottom: 1rem;
                                      font-size: 1.125rem;
                                      line-height: 1.75rem;
                                    "
                                  >
                                    Puede enviar su pago a una de las siguientes
                                    ctas.
                                  </p>

                                  <!-- Datos -->
                                  <table
                                    width="100%"
                                    style="
                                      box-sizing: border-box;
                                      border-width: 0;
                                      border-style: solid;
                                      border-color: #e5e7eb;
                                      margin-top: 0.5rem;
                                    "
                                    border="0"
                                    cellspacing="0"
                                    cellpadding="0"
                                  >
                                    <tbody>
                                      <tr>
                                        <td>
                                          <table
                                            style="
                                              box-sizing: border-box;
                                              border-width: 0;
                                              border-style: solid;
                                              border-color: #e5e7eb;
                                              width: 100%;
                                            "
                                            border="0"
                                            cellspacing="0"
                                            cellpadding="0"
                                            width="100%"
                                          >
                                            <tbody>
                                              <tr>
                                                <td
                                                  width="100%"
                                                  style="
                                                    box-sizing: border-box;
                                                    border-width: 0;
                                                    border-style: solid;
                                                    border-color: #e5e7eb;
                                                    height: 15rem;
                                                    width: 100%;
                                                    overflow: hidden;
                                                    border-radius: 1rem;
                                                    --tw-bg-opacity: 1;
                                                    background-color: rgb(
                                                      250 204 21 /
                                                        var(--tw-bg-opacity)
                                                    );
                                                    padding: 1.5rem;
                                                    --tw-drop-shadow: drop-shadow(
                                                        0 10px 8px
                                                          rgb(0 0 0 / 0.04)
                                                      )
                                                      drop-shadow(
                                                        0 4px 3px
                                                          rgb(0 0 0 / 0.1)
                                                      );
                                                    filter: var(--tw-blur)
                                                      var(--tw-brightness)
                                                      var(--tw-contrast)
                                                      var(--tw-grayscale)
                                                      var(--tw-hue-rotate)
                                                      var(--tw-invert)
                                                      var(--tw-saturate)
                                                      var(--tw-sepia)
                                                      var(--tw-drop-shadow);
                                                  "
                                                >
                                                  <table
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      position: relative;
                                                      display: flex;
                                                      align-items: center;
                                                    "
                                                    border="0"
                                                    cellspacing="0"
                                                    cellpadding="0"
                                                  >
                                                    <tbody>
                                                      <tr>
                                                        <td>
                                                          <!-- icon -->
                                                          <h3
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                              margin: 0;
                                                              margin-left: 0.5rem;
                                                              text-align: center;
                                                              font-size: 1.125rem;
                                                              line-height: 1.75rem;
                                                              font-weight: 600;
                                                              text-transform: uppercase;
                                                            "
                                                          >
                                                          ${cuentasDB[0].banco}
                                                          </h3>
                                                        </td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                  <span
                                                    style="
                                                      box-sizing: border-box;
                                                      border-width: 0;
                                                      border-style: solid;
                                                      border-color: #e5e7eb;
                                                      margin-top: 1.5rem;
                                                      display: block;
                                                      text-transform: uppercase;
                                                    "
                                                    >${cuentasDB[0].propietario}</span
                                                  >
                                                  <table
                                                    border="0"
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
                                                            margin-top: 1.5rem;
                                                            display: grid;
                                                            grid-template-columns: repeat(
                                                              2,
                                                              minmax(0, 1fr)
                                                            );
                                                          "
                                                        >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                              font-weight: 600;
                                                              text-transform: uppercase;
                                                            "
                                                            >cedula:</span
                                                          >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                            "
                                                            >${cuentasDB[0].cedula}</span
                                                          >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                              font-weight: 600;
                                                              text-transform: uppercase;
                                                            "
                                                            >tipo:</span
                                                          >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                              text-transform: uppercase;
                                                            "
                                                            >${cuentasDB[0].tipo}</span
                                                          >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                              font-weight: 600;
                                                              text-transform: uppercase;
                                                            "
                                                            >cuenta:</span
                                                          >
                                                          <span
                                                            style="
                                                              box-sizing: border-box;
                                                              border-width: 0;
                                                              border-style: solid;
                                                              border-color: #e5e7eb;
                                                            "
                                                            >${cuentasDB[0].num_cuenta}</span
                                                          >
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
                </td>
              </tr>
            </tbody>
          </table>

          <!-- Footer -->
          <table
            width="600"
            cellpadding="0"
            cellspacing="0"
            border="0"
            style="
              box-sizing: border-box;
              margin: auto;
              max-width: 600px !important;
              width: 100% !important;

              border-width: 0;
              border-style: solid;
              border-color: #e5e7eb;
              margin-top: 3rem;
            "
          >
            <tbody>
              <tr>
                <td
                  style="
                    box-sizing: border-box;
                    border-width: 0;
                    border-style: solid;
                    border-color: #e5e7eb;
                    margin-left: auto;
                    margin-right: auto;
                    max-width: 80rem;
                    padding-top: 3rem;
                    padding-bottom: 3rem;
                    padding-left: 1rem;
                    padding-right: 1rem;
                  "
                >
                  <table
                    cellpadding="0"
                    cellspacing="0"
                    width="100%"
                    style="margin-top: 2rem"
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            box-sizing: border-box;
                            border-width: 0;
                            border-style: solid;
                            border-color: #e5e7eb;
                          "
                        >
                          <p
                            style="
                              box-sizing: border-box;
                              border-width: 0;
                              border-style: solid;
                              border-color: #e5e7eb;
                              margin: 0;
                              text-align: center;
                              font-size: 1rem;
                              line-height: 1.5rem;
                              color: rgb(156 163 175 / 1);
                            "
                          >
                            &copy; 2022 Mararungye. Todos los derechos
                            reservados.
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  </tbody>
</table>

  `;
}
