import React from 'react';
import { View, Text, Image, TouchableOpacity, Button, ScrollView, Alert, StyleSheet, TextInput} from 'react-native';



const styles= StyleSheet.create({
    container:{
        display:'flex',
        flex:1,
        padding:10,
        justifyContent:'space-around',
        backgroundColor:"seashell",
        
       
    },
    
    headingText:{
        fontSize:55,
        marginBottom:10,
        paddingBottom:10,
        fontFamily:'LiuJianMaoCao-Regular',
        elevation:20

    },
    inputView:{
        width:"100%",
        height:'auto',
        display:'flex',
        marginBottom:10
        // flexDirection:'row',
        // justifyContent:'space-around',
        // alignItems:'center'


    },
    inputContainer:{
        width:"100%",
        height:"auto"

    },
    input:{
        width:'100%',
        height:50,
        marginTop:10,
        borderBottomColor:'black',
        borderBottomWidth:1,
        

    },
    button:{
        width:80,
        height:40,
        alignItems:'center',
        display:'flex',
        justifyContent:'center',
        elevation:10,
        backgroundColor:'red'
    },
    buttonText:{
        color:'white',
        padding:0,
        fontFamily:'LiuJianMaoCao-Regular',
        fontSize:25
        
    },
    alert:{
        fontSize:10

    }
});


class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            mobile:"",
            email:"",
            pass:"",
            validityText:true,
            validityEmail:true,
            validityPhone:true,
            validityPassword:true,
            msg:true
        };
    }
    setText=(value,text)=>{
        if(value=='name')
        this.validateName(text);
         if(value=='email')
        this.validateEmail(text);
         if(value=='mobile')
        this.validateMobile(text);
         if(value=='pass')
         this.validatePassword(text);
         
     }

validateName = (val) => {
    if(val==="")
    this.setState({validityText:false})
    else{this.setState({validityText:true})}

    this.setState({name:val})
}


validateEmail = (val) => {
    if(val==="")
    this.setState({validityEmail:false})
    else{this.setState({validityEmail:true})}

    this.setState({email:val})
}


validateMobile = (val) => {
    if(val.length!=10)
    this.setState({validityPhone:false})
    else{this.setState({validityPhone:true})}

    this.setState({mobile:val})
}

validatePassword = (val) => {
    if(val.length<6)
    this.setState({validityPassword:false})
    else{this.setState({validityPassword:true})}
    this.setState({pass:val})
}


     show=()=>
     {
            

             
     if(this.state.validityText && this.state.validityEmail && this.state.validityPhone && this.state.validityPassword)
            
             Alert.alert("signed up !!")
     }

   
    
    
    render(){
        
        return(
            <View style={styles.container}>
            
            
           
            
            <Text style={styles.headingText}>Sign Up</Text>
                
                <View style={styles.inputContainer}>
                
                     <View style={styles.inputView}>
                         <Text>Name</Text>
                         <TextInput  onChangeText={(value)=>this.setText('name',value)}
                         value={this.state.name}
                         placeholder='Enter name'
                         style={styles.input} name="name"/>
                         
                     </View> 
                
                    <View style={styles.inputView} >
                          <Text>Email</Text>
                          <TextInput onChangeText={(value)=>this.setText('email',value)}
                          value={this.state.email}
                          placeholder='Enter email'
                          style={styles.input} keyboardType="email-address" name="email"/>
                          {!this.state.validityEmail && <Text style={styles.alert}>Email cannot be empty</Text>}
                    </View> 

                    <View style={styles.inputView}>
                          <Text>Mobile</Text>
                          <TextInput  onChangeText={(value)=>this.setText('mobile',value)}
                          value={this.state.mobile}
                          placeholder='Enter mobile no.'
                          style={styles.input} keyboardType="phone-pad" name="mobile"/>
                          
                          {!this.state.validityPhone && <Text style={styles.alert}>Phone number not valid</Text>}
                    </View> 

                    <View style={styles.inputView}>
                          <Text>Password</Text>
                          <TextInput onChangeText={(value)=>this.setText('pass',value)}
                          value={this.state.pass}
                          placeholder='Enter password'
                          style={styles.input} secureTextEntry={true} name="pass"/>
                             {!this.state.validityPassword && <Text style={styles.alert}>Password must be more than 6 characters</Text>}
                    </View> 

                </View>
                    
                 <TouchableOpacity style={styles.button} onPress={this.show}>
                    <Text style={styles.buttonText}>Submit</Text>
                 </TouchableOpacity>
            </View>
           

        );
    }
}
export default Form;

