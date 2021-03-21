import {createStore} from 'vuex';
import wordsArray from "@/randomWords.js"

const store = createStore({
    state() {
        return {
             data:[],
             SearchKey: "",
             example:null,
             userIsLogined:false,
             LoginedUserName:null,
             showmodal:false,
             famousWords:[],
             favorite:[]
        }
    },

    mutations: {
        testReason(state, result){
             state.showmodal = result
        },

        RecieveFamousWords(state, ApicallResult){
          state.famousWords = ApicallResult
        },
         
        /* check if data has example*/
        exampleCheck(state, payload){
            state.example = payload
        },
        
        RECIEVE_DATA(state,payload){
          state.data = payload
        }
    },
    getters: {
        mainData(state){
          return state.data
        },

        FilterfmaousWords(state){
           return state.famousWords
        },

    },

    actions: {
        famousWords({commit}){
            /* get word of day from costum wordsArray */
            var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
            fetch(`https://wordsapiv1.p.rapidapi.com/words/${randomWord}`, {
                method: "GET",
                headers: {
                  "x-rapidapi-key":
                    "8e012cd400mshe2fbf4fad589786p1cf34cjsn8b8df35b57ea",
                  "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
                },
              })
            .then((res)=> res.json())
            .then((json) => commit("RecieveFamousWords", json))
        }

    }
})



export default store;