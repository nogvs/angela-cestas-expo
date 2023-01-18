import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('screen').width;

export default function Topo({ imagemCesta }){
    return  <Image source={imagemCesta}  style={estilos.topo}/>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
    }
})