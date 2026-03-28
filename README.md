# BlackForge Systems MVP

Landing page premium em Flask para vender sistemas sob medida para empresas, com preview interativo, formulário de leads salvo no banco e área administrativa simples.

## Stack
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- PostgreSQL
- Gunicorn
- Railway

## O que já vem no MVP
- Landing page comercial com copy pronta
- Black theme premium com animações leves
- Preview interativo por segmento + troca de cor de destaque
- Formulário de captação de leads salvando no banco
- Área `/admin` para login
- Área `/admin/leads` para visualizar leads
- Estrutura pronta para evoluir em módulos

## Instalação local
```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
# ou .venv\Scripts\activate no Windows
pip install -r requirements.txt
cp .env.example .env
flask --app wsgi:app db init
flask --app wsgi:app db migrate -m "initial"
flask --app wsgi:app db upgrade
python run.py
```

## Deploy no Railway
1. Suba os arquivos no GitHub.
2. Crie um projeto no Railway conectado ao repositório.
3. Adicione um serviço PostgreSQL.
4. Configure as variáveis:
   - `SECRET_KEY`
   - `DATABASE_URL` (normalmente o Railway injeta sozinho no Postgres)
   - `ADMIN_USER`
   - `ADMIN_PASSWORD`
5. Após o primeiro deploy, rode no shell do Railway:
```bash
flask --app wsgi:app db init
flask --app wsgi:app db migrate -m "initial"
flask --app wsgi:app db upgrade
```

## Próximas evoluções recomendadas
- Integração com WhatsApp
- Funil comercial por status
- Área de portfólio dinâmica
- CMS para editar textos do site
- Múltiplos templates por nicho
- Envio automático de e-mail para novos leads
- Painel com métricas comerciais
