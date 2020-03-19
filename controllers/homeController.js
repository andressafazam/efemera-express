const homeController = {
    index: (req,res) => {

        let servicos = [
            {nome: 'Desenvolvimento Web', imagem: '/imagens/undraw_dev_focus.svg'},
            {nome: 'Marketing Digital', imagem: '/imagens/undraw_social_dashboard.svg'},
            {nome: 'Consultoria UX', imagem: '/imagens/undraw_mobile_apps.svg'}
        ];

        let banners = [ '/imagens/banner.jpg', '/imagens/banner1.jpg', '/imagens/banner2.jpg' ];
        
        res.render( 'index', { title: 'Home', listaServicos: servicos, listaBanners: banners } );
    }
};

module.exports = homeController;