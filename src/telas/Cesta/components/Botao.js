import React, { useState } from 'react';
import { View, Pressable, TouchableOpacity, StyleSheet } from 'react-native';
import Texto from "../../../components/Texto";

export default function Botao ({preco}){
   
    const [count, setCount] = useState(1);
    const precoCalculado = parseInt(preco) * count;

    return <View style={estilos.container}>  
         <Pressable style={estilos.botao} onPress={() => {

            if(count < 2){
                setCount(1)
            } else {
                setCount(current => current - 1);
            }
        }}>
               <Texto style={estilos.texto}>-</Texto>
               </Pressable>
               <Texto>{count}</Texto>
               <Pressable style={estilos.botao} onPress={() => {
          if(count > 10){
            setCount(10)
        } else {
            setCount(current => current + 1);
        }
        }}>
               <Texto style={estilos.texto}>+</Texto>
               </Pressable>
    <TouchableOpacity style={estilos.botao} onPress={()=>{}}>
              <View style={estilos.textoBotao}>
               <Texto style={estilos.texto}>Adicionar</Texto>
               
               <Texto style={estilos.texto}>R$ {precoCalculado},00</Texto>
              </View>
            </TouchableOpacity>
            </View>
}

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: "#EC5569",
        marginTop: 16,
        paddingVertical: 16,
        borderRadius: 6
    },
    container: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    textoBotao: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    texto: {
        color: "#FFF",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold",
        paddingHorizontal: 16
    }
})