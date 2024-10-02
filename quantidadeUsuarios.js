    import { getCSS, tickConfig } from "./common.js";

    async function estilosMusicaisMundiais() {
        // Dados mais realistas dos estilos musicais mais ouvidos em escala mundial (em milhões)
        const dadosMundiais = {
            "Pop": 3500,    // Aproximadamente 35% do mercado
            "Hip Hop": 1200,
            "Rock": 900,
            "Eletrônica": 700,
            "R&B": 600,
            "Country": 400,
            "Reggae": 300,
            "Jazz": 200,
            "Clássica": 150,
        };

    // Ordenar os dados pela quantidade de ouvintes em ordem decrescente
    const ordenados = Object.entries(dadosMundiais).sort((a, b) => b[1] - a[1]);
    const nomeDosEstilos = ordenados.map(item => item[0]);
    const quantidadeDeOuvintes = ordenados.map(item => item[1]);

// Adicionar texto explicativo
const textoExplicativo = document.createElement('p');
textoExplicativo.classList.add('graficos-container__texto');
textoExplicativo.innerHTML = `
    <span style="font-weight: bold; color: ${getCSS('--secondary-color')}">A música conecta pessoas em todo o mundo!</span>
    <br><br>
    Estima-se que, em média, as pessoas passem cerca de <strong>2 a 3 horas por dia</strong> ouvindo música, com aproximadamente <strong>80%</strong> da população mundial escutando algum tipo de música.
    <br><br>
    Este gráfico ilustra a popularidade dos estilos musicais mais ouvidos globalmente, refletindo as diversas preferências culturais em diferentes regiões.
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
            text: 'Estilos musicais mais ouvidos em escala mundial',
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
            range: [0, 4000] // Ajuste conforme necessário
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

estilosMusicaisMundiais();
