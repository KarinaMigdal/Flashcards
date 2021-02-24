import { requestService } from '../services/request.service';
import { createStore } from 'vuex'
import router from '../router/index.js'

export default createStore({
  state() {
    return {
      passwordFieldType: 'password',
      isVisible: false, 
      toogle:true,
      newFlashcard: {
        id: '00',
        isCheck: false,
        front_text: '',
        back_text: '',
      },
      folder: { 
        name: "",
        flashcards: [],
      },
      folders: [],
      error: {
        message: '',
        isVisible: false,
      },

      messages: [
        {message:'',
        isShowMessage:false,
        isHideMessage:true,},
        {message:'',
        isShowMessage:false,
        isHideMessage:true,},
      ],
      success: {message: ''},
      game: {
        limit: '',
        score: 0,
        showScore: false,
        isRateDisabled: false,
        settingsError: false,
        currentGameCards: [],
        randomFlashcards: [{
          front_text: '',
          back_text: '',
        },],
        isStarted: false,
        iterator: 0,
      },

      thumbUpClicked: false,
      thumbDownClicked: false,
    }
  },

  getters: {

    folderName: state => {
      return state.folders;
    },
  },

  mutations: {
    changeSuccessMessage(state, message){
      state.success.message = message;
    },

    toogleVisibility(state) {
      state.toogle = !state.toogle;
    },

    clearMessage(state){
      state.error.isVisible = false;
    },

    // GAME
    hideScore(state) {
      state.game.showScore = false;
      state.game.isStarted = false;
      state.game.randomFlashcards = [{
        front_text: '',
        back_text: '',
      },];
      state.game.iterator = 0;
      state.game.score = 0;
    },

    rate (state, point) {
      state.game.isRateDisabled = true;
      if (point == 1) {
        state.thumbUpClicked = true;
        ++state.game.score; 
      }
      else {
        state.thumbDownClicked = true;
      }
      
    },

    setLimit(state, gameLimit) {
      state.game.limit = gameLimit;
    },



    play(state, selectedCards){
      const min = 0;
      let randomIndexArr = [];
      let randomFlashcards = [];
      state.game.currentGameCards = selectedCards.flashcards;
      let max = selectedCards.flashcards.length - 1;

      if (state.game.currentGameCards.length <= Number(state.game.limit) ) {
        state.game.limit = state.game.currentGameCards.length;
      }
      while(randomIndexArr.length < Number(state.game.limit)){
        let randomIndex = Math.floor(Math.random() * (max-min+1) + min)
        if (randomIndexArr.indexOf(randomIndex) === -1) {
          randomIndexArr.push(randomIndex)
        }
      }
      for (const iterator of randomIndexArr) {
        randomFlashcards.push(state.game.currentGameCards[iterator])
      }
      state.game.randomFlashcards = randomFlashcards;
      state.game.isStarted = true;

    },

    gameErrorShow(state){
      state.game.settingsError = true;
    },

    gameErrorHide(state){
      state.game.settingsError = false;
    },
    

    nextFlashcard(state) {
      if (state.game.iterator+1 < state.game.randomFlashcards.length && state.game.iterator+1 < Number(state.game.limit)  ) {
        state.game.iterator = ++state.game.iterator;
      }
      else {
        state.game.showScore = true;
      }
      state.thumbUpClicked = false;
      state.thumbDownClicked = false;
      state.game.isRateDisabled = false;
    },
    
    // FOLDER
    clearFolderMenuVisibility(state, folderId) {
      for (const folder of state.folders) {
        if (folder.id !== folderId) {
          folder.menuIsVisible = false;
        }
      }
    },

    editFlashcard(state, clickedFlashcard) {
      state.newFlashcard.front_text = clickedFlashcard.front_text;
      state.newFlashcard.back_text = clickedFlashcard.back_text;
      state.newFlashcard.id = clickedFlashcard.id;
    },

    removeAllChecked(state, tab){
      for (const id of tab) {
        state.folder.flashcards = state.folder.flashcards.filter(flashcard => flashcard.id !== id );
      }
    },

    // MAIN

    setFolders (state, response) {
      for (const folder of response.data) {
        folder.menuIsVisible = false;
      }
      state.folders = response.data;
    },

    setFlashcards (state, folder) {
      state.folder = folder;
    },

    changeId(state, folderId) {
      state.folder.id = folderId;
    },

    createNewFolder(state) {
      let newFolder = {
        flashcards: [],
        id: '000',
        name: '', 
      };
      state.folder = newFolder
    },

    removeFolder(state, clickedFolderId) {
      state.folders = state.folders.filter(folder => folder.id !== clickedFolderId);
    },

    // NEW FLASHCARD
    showMessage(state) {
      if (state.newFlashcard.front_text.length === 0 || state.newFlashcard.back_text.length === 0) {
        state.messages[0].message = "Fields cannot be empty!"
      }
      else {
        state.messages[0].message = "Success!"
      }
        state.messages[0].isShowMessage = !state.messages[0].isShowMessage;
        state.messages[0].isHideMessage = !state.messages[0].isHideMessage;
        setTimeout(function(){ 
        state.messages[0].isShowMessage = !state.messages[0].isShowMessage;
        state.messages[0].isHideMessage = !state.messages[0].isHideMessage; 
        }, 2000);
    },

    clearFlashcard(state) {
      state.newFlashcard.front_text = '';
      state.newFlashcard.back_text = '';
      state.newFlashcard.id = '00';
    },

    saveFlashcard(state, flashcard) {
      state.folder.flashcards.push(flashcard);
    },

    changeFlashcard(state, changedflashcard) {
      const index = state.folder.flashcards.findIndex(flashcard => flashcard.id === changedflashcard.id);
      state.folder.flashcards.splice(index, 1, changedflashcard);
    },
  
    // LOGIN
    switchVisibility(state) {
      state.passwordFieldType = state.passwordFieldType === 'password' ? 'text' : 'password';
      state.isVisible = !state.isVisible
    },

    showError (state, message) {
      state.error.message = message;
      state.error.isVisible = true;
    },

    hideError (state) {
      state.error.message = '';
      state.error.isVisible = false;
    },
  },






  actions: {
    async register({ commit }, data) {
      let result = await requestService.register(data)
      if(result.status === "ok"){
        const message = "Your account has been successfully created."
        commit('hideError');
        commit('changeSuccessMessage', message)

        
        router.push('/success');

      }
      else {
        commit('showError', result)
      }
    },

    async login({ commit }, data) {
      let result = await requestService.login(data)
      if(result.status === "ok"){
        commit('hideError')
        router.push('/');
      }

      else {
        commit('showError', result)
      }

    },

    async fetchFolders({ commit }) {
      const result = await requestService.downloadFolders();
      if (result.status === 'ok'){
        commit('setFolders', result);
      }
      else {
        if (result.status === 401) {
          router.push('/login');
        }
        else {
          commit('showError', result);
        }
      }
    },


    async downloadFlashcards({ commit}, folderId) {
      if(folderId === '000') {
        commit('createNewFolder');
      }
      else {
        const result = await requestService.downloadFlashcards(folderId);
        commit('setFlashcards', result.data)
      }
    },


    async handleFolder({ commit, state }) {
      const url = 'http://www.flashcards.com:5000/api/folders';
      if(state.folder.id === '000') {
        const data = { 
          folderName : state.folder.name, 
        }
        const method = "POST"
        const result = await requestService.handleFolder(data, method, url);
        if (result.status === 'ok'){
          commit('changeId', result.data.id);
        router.push(`/folder/${result.data.id}`); 
        }
        else {
          commit('showError', result);
        }
      }
      else {
        const data = { 
          folderName : state.folder.name, 
          folderId : state.folder.id,
        }
        const method = "PUT"
        const result = await requestService.handleFolder(data, method, url);
        console.log(result)
      }
    },

    async deleteFolder({ commit }, folderID) {
      const url = 'http://www.flashcards.com:5000/api/folders';
      const method = "DELETE";
      const data = {folderId : folderID}
      let result = await requestService.handleFolder(data, method, url)
      if(result.status === "ok"){
        console.log(`Delete method response: ${result.status}`);
        commit('removeFolder', folderID)
      }
      else {
        commit('showError', result);
      }
    },

    async addFlashcardFetch({ commit, state }, data) {
      if ( state.newFlashcard.front_text.length > 0 && state.newFlashcard.back_text.length > 0) {
        let folderId = state.folder.id
        if(state.newFlashcard.id === '00'){
          const method = "POST";
            const result = await requestService.handleFlashcard(method,data, folderId);
            if(result.status === "ok") {
              let flashcard = {
                front_text: result.data.front_text,
                back_text: result.data.back_text,
                id: result.data.id,
                
              }
              commit('saveFlashcard', flashcard);
              commit('showMessage');
              commit('clearFlashcard', flashcard);
              
            }
            else {
              commit('showError', result);
            }
        }
        else {
          data.flashcardId = state.newFlashcard.id;
          const method = "PUT";
            const result = await requestService.handleFlashcard(method,data, folderId);
            if(result.status === "ok") {
              let flashcard = {
                front_text: result.data.front_text,
                back_text: result.data.back_text,
                id: result.data.id,
              }
              commit('changeFlashcard', flashcard);
              commit('showMessage');
              //
            }
            else {
              commit('showError', result);
            }
        }
      }
      else {
        commit('showMessage');
      }
    },

        
    async removeFlashcard({ state, commit }, selected) {
      const method = "DELETE";
      let folderId = state.folder.id
      const tab = []
      for (const flashcard of selected) {
          tab.push(flashcard.id)
      }
      const data = {flashcards: tab}
      const result = await requestService.handleFlashcard(method,data, folderId);
      if(result.status === "ok") {
        this.commit('removeAllChecked', tab)
      }
      else {
        commit('showError', result);
      }
    },

    async logOut({commit}){ 
      const result = await requestService.logout();
      console.log(result)
      if(result.status === "ok") {
        const message = 'You have successfully logged out.'
        commit('changeSuccessMessage', message)
        router.push('/success');
      }
      else {
        commit('showError', result);
      }
    },

    async removeAccount({commit}){
      const result = await requestService.removeAccount();
      if(result.status === "ok") {
        const message = 'The account has been deleted.'
        commit('changeSuccessMessage', message)
        router.push('/success');
      }
      else {
        commit('showError', result);
      }
    },
   
  },

  modules: {}
})

