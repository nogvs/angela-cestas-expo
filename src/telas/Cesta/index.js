import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Detalhes from "./components/Detalhes";
import Topo from "./components/Topo";
import Item from "./components/Item";

import Texto from "../../components/Texto";
import Botao from "./components/Botao";

export default function Cesta({ topo, detalhes, itens }){
    return <>
    <FlatList 
    data={itens.lista} 
    renderItem={Item} 
    keyExtractor={({ nome }) => nome}
    ListHeaderComponent={() => {
        return <> 
        <Topo {...topo}/>
        <View style={estilos.cesta}>
          <Detalhes {...detalhes}/>
          <Texto style={estilos.titulo}>{itens.titulo}</Texto>
        </View>
        </>
    }}
    ListFooterComponent={() => {
        return <> 
        <View style={estilos.footer}>
        <Botao {...detalhes}/>
        </View>
        </> 
    }}
    />
 </>
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
    footer: {
        flexDirection: "row",
        paddingVertical: 8,
        paddingHorizontal: 16,
        justifyContent: "space-between"
    }
})