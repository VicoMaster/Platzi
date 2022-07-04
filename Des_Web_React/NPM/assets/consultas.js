async function consultaApi(params = {}) {
    const { API_BASE } = params;
    const BASE_URL_API = API_BASE || 'https://www.datos.gov.co/resource/2pnw-mmge.json?$limit=5';
    let resultadoConsulta = {};
    await fetch(BASE_URL_API)
        .then(response => {
            resultadoConsulta['status'] = response.status;
            console.log(`Respuesta: ${response.statusText}`);
            return response.json()
        })
        .then(data => {
            resultadoConsulta['data'] = data;
        }).catch(error => {
            console.log('ERROR EN PETICIÓN');
            resultadoConsulta[error] = error;
        });

    return resultadoConsulta;
}

export async function imprimirConsulta() {
    const resultado = await consultaApi();

    if (resultado.status === 200) {
        let sumaProducidos = 0;
        const { data: DATA } = resultado;
        Object.keys(DATA).forEach(registro => {
            const { producci_n_t: producido } = DATA[registro];
            sumaProducidos += parseInt(producido, 10);
        });
        const $SPAN_CULTIVOS = document.getElementById('cantidadCultivos');
        $SPAN_CULTIVOS.textContent = sumaProducidos;
    }
}

export { imprimirConsulta };