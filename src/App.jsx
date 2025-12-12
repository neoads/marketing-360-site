import Header from './components/Header';
import conspiraPizzaImage from './assets/conspira_pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container mx-auto p-4">
        <section className="my-8 text-center">
          <img src={conspiraPizzaImage} alt="Marketing 360 LTDA" className="mx-auto mb-4 w-48 h-48" />
          <h1 className="text-4xl font-bold">Marketing 360 LTDA</h1>
          <h2 className="text-2xl mb-8">33.736.324/0001-41</h2>
          <h2 className="text-3xl font-bold mb-4">NOSSA MISSÃO:</h2>
          <p className="text-lg italic max-w-3xl mx-auto">
            "Oferecer as mais deliciosas pizzas artesanais com qualidade, sabor e inovação, transformando momentos em experiências únicas e acolhedoras. Com mais de 5 anos de tradição no mercado, buscamos superar as expectativas dos nossos clientes através de um atendimento personalizado, produtos frescos e design inspirador, sempre com transparência e comprometimento. Nossa missão é ajudar a criar memórias que reflitam alegria, conforto e satisfação, tornando cada pedido uma experiência memorável."
          </p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">CONTATO:</h2>
          <p className="text-lg">Telefone: (31) 97319-8749</p>
          <p className="text-lg">E-mail: cotato@corssar.com</p>
          <p className="text-lg"><a href="https://www.instagram.com/conspirapizza/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">INSTAGRAM</a></p>
        </section>

        <section className="my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">QUEM SOMOS?</h2>
          <p className="text-lg max-w-3xl mx-auto text-justify">
            A <strong className="font-bold">Marketing 360 LTDA</strong>, registrada sob o CNPJ <strong className="font-bold">33.736.324/0001-41</strong>, foi fundada em <strong className="font-bold">27 de maio de 2019</strong>, na cidade de <strong className="font-bold">Belo Horizonte, Minas Gerais</strong>. Como uma empresa consolidada no mercado, atuamos no segmento de <strong className="font-bold">marketing digital e consultoria</strong>, oferecendo produtos que unem <strong className="font-bold">sabor, qualidade e agilidade</strong> para transformar refeições em momentos especiais.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Nossa atividade principal, conforme a Receita Federal, é <strong className="font-bold">Agências de publicidade (CNAE 73.11-4-00)</strong>, abrangendo desde pizzas tradicionais até criações especiais que complementam e personalizam cada pedido. Com mais de <strong className="font-bold">5 anos de experiência</strong>, nos destacamos pela <strong className="font-bold">variedade de sabores, ingredientes frescos e atendimento especializado</strong>, sempre buscando atender às necessidades e expectativas dos nossos clientes.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Localizada na <strong className="font-bold">Rua Rita Marcelina, 565, Boa Vista, Belo Horizonte-MG (CEP 31070-360)</strong>, nossa agência é referência no bairro e região, proporcionando uma experiência de sabor agradável e personalizada. Valorizamos a <strong className="font-bold">transparência, o bom gosto e a satisfação do cliente</strong>, garantindo que cada pedido seja executado com excelência.
          </p>
          <p className="text-lg max-w-3xl mx-auto text-justify mt-4">
            Na <strong className="font-bold">Marketing 360 LTDA</strong>, acreditamos que <strong className="font-bold">o sucesso do cliente reflete a paixão de quem o faz</strong>. Por isso, nosso compromisso vai além da venda de serviços: queremos ajudar você a criar <strong className="font-bold">momentos únicos, saborosos e cheios de estilo</strong>, seja em casa ou no trabalho.
          </p>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Produtos e Serviços Disponíveis:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Consultoria em Marketing Digital</strong> – Sabores que combinam <strong className="font-bold">tradição, criatividade e qualidade</strong>.</li>
            <li><strong className="font-bold">Gestão de Mídias Sociais</strong> – Itens que complementam e dão vida à sua refeição.</li>
            <li><strong className="font-bold">Atendimento Personalizado</strong> – Auxílio na escolha das melhores estratégias para seu negócio.</li>
            <li><strong className="font-bold">Qualidade e Agilidade</strong> – Estratégias personalizadas e resultados rápidos.</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Informações da Empresa:</h3>
          <ul className="list-disc list-inside text-lg text-left">
            <li><strong className="font-bold">Razão Social:</strong> Marketing 360 LTDA</li>
            <li><strong className="font-bold">CNPJ:</strong> 33.736.324/0001-41</li>
            <li><strong className="font-bold">Data de Abertura:</strong> 27/05/2019</li>
            <li><strong className="font-bold">Porte:</strong> Micro Empresa</li>
            <li><strong className="font-bold">Natureza Jurídica:</strong> Sociedade Empresária Limitada</li>
            <li><strong className="font-bold">Opção pelo MEI:</strong> Não</li>
            <li><strong className="font-bold">Opção pelo Simples:</strong> Sim</li>
            <li><strong className="font-bold">Data opção Simples:</strong> 27/05/2019</li>
            <li><strong className="font-bold">Situação Cadastral:</strong> Ativa</li>
            <li><strong className="font-bold">Data Situação Cadastral:</strong> 27/05/2019</li>
            <li><strong className="font-bold">Tipo:</strong> Matriz</li>
            <li><strong className="font-bold">Capital Social:</strong> R$ 20.000,00</li>
            <li><strong className="font-bold">Inscrição Estadual (SP):</strong> 123.794.412.110</li>
          </ul>
        </section>

        <section className="my-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Localização e Contato:</h3>
          <p className="text-lg">📍 <strong className="font-bold">Endereço:</strong> Rua Rita Marcelina, 565, Boa Vista, Belo Horizonte-MG, <strong className="font-bold">CEP 04753-140</strong></p>
          <p className="text-lg">📞 <strong className="font-bold">Telefone/WhatsApp:</strong> <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">(31) 97319-8749</a></p>
          <p className="text-lg mt-4">Na <strong className="font-bold">Marketing 360 LTDA</strong>, estamos prontos para ajudar você a <strong className="font-bold">alcançar os melhores resultados</strong>. Peça já e descubra como <strong className="font-bold">uma estratégia bem definida pode transformar qualquer negócio em um sucesso! 🚀✨</p>
        </section>

        <section className="my-8 text-center">
          <a href="https://wa.me/5531973198749" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline"><h2 className="text-3xl font-bold mb-4">Fale comigo:</h2></a>
          {/* Formulário de contato ou link para WhatsApp */}
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8 mt-8">
        <div className="container mx-auto max-w-3xl">
          <h3 className="text-xl font-bold mb-4">RODAPÉ & POLÍTICA DE PRIVACIDADE</h3>
          <h4 className="text-lg font-bold mb-2">Marketing 360 LTDA</h4>
          <p className="text-sm"><strong>CNPJ:</strong> 33.736.324/0001-41</p>
          <p className="text-sm"><strong>Razão Social:</strong> Marketing 360 LTDA</p>
          <p className="text-sm"><strong>Data de Abertura:</strong> 27/05/2019</p>
          <p className="text-sm"><strong>Porte:</strong> Micro Empresa</p>
          <p className="text-sm"><strong>Natureza Jurídica:</strong> Sociedade Empresária Limitada</p>
          <p className="text-sm"><strong>Situação Cadastral:</strong> Ativa</p>
          <p className="text-sm"><strong>Tipo:</strong> Matriz</p>
          <p className="text-sm"><strong>Capital Social:</strong> R$ 20.000,00</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Rita Marcelina, 565, Boa Vista, Belo Horizonte-MG</p>
          <p className="text-sm"><strong>CEP:</strong> 31070-360</p>
          <p className="text-sm"><strong>E-mail:</strong> cotato@corssar.com</p>
          <p className="text-sm"><strong>Telefone/WhatsApp:</strong> (31) 97319-8749</p>
          <p className="text-sm italic mt-4">Transformando negócios com marketing e consultoria desde 2019</p>

          <h4 className="text-lg font-bold mt-8 mb-2">POLÍTICA DE PRIVACIDADE</h4>
          <p className="text-sm"><strong>Marketing 360 LTDA</strong></p>
          <p className="text-sm"><strong>CNPJ:</strong> 33.736.324/0001-41</p>
          <p className="text-sm"><strong>Endereço:</strong> Rua Rita Marcelina, 565, Boa Vista, Belo Horizonte-MG, CEP 31070-360</p>

          <h5 className="text-md font-bold mt-4 mb-2">1. Finalidade</h5>
          <p className="text-sm">Esta política descreve como coletamos, utilizamos e protegemos os dados pessoais dos clientes que interagem conosco por meio de WhatsApp, e-mail, telefone, redes sociais ou durante visitas à nossa agência.</p>

          <h5 className="text-md font-bold mt-4 mb-2">2. Dados Coletados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Informações fornecidas voluntariamente:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Nome, telefone, e-mail, endereço (para orçamentos ou propostas).</li>
                <li>Preferências de serviço e necessidades de consultoria.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Dados automáticos:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Registro de interações para atendimento e melhoria de serviços.</li>
                <li>Dados de navegação (se aplicável a site ou redes sociais).</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">3. Uso de WhatsApp, Telefone e E-mail</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">Finalidades:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Atendimento ao cliente, orçamentos, agendamento de reuniões e confirmação de propostas.</li>
                <li>Não enviamos mensagens promocionais não solicitadas sem consentimento.</li>
              </ul>
            </li>
            <li><strong className="font-bold">Armazenamento:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Dados de contato e interações são armazenados por <strong className="font-bold">12 meses</strong>, exceto quando exigido por lei.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">4. Compartilhamento de Dados</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Não comercializamos ou compartilhamos dados com terceiros para fins publicitários.</li>
            <li><strong className="font-bold">Exceções:</strong>
              <ul className="list-disc list-inside text-sm ml-4">
                <li>Parceiros de tecnologia (apenas informações necessárias para execução de serviços).</li>
                <li>Autoridades legais, mediante requisição formal.</li>
              </ul>
            </li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">5. Direitos do Usuário (LGPD)</h5>
          <p className="text-sm">Você pode solicitar:</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Acesso ou correção dos seus dados.</li>
            <li>Exclusão (exceto quando a lei exigir retenção).</li>
            <li>Revogação de consentimento (via e-mail ou telefone).</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">6. Segurança</h5>
          <ul className="list-disc list-inside text-sm ml-4">
            <li>Dados protegidos com acesso restrito à equipe autorizada.</li>
            <li>Não solicitamos informações sensíveis (como CPF ou cartões de crédito) por mensagens não criptografadas.</li>
          </ul>

          <h5 className="text-md font-bold mt-4 mb-2">7. Alterações nesta Política</h5>
          <p className="text-sm">Atualizações serão comunicadas em nossos canais oficiais.</p>

          <h5 className="text-md font-bold mt-4 mb-2">8. Contato</h5>
          <p className="text-sm">Dúvidas ou solicitações sobre seus dados?</p>
          <ul className="list-disc list-inside text-sm ml-4">
            <li><strong className="font-bold">WhatsApp:</strong> (31) 97319-8749</li>
            <li><strong className="font-bold">E-mail:</strong> cotato@corssar.com</li>
          </ul>
          <p className="text-sm mt-4">© 2024 Marketing 360 LTDA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

