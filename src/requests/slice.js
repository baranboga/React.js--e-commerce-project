import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: [],
        buyList: [],
        toplam: 0,
        keyword:"",
    },
    reducers: {
        increment: (state, yuk) => {



            let a;
            a = state.value.find(product => product.id === yuk.payload)
            if (a.value<=9) {
                a.value += 1
                console.log(a.value)
            state.toplam += a.price

            }
          
          

        },
        decrement: (state, yuk) => {

            let a;
            a = state.value.find(product => product.id === yuk.payload)
            if (a.value>=2) {
                a.value -= 1
            state.toplam -= a.price
            }
           
            
            

        },
        incrementWithValue: (state, yuk) => {


            if (state.value.find(product => product.id === yuk.payload.id)) {

                

            }
            else {

                
                state.value.push(yuk.payload)

            }




            // = ([...state.value,yuk.payload])


        },
      
        sil:(state, yuk) => {

            let total=0;
            let b={};
            b = state.value.find(product => product.id === yuk.payload)
            total=b.price*b.value
            state.toplam-=total;
            

            let a = [];
            a = state.value.filter(product => product.id !== yuk.payload)
            state.value = a

           

            console.log(b)

            

            

              

        },
        topla: (state, yuk) => {

            let total=0;
            state.value.map((item) => {

                
               total += item.value * item.price;
               state.toplam=total


            })
        },

        buy:(state,yuk)=>{

        
        let b=state.buyList;

        
        state.value.map((item)=>{

            if (b.find((a)=>item.id===a.id)) {
                
                alert(`"You have previously purchased the product "${item.name} `)

            }
            else{


                b.push(item)

            }
           

         })

       
            
        
        state.value.length=0;

          


        
          
          
           
            


        }
        
    }
})

export const selectCount = state => state.counter.value;
export const selecttoplam = state => state.counter.toplam;
export const selectbuyProducts = state => state.counter.buyList;
export const selectKeyword=state => state.counter.keyword;
export const { increment, decrement, incrementWithValue,  topla,buy ,sil} = counterSlice.actions;
export default counterSlice.reducer;



