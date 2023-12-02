export default {
	nav: {
		logo: 'Logo contendo uma letra G',
		home: 'Início',
		about: 'Sobre mim',
		certificates: 'Certificados',
		projects: 'Projetos',
		blog: 'Blog',
		language: 'Mudar idioma',
		theme: 'Mudar tema',
		menu: 'Abrir o menu',
	},
	home: {
		title: 'Início',
		im: 'Eu sou o',
		simple_im: 'Eu sou o',
		aka: 'ou',
		subtitle: 'Desenvolvedor Full Stack • Técnico em Informática • Fã de Persona',
	},
	about: {
		title: 'Sobre mim',
		description: 'Conheça minha jornada profissional, as coisas de tecnologia que curto, um monte de fotos e os certificados que me fazem parecer respeitável. É tudo sobre mim, sem enrolação. Aproveitem!',
		learner: 'Sou um autodidata dedicado, sempre ansioso para aprender novas tecnologias e abordagens. Minha capacidade de aprendizado rápido me permite acompanhar as tendências em constante evolução da tecnologia.',
		experience: 'Experiência',
		unicarioca: 'Centro Universitário Unicarioca',
		cs: 'Ciências da Computação',
		cbpf: 'Centro Brasileiro de Pesquisas Físicas',
		full_stack: 'Desenvolvedor Full Stack',
		twnt: '2019 - presente',
		stack: 'Tecnologias',
		pictures: 'Fotos',
	},
	certificates: {
		title: 'Certificados',
		description: 'Explore minha coleção de certificados de cursos, eles mostra meu compromisso com o aprendizado e o crescimento.',
	},
	projects: {
		title: 'Projetos',
		description: 'Explore meus projetos, elaborados com Nuxt, Vue, Tailwind CSS e outras tecnologias interessantes.',
		rosa_description: '🧑🏻‍💼 Minha página web',
		karine_description: '👩🏻‍💼 Página web da minha namorada',
		ldapsha512_description: '🔑 Gerador de senha Ldap sha512-crypt para o node',
		idcbpf_description: '👥 Gerenciador de contas Ldap',
		agenda_auditorios_description: '🏟 Simplificando e organizando eventos de auditório com facilidade e eficiência',
	},
	blog: {
		title: 'Blog',
		description: 'Aqui compartilho dicas e soluções para os desafios da programação. Encontre insights práticos e abordagens eficazes para aprimorar suas habilidades.',
	},
	posts: {
		primevue_locale_dynamic: {
			title: 'Como Alternar Dinamicamente o locale do PrimeVue',
			description: 'Aprenda a adaptar perfeitamente a sua aplicação PrimeVue a diferentes idiomas.',
			paragraph1: 'Hoje, enquanto trabalhava em um projeto desenvolvido com o Nuxt.js, deparei-me com a necessidade de implementar a internacionalização (i18n) para suportar os idiomas português e inglês. Para alcançar esse objetivo, integrei o módulo {\'@\'}nuxtjs/i18n, que facilita a localização do aplicativo.',
			paragraph2: 'Além disso, o projeto faz uso do nuxt-primevue, um conjunto abrangente de componentes para Nuxt. A fim de proporcionar uma experiência totalmente localizada, foi necessário configurar não apenas a tradução do aplicativo, mas também dos componentes fornecidos pelo PrimeVue.',
			paragraph3: 'Felizmente, o PrimeVue já oferece arquivos de localização para vários idiomas em seu repositório oficial, facilitando a integração com diferentes línguas.',
			paragraph4: 'A configuração da internacionalização para o PrimeVue é relativamente simples. No entanto, surgiu um desafio adicional: a necessidade de alterar dinamicamente o idioma do PrimeVue, sem a necessidade de recarregar a página. Enquanto o {\'@\'}nuxtjs/i18n possibilitava essa troca dinâmica de idiomas para o aplicativo, a mesma funcionalidade para o PrimeVue apresentou algumas dificuldades.',
			paragraph5: 'Este artigo visa compartilhar os desafios encontrados durante esse processo e fornecer soluções para esses problemas específicos. A abordagem detalhada aqui visa facilitar a implementação bem-sucedida da internacionalização tanto para o aplicativo quanto para os componentes do PrimeVue, permitindo uma experiência de usuário perfeitamente localizada e dinâmica.',
			paragraph6: 'Um dos primeiros problemas que encontrei estava, na verdade, relacionado ao {\'@\'}nuxtjs/i18n. A configuração do módulo estava inicialmente assim:',
			paragraph7: 'Como você pode perceber, o i18n estava configurado para ler a pasta \'locales\', e um dos detalhes desse módulo que eu não sabia é que ele lê e modifica todos os arquivos contidos nessa pasta. Por não estar ciente desse detalhe, coloquei os locales do PrimeVue dentro dessa pasta da seguinte forma:',
			paragraph8: 'Desta forma, ao aplicar um desses locales no PrimeVue, o texto dos componentes ficavam da seguinte forma:',
			paragraph9: 'Como mencionado anteriormente, o i18n irá modificar todos os arquivos na pasta "locale", inclusive o locale do PrimeVue. Portanto, a primeira solução é NÃO colocar o locale do PrimeVue na mesma pasta do módulo i18n. No meu caso, optei por colocá-lo na pasta \'utils\', para que fosse automaticamente importado quando eu alterasse dinamicamente o locale.',
			paragraph10: 'O segundo problema ocorreu porque eu não estava chamando o usePrimeVue() no topo do bloco setup, mas sim, dentro de uma função. Resumindo o problema, se o seu código estiver da seguinte forma, você encontrará um erro, pois o usePrimeVue() utiliza o inject() do Vue, que está disponível apenas no topo do bloco setup.',
			paragraph11: 'A solução é realizar conforme exemplificado no código abaixo, executando o usePrimeVue no início do bloco setup e atribuindo o seu valor a uma variável que pode ser utilizada posteriormente dentro da função responsável por alterar o idioma. Além disso, é possível aproveitar para modificar o idioma do i18n.',
			paragraph12: 'E voilà, seu código agora estará funcionando perfeitamente, com o idioma sendo alterado dinamicamente, tanto no módulo do i18n quanto no do PrimeVue! 😊',
			paragraph13: 'Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me encontrar em qualquer uma das redes sociais listadas abaixo. Muito obrigado por ler!',
		},
	},
}
