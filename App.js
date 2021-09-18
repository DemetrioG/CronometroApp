import React, { Component } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      name: 'Start',
      lastTime: null,
    }

    this.timer = null
    this.start = this.start.bind(this)
    this.clear = this.clear.bind(this)
  }

  start(){

    if (this.timer != null) {

      //Para o timer
      clearInterval(this.timer)
      this.timer = null  

      this.setState({name: 'Start'})
    }
    else {

      //Inicia o timer
      this.timer = setInterval( () => {
        this.setState({number: this.state.number + 0.1})
      }, 100)

      this.setState({name: 'Stop'})
    } 
  }

  clear(){
    this.setState({
      lastTime: this.state.number,
      number: 0
    })  
  }

  render(){
    return(
      <View style={style.container}>

        <Image source={require('./src/cronometro.png')} style={style.cronometer}/>
        <Text style={style.timer}>{this.state.number.toFixed(1)}</Text>

        <View style={style.btnView}>
          <TouchableOpacity style={style.btn} onPress={this.start}>
            <Text style={style.btnText}>{this.state.name}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.btn} onPress={this.clear}>
            <Text style={style.btnText}>Clear</Text>
          </TouchableOpacity>
        </View>

        <View style={style.lastView}>
          <Text style={style.lastTimeText}>
            {this.state.lastTime > 0 ? `Último tempo: ${this.state.lastTime.toFixed(2)}s` : ''}
          </Text>
        </View>
        
      </View>
    )
  }
}

const style = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9564F',
  },

  timer: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: -150,
    color: '#FFFF',
  },

  btnView: {
    flexDirection: 'row',
    marginTop: 150,
    height: 80
  },

  btnText: {
    color: '#FFF',
    fontSize: 18
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ce7673',
    margin: 15,
    borderRadius: 10
  },

  lastView: {
    marginTop: 20,
  },

  lastTimeText: {
    color: '#FFF',
    fontSize: 18,
    fontStyle: 'italic',
  }
})
