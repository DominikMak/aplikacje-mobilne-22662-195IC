import React, {Component} from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import styles from './style'

export default class Sort extends Component {

    constructor(){
        super();
        const numbers = [];
        for (let i=0; i<100; i++) {
            numbers.push(Math.floor(Math.random() * 999) + 1);
        }
        this.state = {
            numbers: numbers, 
            sortedUp: 0,
            sortedDown: 0
        };

        this.writeNumbers = this.writeNumbers.bind(this);
        this.generate = this.generate.bind(this);
        this.sortDown = this.sortDown.bind(this);
        this.sortUp = this.sortUp.bind(this);
    }
    writeNumbers(numbers) {
        let i = 0;
        return(
            <View style={styles.sort.numbers}>
                {numbers.map(number => <Text key={i++} style={styles.sort.nrText}>{number}</Text>)}
                </View>
        )
    }
    generate(){
        const newNumbers = [];
        for (let i=0; i<100; i++) {
            newNumbers.push(Math.floor(Math.random() * 999) + 1);
        }

        this.setState({
            numbers: newNumbers,
            sortedUp: 0,
            sortedDown: 0
        });
    }
    sortDown(){
        if(this.state.sortedDown == 0){
            const numbers = this.state.numbers
            this.setState({
                numbers: numbers.sort((a,b) => a > b ? -1:1),
                sortedDown: 1,
                sortedUp: 0
            })
        }
    }
    sortUp(){
        if(this.state.sortedUp == 0){
            const numbers = this.state.numbers
            this.setState({
                numbers: numbers.sort((a,b) => a > b ? 1:-1),
                sortedUp: 1,
                sortedDown: 0
            })
        }
    }
    render(){
    return (
        <ScrollView>
      <View style={styles.home.container}>
          <View style={styles.sort.sort}>
              <View style={styles.sort.description}>
                  <Text style={styles.sort.text}>Sorting 100 random numbers.</Text>
              </View>
              <View style={styles.sort.options}>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.generate}><Text style={styles.sort.optText}>Wygeneruj</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.sortDown}><Text style={styles.sort.optText}>Sortuj ↓</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.sort.optButton} onPress={this.sortUp}><Text style={styles.sort.optText}>Sortuj ↑</Text></TouchableOpacity>
              </View>
              {this.writeNumbers(this.state.numbers)}
          </View>
      </View>
      </ScrollView>
    );
}
}