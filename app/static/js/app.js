const root = document.documentElement;
const previewTitle = document.getElementById('previewTitle');
const previewList = document.getElementById('previewList');
const m1 = document.getElementById('m1');
const m2 = document.getElementById('m2');
const m3 = document.getElementById('m3');
const segmentButtons = document.querySelectorAll('#segmentButtons button');
const colorButtons = document.querySelectorAll('.color-palette .color-dot');

const presets = {
  patrimonial: {
    title: 'Controle patrimonial com leitura rápida e gestão por setor',
    metrics: ['2.481', '18', '94%'],
    list: ['Cadastro por unidade', 'Histórico por item', 'Relatório de manutenção', 'Perfil de acesso']
  },
  food: {
    title: 'Operação de lanchonete com pedidos, cozinha e gestão em tempo real',
    metrics: ['384', '12 min', '96%'],
    list: ['Painel de pedidos', 'Controle de estoque', 'Status da cozinha', 'Relatório de vendas']
  },
  dashboard: {
    title: 'Dashboard executivo para leitura estratégica sem ruído',
    metrics: ['R$ 182k', '+26%', '11'],
    list: ['Meta vs realizado', 'Financeiro consolidado', 'Indicadores por equipe', 'Resumo diário automático']
  },
  landing: {
    title: 'Landing page premium pensada para gerar percepção de valor e orçamento',
    metrics: ['5.2%', '42', 'R$ 39'],
    list: ['Hero com CTA forte', 'Provas sociais', 'Oferta clara', 'Captação integrada']
  }
};

const themes = {
  violet: { accent: '#7c5cff', rgb: '124, 92, 255' },
  cyan: { accent: '#18c7ff', rgb: '24, 199, 255' },
  gold: { accent: '#ffb703', rgb: '255, 183, 3' },
  green: { accent: '#17c964', rgb: '23, 201, 100' }
};

function applySegment(key) {
  const data = presets[key];
  if (!data || !previewTitle) return;
  previewTitle.textContent = data.title;
  m1.textContent = data.metrics[0];
  m2.textContent = data.metrics[1];
  m3.textContent = data.metrics[2];
  previewList.innerHTML = data.list.map(item => `<div>${item}</div>`).join('');
}

function applyTheme(key) {
  const data = themes[key];
  if (!data) return;
  root.style.setProperty('--accent', data.accent);
  root.style.setProperty('--accent-rgb', data.rgb);
}

segmentButtons.forEach(button => {
  button.addEventListener('click', () => {
    segmentButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applySegment(button.dataset.segment);
  });
});

colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    colorButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    applyTheme(button.dataset.theme);
  });
});
