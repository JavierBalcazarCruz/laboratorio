let aEspecialidad = ['Anestesiología',
'Anestesiología Pediátrica',
'Anestesiólogo para los Servicios Rurales de la Salud',
'Algología',
'Cuidados Paliativos',
'Neuroanestesiología',
'Angiología, Cirugía Vascular y Endovascular',
'Anatomía Patológica',
'Neuropatología',
'Patología Pediátrica',
'Comunicación, Audiología, Otoneurología y Foniatría',
'Cardiología Clínica',
'Cardiología Pediátrica',
'Cardiología Intervencionista',
'Cardiología Intervencionista en Cardiopatías Congénitas',
'Ecocardiografía Adultos',
'Ecocardiografía Pediátrica',
'Electrofisiología',
'Rehabilitación Cardiaca y Prevención Secundaria',
'Cirugía General',
'Cirugía Bariátrica',
'Cirugía para los Servicios Rurales de Salud',
'Cirugía de Trasplantes',
'Cirugía Oral y Maxilofacial',
'Cirugía Neurológica',
'Neurocirugía Pediátrica',
'Terapia Endovascular Neurológica',
'Cirugía Pediátrica',
'Cirugía Plástica, Estética y Reconstructiva',
'Cirugía Cardiaca en Adultos',
'Cirugía Cardiaca en Pediatría',
'Cirugía Cardiotorácica',
'Cirugía Torácica no Cardiaca',
'Cirugía de Tórax Pediátrica No Cardiaca',
'Dermatología',
'Dermatología Pediátrica',
'Dermatopatología',
'Endocrinología',
'Endocrinología Pediátrica',
'Coloproctología',
'Gastroenterología',
'Gastroenterología Pediátrica',
'Endoscopia del Aparato Digestivo',
'Cirugía del Aparato Digestivo',
'Genética Médica',
'Genética Molecular',
'Citogenética',
'Geriatría',
'Ginecología y Obstetricia',
'Biología de la Reproducción Humana',
'Medicina Materno Fetal',
'Urología Ginecológica',
'Hematología',
'Hematología Pediátrica',
'Infectología Adultos',
'Infectologia Pediátrica',
'Inmunología Clínica y Alergia',
'Medicina Aeroespacial',
'Medicina Crítica',
'Medicina Crítica en Obstetricia',
'Medicina del Deporte',
'Medicina Familiar',
'Medicina del Niño y del Adulto para los Servicios Rurales de Salud',
'Medicina Integrada',
'Medicina Interna',
'Medicina Legal y Forense',
'Medicina de Rehabilitación',
'Rehabilitación Cardíaca',
'Medicina del Trabajo',
'Medicina del Trabajo y Ambiental',
'Medicina de Urgencias',
'Urgencias Pediátricas',
'Medicina Nuclear',
'Medicina Nuclear Cardiológica',
'Medicina Nuclear Oncológica, Molecular y Terapéutica',
'Nefrología',
'Nefrología Pediátrica',
'Neumología',
'Neumología Pediátrica',
'Medicina del Sueño',
'Broncoscopía Intervencionista',
'Broncoscopía Intervencionista Pediátrica',
'Fisiología Respiratoria',
'Endoscopía Torácica',
'Neurofisiología Clínica',
'Medicina del Sueño',
'Neurología Adultos',
'Neurología Pediátrica',
'Medicina del Sueño',
'Terapia Endovascular Neurológica',
'Oftalmología',
'Oncología Médica',
'Oncología Pediátrica',
'Cirugía Oncológica',
'Cirugía Oncológica Pediátrica',
'Ginecología Oncológica',
'Ortopedia y Traumatología',
'Otorrinolaringología y Cirugia de Cabeza y Cuello',
'Otorrinolaringología Pediátrica',
'Neuro-Otología',
'Patología Clínica',
'Pediatría',
'Neonatología',
'Medicina del Enfermo Pediátrico en Estado Crítico',
'Psiquiatría',
'Psiquiatría Infantil y de la Adolescencia',
'Medicina del Sueño',
'Radiología e Imagen',
'Radiología Pediátrica',
'Radiología Vascular e Intervencionista',
'Imagen de la mama',
'Neurorradiología',
'Imagen del Sistema Musculoesquelético',
'Terapia Endovascular Neurológica',
'Radio-Oncología',
'Reumatología',
'Reumatología Pediátrica',
'Salud Pública',
'Epidemiología',
'Medicina Preventiva',
'Calidad de la Atención Clínica',
'Urología',
'Trasplante Renal',
'Urología Ginecológica'
].sort();



function llenarSelect()
{
    let selector = document.getElementById("esp");
    aEspecialidad.forEach((element,index) =>{
      selector.options[index] = new Option(element,index);
    });
}

llenarSelect()


function guardar() {

    let apellidoP = document.getElementById("paterno").value;
    let apellidoM = document.getElementById("materno").value;
    let nombre = document.getElementById("nombre").value;
    let combo = document.getElementById("esp");
    let esp = combo.options[combo.selectedIndex].text;
    let cedula = document.getElementById("cProfesional").value;
    let email = document.getElementById("mail").value;
    let tel = document.getElementById("tel").value;

    //chk

    let chkmail = document.getElementById("chkmail").checked;
    let chksms = document.getElementById("chksms").checked;
    let chkwh = document.getElementById("chkwh").checked;
    let chklinea = document.getElementById("chklinea").checked;
    let chkprod = document.getElementById("chkprod").checked;
    let chkievent = document.getElementById("chkievent").checked;
    let chkep = document.getElementById("chkep").checked;
      
    let chkevirtual = document.getElementById("chkevirtual").checked;
    let chkehib = document.getElementById("chkehib").checked;
    let chkmedica = document.getElementById("chkmedica").checked;
    let chkrmedicas = document.getElementById("chkrmedicas").checked;
    let chkprivacidad = document.getElementById("chkprivacidad").checked;
   
      
console.log(apellidoP,apellidoM,nombre,esp,cedula,email,tel,chkmail,chksms,chkwh,chklinea,chkprod,chkievent,chkep,chkevirtual,chkehib,chkmedica,chkrmedicas,chkprivacidad);
    
    
  }
  