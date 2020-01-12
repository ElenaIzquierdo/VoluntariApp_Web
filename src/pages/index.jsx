import React from "react";
import Base from "../components/base";
import {
    Row,
} from 'reactstrap';
import connect from "react-redux/es/connect/connect";
import {} from "../actions/homeActions";


class Home extends React.Component{
    render(){
        
        return(
            <div>
                <Base/>
                <div className="viewStyle">
                    <div className="div-welcome">   
                        <h1 className="title-style">Benvingut a VoluntariApp!</h1>
                    </div>
                    <Row>
                        <div className="column column-left">
                            <p className="titleCardStyle">Esdeveniments</p>
                            <p className="text-style">A la pestanya Esdeveniments pots veure tota la informació sobre les setmanes de cada trimestre.</p> 
                            <p className="text-style">  
                                Per cada setmana pots veure totes les activitats que estiguin programades. I per cada activitat pots veure l'horari, el dia, 
                                i es pot penjar i descarregar la fitxa associada.</p>
                            <p className="text-style">Per les activitats que ja s’han realitzat pots passar llista dels monitors que han assistit i 
                                afegir la valoració que s’ha fet amb els infants i durant el diari de sortida. </p>
                        </div>
                        <div className="column">
                            <p className="titleCardStyle">Forum</p>
                            <p className="text-style">
                                A la pestanya de Fòrum pots veure tots els temes que s’estan parlant i dels que s’han parlat. 
                            </p>
                            <p className="text-style">
                                Pots filtrar-los i ordenar-los amb els filtres que estan a la part superior.
                                I si cliques en un tema pots veure els detalls d'aquest, també pots obrir-los i tancar-los. 
                            </p>
                            <p className="text-style">
                                Aquests temes els pots crear tu i també els poden crear els monitors, 
                                d’aquesta manera es poden repartir les responsabilitats i poden col·laborar molt més fora del casal! 
                            </p>
                        </div>
                        <div className="column column-right">
                            <p className="titleCardStyle">Centre d'interes</p>
                            <p className="text-style">A la pestanya Centre Interes podràs veure tota la informació associada al Centre d'interès d'aquest curs </p>
                            <p className="text-style">Podràs veure una llista amb tots els objectius que es pretenen assolir. També veuràs una llista amb el que 
                                                        es planeja fer cada dia per assolir-los.</p>
                            <p className="text-style">Tota aquesta informació la podràn veure tots els que formen part del teu grup, 
                                d’aquesta manera tothom està al dia sense necessitat de notificar tots els canvis en persona.</p>
                        </div>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};
const  mapDispatchToProps = (dispatch)=>{
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
