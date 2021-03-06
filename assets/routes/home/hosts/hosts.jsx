var React = require('react');
require('./hosts.styl');
var hosts = [
  {
    nombre:"Felipe",
    apodo:"fforres",
    img:"https://pbs.twimg.com/profile_images/605959417935204352/qQGF7U7m.png",
    twitter:"fforres",
    descripcion:"Loves balls"
  },
  {
    nombre:"Nicolas",
    apodo:"burabure",
    img:"https://pbs.twimg.com/profile_images/631488570591682560/c1D4SR3P.jpg",
    twitter:"elburabure",
    descripcion:"Lorem ipsum dolor sit luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque."
  },
  {
    nombre:"Luis",
    apodo:"luchito",
    img:"https://pbs.twimg.com/profile_images/669330216326701056/Y-4rr0Gs.jpg",
    twitter:"lporras16",
    descripcion:"Lorem ipsum dolor sit luca melón con vino pichanga coscacho ni ahí peinar la muñeca chuchada al chancho achoclonar. Chorrocientos pituto ubicatex huevo duro bolsero cachureo el hoyo del queque en cana huevón el año del loly hacerla corta impeque.."
  }
];

var Presenter = React.createClass({
  render : function(){
    return  (
      <div className="col-sm-4 col-md-4 col-xs-6">
        <div className="">
          <img src={this.props.img} alt={this.props.twitter} className="img-rounded"/>
          <div className="caption">
            <a className="" href={"http://twitter.com/"+this.props.twitter} target="_blank">
              <h3 className="text-center">
                <span>{this.props.nombre}</span>
                <i className="fa fa-fw fa-twitter"/>
              </h3>
            </a>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = React.createClass({
  render : function() {
    var presenters = hosts.map(function(host){
      return (
        <Presenter
          nombre={host.nombre}
          img={host.img}
          apodo={host.apodo}
          descripcion={host.descripcion}
          twitter={host.twitter}
          />
      );
    });
    return (
      <div className="block col-xs-12 display-table hosts-info">
        <div className="col-xs-12 text-center title"><h1>Te llevan a esta mágica aventura:</h1></div>
        <div className="col-xs-12 col-md-8 col-md-offset-2">{presenters}</div>
      </div>
    );
  }
});
