module.exports.useMiddlewares = async( express, app , path , session, cookieParser, i18n ) =>{
    const allowCrossDomain = function(req, res, next){
        res.header('Access-Control-Allow-Origin','*');
        res.header('Access-Control-Allow-Header','*');
        next();
    }
    app.use(allowCrossDomain)
    app.use(require('morgan')('dev'))
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(session({
        secret: 'secret',
        saveUninitialized: true,
        resave: true
    }));
    
    app.use(i18n({
        translationsPath: path.join(__dirname, 'i18n'),
        siteLangs: ["uz","en"],
        textsVarName: 'translation'
    }));
    app.get('/',(req, res)=> {
        res.render('index',{title:"home"})
    })
    app.use(express.urlencoded({extended: false}))
    app.use(express.static('public/uploads'));
    app.use(express.json())
    app.use('/api/fakultet',  require('./routes/fakultet'))
    // app.use('/api/kafedra',  require('./routes/kafedra'))
    // app.use('/api/professor',  require('./routes/professor'))
    // app.use('/api/proud',  require('./routes/proud'))
    // app.use('/api/career',  require('./routes/career'))
    // app.use('/api/about',  require('./routes/about'))
    // app.use('/api/goal',  require('./routes/goal'))
    // app.use('/api/process',  require('./routes/process'))
}