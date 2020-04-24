import React, { Component, useState } from 'react';
import { StyleSheet, FlatList, View, Text, Picker } from 'react-native';
import Header from '../components/Header';
import ItemExpense from '../components/ItemExpense';
import { getAllExpenses, getCategories, getExpensesByCategory, getTotalAmount, getTotalCategoryAmount } from '../gastappService';

class ExpensesScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id_user: 2,
      expenses: [],
      totalAmount: 0,
      category: 'all',
      categories: ["all"]
    }
  }

  loadAllExpenses() {
    getAllExpenses(this.state.id_user).then(res => this.setState({expenses: res}))
  }

  loadCategoryExpenses() {
    getExpensesByCategory(this.state.id_user, this.state.category).then(res => this.setState({expenses: res}))
  }

  loadCategories() {
    getCategories().then(res => this.setState({categories: this.state.categories.concat(res)}));
  }

  loadTotalAndExpenses() {
    if (this.state.category == "all") {
      getTotalAmount(this.state.id_user).then(res => this.setState({totalAmount: res[0]["total"]}, this.loadAllExpenses));
    }
    else {
      getTotalCategoryAmount(this.state.id_user, this.state.category).then(res => this.setState({totalAmount: res[0]["total"]}, this.loadCategoryExpenses));
    }
  }

  componentDidMount() {
    this.loadCategories();
    this.loadTotalAndExpenses();
  }

  render = () => {
      return (
        <View style={styles.view}>
          <Header title="Gastapp"/>
          <View style={styles.totalView}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${this.state.totalAmount}</Text>
          </View>
          <Text style={styles.titlePicker}>
            Select a category
          </Text>
          <View style={styles.pickerView}>
            <Picker
              selectedValue={this.state.category}
              onValueChange={(category) => this.setState({category: category}, this.loadTotalAndExpenses)}
            >
              {this.state.categories.map(
                (item, key) => (<Picker.Item label={item} value={item} key={key} />)
              )}
            </Picker>
          </View>
          <FlatList 
            style={styles.list}
            data={this.state.expenses} 
            renderItem={({item}) => <ItemExpense item={item}></ItemExpense>}
            keyExtractor={(item) => item._id.$oid}
          />
        </View>
      )
  }
}

const styles = StyleSheet.create({
  pickerView: {
      marginLeft:5,
      marginRight:5,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: "white",
      marginBottom: 5
  },
  pickerView2: {
    marginLeft:10,
    marginRight:10,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 0,
    backgroundColor: "white",
    marginBottom: 10,
  },
  titlePicker: {
    marginLeft:12,
  },
  view: {
    flex: 1,
    backgroundColor: "white"
  },
  list: {
    paddingBottom: 20,
  },
  totalView: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 5,
    marginVertical: 5,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
  },
  totalPrice: {
    textAlign: 'right',
    flex: 1, 
    fontSize: 20,
    marginRight: 10,
  },
  totalText: {
    textAlign: 'left',
    flex: 1,   
    fontSize: 15,
    marginLeft: 10,
  },
});

export default ExpensesScreen;