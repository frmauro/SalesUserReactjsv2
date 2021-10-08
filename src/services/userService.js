import axios from 'axios';

//const urlApi = "http://localhost:8088";

//pod(service) kubernates(minikube)
const urlApiPut = "http://localhost/user";
const urlApiCreate = "http://localhost/create";
const urlApi = "http://localhost/users";

const api = axios.create({
    baseURL: 'http://localhost'
})

class UserService {

    static classInstance = null;
    static getUserServiceInstance() {
        if (UserService.classInstance === null) {
            UserService.classInstance = new UserService();
        }
        return this.classInstance;
    }


    async getUsers(){
        const response = await api.get('users');
        return response.data;
    }

    async getUserById(id){
        let users = [];
        users = await this.getUsers();
        const user = users.find(item => item._id === id);
        return user;

    }


    insertUser(vm){

        const options = {
            headers: {'Content-Type': 'application/json'}
          };

        return api.post(`create`, vm, options)
         .then((response) => {
            let res = response;
            return res.statusText;
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }

        updateUser(vm){

            const options = {
                headers: {'Content-Type': 'application/json'}
              };
    
            return api.put(`user`, vm, options)
             .then((response) => {
                let res = response;
                return res.statusText;
              })
              .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
              });
        }

}

export default UserService;