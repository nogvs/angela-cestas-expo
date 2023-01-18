import React from "react";
import { StyleSheet} from "react-native";
import Texto from "../../../components/Texto";

export default function Detalhes({ nomeCesta, descricao, preco}){
    return  <>  
        <Texto style={estilos.nomeCesta}>{nomeCesta}</Texto>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.preco}>R$ {preco},00</Texto>
    </>
}

const estilos = StyleSheet.create({
    nomeCesta: {
        color:"#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold", 
        marginTop: 16
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26, 
        marginTop: 16
    },
    preco: { 
        color: "#EC5569",
        fontWeight: "bold",  
        fontSize: 26,
        lineHeight: 42,
        marginTop: 16
    }
})