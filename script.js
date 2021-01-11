const App = {
  data() {
    return{
      name:"",
      surname:"",
      isButtonDisabled:true,
      list:[],
    };
  },
  methods:{
    nameDelt() {
      this.name = event.target.value;
      console.log(this.name);
    },
    surnameDelt() {
      this.surname = event.target.value;
      console.log(this.surname);
    },
    addNewNote() {
        this.list.push(`
        ${this.surname[0].toUpperCase() + this.surname.toLowerCase().slice(1)} ${this.name[0].toUpperCase() + this.name.toLowerCase().slice(1)}
        `);
        this.name="";
        this.surname="";
        console.log(this.list);
    }
  },
  watch: {
    name(value) {
      if (value.length > 0 && this.surname.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },

    surname(value) {
      if (value.length > 0 && this.name.length > 0) {
        this.isButtonDisabled = false;
      } else {
        this.isButtonDisabled = true;
      }
    },
  },
  computed: {
    countSymbols() {
      return this.name.length + this.surname.length;
    },
  }
};

Vue.createApp(App).mount('#app');