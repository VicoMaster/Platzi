async function consultaApi(params = {}) {
    const { API_BASE } = params;
    const BASE_URL_API = API_BASE || 'https://www.datos.gov.co/resource/2pnw-mmge.json?$limit=5';
    let resultadoConsulta = undefined;
    await fetch(BASE_URL_API)
        .then(response => {
            resultadoConsulta = response.statusText;
            console.log(`Ejecutado con código: ${response.status}`);
            return response.json()
        })
        .then(data => {
            console.log('SUCCESS');
            resultadoConsulta = data;
        }).catch(error => {
            console.log('ERROR EN PETICIÓN');
            resultadoConsulta = error;
        });

    return resultadoConsulta;
}

async function imprimirConsulta() {
    const resultado = await consultaApi();
    let sumaProducidos = 0;

    Object.keys(resultado).forEach(registro => {
        const { producci_n_t: producido } = resultado[registro];
        sumaProducidos += parseInt(producido, 10);
    })
    console.log(resultado);
    console.log("RESULTADO: ", sumaProducidos);
}

imprimirConsulta();