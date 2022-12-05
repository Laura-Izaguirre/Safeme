const nombre = document.getElementById("input-name");
const trabajo = document.getElementById("work-name-input");
const correo = document.getElementById("email-input");
const telefono = document.getElementById("number-input");
const descripcion = document.getElementById("about-input");

const form = document.getElementById("form");
const contenedor = document.getElementById("contenedor");

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const formulario = {
    name: nombre.value,
    work: trabajo.value,
    email: correo.value,
    phone: telefono.value,
    description: descripcion.value,
  }
  
  const {name, work, email, phone, description} = formulario;

  const estructuraHtmlConInfo = estructuraHtml(name, work, email, phone, description);

  contenedor.insertAdjacentHTML('beforeend', estructuraHtmlConInfo);

});

function estructuraHtml(name, work, email, phone, description) 
{
  const sectionHtml = `
  <section class="javascript">
      <section class="target">
        <div class="picture">
          <div>
            <img src="./Images/woman.jpg" alt="woman" id="woman-image" />
          </div>
          <div>
            <h2 id="picture-title">${name}</h2>
            <p>${work}</p>
          </div>
        </div>
        <div class="info">
          <div class="info-title">
            <h2 class="border-bottom">Información</h2>
          </div>
          <div>
            <div class="div-row">
              <div class="div-item">
                <h3>Email</h3>
                <p>${email}</p>
              </div>

            <div class="div-item">
              <h3>Phone</h3>
              <p>${phone}</p>
            </div>
          </div>
          <div class="info-title">
            <h2 class="border-bottom">About</h2>
          </div>
          <p>${description}</p>
        </div>
      </section>
    </section>
  `
  return sectionHtml;

}