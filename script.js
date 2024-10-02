// Dados do gráfico global
const dadosGlobais = {
    redesSociais: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube', 'TikTok'],
    usuarios: [2.900, 2.000, 450, 950, 2.700, 1.200] // Dados do mundo
};

const dadosBrasil = {
    redesSociais: ['WhatsApp', 'YouTube', 'Instagram', 'Facebook', 'TikTok', 'LinkedIn', 'Messenger', 'Kwai', 'Pinterest', 'Twitter'],
    usuarios: [169, 142, 113, 109, 82, 63, 62, 48, 28, 24] // Dados em milhões
};


// Função para renderizar o gráfico
function renderizarGrafico(dados) {
    // Cria um array de pares [rede social, número de usuários]
    const dadosCombinados = dados.redesSociais.map((rede, index) => {
        return { rede, usuarios: dados.usuarios[index] };
    });

    // Ordena os dados do maior para o menor
    dadosCombinados.sort((a, b) => b.usuarios - a.usuarios);

    // Separa os dados ordenados em arrays para Plotly
    const xOrdenado = dadosCombinados.map(d => d.rede);
    const yOrdenado = dadosCombinados.map(d => d.usuarios);

    // Dados do gráfico
    const data = [{
        x: xOrdenado,
        y: yOrdenado,
        type: 'bar',
        marker: {
            color: '#F05454' // Cor das colunas
        }
    }];

    // Layout do gráfico
    const layout = {
        title: {
            text: 'Quantidade de Usuários por Rede Social',
            font: {
                color: '#F05454', // Cor do título
                size: 24 // Tamanho da fonte do título
            }
        },
        xaxis: {
            title: {
                text: 'Redes Sociais',
                font: {
                    color: '#F05454' // Cor da label
                }
            }
        },
        yaxis: {
            title: {
                text: 'Número de Usuários (milhares)',
                font: {
                    color: '#F05454' // Cor da label
                }
            }
        },
        paper_bgcolor: 'rgba(0, 0, 0, 0)', // Fundo transparente
        plot_bgcolor: 'rgba(0, 0, 0, 0)', // Fundo transparente
    };

    // Configurações para tornar o gráfico não interativo
    const config = {
        staticPlot: true // Torna o gráfico não interativo
    };

    // Renderiza o gráfico
    Plotly.newPlot('grafico', data, layout, config);
}

// Função para atualizar o texto descritivo
function atualizarTextoDescritivo(dados) {
    const descricaoContainer = document.querySelector('.grafico-descricao');
    
    if (dados === dadosGlobais) {
        descricaoContainer.innerHTML = `
            No mundo, existem aproximadamente <span class="destaque">8 bilhões de pessoas</span>. Dessas, cerca de 
            <span class="destaque">4,6 bilhões estão conectadas a alguma rede social</span>, representando um aumento significativo nos últimos anos. 
            Em média, os usuários passam cerca de <span class="destaque">2 horas e 31 minutos por dia</span> conectados às redes sociais, 
            interagindo com amigos, consumindo conteúdo e compartilhando suas experiências.
        `;
    } else {
        descricaoContainer.innerHTML = `
            No Brasil, existem aproximadamente <span class="destaque">213 milhões de pessoas</span>. Dessas, cerca de 
            <span class="destaque">153 milhões estão conectadas a alguma rede social</span>, refletindo o forte uso das plataformas digitais no país. 
            Em média, os usuários brasileiros passam cerca de <span class="destaque">3 horas por dia</span> conectados às redes sociais, 
            interagindo e consumindo conteúdo.
        `;
    }
}

// Evento de clique para o link "Minha Escola"
document.getElementById('minha-escola-link').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    renderizarGrafico(dadosBrasil); // Renderiza o gráfico do Brasil
    atualizarTextoDescritivo(dadosBrasil); // Atualiza o texto descritivo
});

// Renderiza o gráfico inicial com dados globais
renderizarGrafico(dadosGlobais);
atualizarTextoDescritivo(dadosGlobais); // Atualiza o texto descritivo inicial
