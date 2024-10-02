import { getCSS, tickConfig } from "./common.js";

async function estilosMusicaisBrasil() {
    // Dados dos estilos musicais mais ouvidos no Brasil (em milhões)
    const dadosBrasil = {
        "Sertanejo": 152,   // 69% da população
        "Funk": 44,         // 13.6%
        "MPB": 20,          // 9.1%
        "Pop": 10,          // 4.5%
        "Rock": 5,          // 2.3%
        "Pagode": 2,        // 0.9%
        "Rap": 1,           // 0.5%
        "Samba": 1,         // 0.5%
        "Clássica": 1,      // 0.5%
    };

    // Ordenar os dados pela quantidade de ouvintes em ordem decrescente
    const ordenados = Object.entries(dadosBrasil).sort((a, b) => b[1] - a[1]);
    const nomeDosEstilos = ordenados.map(item => item[0]);
    const quantidadeDeOuvintes = ordenados.map(item => item[1]);

    // Adicionar texto explicativo
    const textoExplicativo = document.createElement('p');
    textoExplicativo.classList.add('graficos-container__texto');
    textoExplicativo.innerHTML = `
        <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">A música é parte essencial da cultura brasileira!</span>
        <br><br>
        Aproximadamente <strong>69%</strong> dos brasileiros, o que equivale a cerca de <strong>152 milhões</strong> de pessoas, preferem sertanejo. Outros estilos, como funk e MPB, também têm uma presença significativa.
        <br><br>
        Este gráfico mostra a popularidade dos estilos musicais mais ouvidos no Brasil, refletindo as preferências dos ouvintes em nosso país.
    `;

    const container = document.getElementById('graficos-container');
    container.appendChild(textoExplicativo);

    const data = [
        {
            x: nomeDosEstilos, 
            y: quantidadeDeOuvintes, 
            type: 'bar',
            marker: {
                color: [
                    '#ffffff', // Branco
                    '#f2f2f2', // Branco muito claro
                    '#e6e6e6', // Branco claro
                    '#d9d9d9', // Cinza muito claro
                    '#cccccc', // Cinza claro
                    '#bfbfbf', // Cinza
                    '#b3b3b3', // Cinza médio
                    '#a6a6a6', // Cinza escuro
                    '#999999'  // Cinza bem escuro
                ]
            }
        }
    ];
    
    
    
    

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Estilos musicais mais ouvidos no Brasil',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                family: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Estilos Musicais',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Número de ouvintes (milhões)',
                font: {
                    color: getCSS('--secondary-color')
                }
            },
            range: [0, 160] // Ajustado para a nova escala
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

estilosMusicaisBrasil();
